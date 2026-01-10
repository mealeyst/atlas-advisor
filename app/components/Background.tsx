"use client";

import { useEffect, useRef } from "react";

export const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.position = "fixed";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.zIndex = "0";
      canvas.style.zIndex = "-1";
      const drawCircle = (ctx: CanvasRenderingContext2D) => {
        ctx.beginPath();
        ctx.arc(
          window.innerWidth / 2,
          window.innerHeight / 2,
          100,
          0,
          2 * Math.PI
        );
        ctx.fillStyle = "white";
        ctx.fill();
      };
      const ctx = canvas.getContext("2d");

      if (ctx) {
        canvas.addEventListener("resize", () => {
          console.log("resize");
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          drawCircle(ctx);
        });
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawCircle(ctx);
      }
    }
  }, []);
  return <canvas id="background-canvas" ref={canvasRef}></canvas>;
};
