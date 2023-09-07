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

//pour créer un effet d'optique
let index = 0,
  bestScore = 0,
  currentScore = 0,
  pipes = [],
  flight,
  flyHeight;

//elle permet de rendre toute l'animation
const render = () => {
  index++;

  // background
  // 1er element de canvas: drawImg prend 8 parametres
  ctx.drawImage(
    img,
    0,
    0,
    canvas.width,
    canvas.height,
    -((index * (speed / 2)) % canvas.width) + canvas.width,
    0,
    canvas.width,
    canvas.height
  );

  //2eme element de canvas
  ctx.drawImage(
    img,
    0,
    0,
    canvas.width,
    canvas.height,
    -((index * (speed / 2)) % canvas.width),
    0,
    canvas.width,
    canvas.height
  );

  if (gamePlaying) {
    ctx.drawImage(
      img,
      432,
      Math.floor((index % 9) / 3) * size[1],
      ...size,
      cTenth,
      flyHeight,
      ...size
    );
    flight += gravity;
    flyHeight = Math.min(flyHeight + flight, canvas.height - size[1]);
  } else {
    ctx.drawImage(
      img,
      432,
      Math.floor((index % 9) / 3) * size[1],
      ...size,
      canvas.width / 2 - size[0] / 2,
      flyHeight,
      ...size
    );

    flyHeight = canvas.height / 2 - size[1] / 2;
    // pour afficher le score on utilsie la methode fillText:
    ctx.fillText(`Meilleur score: ${bestScore}`, 55, 245);
    ctx.fillText(`Cliquez pour jouer`, 48, 535);
    ctx.font = "bold 30px courier";
  }
  //pour faire tourner en boucle render
  window.requestAnimationFrame(render);
};
//pour le lancer au chargment de l'image
img.onload = render;

document.addEventListener("click", () => (gamePlaying = true));
window.onclick = () => (flight = jump);
