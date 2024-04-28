import React, { useEffect, useState } from "react";
import { CanvasComponent } from "./BreakOutGame/canvas";
import { canvas, context } from "../games/BreakOutGame/canvas";
import { UpdatePlayer, RenderPlayer } from "./BreakOutGame/Player";
import RenderBlocks from "./BreakOutGame/RenderBlocks";

const gameContainerStyle = {
  backgroundColor: "#f0f0f0",
};

const BreakOutGame = () => {
  // function update(){
  // UpdatePlayer();
  // UpdateBall();
  // UpdateBlocks();
  RenderBlocks();

  if (canvas) {

    // Si la balle touche l'écran BAS
    // if (ball.y - ball.size > canvas.height ) {
    //     // cancelAnimationFrame(frame);
    //     alert("GAME OVER !");
    //     window.location.reload();
    // }
  }
  // }

  // Get canvas context outside of the render function
  // const context = useCanvasContext();
  // const [isContextInitialized, setContextInitialized] = useState(false);

  useEffect(() => {
    // if (canvas && context) {
    //   context.clearRect(0, 0, canvas.width, canvas.height);
    //   RenderPlayer();
    //   // RenderBall();
    //   RenderBlocks();
    // }

    // return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div>
      <h1>Breakout Game</h1>
      <CanvasComponent />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default BreakOutGame;
