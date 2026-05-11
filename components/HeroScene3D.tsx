'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Fleet-cleaning hero scene — high-pressure water spray simulation.
 * Simulates pressurised wash jets hitting a vehicle surface, water
 * droplets catching light, mist plumes, and foam gleam.
 * Transparent canvas, pointer-events-none.
 */
export default function HeroScene3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let animId: number;
    let active = true;

    try {
      const w = mount.clientWidth  || 1200;
      const h = mount.clientHeight || 700;

      const scene  = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, w / h, 0.01, 200);
      camera.position.set(0, 2, 20);
      camera.lookAt(0, 0, 0);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.8;
      mount.appendChild(renderer.domElement);

      /* ─── Shared constants ─── */
      const GRAVITY = -4.8;

      /* ─── Particle pool: spray + mist ─── */
      const SPRAY_COUNT = 600;   // main spray jets
      const MIST_COUNT  = 350;   // ambient mist/foam
      const TOTAL       = SPRAY_COUNT + MIST_COUNT;

      const pos    = new Float32Array(TOTAL * 3);
      const vel    = new Float32Array(TOTAL * 3);    // velocity
      const col    = new Float32Array(TOTAL * 3);
      const life   = new Float32Array(TOTAL);        // 0..1 remaining life
      const maxLife= new Float32Array(TOTAL);
      const sizes  = new Float32Array(TOTAL);

      /* ─── Nozzle positions (world space) – 3 spray heads ─── */
      interface Nozzle { x: number; y: number; z: number; dirX: number; dirY: number; dirZ: number; spread: number; speed: number; color: THREE.Color }
      const nozzles: Nozzle[] = [
        { x: -5.5, y:  3.0, z: 0, dirX:  1.8, dirY: -0.5, dirZ: -0.3, spread: 0.8, speed: 14, color: new THREE.Color(0.72, 0.88, 1.0) },
        { x:  0.0, y:  4.5, z: 0, dirX:  0.0, dirY: -1.0, dirZ: -0.2, spread: 0.6, speed: 16, color: new THREE.Color(0.85, 0.94, 1.0) },
        { x:  5.0, y:  2.8, z: 0, dirX: -1.6, dirY: -0.6, dirZ: -0.3, spread: 0.7, speed: 13, color: new THREE.Color(0.70, 0.85, 0.98) },
      ];

      const rand  = () => Math.random();
      const randn = () => (rand() + rand() + rand() + rand() - 2) * 0.5; // approx normal

      const resetParticle = (i: number, isSpray: boolean) => {
        const n = nozzles[Math.floor(rand() * nozzles.length)];
        pos[i*3]   = n.x + randn() * 0.3;
        pos[i*3+1] = n.y + randn() * 0.2;
        pos[i*3+2] = n.z + randn() * 0.2;

        const spd = n.speed * (0.75 + rand() * 0.5);
        const sx = randn() * n.spread;
        const sy = randn() * n.spread;
        const sz = randn() * n.spread * 0.4;
        const len = Math.sqrt((n.dirX + sx) ** 2 + (n.dirY + sy) ** 2 + (n.dirZ + sz) ** 2);
        vel[i*3]   = (n.dirX + sx) / len * spd;
        vel[i*3+1] = (n.dirY + sy) / len * spd;
        vel[i*3+2] = (n.dirZ + sz) / len * spd;

        const t = rand();
        if (isSpray) {
          // water: blue-white, occasional gold gleam
          if (rand() < 0.12) {
            // gold gleam / foam highlight
            col[i*3] = 0.95; col[i*3+1] = 0.82; col[i*3+2] = 0.30;
          } else {
            const brightness = 0.7 + rand() * 0.3;
            col[i*3]   = n.color.r * brightness;
            col[i*3+1] = n.color.g * brightness;
            col[i*3+2] = n.color.b;
          }
          maxLife[i] = 0.8 + rand() * 0.9;
          sizes[i]   = 0.06 + rand() * 0.18;
        } else {
          // mist: pale blue-white, very soft
          col[i*3]   = 0.78 + rand() * 0.2;
          col[i*3+1] = 0.88 + rand() * 0.12;
          col[i*3+2] = 1.0;
          maxLife[i] = 1.2 + rand() * 1.6;
          sizes[i]   = 0.18 + rand() * 0.45;
          // mist starts near splash points, drifts slowly
          pos[i*3]   = (rand() - 0.5) * 12;
          pos[i*3+1] = -2 + rand() * 5;
          vel[i*3]   = (rand() - 0.5) * 0.8;
          vel[i*3+1] = 0.3 + rand() * 0.6;
          vel[i*3+2] = (rand() - 0.5) * 0.3;
        }
        life[i] = maxLife[i] * rand(); // stagger start
        void t;
      };

      // Initialise all particles
      for (let i = 0; i < SPRAY_COUNT; i++) resetParticle(i, true);
      for (let i = SPRAY_COUNT; i < TOTAL; i++) resetParticle(i, false);

      const geo = new THREE.BufferGeometry();
      const posAttr  = new THREE.BufferAttribute(pos,  3); posAttr.setUsage(THREE.DynamicDrawUsage);
      const colAttr  = new THREE.BufferAttribute(col,  3); colAttr.setUsage(THREE.DynamicDrawUsage);
      const sizeAttr = new THREE.BufferAttribute(sizes, 1); sizeAttr.setUsage(THREE.DynamicDrawUsage);

      geo.setAttribute('position', posAttr);
      geo.setAttribute('color',    colAttr);

      const mat = new THREE.PointsMaterial({
        size:            0.12,
        vertexColors:    true,
        transparent:     true,
        opacity:         0.88,
        sizeAttenuation: true,
        blending:        THREE.AdditiveBlending,
        depthWrite:      false,
      });

      const points = new THREE.Points(geo, mat);
      scene.add(points);

      /* ─── Mist halo (large soft billboards) ─── */
      const mistHaloGeo = new THREE.BufferGeometry();
      const HP = 40;
      const hPos = new Float32Array(HP * 3);
      const hCol = new Float32Array(HP * 3);
      for (let i = 0; i < HP; i++) {
        hPos[i*3]   = (Math.random() - 0.5) * 14;
        hPos[i*3+1] = -3 + Math.random() * 7;
        hPos[i*3+2] = -2 + Math.random() * 2;
        hCol[i*3] = 0.6; hCol[i*3+1] = 0.8; hCol[i*3+2] = 1.0;
      }
      mistHaloGeo.setAttribute('position', new THREE.BufferAttribute(hPos, 3));
      mistHaloGeo.setAttribute('color',    new THREE.BufferAttribute(hCol, 3));
      const mistHaloMat = new THREE.PointsMaterial({
        size: 1.8, vertexColors: true, transparent: true, opacity: 0.06,
        sizeAttenuation: true, blending: THREE.AdditiveBlending, depthWrite: false,
      });
      scene.add(new THREE.Points(mistHaloGeo, mistHaloMat));

      /* ─── Background: dark vehicle surface / wall implied by subtle plane ─── */
      // A dark reflective-looking gradient plane hinted at far back
      const bgGeo = new THREE.PlaneGeometry(38, 22);
      const bgMat = new THREE.MeshBasicMaterial({
        color: 0x060D1A,
        transparent: true,
        opacity: 0.0,   // fully transparent — let CSS bg show through
      });
      const bg = new THREE.Mesh(bgGeo, bgMat);
      bg.position.z = -8;
      scene.add(bg);

      /* ─── Gold key-light streak (simulates strong wash light beam) ─── */
      const STREAK_COUNT = 6;
      interface Streak { line: THREE.Line; mat: THREE.LineBasicMaterial; phase: number; speed: number }
      const streaks: Streak[] = [];
      for (let i = 0; i < STREAK_COUNT; i++) {
        const len = 3 + Math.random() * 7;
        const sGeo = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(-len, 0, 0),
          new THREE.Vector3(0, 0, 0),
        ]);
        const sMat = new THREE.LineBasicMaterial({
          color: Math.random() < 0.6 ? 0xE8C44A : 0xFFFFFF,
          transparent: true,
          opacity: 0,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });
        const line = new THREE.Line(sGeo, sMat);
        line.position.set((Math.random() - 0.5) * 22, (Math.random() - 0.5) * 10, -1);
        scene.add(line);
        streaks.push({ line, mat: sMat, phase: Math.random() * Math.PI * 2, speed: 4 + Math.random() * 6 });
      }

      /* ─── Simulation ─── */
      const clock = new THREE.Clock();
      let prevT = 0;

      const animate = () => {
        if (!active) return;
        animId = requestAnimationFrame(animate);
        const t  = clock.getElapsedTime();
        const dt = Math.min(t - prevT, 0.05);
        prevT = t;

        /* Update spray particles */
        for (let i = 0; i < SPRAY_COUNT; i++) {
          life[i] -= dt;
          if (life[i] <= 0) {
            resetParticle(i, true);
            continue;
          }
          // Gravity
          vel[i*3+1] += GRAVITY * dt;
          // Slight drag
          vel[i*3]   *= 0.998;
          vel[i*3+2] *= 0.998;
          // Integrate
          pos[i*3]   += vel[i*3]   * dt;
          pos[i*3+1] += vel[i*3+1] * dt;
          pos[i*3+2] += vel[i*3+2] * dt;

          // Fade out as life depletes
          const frac = life[i] / maxLife[i];
          // Freshen alpha via a per-particle shade trick: darker near death
          const brightness = Math.min(frac * 2.5, 1);
          col[i*3]   = Math.min(col[i*3]   * (0.5 + brightness * 0.5), 1);
          col[i*3+1] = Math.min(col[i*3+1] * (0.5 + brightness * 0.5), 1);
          col[i*3+2] = Math.min(col[i*3+2] * (0.5 + brightness * 0.5), 1);

          // Reset if falls off screen
          if (pos[i*3+1] < -9) resetParticle(i, true);
        }

        /* Update mist */
        for (let i = SPRAY_COUNT; i < TOTAL; i++) {
          life[i] -= dt;
          if (life[i] <= 0) {
            resetParticle(i, false);
            continue;
          }
          vel[i*3+1] += 0.05 * dt; // mist rises gently
          pos[i*3]   += vel[i*3]   * dt;
          pos[i*3+1] += vel[i*3+1] * dt;
          pos[i*3+2] += vel[i*3+2] * dt;
        }

        posAttr.needsUpdate = true;
        colAttr.needsUpdate = true;

        /* Overall opacity pulse – like shimmering water */
        mat.opacity = 0.76 + Math.sin(t * 3.1) * 0.12;

        /* Mist halo pulse */
        mistHaloMat.opacity = 0.04 + Math.sin(t * 0.7) * 0.02;

        /* Gold light streaks (suggest spotlight/sun through spray) */
        for (const s of streaks) {
          const cycle = (t * s.speed * 0.03 + s.phase) % (Math.PI * 2);
          const prog  = cycle / (Math.PI * 2);
          s.line.position.x = -16 + prog * 40;
          s.mat.opacity = Math.sin(prog * Math.PI) * 0.45;
        }

        renderer.render(scene, camera);
      };
      animate();

      /* Visibility observer – pause when off-screen */
      const visObs = new IntersectionObserver(([e]) => {
        active = e.isIntersecting;
        if (active) { clock.start(); prevT = clock.getElapsedTime(); animate(); }
      }, { threshold: 0 });
      visObs.observe(mount);

      /* Resize handler */
      const onResize = () => {
        const nw = mount.clientWidth;
        const nh = mount.clientHeight;
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, nh);
      };
      window.addEventListener('resize', onResize);

      /* Cleanup */
      return () => {
        active = false;
        cancelAnimationFrame(animId);
        visObs.disconnect();
        window.removeEventListener('resize', onResize);
        const disposed = new Set<THREE.Material>();
        scene.traverse(obj => {
          if (obj instanceof THREE.Mesh || obj instanceof THREE.Line || obj instanceof THREE.Points) {
            obj.geometry.dispose();
            const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
            mats.forEach(m => { if (!disposed.has(m)) { m.dispose(); disposed.add(m); } });
          }
        });
        renderer.dispose();
        if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      };

    } catch (err) {
      console.error('HeroScene3D error:', err);
    }
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
