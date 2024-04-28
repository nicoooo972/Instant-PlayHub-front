import { canvas, context } from "./canvas";
import { keyboard } from "./UseKeyboard";

const PLAYER_HEIGHT = 20;
const PLAYER_WIDTH = 120;

export const Player = {
    x : canvas?.width ? canvas.width / 2 - 50 : 0,
    y : canvas?.height ? canvas.height - PLAYER_HEIGHT - 10 : 0,
    width : PLAYER_WIDTH,
    height : PLAYER_HEIGHT,
    color : "#7209b7",
    speed : 5
}

export function UpdatePlayer(){
    //Déplacement du player vers la gauche
    if (keyboard.left) {
        Player.x -= Player.speed;
    };

    //Déplacement du layer vers la droite
    if (keyboard.right) {
      Player.x += Player.speed;
    };

    //Le layer ne peut pas aller au delà de l'écran gauche
    if (Player.x < 0){
      Player.x = 0;
    };

    if (canvas) {
      //Le layer ne peut pas aller au delà de l'écran droit
      if (Player.x > canvas.width - Player.width){
        Player.x = canvas.width - Player.width;
      };
    }
}

export function RenderPlayer(){
  if (context) {
    context.fillStyle = Player.color;
    context.fillRect(Player.x, Player.y, Player.width, Player.height);
  }
}
