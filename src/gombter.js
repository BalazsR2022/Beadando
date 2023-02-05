
//File: index.html
//Author: Balázs Réka
//Copyright: 2023, Balázs Réka
//Group: Szoft 1-2-E
//Date: 2023-02-03
//Github: https://github.com/BalazsR2022/Beadando

const gomb = document.querySelector('button[value="sugar"]');
gomb.addEventListener('click', szamol);

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
});



  function szamolTerfogat(r) {
    const pi = Math.PI;
    return (4/3) * pi * Math.pow(r, 3);
  }
  
  function szamolFelszin(r) {
    const pi = Math.PI;
    return 4 * pi * Math.pow(r, 2);
  }

  function szamol() {
    const sugar = document.querySelector('#megadottertek');
    const r = Number(sugar.value);
    const terfogat = szamolTerfogat(r);
    const felszin = szamolFelszin(r);
    const terfogatInput = document.querySelector('#gombterfogat');
    terfogatInput.value = terfogat;
    const felszinInput = document.querySelector('#gombfelszine');
    felszinInput.value = felszin;
  }
  

