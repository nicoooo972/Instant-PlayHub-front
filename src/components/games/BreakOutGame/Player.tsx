import { useState, useEffect } from "react";
import { canvas, context } from "./canvas";
import { keyboard } from "./UseKeyboard";

const PLAYER_HEIGHT = 20;
const PLAYER_WIDTH = 120;

export default function RenderPlayer() {
  const [player, setPlayer] = useState({
    x: 0,
    y: 0,
    width: PLAYER_WIDTH,
    height: PLAYER_HEIGHT,
    color: "#7209b7",
    speed: 5,
  });

  useEffect(() => {

    if (canvas) {
      setPlayer((prevPlayer) => ({
        ...prevPlayer,
        x: canvas?.width ? canvas.width / 2 - 50 : 0,
        y: canvas?.height ? canvas.height - PLAYER_HEIGHT - 10 : 0,
      }));
    }
    
    const interval = setInterval(() => {
      if (keyboard.left) {
        setPlayer((prevPlayer) => ({
          ...prevPlayer,
          x: prevPlayer.x - prevPlayer.speed,
        }));
        
      }

      if (keyboard.right) {
        setPlayer((prevPlayer) => ({
          ...prevPlayer,
          x: prevPlayer.x + prevPlayer.speed,
        }));
      }

    }, 100);

    return () => clearInterval(interval);
  }, [canvas, keyboard]);

  if (player.x < 0) {
    console.log("on dépasse l'écran gauche");
    
    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      x: 0,
    }));
  }

  if (canvas) {
    if (player.x > canvas.width - player.width) {
      console.log("on dépasse l'écran droit");
      setPlayer((prevPlayer) => ({
        ...prevPlayer,
        x: canvas?.width ? canvas.width - prevPlayer.width : 0,
      }));
    }
  }
  

  if (context) {
    context.fillStyle = player.color;
    context.fillRect(player.x, player.y, player.width, player.height);
  }
  return player;
}
