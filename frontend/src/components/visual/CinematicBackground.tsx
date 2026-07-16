'use client';

import { useEffect, useRef } from 'react';

const DEFAULT_VIDEO =
  'https://res.cloudinary.com/dsdhxhhqh/video/upload/v1781506108/202606101702_sd50y0.mp4';

export function CinematicBackground({ videoSrc = DEFAULT_VIDEO }: { videoSrc?: string }) {
  const worldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const world = worldRef.current;
    if (!world || reducedMotion) return;

    let ticking = false;

    const updateCamera = () => {
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(window.scrollY / maxScroll, 1);
      const videoY = window.scrollY * -0.018;
      const videoScale = 1.045 + progress * 0.028;

      world.style.setProperty('--video-y', `${videoY}px`);
      world.style.setProperty('--video-scale', videoScale.toFixed(4));
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateCamera);
    };

    updateCamera();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="cinematic-world" ref={worldRef} aria-hidden="true">
      <video className="cinematic-video" autoPlay muted loop playsInline preload="auto">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="cinematic-tone" />
      <div className="cinematic-sheen" />
    </div>
  );
}
