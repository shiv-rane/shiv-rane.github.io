// popup.js
const popup   = document.getElementById('popup-overlay');
const titleEl = document.getElementById('popup-title');
const detailEl= document.getElementById('popup-details');

document.querySelectorAll('.projects button').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('div');          // the project card
    const heading = card.querySelector('h5').textContent;
    const paragraph = card.querySelector('p').textContent;

    titleEl.textContent   = heading;
    detailEl.textContent  = paragraph;
    popup.style.display   = 'flex';           // show overlay
  });
});

document.querySelector('.popup-close').addEventListener('click', () => {
  popup.style.display = 'none';               // hide overlay
});