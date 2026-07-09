
/* ==========================
   SAHYADRI CHRONICLES JS
========================== */


/* Theme Toggle */

const themeBtn = document.getElementById("theme-toggle");


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");


    if(document.body.classList.contains("light-mode")){

        themeBtn.innerHTML = "☀️";

    }

    else{

        themeBtn.innerHTML = "🌙";

    }

});





/* Scroll Reveal Animation */


const elements = document.querySelectorAll(
".card, .place-card, .timeline div, .gallery img"
);



const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity = "1";

entry.target.style.transform = "translateY(0)";


}


});


},

{

threshold:0.15

}

);





elements.forEach(el=>{


el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition="0.8s ease";


observer.observe(el);


});






/* Dynamic Footer Year */


const footerText = document.querySelector("footer");


const year = new Date().getFullYear();


footerText.innerHTML += 
`<p>© ${year} Sahyadri Chronicles. All Rights Reserved.</p>`;






/* Button Smooth Effect */


const exploreBtn = document.querySelector(".btn");


exploreBtn.addEventListener("click",()=>{

window.scrollBy({

top:500,

behavior:"smooth"

});

});