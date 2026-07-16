'use client';

import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  velocityX: number;
  velocityY: number;
};

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canvas || !context || reducedMotion) return;

    let width = 0;
    let height = 0;
    let ratio = 1;
    let particles: Particle[] = [];
    let frame = 0;
    let resizeTimer = 0;

    const createParticle = (): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 0.6 + Math.random() * 1.8,
      alpha: 0.13 + Math.random() * 0.2,
      velocityX: -0.08 + Math.random() * 0.16,
      velocityY: -0.16 - Math.random() * 0.18
    });

    const resizeCanvas = () => {
      ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.min(Math.max(Math.floor(width / 34), 30), 70);
      particles = Array.from({ length: count }, createParticle);
    };

    const render = () => {
      context.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;
        if (particle.y < -20 || particle.x < -20 || particle.x > width + 20) {
          Object.assign(particle, createParticle(), { y: height + 16 });
        }

        const gradient = context.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 6
        );
        gradient.addColorStop(0, `rgba(255,250,243,${particle.alpha})`);
        gradient.addColorStop(0.45, `rgba(201,141,255,${particle.alpha * 0.35})`);
        gradient.addColorStop(1, 'rgba(255,255,255,0)');
        context.fillStyle = gradient;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius * 6, 0, Math.PI * 2);
        context.fill();
      });
      frame = requestAnimationFrame(render);
    };

    resizeCanvas();
    render();

    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resizeCanvas, 140);
    };

    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      window.removeEventListener('resize', onResize);
      window.clearTimeout(resizeTimer);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas className="particle-canvas" ref={canvasRef} aria-hidden="true" />;
}
