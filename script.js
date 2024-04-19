const navbar = document.querySelector(".hero-section-header");
const paraStyle = document.querySelector(".langchain");
const header = document.querySelector(".hero-section-header");
window.addEventListener('scroll', ()=> {

    if (window.scrollY > 0) { // Adjust the scroll threshold as needed
      navbar.classList.add('scrolled');
      paraStyle.classList.add('activecolor');
      header.classList.add('activebg');
    } else {
      navbar.classList.remove('scrolled');
      paraStyle.classList.remove('activecolor');
      header.classList.add('activebg');
    }
  });



