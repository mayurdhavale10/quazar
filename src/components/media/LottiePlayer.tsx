'use client';

import { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

type Props = {
  src: string;                         // e.g. '/animations/Technology.json'
  className?: string;
  style?: React.CSSProperties;         // pass { width, height } here
  loop?: boolean;
  autoplay?: boolean;
};

export default function LottiePlayer({
  src,
  className,
  style,
  loop = true,
  autoplay = true,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    let anim: AnimationItem | undefined;

    (async () => {
      const res = await fetch(src);
      const data = await res.json();

      anim = lottie.loadAnimation({
        container: containerRef.current!,
        renderer: 'svg',
        loop,
        autoplay,
        animationData: data,
        rendererSettings: { preserveAspectRatio: 'xMidYMid meet' },
      });
    })();

    return () => anim?.destroy();
  }, [src, loop, autoplay]);

  // Default to a tiny box unless caller overrides.
  return (
    <div
      ref={containerRef}
      className={`lottie-inline ${className ?? ''}`}
      style={{ width: 24, height: 24, pointerEvents: 'none', ...style }}
      aria-hidden
    />
  );
}
