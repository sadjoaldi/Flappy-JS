const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const img = new Image();
img.src = "./media/flappy-bird-set.png";

//reglage general
let gamePlaying = false; // toggle pour savoir si on met l'écran d'accueil ou pas
const gravity = 0.5; //
const speed = 6.2; //vitesse d'affichage des poteaux
const size = [51, 36]; //taille du bird
const jump = -11.5; //
const cTenth = canvas.width / 10; //

let index = 0; //pour créer un effet d'optique
(bestScore = 0), (currentScore = 0), (pipes = []), flight, flyHeight;

//elle permet de rendre toute l'animation
const render = () => {
  index++;

  ctx.drawImage(
    
    img,
    430,
    0,
    ...size,
    canvas.width / 2 - size[0] / 2,
    flight,
    flyHeight,
    ...size
  );

  flyHeight = canvas.height / 2 - size[1] / 2;
  //pour faire tourner en boucle render
  window.requestAnimationFrame(render);
};
//pour le lancer au chargment de l'image
img.onload = render;
console.log(canvas);
