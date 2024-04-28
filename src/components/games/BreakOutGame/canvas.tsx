import React, { useEffect, useRef } from 'react';

let context: CanvasRenderingContext2D | null = null;
let canvas: HTMLCanvasElement | null = null;

const gameContainerStyle = {
  backgroundColor: '#f0f0f0'
};

const CanvasComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    canvas = canvasRef.current;
    
    if (canvas) {
      context = canvas.getContext("2d");
      canvas.width = 800;
      canvas.height = 600;
    }

  }, []); // Run once after component mount

  return (
    <canvas ref={canvasRef} id="game" style={gameContainerStyle}></canvas>
  );
};

export { CanvasComponent, canvas, context };
