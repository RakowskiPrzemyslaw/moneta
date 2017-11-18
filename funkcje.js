const moneta = document.querySelector('#moneta');
var i = 1;
function odliczanie(ile, tekst) {
  setTimeout(function() {
    // console.log();
    i++;
    moneta.style.transform = `rotateY(${i}deg)`;
    if ((i>=90 && i<=270) || (i>=450 && i <= 630)){
      moneta.style.backgroundImage = 'url("orzel.png")';
    } else {
        moneta.style.backgroundImage = 'url("reszka.png")';
    }
    if(i<=ile){
      odliczanie(ile, tekst);
    }
  }, 1);
}

function rzutMoneta(ile, tekst) {

  let losowa = Math.floor(Math.random()*100);



  if (losowa <= 50){
      i = 0;
      odliczanie(720, 'reszka');
      // console.log('reszka');
  } else {
      i = 0;
      odliczanie(540, 'orzeł');
      // console.log('orzel');
    }



  }




moneta.addEventListener('click', rzutMoneta);
