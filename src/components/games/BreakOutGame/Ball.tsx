import { useEffect, useState } from "react";
import { canvas, context } from "./canvas";
import { drawCircle, circleCollideWithRectangle } from "./functions";
import RenderPlayer from "./Player";
import RenderBlocks from "./RenderBlocks";

// const initialBallState = {
//   x: canvas?.width ? canvas.width / 2 : 0,
//   y: canvas?.height ? canvas.height - 50 : 0,
//   size: 10,
//   color: "#3f37c9",
//   speed: 4,
//   speedX: 4,
//   speedY: -4,
// };

export default function RenderBall() {
  const blocks = RenderBlocks();
  const Player = RenderPlayer();

  const [placeBall, setPlaceBall] = useState(true);
  const [ball, setBall] = useState({
    x: 0,
    y: 0,
    size: 10,
    color: "#3f37c9",
    speed: 8,
    speedX: 8,
    speedY: -8,
  });

  drawCircle(ball.color, ball.x, ball.y, ball.size, true, 1);

  useEffect(() => {
    if (placeBall) {
      if (canvas) {
        setBall((prevBall) => ({
          ...prevBall,
          x: canvas?.width ? canvas.width / 2 : 0,
          y: canvas?.height ? canvas.height - 50 : 0,
        }));
      }
      setPlaceBall(false);
    }

    const interval = setInterval(() => {
      setBall((prevBall) => ({
        ...prevBall,
        x: prevBall.x + prevBall.speedX,
        y: prevBall.y + prevBall.speedY,
      }));

      //   if(canvas){
      //       if(ball.x + ball.size > canvas.width){
      //         setBall((prevBall) => ({
      //             ...prevBall,
      //             speedX: prevBall.speedX * -1
      //           }));
      //       } else {
      //         setBall((prevBall) => ({
      //             ...prevBall,
      //             x: prevBall.x + prevBall.speedX,
      //             y: prevBall.y + prevBall.speedY,
      //           }));
      //       }

      //   }

      //   // Si la balle touche l'écran HAUT
      //   if (ball.y - ball.size < 0) {
      //     setBall((prevBall) => ({ ...prevBall, speedY: prevBall.speedY * -1 }));
      //   }

      //   // Si la balle touche le player
      //   if (
      //     ball.x > Player.x &&
      //     ball.x < Player.x + Player.width &&
      //     ball.y + ball.size > Player.y &&
      //     ball.y + ball.size < Player.y + ball.speedY + 1
      //   ) {
      //     setBall((prevBall) => ({ ...prevBall, speedY: prevBall.speedY * -1 }));

      //     //Calcul de l'angle de rebond de la balle
      //     let d = (ball.x - Player.x) / Player.width; // une valeur normalisée entre 0 et 1 de la balle sur le player
      //     let d2 = (d - 0.5) * 2; // valeir normalisée entre -1 et 1
      //     setBall((prevBall) => ({ ...prevBall, speedX: d2 * ball.speed }));
      //   }

      //   //Si la balle touche un block
      //   //Parcourir tous les blocks pour les comparer avec la position de la balle
      //   for (let i = 0; i < blocks.length; i++) {
      //     let block = blocks[i];

      //     //Est-ce qu'on détecte une collision ?
      //     if (circleCollideWithRectangle(ball, block)) {
      //       let blockTop = block.y;
      //       let blockLeft = block.x;
      //       let blockRight = block.x + block.width;
      //       let blockBottom = block.y + block.height;

      //       let ballMovesUp = ball.speedY < 0;
      //       let ballMovesDown = ball.speedY > 0;

      //       //Vérifie où se trouve la balle par rapport au block au moment de la collision
      //       if (ball.x < blockLeft && ball.y > blockTop && ball.y < blockBottom)
      //         setBall((prevBall) => ({
      //           ...prevBall,
      //           speedX: prevBall.speedX * -1,
      //         }));
      //       //gauche
      //       else if (
      //         ball.x > blockRight &&
      //         ball.y > blockTop &&
      //         ball.y < blockBottom
      //       )
      //         setBall((prevBall) => ({
      //           ...prevBall,
      //           speedX: prevBall.speedX * -1,
      //         }));
      //       //droite
      //       else if (
      //         ball.y < blockTop &&
      //         ball.x > blockLeft &&
      //         ball.x < blockRight
      //       )
      //         setBall((prevBall) => ({
      //           ...prevBall,
      //           speedY: prevBall.speedY * -1,
      //         }));
      //       //haut
      //       else if (
      //         ball.y > blockBottom &&
      //         ball.x > blockLeft &&
      //         ball.x < blockRight
      //       )
      //         setBall((prevBall) => ({
      //           ...prevBall,
      //           speedY: prevBall.speedY * -1,
      //         }));
      //       //bas
      //       // Si on arrive ici, c'est qu'on a une collision sur un coin
      //       else if (
      //         (ball.x > blockRight && ball.y > blockBottom) || // coin bas droite
      //         (ball.x < blockLeft && ball.y > blockBottom) || // coin bas gauche
      //         (ball.x > blockLeft && ball.y > blockTop) || // coin haut gauche
      //         (ball.x > blockRight && ball.y < blockTop) // coin haut droite
      //       ) {
      //         if (ballMovesDown)
      //           setBall((prevBall) => ({
      //             ...prevBall,
      //             speedY: prevBall.speedY * -1,
      //           }));
      //         if (ballMovesUp)
      //           setBall((prevBall) => ({
      //             ...prevBall,
      //             speedX: prevBall.speedX * -1,
      //           }));
      //       }

      //       blocks.splice(i, 1);
      //       i--;
      //     }
      //   }
      //Clearing the interval
      return () => clearInterval(interval);
    }, 100);
  }, []);

  if (canvas) {
    // Si la balle touche l'écran DROIT
    if (ball.x + ball.size > canvas.width) {
      setBall((prevBall) => ({
        ...prevBall,
        speedX: prevBall.speedX * -1,
        x: prevBall.x - prevBall.size,
        y: prevBall.y - prevBall.size,
      }));
    } else if (ball.x - ball.size < 0) {
      console.log(ball.x);
      console.log(ball.size);

      console.log(ball.x - ball.size);
      console.log("on touche l'écran gauche");

	  console.log("SPEED X", ball.speedX);
	  

      setBall((prevBall) => ({
        ...prevBall,
        speedX: prevBall.speedX * -1,
		x: prevBall.x - prevBall.size,
        y: prevBall.y - prevBall.size,
      }));
    }
  }

  // Si la balle touche l'écran HAUT
  // if (ball.y - ball.size < 0 && ball.y != 0) {
  if (ball.y < 0) {
    setBall((prevBall) => ({
      ...prevBall,
      speedY: prevBall.speedY * -1,
      x: prevBall.x - prevBall.size,
      y: prevBall.y + prevBall.size,
    }));
  }

  // Si la balle touche le player
  if (
    ball.x > Player.x &&
    ball.x < Player.x + Player.width &&
    ball.y + ball.size > Player.y
  ) {
    // // Si la balle touche le player
    // if (ball.x > Player.x  && ball.x < Player.x + Player.width && ball.y + ball.size > Player.y && ball.y + ball.size < Player.y + ball.speedY + 1) {
    console.log("on touche le player");

    ball.speedY *= -1;

    //Calcul de l'angle de rebond de la balle
    let d = (ball.x - Player.x) / Player.width; // une valeur normalisée entre 0 et 1 de la balle sur le player
    let d2 = (d - 0.5) * 2; // valeir normalisée entre -1 et 1
    ball.speedX = d2 * ball.speed;
  }

//   //Si la balle touche un block 
//     //Parcourir tous les blocks pour les comparer avec la position de la balle
//     for (let i = 0; i < blocks.length; i++){
//         let block = blocks[i];

        
//         //Est-ce qu'on détecte une collision ?
//         if (circleCollideWithRectangle(ball, block)){
//             let blockTop = block.y;
//             let blockLeft = block.x;
//             let blockRight = block.x + block.width;
//             let blockBottom = block.y + block.height;
    
//             let ballMovesUp = ball.speedY < 0;
//             let ballMovesDown = ball.speedY > 0;

//             //Vérifie où se toruve la balle par rapport au block au moment de la collision
//             if (ball.x < blockLeft && ball.y > blockTop && ball.y < blockBottom)        ball.speedX *= -1 //gauche
//             else if (ball.x > blockRight && ball.y > blockTop && ball.y < blockBottom)  ball.speedX *= -1 //droite
//             else if (ball.y < blockTop && ball.x > blockLeft && ball.x < blockRight)    ball.speedY *= -1 //haut
//             else if (ball.y > blockBottom && ball.x > blockLeft && ball.x < blockRight) ball.speedY *= -1 //bas
//             // Si on arrive ici, c'est qu'on a une collision sur un coin
//             else if (
//                 ball.x > blockRight && ball.y > blockBottom || // coin bas droite
//                 ball.x < blockLeft && ball.y > blockBottom || // coin bas gauche
//                 ball.x > blockLeft && ball.y > blockTop || // coin haut gauche
//                 ball.x > blockRight && ball.y < blockTop // coin haut droite
//             ) {
//                 if (ballMovesDown)  ball.speedY *= -1;
//                 if (ballMovesUp)    ball.speedX *= -1;
//             }
            
//             blocks.splice(i, 1);
//             i--;
//         }

//     }
}
