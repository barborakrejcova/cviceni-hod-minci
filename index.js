const padlOrel = Math.random() < 0.5;

if (padlOrel) {
    const vysledekEl = document.querySelector('.vysledek');
    vysledekEl.textContent = 'Padl orel';
} else {
    const vysledekEl = document.querySelector('.vysledek');
    vysledekEl.textContent = 'Padla panna';
}


if (padlOrel) {
    const minceEl = document.querySelector('.mince');
    minceEl.classList.add('mince--orel');
} else {
    const minceEl = document.querySelector('.mince');
    minceEl.classList.add('mince--panna');
}


//Reseni z webu:

/*
const vysledek = document.querySelector('.vysledek');
const mince = document.querySelector('.mince');

const padlOrel = Math.random() < 0.5;

if (padlOrel) {
  vysledek.textContent = 'Padl orel';
  mince.classList.add('mince--orel');
} else {
  vysledek.textContent = 'Padla panna';
  mince.classList.add('mince--panna');
}
*/