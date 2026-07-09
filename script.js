
/* =================================
   SAHYADRI CHRONICLES
   Premium Tourism JavaScript
================================= */


/* ===============================
   THEME TOGGLE
================================ */


const themeBtn = document.getElementById("theme-toggle");


themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light-mode");


    if(document.body.classList.contains("light-mode")){

        themeBtn.innerHTML="☀️";

    }
    else{

        themeBtn.innerHTML="🌙";

    }

});





/* ===============================
   NAVBAR SCROLL EFFECT
================================ */


const navbar = document.querySelector(".navbar");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 80){

        navbar.style.background =
        "rgba(0,0,0,0.85)";

    }

    else{

        navbar.style.background =
        "rgba(0,0,0,0.35)";

    }


});






/* ===============================
   SCROLL REVEAL ANIMATION
================================ */


const revealElements = document.querySelectorAll(

".place-card, .stats div, .experience-grid div, .culture-grid div, .timeline div, .gallery-grid img"

);



const revealObserver = new IntersectionObserver(

(entries)=>{


entries.forEach((entry)=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},

{
threshold:0.15
}


);



revealElements.forEach((element)=>{


element.classList.add("hidden");


revealObserver.observe(element);


});







/* ===============================
   SMOOTH BUTTON SCROLL
================================ */


const exploreBtn = document.querySelector(".explore-btn");


exploreBtn.addEventListener("click",(e)=>{


e.preventDefault();


document.querySelector("#places")
.scrollIntoView({

behavior:"smooth"

});


});







/* ===============================
   FOOTER YEAR
================================ */


const footer = document.querySelector("footer");


const year = new Date().getFullYear();


footer.innerHTML +=

`<p>© ${year} Sahyadri Chronicles. All Rights Reserved.</p>`;





/* ===============================
   LOADING EFFECT
================================ */


window.addEventListener("load",()=>{


document.body.style.opacity="1";


});
/* ================= PRELOADER ================= */


window.addEventListener("load",()=>{

const loader=document.getElementById("preloader");


setTimeout(()=>{

loader.style.opacity="0";

loader.style.transition="0.8s";


setTimeout(()=>{

loader.style.display="none";

},800);


},1500);


});
/* ================= MOBILE MENU ================= */


const menuIcon = document.getElementById("menu-icon");

const navLinks = document.getElementById("nav-links");


menuIcon.addEventListener("click",()=>{


navLinks.classList.toggle("active");


if(navLinks.classList.contains("active")){

menuIcon.innerHTML="✖";

}

else{

menuIcon.innerHTML="☰";

}


});





// Close menu after clicking link

document.querySelectorAll(".nav-links a")
.forEach(link=>{


link.addEventListener("click",()=>{


navLinks.classList.remove("active");

menuIcon.innerHTML="☰";


});


});
/* ================= SCROLL PROGRESS ================= */

window.addEventListener("scroll",()=>{

let scrollTop=document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight -
document.documentElement.clientHeight;


let progress=(scrollTop/height)*100;


document.getElementById("progress-bar")
.style.width=progress+"%";


});
/* ================= BACK TO TOP ================= */


const topBtn=document.getElementById("top-btn");


window.addEventListener("scroll",()=>{


if(window.scrollY>500){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}


});


topBtn.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});
/* ================= COUNTER ANIMATION ================= */


const counters=document.querySelectorAll(".stats h3");


counters.forEach(counter=>{


let target=+counter.innerText.replace("+","");


let count=0;


let update=setInterval(()=>{


count+=Math.ceil(target/50);


if(count>=target){

counter.innerText=target+"+";

clearInterval(update);

}

else{

counter.innerText=count;

}


},40);


});