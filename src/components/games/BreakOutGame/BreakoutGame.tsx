import React, { useEffect, useRef } from "react";
import { CanvasComponent } from "./canvas";
import { canvas, context } from "./canvas";
import RenderPlayer from "./Player";
import RenderBlocks from "./RenderBlocks";
import RenderBall from "./Ball";

const BreakOutGame = () => {
  if (canvas && context) {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  RenderPlayer();
  RenderBall();
  RenderBlocks();

  const requestRef = useRef<number>();


  useEffect(() => {
    // requestRef.current = requestAnimationFrame(animate);

    // function animate() {
    //   requestRef.current = requestAnimationFrame(animate);
    // }

    // if (window.confirm("Ready ?")){
    //   requestRef.current = requestAnimationFrame(animate);
    // }

    // return () => {
    //   if (requestRef.current !== undefined) {
    //     cancelAnimationFrame(requestRef.current);
    //   }
    // };
  }, []);

  return (
    <div>
      <h1>Breakout Game</h1>
      <CanvasComponent />
    </div>
  );
};

export default BreakOutGame;
