// PRELOAD
window.addEventListener("load",function(){document.querySelector(".preload").style.display="none"});

document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav');
    const logo = document.querySelector('.logo-brand');
    const logo2 = document.querySelector('.logo-brand-2');
    const chatt = document.querySelector('.chatt');
    logo2.style.transition = 'opacity 1s ease, transform 0.5s ease';
   window.addEventListener('scroll', function () {
       if (window.pageYOffset > 150) {
           nav.classList.add('header-efect');
           logo.classList.add('header-efect-fadein');
           logo2.classList.remove('logo-brand-2-style')
           chatt.classList.remove('chatt');
       } else {
            nav.classList.remove('header-efect');
            logo.classList.remove('header-efect-fadein');
            logo2.classList.add('logo-brand-2-style');
            chatt.classList.add('chatt');
       }
   });
});

// CHATT
function openChatt() {
  const chattContent = document.querySelector('.chatt-content');
  const chattButton = document.querySelector('.chatt-button');
  const waveHand = document.querySelector('.wave-hand');

  chattContent.classList.toggle('chatt-content-toggle');
  chattButton.classList.toggle('chatt-button-toggle');

  waveHand.classList.add('animate');

  setTimeout(() => {
    waveHand.classList.remove('animate');
  }, 1000); 
}



  function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 100;

      if (elementTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active');
      }
    }
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);

  

// CURRENT YEAR
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.querySelector('.credits-year').innerHTML = `${currentYear}`;