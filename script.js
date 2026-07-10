/* ==========================================================================
   SAHYADRI CHRONICLES - SYSTEM LOGIC ENGINE (COMPLETE FULL RECOVERY)
   ========================================================================== */

// 1. PRELOADER CONTROLLER
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = "0";
            setTimeout(() => preloader.style.display = "none", 600);
        }, 1000);
    }
});

// 2. THEME ENGINE CONTROLLER (LIGHT / DARK)
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        themeToggle.innerHTML = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });
}

// 3. RESPONSIVE MOBILE NAVIGATION EXPANSION
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");
if (menuIcon && navLinks) {
    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuIcon.innerHTML = navLinks.classList.contains("active") ? "✖" : "☰";
    });
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuIcon.innerHTML = "☰";
        });
    });
}

// 4. SCROLL SYSTEM: PROGRESS BAR & BACK TO TOP VISIBILITY
window.addEventListener("scroll", () => {
    const progressBar = document.getElementById("progress-bar");
    if (progressBar) {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    }

    const backToTop = document.getElementById("back-to-top");
    if (backToTop) {
        backToTop.style.display = window.scrollY > 400 ? "block" : "none";
    }
});

const bttButton = document.getElementById("back-to-top");
if (bttButton) {
    bttButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// 5. INTERSECTION OBSERVER FOR FLUID ELEMENT REVEALS
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(".timeline-item, .place-card, .food-card, .stat-card").forEach(el => {
    el.classList.add("hidden");
    revealObserver.observe(el);
});

// 6. ANIMATED NUMERICAL COUNTER LOGIC
const statCards = document.querySelectorAll(".stat-card h3");
const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const targetEl = entry.target;
            const finalVal = parseInt(targetEl.innerText, 10);
            let current = 0;
            const steps = 50;
            const increment = Math.ceil(finalVal / steps);
            const timer = setInterval(() => {
                current += increment;
                if (current >= finalVal) {
                    targetEl.innerText = finalVal + "+";
                    clearInterval(timer);
                } else {
                    targetEl.innerText = current;
                }
            }, 30);
            countObserver.unobserve(targetEl);
        }
    });
}, { threshold: 0.5 });
statCards.forEach(card => countObserver.observe(card));

// 7. UPGRADED INTERACTIVE ACCORDION LOGIC
document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
        const item = header.parentElement;
        const block = header.nextElementSibling;
        const icon = header.querySelector(".chevron-icon");
        
        document.querySelectorAll(".accordion-item").forEach(otherItem => {
            if (otherItem !== item) {
                const otherBlock = otherItem.querySelector(".accordion-content");
                const otherIcon = otherItem.querySelector(".chevron-icon");
                if (otherBlock) otherBlock.style.display = "none";
                if (otherIcon) otherIcon.style.transform = "rotate(0deg)";
            }
        });

        if (block.style.display === "block") {
            block.style.display = "none";
            if (icon) icon.style.transform = "rotate(0deg)";
        } else {
            block.style.display = "block";
            if (icon) icon.style.transform = "rotate(180deg)";
        }
    });
});

// 8. DATA REGISTRY SYSTEM FOR DESTINATIONS
const destinationData = {
    fort: {
        title: "Ahilyanagar Fort (Ahmednagar Fort)",
        image: "fort.jpg",
        location: "Ahilyanagar City Center Hub",
        timings: "09:00 AM - 06:00 PM Daily",
        fee: "₹25 per Person (Indian Citizens)",
        season: "October to March",
        history: "Erected in 1494 by Malik Ahmad Nizam Shah. It features complex ground defensive designs, high circular stone walls, and a deep surrounding moat. Famously served as a historical stronghold for Chand Bibi's battles, and later held political figures like Jawaharlal Nehru in 1942.",
        transport: "Connected via Ahilyanagar Central Bus Station and Railway Junction.",
        hotels: "Premium accommodations like Hotel Radiance.",
        tips: "Perfect for deep architectural photography.",
        facts: ["Moat once filled with crocodiles", "Contains Nehru Memorial Room", "Solid stone bastions live intact"]
    },
    shirdi: {
        title: "Shirdi Sai Baba Holy Sanctuary",
        image: "shirdi.jpg",
        location: "Shirdi Sub-district Region",
        timings: "04:00 AM - 11:15 PM Daily",
        fee: "Free Entry",
        season: "Year-Round destination",
        history: "The global epicenter of harmony and peace. It marks the holy samadhi location of revered Saint Shri Sai Baba, who spent his entire life spreading the message of universal brotherhood.",
        transport: "Served by Sainagar Shirdi Railway Terminus and Shirdi Airport.",
        hotels: "Budget homestays, dynamic dhabas, and premium MTDC hotels.",
        tips: "Pre-book passes online to skip crowd lines.",
        facts: ["Feeds over 100,000 pilgrims daily", "Maintains eternal holy fire (Dhuni) since 100+ years", "Universal center open to all faiths"]
    },
    kalsubai: {
        title: "Mighty Kalsubai Peak Trek",
        image: "kalsubai.jpg",
        location: "Bari Base Village, Akole Range",
        timings: "Open 24/7",
        fee: "Free entry",
        season: "Monsoons & Winters",
        history: "Towering high at 1646 meters, it proudly claims the title of the highest mountain peak in Maharashtra. Features a highly revered ancient temple dedicated to local deity Kalsubai at the summit.",
        transport: "ST buses to Igatpuri/Akole, then shared transport to Bari village.",
        hotels: "Rustic homestays in Bari offering home-cooked food.",
        tips: "Carry sturdy trekking poles and torches for sunrise tracking.",
        facts: ["Iron structural ladders installed on vertical faces", "Offers 360-degree views of Bhandardara dams", "Testing spot for elite mountain climbers"]
    },
    bhandardara: {
        title: "Bhandardara Lake Resort & Dam Eco-Park",
        image: "bhandardara.jpg",
        location: "Akole Region Foothills",
        timings: "Open all day long",
        fee: "Free entry to viewpoints",
        season: "July to February",
        history: "A pristine natural lake settlement located along the iconic Pravara river. Home to Arthur Lake, Wilson Dam built in 1910, and stunning Umbrella Falls layout channels.",
        transport: "Easiest via private vehicles tracking from Pune/Nashik highways.",
        hotels: "MTDC Lake View Resort and multiple luxury camping options.",
        tips: "Plan a trip during June-July to experience fireflies inside forests.",
        facts: ["Wilson Dam is one of the oldest running earthen dams", "Spawns spectacular seasonal reverse waterfalls", "Major location for avian bird watching"]
    },
    harishchandragad: {
        title: "Harishchandragad Ancient Hill Citadel",
        image: "harishchandragad.jpg",
        location: "Khireshwar / Pachnai Entry tracks",
        timings: "Best during daytime hours",
        fee: "Free entry registration",
        season: "September to February",
        history: "An ancient 6th-century hill fortress full of deep cave structures, rock carving arts, and a stunning Shiva temple. Its ultimate highlight is Konkan Kada—a gigantic, semi-circular vertical cliff face.",
        transport: "Reach via private vehicles or transit buses heading towards Malshej Ghat lines.",
        hotels: "Cave stays or tent camping at the top with basic local village food.",
        tips: "Avoid trying to climb Konkan Kada edges during high wind.",
        facts: ["Konkan Kada features a concave overhang", "Contains Kedarshwar cave holding a massive Shiva Lingam", "Mentioned in puranic literature"]
    }
};

// 9. SEARCHABLE DIRECTORY FILTERING ENGINE
const searchInput = document.getElementById("dir-search");
const resultsContainer = document.getElementById("dir-results");

function renderDirectory(filterText = "") {
    if (!resultsContainer) return;
    resultsContainer.innerHTML = "";
    
    let matchedCount = 0;
    for (const key in destinationData) {
        const item = destinationData[key];
        if (item.title.toLowerCase().includes(filterText.toLowerCase()) || item.history.toLowerCase().includes(filterText.toLowerCase())) {
            matchedCount++;
            const element = document.createElement("div");
            element.className = "dir-item";
            element.innerHTML = `<h4>${item.title}</h4><p>${item.location} — Open Encyclopedia</p>`;
            element.onclick = () => openModal(key);
            resultsContainer.appendChild(element);
        }
    }
    if(matchedCount === 0) {
        resultsContainer.innerHTML = `<p style="padding:15px; color:var(--text-muted);">No matching paths found.</p>`;
    }
}
if (searchInput) {
    searchInput.addEventListener("input", (e) => renderDirectory(e.target.value));
}
renderDirectory();

// 10. MODAL DISPLAY SYSTEM CONTROLLERS
function openModal(key) {
    const data = destinationData[key];
    if (!data) return;

    document.getElementById("modal-title").innerText = data.title;
    document.getElementById("modal-hero-img").src = data.image;
    document.getElementById("m-loc").innerText = data.location;
    document.getElementById("m-time").innerText = data.timings;
    document.getElementById("m-fee").innerText = data.fee;
    document.getElementById("m-season").innerText = data.season;
    document.getElementById("m-history").innerText = data.history;
    document.getElementById("m-transport").innerText = data.transport;
    document.getElementById("m-hotels").innerText = data.hotels;
    document.getElementById("m-tips").innerText = data.tips;

    const factsList = document.getElementById("m-facts");
    factsList.innerHTML = "";
    data.facts.forEach(fact => {
        const li = document.createElement("li");
        li.innerText = fact;
        factsList.appendChild(li);
    });

    document.getElementById("encyclopedia-modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("encyclopedia-modal").style.display = "none";
}

window.addEventListener("click", (e) => {
    const modal = document.getElementById("encyclopedia-modal");
    if (e.target === modal) closeModal();
});
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});

// 11. CUISINE GRID CONTENT FILTER CODES
function filterCuisine(category) {
    document.querySelectorAll(".cuisine-tabs .tab-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    if(event && event.target) {
        event.target.classList.add("active");
    }

    document.querySelectorAll("#cuisine-grid .food-card").forEach(card => {
        if (category === "all" || card.getAttribute("data-category") === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// 12. DYNAMIC ITINERARY TRAVEL PLANNER CALCULATIONS
function generateItinerary() {
    const days = document.getElementById("plan-days").value;
    const budget = document.getElementById("plan-budget").value;
    const output = document.getElementById("planner-output");

    let costRange = days === "1" ? "₹1,200 - ₹3,500" : days === "2" ? "₹3,000 - ₹7,500" : "₹6,000 - ₹15,000+";
    if(budget === "luxury") costRange = days === "1" ? "₹5,000+" : days === "2" ? "₹12,000+" : "₹25,000+";

    let timelineHTML = `<h3>Blueprint Output Structure (${days} Day(s) — ${budget.toUpperCase()})</h3>`;
    timelineHTML += `<p style='margin-bottom:15px; font-weight:bold; color:var(--primary)'>Estimated Cost: ${costRange}</p>`;

    if (days === "1") {
        timelineHTML += `
            <div class='plan-node'><h4>08:00 AM — Base Assembly</h4><p>Arrive via morning express routes.</p></div>
            <div class='plan-node'><h4>10:00 AM — Fort Deep Heritage Walk</h4><p>Explore Ahilyanagar stone fortification structures.</p></div>
            <div class='plan-node'><h4>01:30 PM — Ethnic Culinary Experience</h4><p>Stop for legendary authentic spicy Misal Pav.</p></div>
        `;
    } else if (days === "2") {
        timelineHTML += `
            <div class='plan-node'><h4>Day 1: Historic City Core & Forts</h4><p>Devote the complete day exploring central monument archives.</p></div>
            <div class='plan-node'><h4>Day 2: Alpine Mountain Flight & Waterfalls</h4><p>Drive straight to Bhandardara lake basin loops.</p></div>
        `;
    } else {
        timelineHTML += `
            <div class='plan-node'><h4>Day 1: Epic Heritage Core</h4><p>Exhaustive city walks covering Nizam Shahi roots.</p></div>
            <div class='plan-node'><h4>Day 2: Peak Trekking Conquest</h4><p>Early morning trek up the iconic ladders of Kalsubai Peak.</p></div>
            <div class='plan-node'><h4>Day 3: Ultimate Spiritual Sanctuary</h4><p>Travel to Shirdi for deep spiritual relaxation.</p></div>
        `;
    }
    output.innerHTML = timelineHTML;
}

// 13. KNOWLEDGE ENCYCLOPEDIA CHAT BOT ENGINE
const aiDatabase = {
    "fort": "🏯 Ahilyanagar Fort History:\nFounded in 1494 by Ahmad Nizam Shah. It features ground defensive designs, high circular stone walls, and a deep moat. Famously served as a stronghold for Chand Bibi's battles, and held prime figures like Jawaharlal Nehru in 1942.",
    "puran": "🥞 Authentic Puran Poli Guide:\nIngredients: Split chana dal, pure sweet jaggery, cardamom powder, wheat flour. Mix soft dal with jaggery to build sweet stuffings. Roll flat and bake with pure desi ghee till golden brown.",
    "kalsubai": "⛰️ Kalsubai Peak Trek:\nElevation: 1646 meters (Maharashtra's highest summit point). Starting Node: Bari Village. Best Season: July to February.",
    "hotel": "🏨 Accommodations & Helpline:\n- Premium: Hotel Radiance, MTDC Lake Side Resort.\n- Emergency Desk: 112 / Medical Cell: 108.",
    "misal": "🍛 Local Misal Pav Fact:\nFeatures sprouted matki beans prepared inside a fiery spice broth called 'Kat'. Garnish with onions, lemon juice, and crisp farsan."
};

function processAIQuery(customText = null) {
    const inputEl = document.getElementById("ai-input");
    const responseEl = document.getElementById("ai-response");
    if (!responseEl) return;

    let queryText = customText ? customText : (inputEl ? inputEl.value : "");
    if (!queryText.trim()) return;

    queryText = queryText.toLowerCase();
    let reply = "🤖 Search Log: Keyword match not found. Try asking about: 'Fort history', 'Puran Poli recipe', 'Kalsubai trek', 'Misal Pav' or 'Hotels'.";

    if (queryText.includes("fort") || queryText.includes("history")) {
        reply = aiDatabase["fort"];
    } else if (queryText.includes("puran") || queryText.includes("recipe") || queryText.includes("sweet")) {
        reply = aiDatabase["puran"];
    } else if (queryText.includes("kalsubai") || queryText.includes("trek") || queryText.includes("peak")) {
        reply = aiDatabase["kalsubai"];
    } else if (queryText.includes("hotel") || queryText.includes("stay") || queryText.includes("emergency")) {
        reply = aiDatabase["hotel"];
    } else if (queryText.includes("misal") || queryText.includes("food") || queryText.includes("eat")) {
        reply = aiDatabase["misal"];
    }

    responseEl.innerText = reply;
    if(inputEl && !customText) inputEl.value = "";
}

document.querySelectorAll(".suggestions-cloud button").forEach(btn => {
    btn.addEventListener("click", () => {
        processAIQuery(btn.innerText);
    });
});
       
