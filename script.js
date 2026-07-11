'use script';

const btn = document.querySelectorAll('.btn');
const message = document.querySelector('.message');
const overlay = document.querySelector('.overlay');
const clos = document.querySelector('.close');
const apple = document.querySelectorAll('.btn')[0].textContent;
const boy = document.querySelectorAll('.btn')[1].textContent;
const cat = document.querySelectorAll('.btn')[2].textContent;
console.log();

const unhide = function () {
  document.querySelector('.message').classList.remove('hidden');

  document.querySelector('.overlay').classList.remove('hidden');
};

const hide = function () {
  document.querySelector('.message').classList.add('hidden');

  document.querySelector('.overlay').classList.add('hidden');
};

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function name(params) {
    unhide();
  });
}

clos.addEventListener('click', function name(params) {
  hide();
});

overlay.addEventListener('click', function name(params) {
  hide();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') hide();
});

document.addEventListener('keypress', function name(e) {
  if (e.key === apple) {
    unhide();
  } else if (e.key === boy) {
    unhide();
  } else if (e.key === cat) {
    unhide();
  }
});
