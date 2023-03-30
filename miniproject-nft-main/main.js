const header = document.querySelector('header');
const mobileBtn = document.querySelector('.mobile-btn');
const navList = document.querySelector('.nav-list');
const btn = document.querySelector('.btn');

mobileBtn.addEventListener('click', () => {
   mobileBtn.classList.toggle('active');
   navList.classList.toggle('active');
});

window.addEventListener('scroll', function () {
   header.classList.toggle('sticky', this.window.scrollY);
});


// Modal popup
const modalClose = document.querySelector('.modal-close');
const placeBid = document.querySelectorAll('.place-bid');
const cardBtn = document.querySelectorAll('.card-btn');
const modalBg = document.querySelector('.modal-bg');
const form = document.querySelector('.form');
const modal = document.querySelector('.modal');

placeBid.forEach((placeBids) => {
   placeBids.addEventListener('click', () => {
      modalBg.classList.add('modal-bg-active');
      form.classList.add('form-active');
      modal.classList.add('modal-active')
   })
});

cardBtn.forEach((cardBtns) => {
   cardBtns.addEventListener('click', () => {
      modalBg.classList.add('modal-bg-active');
      form.classList.add('form-active');
      modal.classList.add('modal-active')
   })
});

modalClose.onclick = () => {
   modalBg.classList.remove('modal-bg-active');
   form.classList.remove('form-active');
   modal.classList.remove('modal-active')
};

modalBg.onclick = () => {
   modalBg.classList.remove('modal-bg-active');
   form.classList.remove('form-active');
   modal.classList.remove('modal-active')
   profileModal.classList.remove('profile-modal-active');
};



// Mode

const mode = document.getElementById('mode');
const body = document.querySelector('body');
const background = document.getElementById('background');


mode.onclick = () => {
   body.classList.toggle('light-mode');

   if (document.body.classList.contains("light-mode")) {
      background.style.display = 'none';
   } else {
      background.style.display = 'block';
   }
}

// !proifle modal

const box = document.querySelectorAll('.box');
const profileModal = document.querySelector('.profile-modal'); 
const pModalImg = document.querySelector('.p-modal-img');

box.forEach((boxes) => {

   const profileImage = boxes.querySelector('.profile-image').getAttribute('src');

   boxes.addEventListener('click', () => {
      profileModal.classList.add('profile-modal-active');
      modalBg.classList.add('modal-bg-active');
      pModalImg.setAttribute('src', profileImage)
   });
});

