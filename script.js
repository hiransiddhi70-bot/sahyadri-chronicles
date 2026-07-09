
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
function askGuide(){

let q=document
.getElementById("user-question")
.value
.toLowerCase();


let answer="";


if(q.includes("food")){

answer="🍛 Famous food: Misal Pav, Pithla Bhakri, Puran Poli, Vada Pav, Zunka Bhakar and Kanda Bhaji.";

}

else if(q.includes("place")){

answer="🏰 Visit: Ahilyanagar Fort, Shirdi, Kalsubai Peak, Bhandardara and Harishchandragad.";

}

else if(q.includes("history")){

answer="📜 Ahilyanagar has a rich legacy of Nizam Shahi, Maratha era and freedom movement history.";

}

else if(q.includes("shirdi")){

answer="🙏 Shirdi is famous worldwide for Sai Baba Temple.";

}

else if(q.includes("kalsubai")){

answer="⛰️ Kalsubai is Maharashtra's highest peak and a famous trekking destination.";

}

else if(q.includes("best")){

answer="🌤️ Best time to visit Ahilyanagar is October to February.";

}

else{

answer="🤖 Try asking: food, places, history, Shirdi, Kalsubai, best time.";

}


document.getElementById("bot-answer").innerHTML=answer;


}
const acc = document.querySelectorAll(".accordion-btn");

acc.forEach(btn => {

btn.addEventListener("click", () => {

const content = btn.nextElementSibling;

if(content.style.display==="block"){

content.style.display="none";

}else{

content.style.display="block";

}

});

});
const places = {

shirdi:{
title:"🛕 Shirdi",
image:"shirdi.jpg",
history:"Shirdi is one of India's most important pilgrimage destinations. It is famous as the home of Shri Sai Baba, who lived here for many years. Millions of devotees visit every year seeking blessings and peace.",
info:[
"📍 Location: Ahilyanagar District",
"🕒 Timings: Open all day",
"💰 Entry Fee: Free",
"⭐ Famous for: Sai Baba Temple",
"🍛 Try: Prasad, Misal Pav"
]
},

kalsubai:{
title:"⛰️ Kalsubai Peak",
image:"kalsubai.jpg",
history:"Kalsubai is the highest peak in Maharashtra at about 1,646 meters. It is a favorite destination for trekkers and nature lovers, offering breathtaking sunrise views.",
info:[
"📍 Bari Village",
"🥾 Trek Difficulty: Moderate",
"🌤️ Best Time: Oct-Feb",
"⭐ Height: 1646 m"
]
},

bhandardara:{
title:"🌊 Bhandardara",
image:"bhandardara.jpg",
history:"Bhandardara is a peaceful hill station known for Arthur Lake, Randha Falls, Wilson Dam and beautiful Sahyadri landscapes.",
info:[
"📍 Akole Taluka",
"🌊 Arthur Lake",
"💧 Randha Falls",
"📸 Perfect for Photography"
]
},

harishchandragad:{
title:"🏞️ Harishchandragad",
image:"harishchandragad.jpg",
history:"Harishchandragad is an ancient hill fort famous for Konkan Kada, temples and adventurous trekking routes.",
info:[
"🥾 Famous Trek",
"🌄 Konkan Kada",
"🏛️ Ancient Temple"
]
},

fort:{
title:"🏰 Ahilyanagar Fort",
image:"fort.jpg",
history:"Ahilyanagar Fort reflects the glorious history of the region and the legacy of the Marathas. It has witnessed many important historical events.",
info:[
"📍 Ahilyanagar City",
"🏛️ Historical Monument",
"📸 Heritage Photography"
]
}

};

function openPlace(place){

document.getElementById("placeTitle").innerHTML=places[place].title;

document.getElementById("placeImage").src=places[place].image;

document.getElementById("placeHistory").innerHTML=places[place].history;

let html="";

places[place].info.forEach(item=>{
html+=`<li>${item}</li>`;
});

document.getElementById("placeInfo").innerHTML=html;

document.getElementById("placeModal").style.display="flex";

}

function closePlace(){

document.getElementById("placeModal").style.display="none";

}
window.onclick = function(e){

if(e.target == document.getElementById("placeModal")){

closePlace();

}

}
const gallery=document.querySelectorAll(".gallery-grid img");

gallery.forEach(img=>{

img.addEventListener("click",()=>{

window.open(img.src,"_blank");

});

});
else if(q.includes("festival")){

answer="🎉 Major festivals are Ganesh Chaturthi, Gudhi Padwa, Diwali, Navratri and Makar Sankranti.";

}

else if(q.includes("hotel")){

answer="🏨 Popular stay options are in Ahilyanagar city, Shirdi and Bhandardara.";

}

else if(q.includes("trek")){

answer="🥾 Best treks are Kalsubai Peak and Harishchandragad.";

}

else if(q.includes("weather")){

answer="🌤️ October to February offers the best weather for tourism.";

}

else if(q.includes("budget")){

answer="💰 A 2–3 day trip usually costs around ₹4,000–₹8,000 per person depending on accommodation and transport.";

}
document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

closePlace();

}

});
document.querySelectorAll(".suggestions button").forEach(btn=>{

btn.addEventListener("click",()=>{

document.getElementById("user-question").value=btn.innerText;

askGuide();

});

});
