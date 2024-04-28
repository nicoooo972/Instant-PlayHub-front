// import { canvas, context } from "./canvas";
// import { drawCircle, circleCollideWithRectangle } from "./functions";
// import { Player } from "./Player";
// import { RenderBlocks } from "./RenderBlocks";

// export const ball = {
//     x : canvas?.width ? canvas.width / 2 : 0,
//     y : canvas?.height ? canvas.height - 50 : 0,
//     size : 10,
//     color : "#3f37c9",
//     speed : 4,
//     speedX : 4,
//     speedY : -4
// };

// const blocks = RenderBlocks();

// export function UpdateBall(){
//     //Déplacement de la balle
//     ball.x += ball.speedX;
//     ball.y += ball.speedY;

//     // Si la balle touche l'écran DROIT
//     if(canvas){
//         if (ball.x + ball.size > canvas.width ) {
//             ball.speedX *= -1;
//         }
//     }

//     // Si la balle touche l'écran GAUCHE
//     if (ball.x - ball.size < 0){
//         ball.speedX *= -1;
//     }

//     // Si la balle touche l'écran HAUT
//     if (ball.y - ball.size < 0){
//         ball.speedY *= -1;
//     }

//     // Si la balle touche le player
//     if (ball.x > Player.x  && ball.x < Player.x + Player.width && ball.y + ball.size > Player.y && ball.y + ball.size < Player.y + ball.speedY + 1) {
//         ball.speedY *= -1;

//         //Calcul de l'angle de rebond de la balle
//         let d = (ball.x - Player.x) / Player.width; // une valeur normalisée entre 0 et 1 de la balle sur le player
//         let d2 = (d - 0.5) * 2; // valeir normalisée entre -1 et 1
//         ball.speedX = d2 * ball.speed;
        
//     }

//     //Si la balle touche un block 
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
// };


// export function RenderBall(){
//     drawCircle(ball.color, ball.x, ball.y, ball.size, true, 1)
// };
export {}