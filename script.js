let menu = document.querySelector('#menu');
let main = document.querySelector('.main');

menu.onclick = () => {
        menu.classList.toggle('bx-x');
        main.classList.toggle('active'); 
};

      




let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener("scroll",function(){
        var header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);


        menu.classList.remove('bx-x');
        main.classList.remove('active'); 
        });

window.onscroll= () => {
        sections.forEach(sec=>{
                let top = window.scrollY;
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');

                if(top >= offset && top < offset + height){
                        navLinks.forEach(links => {
                                links.classList.remove('active');
                                document.querySelector('header nav a [href*='+ id +']').classList.add('active');

                        });
                };
        });

  
}

ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
});

ScrollReveal().reveal('.home-section, .heading', {origin:'top'});
ScrollReveal().reveal('.home-image, .service-section,.port-box, .contact i', {origin:'bottom'});
ScrollReveal().reveal('.home-section h1, .about-image', {origin:'left'});
ScrollReveal().reveal('.home-section p, .about-section', {origin:'right'});


const typed = new Typed('.text',{
        strings:['Developer','Business Analyst'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
});


function readmore() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("button");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
          
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
      }