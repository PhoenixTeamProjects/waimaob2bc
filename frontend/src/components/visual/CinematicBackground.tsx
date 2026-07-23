const DEFAULT_VIDEO =
  'https://res.cloudinary.com/dsdhxhhqh/video/upload/v1781506108/202606101702_sd50y0.mp4';

export function CinematicBackground({ videoSrc = DEFAULT_VIDEO }: { videoSrc?: string }) {
  return (
    <div className="cinematic-world" aria-hidden="true">
      <video className="cinematic-video" autoPlay muted loop playsInline preload="auto">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="cinematic-tone" />
      <div className="cinematic-sheen" />
    </div>
  );
}
