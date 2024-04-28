export const keyboard = {
  left : false,
  right : false
};

document.addEventListener("keydown", function(event){
  if (event.keyCode === 37) keyboard.left = true;
  if (event.keyCode === 39) keyboard.right = true;
});

document.addEventListener("keyup", function(event){
  if (event.keyCode === 37) keyboard.left = false;
  if (event.keyCode === 39) keyboard.right = false;
});