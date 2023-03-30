const header = document.querySelector('header');

window.addEventListener('scroll', function () {
   header.classList.toggle('sticky', this.window.scrollY);
});

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