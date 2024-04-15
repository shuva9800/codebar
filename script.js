const navbar = document.querySelector(".hero-section-header");
const paraStyle = document.querySelector(".langchain");
window.addEventListener('scroll', ()=> {

    if (window.scrollY > 0) { // Adjust the scroll threshold as needed
      navbar.classList.add('scrolled');
      paraStyle.classList.add('active');
    } else {
      navbar.classList.remove('scrolled');
      paraStyle.classList.remove('active')
    }
  });