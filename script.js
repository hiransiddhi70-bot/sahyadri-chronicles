/* ==========================================
   SAHYADRI CHRONICLES
   PREMIUM TOURISM WEBSITE
   SCRIPT.JS - PART 1
========================================== */

// =====================
// THEME TOGGLE
// =====================

const themeBtn = document.getElementById("theme-toggle");

if(themeBtn){

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

themeBtn.innerHTML=
document.body.classList.contains("light-mode")
? "☀️"
: "🌙";

});

}

// =====================
// PRELOADER
// =====================

window.addEventListener("load",()=>{

const loader=document.getElementById("preloader");

if(loader){

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},800);

},1500);

}

});

// =====================
// NAVBAR SCROLL
// =====================

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(!navbar) return;

navbar.style.background=

window.scrollY>80

?

"rgba(0,0,0,.92)"

:

"rgba(0,0,0,.35)";

});

// =====================
// MOBILE MENU
// =====================

const menuIcon=document.getElementById("menu-icon");
const navLinks=document.getElementById("nav-links");

if(menuIcon && navLinks){

menuIcon.addEventListener("click",()=>{

navLinks.classList.toggle("active");

menuIcon.innerHTML=

navLinks.classList.contains("active")

?

"✖"

:

"☰";

});

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

menuIcon.innerHTML="☰";

});

});

}

// =====================
// SCROLL PROGRESS BAR
// =====================

window.addEventListener("scroll",()=>{

const progress=document.getElementById("progress-bar");

if(!progress) return;

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

progress.style.width=(scrollTop/height)*100+"%";

});

// =====================
// BACK TO TOP
// =====================

const topBtn=document.getElementById("top-btn");

window.addEventListener("scroll",()=>{

if(!topBtn) return;

topBtn.style.display=

window.scrollY>500

?

"block"

:

"none";

});

if(topBtn){

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

// =====================
// SMOOTH SCROLL
// =====================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// =====================
// SCROLL ANIMATION
// =====================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll(

"section,.place-card,.planner-card,.food-card,.gem-card,.experience-card,.timeline-item"

).forEach(item=>{

item.classList.add("hidden");

observer.observe(item);

});

// =====================
// COUNTER
// =====================

const counters=document.querySelectorAll(".stats h3");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const counter=entry.target;

const target=parseInt(counter.innerText);

let count=0;

const speed=Math.ceil(target/60);

const update=()=>{

count+=speed;

if(count>=target){

counter.innerText=target+"+";

}else{

counter.innerText=count;

requestAnimationFrame(update);

}

};

update();

counterObserver.unobserve(counter);

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});
/* ==========================================
   SAHYADRI AI GUIDE
========================================== */

const tourismData = {

food:{
keywords:["food","eat","dish","recipe","misal","puran","bhakri","vada","basundi","kanda"],
answer:`
🍛 Famous Foods of Ahilyanagar

• Misal Pav 🌶️
Spicy sprout curry served with pav.

• Pithla Bhakri 🫓
Traditional gram flour curry with jowar bhakri.

• Puran Poli 🥞
Sweet stuffed flatbread prepared during festivals.

• Zunka Bhakar
Simple and nutritious Maharashtrian meal.

• Kanda Bhaji
Crispy onion fritters served with tea.

• Basundi
Sweet thickened milk dessert.

⭐ Must Try: Misal Pav & Puran Poli
`
},

history:{
keywords:["history","historic","past","fort","maratha","heritage"],
answer:`
📜 Ahilyanagar History

• Earlier known as Ahmednagar.
• Founded in 1494 by Ahmad Nizam Shah.
• Capital of the Nizam Shahi dynasty.
• Closely connected with the Maratha Empire.
• Rich heritage of forts, temples and spiritual places.
• Today it is one of Maharashtra's important tourism districts.
`
},

shirdi:{
keywords:["shirdi","sai baba","temple"],
answer:`
🛕 Shirdi

• Home of Shri Sai Baba.
• One of India's biggest pilgrimage destinations.
• Millions of devotees visit every year.
• Temple is open throughout the year.
• Best time: October–March.
`
},

kalsubai:{
keywords:["kalsubai","peak","trek","highest"],
answer:`
⛰️ Kalsubai Peak

• Highest mountain in Maharashtra.
• Height: 1646 metres.
• Famous sunrise trek.
• Starting point: Bari Village.
• Best season: Monsoon & Winter.
`
},

bhandardara:{
keywords:["bhandardara","lake","waterfall"],
answer:`
🌊 Bhandardara

• Arthur Lake
• Randha Falls
• Wilson Dam
• Umbrella Falls
• Camping & Photography Paradise
`
},

harishchandragad:{
keywords:["harishchandragad","konkan kada"],
answer:`
🏞️ Harishchandragad

• Ancient hill fort.
• Famous Konkan Kada cliff.
• Popular trekking destination.
• Ancient Shiva temple.
`
},

festival:{
keywords:["festival","ganesh","diwali","gudhi","navratri","holi"],
answer:`
🎉 Major Festivals

🌺 Ganesh Chaturthi
🙏 Gudhi Padwa
🪔 Diwali
🌸 Makar Sankranti
💃 Navratri
🔥 Holi

Each festival reflects Maharashtra's rich culture and traditions.
`
},

hotel:{
keywords:["hotel","stay","resort"],
answer:`
🏨 Best Stay Options

• Ahilyanagar City Hotels
• Shirdi Hotels
• Bhandardara Resorts
• MTDC Resorts
• Budget Homestays
`
},

budget:{
keywords:["budget","cost","price","trip"],
answer:`
💰 Estimated Budget

Budget Trip : ₹4,000–₹6,000

Comfort Trip : ₹7,000–₹12,000

Luxury Trip : ₹15,000+
`
},

weather:{
keywords:["weather","season","best time"],
answer:`
🌤️ Best Time

October → February ✅

Pleasant weather for forts,
trekking and sightseeing.
`
}

};

// =========================
// AI GUIDE FUNCTION
// =========================

function askGuide(){

const input=document.getElementById("user-question");

const output=document.getElementById("bot-answer");

if(!input || !output) return;

const question=input.value.toLowerCase();

let found=false;

for(const topic in tourismData){

const item=tourismData[topic];

if(item.keywords.some(word=>question.includes(word))){

output.innerHTML=item.answer;

found=true;

break;

}

}

if(!found){

output.innerHTML=`
🤖 I can answer about:

🏰 Places

🍛 Food

📜 History

🎉 Festivals

🏨 Hotels

💰 Budget

🌤️ Weather

⛰️ Trekking
`;

}

}

// =========================
// SUGGESTION BUTTONS
// =========================

document.querySelectorAll(".suggestions button").forEach(button=>{

button.addEventListener("click",()=>{

document.getElementById("user-question").value=button.innerText;

askGuide();

});

});

// =========================
// ENTER KEY SUPPORT
// =========================

const questionBox=document.getElementById("user-question");

if(questionBox){

questionBox.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

askGuide();

}

});

}
/* ==========================================
   PLACE MODAL
========================================== */

const places={

fort:{
title:"🏰 Ahilyanagar Fort",
image:"fort.jpg",
history:"Ahilyanagar Fort was built during the Nizam Shahi dynasty and later became an important military fort of the Marathas. It has witnessed many historical battles and remains one of the city's greatest heritage monuments.",
timing:"9:00 AM - 6:00 PM",
fee:"₹25",
location:"Ahilyanagar City",
best:"October - February",
facts:[
"Built in the 15th century",
"Strong stone fortifications",
"Popular photography spot",
"Symbol of Ahilyanagar heritage"
]
},

shirdi:{
title:"🛕 Shirdi",
image:"shirdi.jpg",
history:"Shirdi is famous as the home of Shri Sai Baba. Millions of devotees from around the world visit the Sai Baba Temple every year seeking blessings and spiritual peace.",
timing:"Open 24 Hours",
fee:"Free",
location:"Shirdi, Ahilyanagar",
best:"October - March",
facts:[
"Sai Baba Samadhi Temple",
"Dwarkamai Mosque",
"Chavadi",
"Millions of annual visitors"
]
},

kalsubai:{
title:"⛰️ Kalsubai Peak",
image:"kalsubai.jpg",
history:"Kalsubai Peak is the highest mountain in Maharashtra with an elevation of 1646 metres. It is famous for trekking, sunrise views and beautiful Sahyadri landscapes.",
timing:"Open All Day",
fee:"Free",
location:"Bari Village",
best:"Monsoon & Winter",
facts:[
"Highest peak of Maharashtra",
"Popular sunrise trek",
"Temple at summit",
"Adventure destination"
]
},

bhandardara:{
title:"🌊 Bhandardara",
image:"bhandardara.jpg",
history:"Bhandardara is a beautiful hill station known for Arthur Lake, Randha Falls, Wilson Dam and peaceful natural surroundings.",
timing:"Open All Day",
fee:"Free",
location:"Akole",
best:"July - February",
facts:[
"Arthur Lake",
"Wilson Dam",
"Camping",
"Beautiful waterfalls"
]
},

harishchandragad:{
title:"🏞️ Harishchandragad",
image:"harishchandragad.jpg",
history:"Harishchandragad is an ancient hill fort famous for Konkan Kada, temples and one of Maharashtra's best trekking experiences.",
timing:"Open All Day",
fee:"Free",
location:"Akole",
best:"June - February",
facts:[
"Konkan Kada",
"Ancient Shiva Temple",
"Caves",
"Historic Fort"
]
}

};

function openPlace(name){

const place=places[name];

document.getElementById("placeTitle").innerHTML=place.title;

document.getElementById("placeImage").src=place.image;

document.getElementById("placeHistory").innerHTML=place.history;

document.getElementById("placeTiming").innerHTML=place.timing;

document.getElementById("placeFee").innerHTML=place.fee;

document.getElementById("placeLocation").innerHTML=place.location;

document.getElementById("placeBest").innerHTML=place.best;

let list="";

place.facts.forEach(f=>{

list+=`<li>${f}</li>`;

});

document.getElementById("placeFacts").innerHTML=list;

document.getElementById("placeModal").style.display="flex";

}

function closePlace(){

document.getElementById("placeModal").style.display="none";

}

window.onclick=function(e){

if(e.target==document.getElementById("placeModal")){

closePlace();

}

};

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

closePlace();

}

});
/* =========================
   CULTURE ACCORDION
========================= */

const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    const content = btn.nextElementSibling;

    // Close other opened accordions
    document.querySelectorAll(".accordion-content").forEach(item => {
      if (item !== content) {
        item.style.display = "none";
      }
    });

    // Toggle current accordion
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }

  });

});