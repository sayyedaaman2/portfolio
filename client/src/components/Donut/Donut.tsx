"use client";
import { useRef, useEffect } from "react";

export default function Donut({ radius = 100 }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function drawGrid(canvas: HTMLCanvasElement, gridSize = 50) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#888";
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);

    for (let x = 0; x <= canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    for (let y = 0; y <= canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    ctx.setLineDash([]);
  }

  function drawDonut(canvas: HTMLCanvasElement, radius: number) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Draw outer circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "#ff00ff";
    ctx.fill();

    // Draw inner cutout
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius / 2, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff"; // match background
    ctx.fill();
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeToParent = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;

      drawGrid(canvas, 50);
      drawDonut(canvas, radius);
    };

    window.addEventListener("resize", resizeToParent);
    resizeToParent(); // Initial draw

    return () => {
      window.removeEventListener("resize", resizeToParent);
      console.log("Canvas unmounted");
    };
  }, [radius]);

  return <div className="canvas-container h-screen"><canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} /></div>;
}
