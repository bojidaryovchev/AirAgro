"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface VideoCanvasProps {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
  fps?: number;
}

const VideoCanvas = ({ src, poster, className = "", style, fps = 24 }: VideoCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const lastFrameTimeRef = useRef<number>(0);

  const [isReady, setIsReady] = useState(false);

  const frameInterval = 1000 / fps;

  // Draw frame with object-fit: cover behavior
  const drawFrame = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!video || !canvas || !container) return;
    if (video.readyState < 2) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const rect = container.getBoundingClientRect();
    const cw = Math.round(rect.width);
    const ch = Math.round(rect.height);

    if (cw === 0 || ch === 0) return;

    // Resize canvas if needed
    if (canvas.width !== cw || canvas.height !== ch) {
      canvas.width = cw;
      canvas.height = ch;
    }

    const vw = video.videoWidth;
    const vh = video.videoHeight;
    if (vw === 0 || vh === 0) return;

    // Object-fit: cover - crop source to match container aspect ratio
    const containerRatio = cw / ch;
    const videoRatio = vw / vh;

    let sx = 0,
      sy = 0,
      sw = vw,
      sh = vh;

    if (containerRatio > videoRatio) {
      // Container wider than video - crop top/bottom
      sh = vw / containerRatio;
      sy = (vh - sh) / 2;
    } else {
      // Container taller than video - crop left/right
      sw = vh * containerRatio;
      sx = (vw - sw) / 2;
    }

    ctx.drawImage(video, sx, sy, sw, sh, 0, 0, cw, ch);
  }, []);

  // Render loop
  useEffect(() => {
    if (!isReady) return;

    const loop = (timestamp: number) => {
      const elapsed = timestamp - lastFrameTimeRef.current;
      if (elapsed >= frameInterval) {
        lastFrameTimeRef.current = timestamp - (elapsed % frameInterval);
        drawFrame();
      }
      animationRef.current = requestAnimationFrame(loop);
    };

    animationRef.current = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(animationRef.current);
  }, [isReady, drawFrame, frameInterval]);

  // Initialize video element
  useEffect(() => {
    const video = document.createElement("video");
    video.src = src;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "auto";

    video.addEventListener("canplay", () => {
      setIsReady(true);
      video.play().catch(() => {});
    });

    videoRef.current = video;
    video.load();

    return () => {
      video.pause();
      video.src = "";
      videoRef.current = null;
    };
  }, [src]);

  // Handle container resize
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(() => drawFrame());
    observer.observe(container);

    return () => observer.disconnect();
  }, [drawFrame]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        ...style,
      }}
    >
      {/* Poster - fades out when video ready */}
      {poster && (
        <Image
          src={poster}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            opacity: isReady ? 0 : 1,
            transition: "opacity 0.7s ease-out",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: isReady ? 1 : 0,
          transition: "opacity 0.7s ease-out",
        }}
      />
    </div>
  );
};

export default VideoCanvas;
