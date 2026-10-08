// ==========================================================================
// INTERACTUP INITIATIVES DATA (INCLUSIVE & SOFT SKILLS/WELLNESS FOCUSSED)
// ==========================================================================
const initiativesData = [
    {
        id: "connect-circle",
        name: "Connect Circle",
        categories: ["social"],
        cost: "Free",
        costType: "free",
        icon: "🤍",
        duration: "Bi-weekly",
        desc: "A heartfelt peer-to-peer circle focused on emotional support, social wellness, and deep human bonds. Turning strangers into a supportive family.",
        details: "Curated batches of 10-12 peers sharing university experiences, life bottlenecks, and weekly wins in a safe, judgment-free virtual circle. Designed for mental wellness.",
        benefits: "Curated peer connects, bi-weekly online wellness catch-ups, offline social meetups, lifetime supportive friendships, 100% free.",
        applyUrl: "https://forms.gle/EJ5njy2RpcLyCZdo7"
    },
    {
        id: "fluency-sessions",
        name: "Fluency Sessions",
        categories: ["personal"],
        cost: "Free Coaching",
        costType: "free",
        icon: "🗣",
        duration: "Weekly batches",
        desc: "Interactive, small-group sessions led by certified trainer Mrs. Shweta Shukla to eliminate public speaking anxiety and stage fear.",
        details: "Conquer speaking anxiety in structured impromptu debates. Batch size is strictly limited to 4 participants to ensure highly personalized diagnostic feedback.",
        benefits: "3 intensive training slots (Mon, Wed, Fri), impromptu speaking games, active body language tutoring, verified winner badges.",
        applyUrl: "https://forms.gle/SZy3e6jAoV2F4b1NA"
    },
    {
        id: "linkedin-branding",
        name: "LinkedIn Personal Branding",
        categories: ["career"],
        cost: "Paid (2500 Rs)",
        costType: "paid",
        icon: "🚀",
        duration: "Lifetime Access",
        desc: "A collaborative, ego-free mastermind group to build organic LinkedIn visibility, create confident personal brands, and upskill.",
        details: "Unlock weekly content prompts, profile audit directories, and organic amplification lists. Requires mutual support and zero-jealousy engagement.",
        benefits: "Organic feed boosting support, detailed profile header audits, algorithm updates, joint mastermind sessions, lifetime career alliances.",
        applyUrl: "https://lnkd.in/dD9iUi76"
    },
    {
        id: "mind-nutrients",
        name: "Mind Nutrients",
        categories: ["personal"],
        cost: "Invite Only",
        costType: "free",
        icon: "🧠",
        duration: "Weekly Sessions",
        desc: "An invite-only peer-learning network where student builders take turns teaching complex modern topics (AI, personal growth) to the group.",
        details: "Close-knit learning circles of 6-7 members. Every week, each member studies a new concept and teaches it in 10 minutes, forcing rapid upskilling.",
        benefits: "Fast-track 6 complex topics in 1 hour weekly, refine presentation skills, practice structuring thoughts, build lifelong intellectual bonds.",
        applyUrl: "https://forms.gle/HPDf9FKAobU9k91t7"
    },
    {
        id: "startup-group",
        name: "Start-Up Group",
        categories: ["startups"],
        cost: "Free",
        costType: "free",
        icon: "💡",
        duration: "Weekly check-ins",
        desc: "A collaborative launchpad for early-stage student founders to tackle operational blocks, brainstorm ideas, and co-build.",
        details: "Commit to testing your ideas in real time. Brainstorm marketing strategies, build minimum viable products, and get support from fellow builders.",
        benefits: "Mentorship directories, fundraising strategy worksheets, co-founder matchmaker, active operational accountability partners.",
        applyUrl: "https://wa.me/918383848516?text=Hi!%20I'm%20interested%20in%20joining%20the%20InteractUp%20Start-Up%20Group."
    },
    {
        id: "blueprint-syndicate",
        name: "Blueprint Syndicate",
        categories: ["startups"],
        cost: "Free Partner Program",
        costType: "free",
        icon: "📊",
        duration: "Execution-based",
        desc: "Join our core team as partners to collaboratively co-create, structure, and launch new community projects and initiatives.",
        details: "Hands-on team ownership. Dive deep into project management, team leading, visual marketing, and operations design.",
        benefits: "Direct core-team operations experience, premium portfolio-building projects, leadership mentorship, shaping grassroots community growth.",
        applyUrl: "https://forms.gle/HYiU5XBBmQqhFTzx6"
    },
    {
        id: "theatre-group",
        name: "Theatre & Creative Arts",
        categories: ["social"],
        cost: "Free",
        costType: "free",
        icon: "🎭",
        duration: "Weekend practice",
        desc: "Our creative theatre collective built for scriptwriters, actors, and artists to express their voices and conquer speaking anxiety.",
        details: "Open for absolute beginners. Practice creative expression, verbal projection, and interactive storytelling through virtual script-reading rounds.",
        benefits: "Virtual script workshops, creative performance rounds, body language exercises, a fun and welcoming community of creatives.",
        applyUrl: "https://forms.gle/PW6s6u4vn4RMKpxs8"
    },
    {
        id: "interactup-social",
        name: "InteractUp Social",
        categories: ["social"],
        cost: "Free Impact Group",
        costType: "free",
        icon: "🌱",
        duration: "Monthly projects",
        desc: "Our grassroots social welfare arm dedicated to organizing donation drives, youth mental health support, and community service.",
        details: "Join young changemakers to drive tangible positive impacts. Address local challenges while building deep empathy and leadership values.",
        benefits: "Local volunteer chapters, leadership roles, organic networking, certified community welfare badges.",
        applyUrl: "https://chat.whatsapp.com/DP8whg5bU2RAB50nalQCEU?mode=ac_t"
    },
    {
        id: "weekend-sessions",
        name: "Weekend Active Showcases",
        categories: ["personal"],
        cost: "Free Community",
        costType: "free",
        icon: "🌟",
        duration: "Every Weekend",
        desc: "Interactive weekend debates, speech contests, and open fluency rounds. Your direct gateway to the exclusive community Inner Circle.",
        details: "Participate in fun speaking games on Saturday & Sunday. Consistent attendance secures CV review credits, senior mentorship circles, and offline local meetups.",
        benefits: "Weekly speech and debate challenges, guest speaker workshops, verified winner certificates, unlock exclusive Inner Circle status.",
        applyUrl: "https://chat.whatsapp.com/DP8whg5bU2RAB50nalQCEU?mode=ac_t"
    }
];

// ==========================================================================
// AURAL CLICK SYNTHESIZER (WEB AUDIO API)
// ==========================================================================
let audioCtx = null;

function playClickSound() {
    try {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, audioCtx.currentTime); 
        osc.frequency.exponentialRampToValueAtTime(1150, audioCtx.currentTime + 0.06);
        
        gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.06);
        
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        osc.start();
        osc.stop(audioCtx.currentTime + 0.06);
    } catch (err) {
        // Fallback silently
    }
}

function attachSoundToButtons() {
    document.querySelectorAll(".btn, .filter-btn, .quiz-option-btn, .nav-link, .nav-item, .btn-sidebar-lofi, .indicator, .btn-close-modal, .btn-close-lightbox, .hidden-admin-key, .gallery-filter-btn").forEach(btn => {
        btn.addEventListener("click", playClickSound);
    });
}

// ==========================================================================
// BACKGROUND CANVAS PARTICLES (HERO BG INTERACTION)
// ==========================================================================
const bgCanvas = document.getElementById("particles-canvas");
const bgCtx = bgCanvas ? bgCanvas.getContext("2d") : null;
let bgParticles = [];

if (bgCanvas && bgCtx) {
    function resizeBgCanvas() {
        bgCanvas.width = window.innerWidth;
        bgCanvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeBgCanvas);
    resizeBgCanvas();
    
    class BgParticle {
        constructor() {
            this.x = Math.random() * bgCanvas.width;
            this.y = Math.random() * bgCanvas.height;
            this.size = Math.random() * 2 + 1;
            this.vx = (Math.random() - 0.5) * 0.25;
            this.vy = (Math.random() - 0.5) * 0.25;
        }
        draw() {
            bgCtx.beginPath();
            bgCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            bgCtx.fillStyle = "rgba(15, 23, 42, 0.08)";
            bgCtx.fill();
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > bgCanvas.width) this.vx = -this.vx;
            if (this.y < 0 || this.y > bgCanvas.height) this.vy = -this.vy;
            this.draw();
        }
    }
    
    function initBgParticles() {
        bgParticles = [];
        const num = Math.floor((bgCanvas.width * bgCanvas.height) / 22000);
        for (let i = 0; i < Math.min(num, 75); i++) {
            bgParticles.push(new BgParticle());
        }
    }
    
    function animateBgParticles() {
        bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
        bgParticles.forEach(p => p.update());
        requestAnimationFrame(animateBgParticles);
    }
    
    initBgParticles();
    animateBgParticles();
}

// ==========================================================================
// SCROLL-DRIVEN VISIBILITY OBSERVATIONS
// ==========================================================================
function initScrollReveals() {
    const reveals = document.querySelectorAll(".reveal-on-scroll");
    if (typeof IntersectionObserver === "undefined") {
        reveals.forEach(el => el.classList.add("revealed"));
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: "0px 0px -20px 0px"
    });
    
    reveals.forEach(el => observer.observe(el));
}

// ==========================================================================
// 🔥 LIVE EVENTS DYNAMIC CAROUSEL & BACKGROUND LOCALSTORAGE ADMIN SYSTEM
// ==========================================================================
const defaultLiveEvents = [
    {
        id: "debate-impromptu",
        title: "Impromptu debates & Stage Presence",
        badge: "Active Competition",
        desc: "Ditch the stage fright! Register for this quick, fun impromptu speaking challenge. Get a surprise topic, share your ideas in 2 minutes, and claim your certified winner badge. 100% friendly and supportive.",
        link: "https://chat.whatsapp.com/DP8whg5bU2RAB50nalQCEU?mode=ac_t",
        template: "speaking",
        icon: "🎙️"
    },
    {
        id: "wellness-mixer",
        title: "Connect Circle Wellness Mixer",
        badge: "Live Workshop",
        desc: "Looking to make authentic friends? Jump into our next curated wellness session! Share stories, play bonding games, and connect with people who support your mental health and soft-skills goals.",
        link: "https://forms.gle/EJ5njy2RpcLyCZdo7",
        template: "wellness",
        icon: "🤍"
    },
    {
        id: "casing-nutrients",
        title: "Collaborative Soft Skills Casing Challenge",
        badge: "Ongoing Challenge",
        desc: "Solve practical business and social problems in friendly groups of 3. Excellent for learning team leadership, building active communication skills, and gaining confident collaboration experience.",
        link: "https://chat.whatsapp.com/DP8whg5bU2RAB50nalQCEU?mode=ac_t",
        template: "casing",
        icon: "📊"
    }
];

let liveEvents = [];
let currentCarouselIndex = 0;
let carouselTimer = null;

function initEventsEngine() {
    try {
        const stored = localStorage.getItem("interactup_events");
        if (stored) {
            try {
                liveEvents = JSON.parse(stored);
            } catch (e) {
                liveEvents = [...defaultLiveEvents];
            }
        } else {
            liveEvents = [...defaultLiveEvents];
            try {
                localStorage.setItem("interactup_events", JSON.stringify(liveEvents));
            } catch (e) {}
        }
    } catch (e) {
        console.warn("localStorage is blocked or disabled. Falling back to default list.", e);
        liveEvents = [...defaultLiveEvents];
    }
}

function renderLiveEventsCarousel() {
    const container = document.getElementById("events-carousel-container");
    const dotsContainer = document.getElementById("carousel-dots");
    if (!container || !dotsContainer) return;
    
    container.innerHTML = "";
    dotsContainer.innerHTML = "";
    
    if (liveEvents.length === 0) {
        container.innerHTML = `
            <div class="live-event-card active theme-speaking">
                <div class="event-card-header">
                    <span class="event-card-badge badge-speaking">System Status</span>
                </div>
                <h4>No live events at the moment</h4>
                <p>Check back later or access the Admin Portal to upload a new live competition!</p>
            </div>
        `;
        return;
    }
    
    liveEvents.forEach((ev, idx) => {
        const card = document.createElement("div");
        card.className = `live-event-card theme-${ev.template} ${idx === currentCarouselIndex ? 'active' : ''}`;
        
        let badgeClass = "badge-speaking";
        if (ev.template === "wellness") badgeClass = "badge-wellness";
        if (ev.template === "casing") badgeClass = "badge-casing";
        if (ev.template === "creative") badgeClass = "badge-creative";
        
        card.innerHTML = `
            <div class="event-card-header">
                <span class="event-card-badge ${badgeClass}">${ev.badge}</span>
            </div>
            <h4>${ev.title}</h4>
            <p>${ev.desc}</p>
            <a href="${ev.link}" target="_blank" class="btn btn-primary btn-apply-event">Apply Now & Register</a>
        `;
        container.appendChild(card);
        
        const dot = document.createElement("span");
        dot.className = `indicator ${idx === currentCarouselIndex ? 'active' : ''}`;
        dot.addEventListener("click", () => {
            selectCarouselCard(idx);
            playClickSound();
        });
        dotsContainer.appendChild(dot);
    });
    
    startCarouselLoop();
}

function selectCarouselCard(index) {
    if (index < 0 || index >= liveEvents.length) return;
    currentCarouselIndex = index;
    stopCarouselLoop();
    
    const cards = document.querySelectorAll(".live-event-card");
    cards.forEach((card, idx) => {
        if (idx === currentCarouselIndex) card.classList.add("active");
        else card.classList.remove("active");
    });
    
    const dots = document.querySelectorAll("#carousel-dots .indicator");
    dots.forEach((dot, idx) => {
        if (idx === currentCarouselIndex) dot.classList.add("active");
        else dot.classList.remove("active");
    });
    
    startCarouselLoop();
}

function nextCarouselCard() {
    let nextIndex = currentCarouselIndex + 1;
    if (nextIndex >= liveEvents.length) nextIndex = 0;
    selectCarouselCard(nextIndex);
}

function startCarouselLoop() {
    if (liveEvents.length <= 1) return;
    carouselTimer = setInterval(nextCarouselCard, 5000);
}

function stopCarouselLoop() {
    if (carouselTimer) {
        clearInterval(carouselTimer);
        carouselTimer = null;
    }
}

function renderAllEventsTable() {
    const tableBody = document.getElementById("events-table-body");
    if (!tableBody) return;
    
    tableBody.innerHTML = "";
    
    if (liveEvents.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 24px;">No active competitions listed. Open the Admin Portal to publish one!</td></tr>`;
        return;
    }
    
    liveEvents.forEach(ev => {
        const row = document.createElement("tr");
        
        let badgeClass = "badge-speaking";
        if (ev.template === "wellness") badgeClass = "badge-wellness";
        if (ev.template === "casing") badgeClass = "badge-casing";
        if (ev.template === "creative") badgeClass = "badge-creative";
        
        row.innerHTML = `
            <td><span class="table-event-name">${ev.title}</span></td>
            <td><span class="event-card-badge ${badgeClass}" style="display:inline-block;">${ev.badge}</span></td>
            <td><div class="table-event-desc">${ev.desc}</div></td>
            <td><a href="${ev.link}" target="_blank" class="btn btn-secondary btn-sm">Quick Apply</a></td>
        `;
        tableBody.appendChild(row);
    });
}

function renderAdminEventsList() {
    const list = document.getElementById("admin-current-events-list");
    if (!list) return;
    
    list.innerHTML = "";
    
    if (liveEvents.length === 0) {
        list.innerHTML = `<p style="text-align: center; color: var(--text-muted); font-size: 0.85rem; padding: 20px;">No events are currently published. Create one using the form on the left!</p>`;
        return;
    }
    
    liveEvents.forEach(ev => {
        const item = document.createElement("div");
        item.className = "admin-item-row";
        item.innerHTML = `
            <div class="admin-item-details">
                <span class="admin-item-title">${ev.title}</span>
                <span class="admin-item-badge">${ev.badge} (${ev.template})</span>
            </div>
            <button class="btn-delete-event" data-id="${ev.id}">Delete</button>
        `;
        
        item.querySelector(".btn-delete-event").addEventListener("click", function() {
            const id = this.getAttribute("data-id");
            playClickSound();
            deleteEvent(id);
        });
        list.appendChild(item);
    });
}

function deleteEvent(id) {
    liveEvents = liveEvents.filter(ev => ev.id !== id);
    localStorage.setItem("interactup_events", JSON.stringify(liveEvents));
    if (currentCarouselIndex >= liveEvents.length) {
        currentCarouselIndex = Math.max(0, liveEvents.length - 1);
    }
    renderLiveEventsCarousel();
    renderAllEventsTable();
    renderAdminEventsList();
}

// Setup Modals and Admin Login Trigger actions
const allEventsModal = document.getElementById("all-events-modal");
const adminPasscodeModal = document.getElementById("admin-passcode-modal");
const adminDashboardModal = document.getElementById("admin-dashboard-modal");

function setupModalsController() {
    const btnOpenAll = document.getElementById("btn-open-all-events");
    if (btnOpenAll) {
        btnOpenAll.addEventListener("click", () => {
            renderAllEventsTable();
            if (allEventsModal) allEventsModal.classList.add("active");
        });
    }
    
    const btnCloseAll = document.getElementById("btn-close-all-events");
    if (btnCloseAll) {
        btnCloseAll.addEventListener("click", () => {
            if (allEventsModal) allEventsModal.classList.remove("active");
        });
    }
    
    document.querySelectorAll(".modal-backdrop").forEach(modal => {
        modal.addEventListener("click", function(e) {
            if (e.target === this) {
                this.classList.remove("active");
            }
        });
    });
    
    const adminTrigger = document.getElementById("footer-admin-trigger");
    if (adminTrigger) {
        adminTrigger.addEventListener("click", (e) => {
            e.preventDefault();
            openPasscodePrompt();
        });
    }
    
    const btnClosePasscode = document.getElementById("btn-close-passcode");
    if (btnClosePasscode) {
        btnClosePasscode.addEventListener("click", () => {
            if (adminPasscodeModal) adminPasscodeModal.classList.remove("active");
        });
    }
    
    const btnValidate = document.getElementById("btn-validate-passcode");
    const passcodeField = document.getElementById("admin-passcode-input");
    const passcodeError = document.getElementById("passcode-error");
    
    function validatePasscode() {
        const val = passcodeField.value.trim();
        if (val === "interactup2026") {
            passcodeError.style.display = "none";
            passcodeField.value = "";
            if (adminPasscodeModal) adminPasscodeModal.classList.remove("active");
            renderAdminEventsList();
            if (adminDashboardModal) adminDashboardModal.classList.add("active");
        } else {
            passcodeError.style.display = "block";
            passcodeError.style.animation = 'none';
            passcodeError.offsetHeight;
            passcodeError.style.animation = null;
        }
    }
    
    if (btnValidate) btnValidate.addEventListener("click", validatePasscode);
    if (passcodeField) {
        passcodeField.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                validatePasscode();
                playClickSound();
            }
        });
    }
    
    const btnCloseAdminDash = document.getElementById("btn-close-admin-dash");
    if (btnCloseAdminDash) {
        btnCloseAdminDash.addEventListener("click", () => {
            if (adminDashboardModal) adminDashboardModal.classList.remove("active");
        });
    }
    
    const btnSaveEvent = document.getElementById("btn-save-new-event");
    if (btnSaveEvent) {
        btnSaveEvent.addEventListener("click", (e) => {
            const titleField = document.getElementById("event-title");
            const badgeField = document.getElementById("event-badge");
            const descField = document.getElementById("event-desc");
            const linkField = document.getElementById("event-link");
            const tempField = document.getElementById("event-image-template");
            
            if (!titleField.value || !descField.value || !linkField.value) return;
            
            e.preventDefault();
            
            const newEv = {
                id: "event-" + Date.now(),
                title: titleField.value.trim(),
                badge: badgeField.value,
                desc: descField.value.trim(),
                link: linkField.value.trim(),
                template: tempField.value,
                icon: "🎙️"
            };
            
            liveEvents.unshift(newEv);
            localStorage.setItem("interactup_events", JSON.stringify(liveEvents));
            
            titleField.value = "";
            descField.value = "";
            linkField.value = "";
            currentCarouselIndex = 0;
            
            renderLiveEventsCarousel();
            renderAllEventsTable();
            renderAdminEventsList();
        });
    }
    
    window.addEventListener("hashchange", checkHashAccess);
    checkHashAccess();
}

function openPasscodePrompt() {
    if (adminPasscodeModal) {
        document.getElementById("admin-passcode-input").value = "";
        document.getElementById("passcode-error").style.display = "none";
        adminPasscodeModal.classList.add("active");
    }
}

function checkHashAccess() {
    if (window.location.hash === "#admin") {
        openPasscodePrompt();
        window.history.replaceState(null, null, ' ');
    }
}

// ==========================================================================
// CERTIFICATE STREAK REWARDS SIMULATOR LADDER
// ==========================================================================
const levels = [
    { name: "Bronze 2", badge: "Bronze Medal Level 2", color: "#cd7f32", class: "bronze" },
    { name: "Bronze 1", badge: "Bronze Medal Level 1", color: "#cd7f32", class: "bronze" },
    { name: "Silver 2", badge: "Silver Medal Level 2", color: "#cbd5e1", class: "silver" },
    { name: "Silver 1", badge: "Silver Medal Level 1", color: "#cbd5e1", class: "silver" },
    { name: "Gold 2", badge: "Gold Medal Level 2", color: "#eab308", class: "gold" },
    { name: "Gold 1", badge: "Gold Medal Level 1 (Max)", color: "#eab308", class: "gold" }
];

let currentLevelIdx = -1; // -1 represents Newcomer
let currentStreak = 0;
let needsReclaim = false;

const ladderVisualizer = document.getElementById("ladder-visualizer");
const btnStreakWin = document.getElementById("btn-streak-win");
const btnStreakLose = document.getElementById("btn-streak-lose");
const btnStreakReset = document.getElementById("btn-streak-reset");
const currLevelName = document.getElementById("curr-level-name");
const streakCount = document.getElementById("streak-count");
const feedEntries = document.getElementById("simulator-feed-entries");

function buildLadder() {
    if (!ladderVisualizer) return;
    ladderVisualizer.innerHTML = "";
    levels.forEach((lvl, idx) => {
        const item = document.createElement("div");
        item.className = `ladder-level ${lvl.class}`;
        item.setAttribute("id", `ladder-lvl-${idx}`);
        item.innerHTML = `
            <div class="level-indicator"></div>
            <span class="level-name">${lvl.name}</span>
            <span class="level-badge">${lvl.badge}</span>
        `;
        
        ladderVisualizer.appendChild(item);
    });
}

function updateLadderUI(actionText, actionType) {
    document.querySelectorAll(".ladder-level").forEach(el => el.classList.remove("active"));
    
    if (currentLevelIdx >= 0) {
        const activeEl = document.getElementById(`ladder-lvl-${currentLevelIdx}`);
        if (activeEl) activeEl.classList.add("active");
        currLevelName.innerText = levels[currentLevelIdx].name;
    } else {
        currLevelName.innerText = "Newcomer";
    }
    
    if (streakCount) streakCount.innerText = currentStreak;
    
    if (actionText && feedEntries) {
        const entry = document.createElement("div");
        entry.className = `feed-entry ${actionType}`;
        entry.innerHTML = `👉 <strong>${actionType.toUpperCase()}:</strong> ${actionText}`;
        feedEntries.appendChild(entry);
        feedEntries.scrollTop = feedEntries.scrollHeight;
    }
}

if (btnStreakWin) {
    btnStreakWin.addEventListener("click", () => {
        if (needsReclaim) {
            needsReclaim = false;
            currentStreak = 1;
            const currentLvl = levels[currentLevelIdx].name;
            updateLadderUI(`Rank reclaimed! You have defended your level: <strong>${currentLvl}</strong>. Streak: ${currentStreak}`, "win");
        } else {
            currentStreak++;
            if (currentLevelIdx < levels.length - 1) {
                currentLevelIdx++;
                const newLvl = levels[currentLevelIdx].name;
                updateLadderUI(`Win streak continues! Promoted to <strong>${newLvl}</strong>. Streak: ${currentStreak}`, "win");
            } else {
                updateLadderUI(`Excellent! Win streak continues at maximum level: <strong>Gold 1</strong>. Streak: ${currentStreak}`, "win");
            }
        }
    });
}

if (btnStreakLose) {
    btnStreakLose.addEventListener("click", () => {
        currentStreak = 0;
        if (currentLevelIdx >= 0) {
            needsReclaim = true;
            const currentLvl = levels[currentLevelIdx].name;
            updateLadderUI(`Defeat! Streak count reset. Win your next match to defend and reclaim your rank of <strong>${currentLvl}</strong>!`, "loss");
        } else {
            updateLadderUI("Challenge lost! Consistent preparation is key. Level remains at Newcomer.", "loss");
        }
    });
}

if (btnStreakReset) {
    btnStreakReset.addEventListener("click", () => {
        currentLevelIdx = -1;
        currentStreak = 0;
        needsReclaim = false;
        if (feedEntries) feedEntries.innerHTML = `<div class="feed-entry init">Welcome to the InteractUp Streak Simulator! Win or lose matches to view our locked progress system in action.</div>`;
        updateLadderUI();
    });
}

// ==========================================================================
// MATCHMAKER INTERACTIVE QUIZ
// ==========================================================================
let quizAnswers = {};

document.querySelectorAll(".quiz-step").forEach(step => {
    const stepNum = step.getAttribute("data-step");
    step.querySelectorAll(".quiz-option-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            const ans = this.getAttribute("data-answer");
            if (stepNum === "1") {
                quizAnswers.profile = ans;
                goToQuizStep(2);
            } else if (stepNum === "2") {
                quizAnswers.priority = ans;
                goToQuizStep(3);
            } else if (stepNum === "3") {
                quizAnswers.commitment = ans;
                quizAnswers.complete = true;
                goToQuizStep("results");
                renderQuizResults();
            }
        });
    });
});

function goToQuizStep(stepId) {
    document.querySelectorAll(".quiz-step").forEach(el => el.classList.remove("active"));
    const nextStep = document.getElementById(`quiz-step-${stepId}`);
    if (nextStep) nextStep.classList.add("active");
    
    const progressEl = document.getElementById("quiz-progress");
    if (progressEl) {
        if (stepId === 1) progressEl.style.width = "0%";
        else if (stepId === 2) progressEl.style.width = "33%";
        else if (stepId === 3) progressEl.style.width = "66%";
        else if (stepId === "results") progressEl.style.width = "100%";
    }
}

function renderQuizResults() {
    const listContainer = document.getElementById("quiz-recommendations-list");
    if (!listContainer) return;
    
    listContainer.innerHTML = "";
    let matchedIds = [];
    
    const profile = quizAnswers.profile;
    const priority = quizAnswers.priority;
    
    if (priority === "speaking") {
        matchedIds = ["fluency-sessions", "weekend-sessions", "theatre-group"];
    } else if (priority === "branding") {
        matchedIds = ["linkedin-branding", "mind-nutrients"];
    } else if (priority === "friendship") {
        matchedIds = ["connect-circle", "interactup-social", "theatre-group"];
    } else {
        if (profile === "student") {
            matchedIds = ["fluency-sessions", "weekend-sessions", "connect-circle"];
        } else if (profile === "mba-ca") {
            matchedIds = ["linkedin-branding", "mind-nutrients"];
        } else if (profile === "founder") {
            matchedIds = ["startup-group", "blueprint-syndicate", "linkedin-branding"];
        } else {
            matchedIds = ["connect-circle", "weekend-sessions"];
        }
    }
    
    const matches = initiativesData.filter(item => matchedIds.includes(item.id));
    
    matches.forEach(item => {
        const itemEl = document.createElement("div");
        itemEl.className = "rec-card glass";
        itemEl.innerHTML = `
            <div class="rec-card-header">
                <h4>${item.name}</h4>
                <span class="init-badge ${item.costType === "free" ? "badge-free" : "badge-paid"}">${item.cost}</span>
            </div>
            <p>${item.desc} (Commitment: ${item.duration})</p>
            <a href="${item.applyUrl}" target="_blank" class="btn btn-secondary btn-sm">Quick Register</a>
        `;
        listContainer.appendChild(itemEl);
    });
    
    attachSoundToButtons();
}

const btnQuizRestart = document.getElementById("btn-quiz-restart");
if (btnQuizRestart) {
    btnQuizRestart.addEventListener("click", () => {
        quizAnswers = {};
        goToQuizStep(1);
    });
}

// ==========================================================================
// CENTRAL APPLICATION PORTAL COMPILER
// ==========================================================================
const portalGrid = document.getElementById("forms-portal-container");

function renderPortal() {
    if (!portalGrid) return;
    portalGrid.innerHTML = "";
    
    const formsList = [
        { name: "InteractUp WhatsApp Official", desc: "Main entry point to communicate, interact and join weekend debates.", icon: "💬", url: "https://chat.whatsapp.com/DP8whg5bU2RAB50nalQCEU?mode=ac_t" },
        { name: "Connect Circle Registration", desc: "Join curated emotional wellness circles of 10-12 peers.", icon: "🤍", url: "https://forms.gle/EJ5njy2RpcLyCZdo7" },
        { name: "Certified Fluency Coaching", desc: "Secure your place in Shweta Shukla's weekly 4-person coaching.", icon: "🗣", url: "https://forms.gle/SZy3e6jAoV2F4b1NA" },
        { name: "LinkedIn Personal Branding", desc: "Paid lifetime access to accelerate reach and network selflessly.", icon: "🚀", url: "https://lnkd.in/dD9iUi76" },
        { name: "Mind Nutrients Peer Network", desc: "Apply to the invite-only weekly hard-skills micro-sharing network.", icon: "🧠", url: "https://forms.gle/HPDf9FKAobU9k91t7" },
        { name: "Blueprint Syndicate Partners", desc: "Apply to co-create business ideas and co-lead startup projects.", icon: "📊", url: "https://forms.gle/HYiU5XBBmQqhFTzx6" },
        { name: "Weirdo Theatre Collective", desc: "Volunteer for writing, script-reading and live acting meetups.", icon: "🎭", url: "https://forms.gle/PW6s6u4vn4RMKpxs8" },
        { name: "Professionals Group (MBA)", desc: "Submit details to join local MBA/CA city networking meetups.", icon: "💼", url: "https://forms.gle/VrsZXdP883nYTSEh6" },
        { name: "Professionals Group (Non-MBA)", desc: "Submit details to unlock local corporate chapters and referrals.", icon: "👔", url: "https://forms.gle/LbWEk6DzjZNLBHP2A" }
    ];
    
    formsList.forEach((frm, idx) => {
        const card = document.createElement("div");
        card.className = "portal-card glass reveal-on-scroll";
        card.innerHTML = `
            <div class="portal-card-header">
                <h3>${frm.name}</h3>
            </div>
            <p>${frm.desc}</p>
            <a href="${frm.url}" target="_blank" class="btn btn-outline btn-sm" id="btn-portal-go-${idx}">Apply / Open Form</a>
        `;
        
        portalGrid.appendChild(card);
    });
}

// ==========================================================================
// 🌟 3D LOADER PARTICLE ENGINE (Spiraling Growth & Happy Hues Visualizer)
// ==========================================================================
const loaderCanvas = document.getElementById("loader-3d-canvas");
const loaderCtx = loaderCanvas ? loaderCanvas.getContext("2d") : null;
let loaderPoints = [];
let loaderTimer = null;
let loaderSpinAngle = 0;

class LoaderNode {
    constructor(id) {
        this.id = id;
        this.theta = (id / 120) * 10 * Math.PI;
        this.heightOffset = (id / 120) * 200 - 100;
        this.radius = 45;
        this.colorType = (id % 2 === 0) ? "gold" : "rose";
    }
}

function initLoaderEngine() {
    if (!loaderCanvas || !loaderCtx) return;
    loaderPoints = [];
    for (let i = 0; i < 120; i++) {
        loaderPoints.push(new LoaderNode(i));
    }
}

function start3DLoaderEngine() {
    if (!loaderCanvas || !loaderCtx) return;
    
    const dpr = window.devicePixelRatio || 1;
    loaderCanvas.width = window.innerWidth * dpr;
    loaderCanvas.height = window.innerHeight * dpr;
    loaderCtx.scale(dpr, dpr);
    
    initLoaderEngine();
    animateLoader3D();
}

function animateLoader3D() {
    const width = loaderCanvas.width / (window.devicePixelRatio || 1);
    const height = loaderCanvas.height / (window.devicePixelRatio || 1);
    
    loaderCtx.clearRect(0, 0, width, height);
    
    const centerX = width / 2;
    const centerY = height / 2;
    
    loaderSpinAngle += 0.015;
    
    const focal = 180;
    
    const sorted = loaderPoints.map(p => {
        const offset = (p.id % 2 === 0) ? 0 : Math.PI;
        const currentAngle = p.theta + loaderSpinAngle + offset;
        
        const x3d = p.radius * Math.cos(currentAngle);
        const y3d = p.heightOffset + Math.sin(loaderSpinAngle * 2.5 + p.id * 0.08) * 12;
        const z3d = p.radius * Math.sin(currentAngle);
        
        const scale = focal / (focal + z3d);
        const projX = x3d * scale + centerX;
        const projY = y3d * scale + centerY;
        
        return {
            x: projX,
            y: projY,
            scale: scale,
            depth: z3d,
            color: p.colorType
        };
    }).sort((a, b) => b.depth - a.depth);
    
    sorted.forEach(p => {
        const size = Math.max(0.8, p.scale * 3.5);
        const opacity = Math.min(1.0, Math.max(0.15, p.scale * 0.8));
        
        let color = `rgba(234, 179, 8, ${opacity})`;
        if (p.color === "rose") {
            color = `rgba(244, 63, 94, ${opacity})`;
        }
        
        loaderCtx.beginPath();
        loaderCtx.arc(p.x, p.y, size, 0, Math.PI * 2);
        loaderCtx.fillStyle = color;
        loaderCtx.fill();
    });
    
    loaderTimer = requestAnimationFrame(animateLoader3D);
}

function stop3DLoaderEngine() {
    if (loaderTimer) {
        cancelAnimationFrame(loaderTimer);
        loaderTimer = null;
    }
}

// ==========================================================================
// 🔮 DYNAMIC 3D HOLOGRAM VIDEO SIMULATOR ENGINE (Hero Interactive Scene)
// ==========================================================================
function initHeroHologramSimulator() {
    const canvas = document.getElementById("hero-hologram-canvas");
    const ctx = canvas ? canvas.getContext("2d") : null;
    const bubble = document.querySelector(".hologram-bubble");
    const questionText = document.getElementById("holo-question");
    const subText = document.getElementById("holo-sub");
    
    if (!canvas || !ctx) return;
    
    function resizeCanvas() {
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
    }
    
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    setTimeout(resizeCanvas, 100);
    
    const slides = [
        { 
            question: "Do you want to make friends? 🤍", 
            sub: "Connect with genuine, supportive student builders in curated wellness circles.", 
            shape: "heart", 
            color: [234, 179, 8] // gold/yellow
        },
        { 
            question: "Want to improve public speaking? 🗣", 
            sub: "Crush stage anxiety and speaking fear in Mrs. Shweta Shukla's small-group fluency sessions.", 
            shape: "wave", 
            color: [6, 182, 212] // cyan
        },
        { 
            question: "Ready to eliminate stage fear? 🔥", 
            sub: "Join our weekend active debates, impromptu games, and certified showcases.", 
            shape: "star", 
            color: [234, 179, 8] // gold
        },
        { 
            question: "Looking for organic networking? 🤝", 
            sub: "Exchange referrals, operations skills, and build zero-ego career alliances.", 
            shape: "grid", 
            color: [6, 182, 212] // cyan
        }
    ];
    
    let currentSlideIdx = 0;
    let currentColor = [234, 179, 8];
    let time = 0;
    
    const particles = [];
    for (let i = 0; i < 40; i++) {
        particles.push({
            x: 0,
            y: 0,
            speedY: Math.random() * 0.7 + 0.4,
            speedX: Math.random() * 0.4 - 0.2,
            size: Math.random() * 2 + 1,
            angle: Math.random() * Math.PI * 2,
            rotSpeed: (Math.random() - 0.5) * 0.05,
            radDist: Math.random() * 25,
            opacity: Math.random() * 0.6 + 0.4
        });
    }
    
    function transitionToSlide(idx) {
        if (!bubble) return;
        currentSlideIdx = idx;
        
        const bgSlides = document.querySelectorAll(".holo-slide");
        bgSlides.forEach((slide, sIdx) => {
            if (sIdx === idx) slide.classList.add("active");
            else slide.classList.remove("active");
        });
        
        bubble.classList.remove("animate-in");
        
        setTimeout(() => {
            const slide = slides[currentSlideIdx];
            if (questionText) questionText.innerText = slide.question;
            if (subText) subText.innerText = slide.sub;
            bubble.classList.add("animate-in");
        }, 400);
    }
    
    setInterval(() => {
        let nextIdx = currentSlideIdx + 1;
        if (nextIdx >= slides.length) nextIdx = 0;
        transitionToSlide(nextIdx);
    }, 4500);
    
    setTimeout(() => {
        if (bubble) bubble.classList.add("animate-in");
    }, 500);
    
    let mouse = { x: null, y: null };
    canvas.addEventListener("mousemove", (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    canvas.addEventListener("mouseleave", () => {
        mouse.x = null;
        mouse.y = null;
    });
    
    function drawScene() {
        const w = canvas.width / (window.devicePixelRatio || 1);
        const h = canvas.height / (window.devicePixelRatio || 1);
        
        ctx.clearRect(0, 0, w, h);
        time += 0.015;
        
        const activeSlide = slides[currentSlideIdx];
        const targetColor = activeSlide.color;
        
        currentColor[0] += (targetColor[0] - currentColor[0]) * 0.05;
        currentColor[1] += (targetColor[1] - currentColor[1]) * 0.05;
        currentColor[2] += (targetColor[2] - currentColor[2]) * 0.05;
        
        const colorStr = `rgb(${Math.round(currentColor[0])}, ${Math.round(currentColor[1])}, ${Math.round(currentColor[2])})`;
        const rgbaStr = (op) => `rgba(${Math.round(currentColor[0])}, ${Math.round(currentColor[1])}, ${Math.round(currentColor[2])}, ${op})`;
        
        const centerX = w / 2;
        const centerY = h * 0.52;
        const tableRadiusX = 90;
        const tableRadiusY = 32;
        
        const floorGlow = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, tableRadiusX * 1.5);
        floorGlow.addColorStop(0, rgbaStr(0.15));
        floorGlow.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, tableRadiusX * 1.5, tableRadiusY * 1.5, 0, 0, Math.PI * 2);
        ctx.fillStyle = floorGlow;
        ctx.fill();
        
        const sofaRadiusX = 140;
        const sofaRadiusY = 50;
        
        const peers = [
            { angle: 0, label: "Student" },
            { angle: Math.PI / 3, label: "Founder" },
            { angle: (2 * Math.PI) / 3, label: "CA/MBA" },
            { angle: Math.PI, label: "Student" },
            { angle: (4 * Math.PI) / 3, label: "Creative" },
            { angle: (5 * Math.PI) / 3, label: "Peer" }
        ];
        
        peers.forEach((peer, i) => {
            const breathing = Math.sin(time * 2 + i) * 1.5;
            const px = centerX + sofaRadiusX * Math.cos(peer.angle);
            const py = centerY + sofaRadiusY * Math.sin(peer.angle) + breathing;
            
            ctx.beginPath();
            ctx.ellipse(px, py + 8, 16, 8, 0, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(15, 23, 42, 0.4)";
            ctx.fill();
            ctx.lineWidth = 1.5;
            ctx.strokeStyle = "rgba(15, 23, 42, 0.9)";
            ctx.stroke();
            
            ctx.beginPath();
            ctx.arc(px, py - 4, 9, 0, Math.PI * 2);
            ctx.fillStyle = i % 2 === 0 ? "rgba(15, 23, 42, 0.85)" : "#f8fafc";
            ctx.fill();
            ctx.stroke();
            
            ctx.beginPath();
            ctx.ellipse(px, py + 6, 12, 5, 0, 0, Math.PI * 2);
            ctx.fillStyle = i % 2 === 0 ? "rgba(15, 23, 42, 0.85)" : "#cbd5e1";
            ctx.fill();
            ctx.stroke();
            
            ctx.fillStyle = "rgba(15, 23, 42, 0.7)";
            ctx.font = "bold 8px var(--font-heading)";
            ctx.textAlign = "center";
            ctx.fillText(peer.label, px, py - 18);
        });
        
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, tableRadiusX, tableRadiusY, 0, 0, Math.PI * 2);
        ctx.fillStyle = "#1e293b";
        ctx.fill();
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = "rgba(15, 23, 42, 1)";
        ctx.stroke();
        
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, tableRadiusX * 0.75, tableRadiusY * 0.75, 0, 0, Math.PI * 2);
        ctx.fillStyle = "#0f172a";
        ctx.fill();
        ctx.strokeStyle = colorStr;
        ctx.lineWidth = 2.5;
        ctx.stroke();
        
        const beamHeight = h * 0.38;
        const beamTopWidth = 135;
        
        const beamGrad = ctx.createLinearGradient(centerX, centerY, centerX, centerY - beamHeight);
        beamGrad.addColorStop(0, rgbaStr(0.22));
        beamGrad.addColorStop(0.3, rgbaStr(0.12));
        beamGrad.addColorStop(1, "transparent");
        
        ctx.beginPath();
        ctx.moveTo(centerX - tableRadiusX * 0.6, centerY);
        ctx.lineTo(centerX + tableRadiusX * 0.6, centerY);
        ctx.lineTo(centerX + beamTopWidth, centerY - beamHeight);
        ctx.lineTo(centerX - beamTopWidth, centerY - beamHeight);
        ctx.closePath();
        ctx.fillStyle = beamGrad;
        ctx.fill();
        
        ctx.lineWidth = 1;
        ctx.strokeStyle = rgbaStr(0.08);
        ctx.beginPath();
        ctx.moveTo(centerX - tableRadiusX * 0.6, centerY);
        ctx.lineTo(centerX - beamTopWidth, centerY - beamHeight);
        ctx.moveTo(centerX + tableRadiusX * 0.6, centerY);
        ctx.lineTo(centerX + beamTopWidth, centerY - beamHeight);
        ctx.stroke();
        
        const holoY = centerY - beamHeight * 0.75;
        ctx.save();
        ctx.translate(centerX, holoY);
        
        const floatOffset = Math.sin(time * 3) * 6;
        ctx.translate(0, floatOffset);
        
        ctx.strokeStyle = colorStr;
        ctx.lineWidth = 2.5;
        
        if (activeSlide.shape === "heart") {
            ctx.scale(0.85, 0.85);
            ctx.beginPath();
            for (let angle = 0; angle < Math.PI * 2; angle += 0.05) {
                const x = 16 * Math.pow(Math.sin(angle), 3) * 1.5;
                const y = -(13 * Math.cos(angle) - 5 * Math.cos(2*angle) - 2 * Math.cos(3*angle) - Math.cos(4*angle)) * 1.5;
                if (angle === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.fillStyle = rgbaStr(0.1);
            ctx.fill();
            ctx.stroke();
        } else if (activeSlide.shape === "wave") {
            ctx.scale(1.3, 0.55);
            for (let r = 10; r <= 38; r += 9) {
                const currentRadius = (r + time * 15) % 38;
                ctx.beginPath();
                ctx.arc(0, 0, currentRadius, 0, Math.PI * 2);
                ctx.strokeStyle = rgbaStr((1 - currentRadius / 38) * 0.9);
                ctx.stroke();
            }
        } else if (activeSlide.shape === "star") {
            ctx.rotate(time);
            ctx.beginPath();
            const points = 5;
            for (let i = 0; i < points * 2; i++) {
                const r = i % 2 === 0 ? 32 : 14;
                const angle = (i * Math.PI) / points;
                const x = r * Math.cos(angle);
                const y = r * Math.sin(angle);
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.fillStyle = rgbaStr(0.1);
            ctx.fill();
            ctx.stroke();
        } else if (activeSlide.shape === "grid") {
            ctx.scale(1, 0.8);
            const gridNodes = [];
            const segments = 5;
            for (let i = 0; i < segments; i++) {
                const angle = (i / segments) * Math.PI * 2 + time * 0.5;
                gridNodes.push({
                    x: Math.cos(angle) * 28,
                    y: Math.sin(angle * 1.5) * 18
                });
            }
            
            ctx.lineWidth = 1;
            ctx.strokeStyle = rgbaStr(0.35);
            for (let i = 0; i < gridNodes.length; i++) {
                for (let j = i + 1; j < gridNodes.length; j++) {
                    ctx.beginPath();
                    ctx.moveTo(gridNodes[i].x, gridNodes[i].y);
                    ctx.lineTo(gridNodes[j].x, gridNodes[j].y);
                    ctx.stroke();
                }
            }
            
            ctx.fillStyle = colorStr;
            gridNodes.forEach(node => {
                ctx.beginPath();
                ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = "#ffffff";
                ctx.lineWidth = 1;
                ctx.stroke();
            });
        }
        
        ctx.restore();
        
        particles.forEach((p, idx) => {
            p.angle += p.rotSpeed;
            const baseY = centerY - (p.opacity * beamHeight);
            let px = centerX + Math.cos(p.angle) * p.radDist * (1.2 * p.opacity);
            let py = baseY + floatOffset * 0.5;
            
            ctx.beginPath();
            ctx.arc(px, py, p.size, 0, Math.PI * 2);
            ctx.fillStyle = rgbaStr(p.opacity * (1 - (centerY - py) / beamHeight));
            ctx.fill();
            
            p.opacity -= 0.003;
            if (p.opacity <= 0) {
                p.opacity = 1.0;
                p.radDist = Math.random() * 25;
            }
        });
        
        if (mouse.x !== null && mouse.y !== null) {
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 14, 0, Math.PI * 2);
            ctx.fillStyle = rgbaStr(0.08);
            ctx.fill();
        }
        
        requestAnimationFrame(drawScene);
    }
    
    drawScene();
}

// ==========================================================================
// 🎙️ FEATURE 1: 30-SECOND MICRO-SPEAKER BOOTH ENGINE
// ==========================================================================
let speakerBoothTimer = null;
let speakerBoothAudioCtx = null;
let speakerBoothAnalyser = null;
let speakerBoothStream = null;
let speakerBoothWaveTimer = null;

const genZTopics = [
    "Why pineapple on pizza is a masterclass in corporate casing strategy",
    "How to explain LinkedIn personal branding to your traditional grandmother",
    "Should standard university degrees be replaced by startup casing chapter matches?",
    "Why making friends at a wellness lounge beats transactional professional networking",
    "How impromptu public speaking conquered my stage fear in less than 3 days",
    "The operations strategy behind running a viral virtual Gen-Z community hub",
    "Why soft skills and emotional wellness are the ultimate modern hard skills",
    "If you had to launch a startup with the peer sitting next to you, what would you co-create?",
    "Why CA/MBA students should dump transactional card-swapping for authentic wellness chapter circles",
    "How modern theatre and script-reading help builders overcome speaking anxiety"
];

function initMicroSpeakerBooth() {
    const btnAction = document.getElementById("btn-booth-action");
    const btnReset = document.getElementById("btn-booth-reset");
    const statusText = document.getElementById("console-status");
    const topicText = document.getElementById("booth-topic-text");
    const timerDisplay = document.getElementById("booth-timer");
    const recIndicator = document.getElementById("recording-indicator");
    const eqBars = document.getElementById("booth-eq-bars");
    const waveCanvas = document.getElementById("booth-wave-canvas");
    const waveCtx = waveCanvas ? waveCanvas.getContext("2d") : null;
    const scorecard = document.getElementById("booth-scorecard");
    
    if (!btnAction) return;
    
    let isRecording = false;
    let secondsLeft = 30;
    
    let dataArray = null;
    let bufferLength = 0;
    
    function drawWave() {
        if (!waveCanvas || !waveCtx) return;
        const w = waveCanvas.width;
        const h = waveCanvas.height;
        
        waveCtx.fillStyle = "#0f172a";
        waveCtx.fillRect(0, 0, w, h);
        waveCtx.lineWidth = 2.5;
        
        if (isRecording && speakerBoothAnalyser) {
            speakerBoothAnalyser.getByteTimeDomainData(dataArray);
            waveCtx.strokeStyle = "rgba(6, 182, 212, 0.85)";
            waveCtx.beginPath();
            
            const sliceWidth = w / bufferLength;
            let x = 0;
            
            for (let i = 0; i < bufferLength; i++) {
                const v = dataArray[i] / 128.0;
                const y = v * h / 2;
                if (i === 0) waveCtx.moveTo(x, y);
                else waveCtx.lineTo(x, y);
                x += sliceWidth;
            }
            waveCtx.lineTo(w, h / 2);
            waveCtx.stroke();
        } else {
            waveCtx.strokeStyle = "rgba(91, 33, 182, 0.4)";
            waveCtx.beginPath();
            
            const amplitude = isRecording ? 20 : 6;
            const frequency = isRecording ? 0.08 : 0.03;
            const speed = Date.now() * (isRecording ? 0.015 : 0.005);
            
            waveCtx.moveTo(0, h / 2);
            for (let x = 0; x < w; x++) {
                const y = h / 2 + Math.sin(x * frequency + speed) * amplitude;
                waveCtx.lineTo(x, y);
            }
            waveCtx.stroke();
        }
        speakerBoothWaveTimer = requestAnimationFrame(drawWave);
    }
    
    drawWave();
    
    btnAction.addEventListener("click", () => {
        if (!isRecording) {
            startBoothChallenge();
        } else {
            stopBoothChallenge(true);
        }
    });
    
    if (btnReset) {
        btnReset.addEventListener("click", () => {
            if (scorecard) scorecard.classList.remove("active");
            resetBooth();
        });
    }
    
    function startBoothChallenge() {
        isRecording = true;
        secondsLeft = 30;
        btnAction.innerText = "Stop & View Score";
        btnAction.classList.remove("btn-primary");
        btnAction.classList.add("btn-accent");
        
        if (recIndicator) recIndicator.classList.add("active");
        if (eqBars) eqBars.classList.add("active");
        if (statusText) statusText.innerText = "REC: SPEECH ANALYSIS LIVE";
        if (timerDisplay) timerDisplay.innerText = "30s";
        
        const randTopic = genZTopics[Math.floor(Math.random() * genZTopics.length)];
        if (topicText) topicText.innerText = randTopic;
        
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                speakerBoothStream = stream;
                speakerBoothAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
                const source = speakerBoothAudioCtx.createMediaStreamSource(stream);
                speakerBoothAnalyser = speakerBoothAudioCtx.createAnalyser();
                speakerBoothAnalyser.fftSize = 256;
                source.connect(speakerBoothAnalyser);
                
                bufferLength = speakerBoothAnalyser.frequencyBinCount;
                dataArray = new Uint8Array(bufferLength);
            })
            .catch(() => {
                speakerBoothAnalyser = null;
            });
            
        speakerBoothTimer = setInterval(() => {
            secondsLeft--;
            if (timerDisplay) timerDisplay.innerText = `${secondsLeft}s`;
            if (secondsLeft <= 0) {
                stopBoothChallenge(false);
            }
        }, 1000);
    }
    
    function stopBoothChallenge(early = false) {
        clearInterval(speakerBoothTimer);
        isRecording = false;
        
        if (recIndicator) recIndicator.classList.remove("active");
        if (eqBars) eqBars.classList.remove("active");
        if (statusText) statusText.innerText = "Analysis Complete";
        
        if (speakerBoothStream) {
            speakerBoothStream.getTracks().forEach(track => track.stop());
            speakerBoothStream = null;
        }
        if (speakerBoothAudioCtx) {
            speakerBoothAudioCtx.close();
            speakerBoothAudioCtx = null;
        }
        
        const scoreFluency = Math.floor(Math.random() * 8) + 89;
        const scoreFillers = Math.floor(Math.random() * 3) + 1;
        
        document.getElementById("score-fluency").innerText = `${scoreFluency}%`;
        document.getElementById("score-fillers").innerText = scoreFillers;
        
        const feedbackTemplates = [
            "Outstanding confidence! Your tone has an extremely warm presence. Focus on placing brief 1-second pauses before major topic shifts to maximize your authority.",
            "Incredible fluency and rhythm! You spoke with fantastic clarity. Try to completely cut out filler words by taking deep, silent breaths during transitions.",
            "Excellent impromptu casing! You structured your ideas perfectly under pressure. Join Mrs. Shukla's weekly chapter to refine your micro-body gestures!"
        ];
        document.getElementById("score-feedback").innerText = feedbackTemplates[Math.floor(Math.random() * feedbackTemplates.length)];
        
        playChimeMelody([440, 554, 659, 880]);
        
        if (scorecard) scorecard.classList.add("active");
    }
    
    function resetBooth() {
        btnAction.innerText = "Start 30s Challenge";
        btnAction.classList.remove("btn-accent");
        btnAction.classList.add("btn-primary");
        if (statusText) statusText.innerText = "Microphone Ready";
        if (timerDisplay) timerDisplay.innerText = "30s";
        if (topicText) topicText.innerText = "Click \"Start Recording\" to generate challenge topic...";
        isRecording = false;
    }
}

// ==========================================================================
// 🤝 FEATURE 2: CO-ED STUDENT LIVE PEER MATCHING DIRECTORY ENGINE
// ==========================================================================
const coEdPeers = [
    { name: "Aarav Sharma", role: "CA Finalist", desc: "Crushed stage anxiety inside Shweta's weekly batches. Upskilling casing strategies.", tags: ["CA Fin", "Impromptu", "Fluency"], avatar: "👦" },
    { name: "Riya Kapoor", role: "MBA Finance Student", desc: "Found deep human support in Connect Circle chapters. Seeking organic case buddies.", tags: ["MBA Fin", "Wellness", "Casing"], avatar: "👧" },
    { name: "Kunal Mehra", role: "B.Tech Builder & Founder", desc: "Co-creating a micro-SaaS inside the Startup Check-ins. Exchanging brand Prompts.", tags: ["Tech", "Startup", "LinkedIn"], avatar: "👦" },
    { name: "Neha Joshi", role: "Creative Arts Director", desc: "Scriptwriting for the Theatre chapter to practice vocal projection and stage presence.", tags: ["Arts", "Theatre", "Confidence"], avatar: "👧" },
    { name: "Siddharth Verma", role: "MBA Marketing Candidate", desc: "Building personal branding algorithms. Exchanging LinkedIn amplification referral Prompts.", tags: ["MBA Mkt", "Branding", "Strategy"], avatar: "👦" },
    { name: "Ananya Sen", role: "Psychology & Wellness Lead", desc: "Hosting weekly judgment-free Connect Circles. Strangers become deep family.", tags: ["Welfare", "Wellness", "DMs"], avatar: "👧" }
];

function initCoEdPeerDirectory() {
    const peersContainer = document.getElementById("live-peers-grid-container");
    if (!peersContainer) return;
    
    let currentPeers = selectRandomPeers(3);
    renderPeers(currentPeers);
    
    setInterval(() => {
        const replaceIdx = Math.floor(Math.random() * 3);
        let nextPeer = getRandomPeerExcluding(currentPeers);
        
        const cards = peersContainer.querySelectorAll(".peer-match-card");
        if (cards[replaceIdx]) {
            cards[replaceIdx].style.opacity = 0;
            cards[replaceIdx].style.transform = "translateY(12px)";
            
            setTimeout(() => {
                currentPeers[replaceIdx] = nextPeer;
                renderPeers(currentPeers);
            }, 600);
        }
    }, 7500);
    
    function selectRandomPeers(num) {
        const shuffled = [...coEdPeers].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }
    
    function getRandomPeerExcluding(excludeList) {
        const available = coEdPeers.filter(p => !excludeList.some(el => el.name === p.name));
        return available[Math.floor(Math.random() * available.length)];
    }
    
    function renderPeers(peersList) {
        peersContainer.innerHTML = "";
        
        peersList.forEach((peer, i) => {
            const card = document.createElement("div");
            card.className = "peer-match-card glass";
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
            
            const tagElements = peer.tags.map(t => `<span class="peer-tag">#${t}</span>`).join("");
            const prefilledText = encodeURIComponent(`Hey ${peer.name}! I saw you are active on the InteractUp online matches directory. I'm also upskilling here, let's connect!`);
            
            card.innerHTML = `
                <div class="peer-indicator-group">
                    <div class="peer-match-avatar">${peer.avatar}</div>
                    <div class="peer-status-tag">
                        <span class="status-dot"></span>
                        Active Now
                    </div>
                </div>
                <div class="peer-name">${peer.name}</div>
                <div class="peer-role">${peer.role}</div>
                <div class="peer-desc">"${peer.desc}"</div>
                <div class="peer-tags">${tagElements}</div>
                <a href="https://wa.me/918383848516?text=${prefilledText}" target="_blank" class="btn btn-secondary btn-sm btn-peer-wave">Send Wave & Connect</a>
            `;
            
            peersContainer.appendChild(card);
        });
        
        peersContainer.querySelectorAll(".btn-peer-wave").forEach(btn => {
            btn.addEventListener("click", () => {
                playClickSound();
            });
        });
    }
}

// ==========================================================================
// 📝 FEATURE 3: GAMIFIED LINKEDIN STREAK POST FORMATTER ENGINE
// ==========================================================================
function initLinkedInFormatter() {
    const btnGenerate = document.getElementById("btn-generate-post");
    const btnCopy = document.getElementById("btn-copy-post");
    const winInput = document.getElementById("formatter-win-input");
    const milestoneSelect = document.getElementById("formatter-milestone");
    const previewBody = document.getElementById("post-preview-text");
    const copyIndicator = document.getElementById("copy-indicator");
    
    if (!btnGenerate) return;
    
    const postsTemplates = {
        fluency: (win) => `🚀 UNLOCKED: Impromptu Speaking Milestone at InteractUp!\n\nI used to feel absolute stage anxiety when handed a microphone. Today, I made a breakthrough:\n\n👉 "${win}"\n\nWeekly small-group fluency coaching batches with Mrs. Shweta Shukla are completely transforming my speaking confidence. There are only 4 peers in a batch, allowing personal attention. \n\nBest of all? The community is 100% free and supportive for all students, MBAs, CAs, and creatives.\n\nConsistent upskilling starts here. Upwards! 📈\n\n#InteractUp #PublicSpeaking #StageFear #Confidence #GenZBuilders`,
        streak: (win) => `🎖️ SECURED: Streak Rewards Ladder Milestone verified!\n\nConsistency beats talent. I just locked in a verified certificate rank on the InteractUp Streak Rewards ladder:\n\n👉 "${win}"\n\nThe most unique part? Progress saves on match losses, taking away the fear of reset and encouraging constant practice. \n\nIf you want to join an ego-free, supportive circle to practice soft skills and finance casings, let's connect! 🤝\n\n#SoftSkills #CareerGrowth #Discipline #Networking #InteractUp`,
        casing: (win) => `📊 CASE STUDY CHALLENGE: Solved!\n\nToday, I collaborated in a co-ed team of student builders to solve a complex casing challenge inside the InteractUp chapter:\n\n👉 "${win}"\n\nNo transactional networking here—just mutual upskilling, operations casework, and friendly business casework games. \n\nExchange career plans, CV directories, and raise startup ideation checks with peers from top MBA, CA, and tech streams. 💡\n\n#Casing #Operations #MBA #GenZ #InteractUp`,
        wellness: (win) => `🤍 STRANGERS BECOME FAMILY: Unlocking Mental Wellness Circles\n\nWe talk constantly about CVs and career growth, but emotional support is the ultimate soft skill. Today inside Connect Circle:\n\n👉 "${win}"\n\nCurated virtual groups of 10-12 peers sharing university bottlenecks, career anxieties, and milestones in a safe, judgment-free wellness circle. \n\nNo masks. Just real human support. 🤍\n\n#MentalHealth #SupportCircles #Wellness #StudentLife #InteractUp`,
        startup: (win) => `💡 PITCH INITIATED: Startup chapter check-ins\n\nWe tested, iterated, and pitched our early-stage startup framework to fellow builders inside the InteractUp Startup Check-ins:\n\n👉 "${win}"\n\nFrom marketing strategy check sheets to operational co-founder matchmaker circles, we are turning theories into execution. \n\n100% free and supportive launchpad for Gen-Z builders! 💡\n\n#Startup #Entrepreneurship #Builders #Launchpad #InteractUp`
    };
    
    btnGenerate.addEventListener("click", () => {
        const milestone = milestoneSelect.value;
        const winVal = winInput.value.trim() || "I unlocked a critical soft-skill upskilling milestone!";
        
        const postText = postsTemplates[milestone](winVal);
        if (previewBody) {
            previewBody.innerText = postText;
            previewBody.style.color = "#0f172a";
            previewBody.style.fontWeight = "600";
        }
        playChimeMelody([440, 659]);
    });
    
    if (btnCopy) {
        btnCopy.addEventListener("click", () => {
            const textToCopy = previewBody.innerText;
            if (!textToCopy || textToCopy.startsWith("Click")) return;
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                if (copyIndicator) {
                    copyIndicator.classList.add("active");
                    setTimeout(() => copyIndicator.classList.remove("active"), 2500);
                }
                playChimeMelody([523, 659, 784, 1046]);
            });
        });
    }
}

// ==========================================================================
// 📸📸 COMMUNITY LIVE EXPERIENCE GALLERY DATA & ENGINE 📸📸
// ==========================================================================
const galleryItems = [
    {
        id: "mock_press_samay",
        type: "video",
        src: "assets/gallery/mock_press_samay.mp4",
        category: "videos",
        tag: "Reels & Clips",
        title: "Mock Press: Samay Raina Simulation",
        desc: "A highly entertaining mock press session demonstrating confident humor, body language, and spontaneous speech skills."
    },
    {
        id: "mock_press_rahul",
        type: "video",
        src: "assets/gallery/mock_press_rahul.mp4",
        category: "videos",
        tag: "Reels & Clips",
        title: "Mock Press: Rahul Gandhi Simulation",
        desc: "An incredible mock press event where student builders roleplay press conferences under extreme cross-examination."
    },
    {
        id: "jam_reel_1",
        type: "video",
        src: "assets/gallery/jam_reel_1.mp4",
        category: "videos",
        tag: "Reels & Clips",
        title: "Reel: JAM 2.0 Speaking Clash",
        desc: "High-energy visual recap of student builders crushing stage anxiety in 60-second impromptu games."
    },
    {
        id: "jam_reel_2",
        type: "video",
        src: "assets/gallery/jam_reel_2.mp4",
        category: "videos",
        tag: "Reels & Clips",
        title: "Reel 2: JAM 2.0 Speaking Clash",
        desc: "Fast-paced Just A Minute (JAM) rounds showcasing rapid upskilling and stage presence."
    },
    {
        id: "inspire_agam",
        type: "image",
        src: "assets/gallery/inspire_agam.png",
        category: "talks",
        tag: "Leader Talks",
        title: "Inspire Talk: Agam Agarwal",
        desc: "Tech Lead Agam Agarwal shares keys to scaling operations and cracking software mastermind frameworks."
    },
    {
        id: "inspire_rajeev",
        type: "image",
        src: "assets/gallery/inspire_rajeev.png",
        category: "talks",
        tag: "Leader Talks",
        title: "Inspire Talk: Rajeev Tiwari",
        desc: "VP-level strategic insights on leading teams, driving execution, and launching soft-skill growth hubs."
    },
    {
        id: "cfa_talk",
        type: "image",
        src: "assets/gallery/cfa_talk.png",
        category: "talks",
        tag: "Leader Talks",
        title: "Leader Talk: CA & CFA Elite",
        desc: "A dedicated masterclass for CA and CFA aspirants on breaking operational and corporate casework bottlenecks."
    },
    {
        id: "volvo_talk",
        type: "image",
        src: "assets/gallery/volvo_talk.png",
        category: "talks",
        tag: "Leader Talks",
        title: "Leader Talk: HR Lead, Volvo India",
        desc: "Deep dive into recruitment psychology, resume casing reviews, and building corporate communication value."
    },
    {
        id: "paytm_talk",
        type: "image",
        src: "assets/gallery/paytm_talk.png",
        category: "talks",
        tag: "Leader Talks",
        title: "Leader Talk: VP, Paytm",
        desc: "Tech operations, scaling customer products, and starting up as early-stage Gen-Z builders."
    },
    {
        id: "darpan_talk",
        type: "image",
        src: "assets/gallery/darpan_talk.png",
        category: "talks",
        tag: "Leader Talks",
        title: "Leader Talk: Darpan Vashishtha",
        desc: "Corporate career blueprints, imposter syndrome elimination, and structured personal branding strategies."
    },
    {
        id: "bain_talk",
        type: "image",
        src: "assets/gallery/bain_talk.png",
        category: "talks",
        tag: "Leader Talks",
        title: "Leader Talk: VP, Bain & Company",
        desc: "Case interview frameworks, casing essentials, and operations mastery from a top-tier consulting leader."
    },
    {
        id: "speaking_battle_intense",
        type: "image",
        src: "assets/gallery/speaking_battle_intense.png",
        category: "battles",
        tag: "Debates & Battles",
        title: "Intense Speaking Battle",
        desc: "A high-energy impromptu debating tournament designed to help students eliminate speaking anxiety."
    },
    {
        id: "speaking_battle",
        type: "image",
        src: "assets/gallery/speaking_battle.png",
        category: "battles",
        tag: "Debates & Battles",
        title: "Weekly Speaking Battle",
        desc: "Weekend active showcases where builders practice impromptu debates under Mrs. Shweta Shukla's coaching."
    },
    {
        id: "orators_arena",
        type: "image",
        src: "assets/gallery/orators_arena.png",
        category: "battles",
        tag: "Debates & Battles",
        title: "The Orator's Arena Tournament",
        desc: "Public speaking battles structured with dynamic topics and peer-evaluated scoring feedback."
    },
    {
        id: "turncoat",
        type: "image",
        src: "assets/gallery/turncoat.png",
        category: "battles",
        tag: "Debates & Battles",
        title: "Turncoat Debate Challenge",
        desc: "Impromptu turncoat round practice to boost mental agility and conquer stage fear in 3 days."
    },
    {
        id: "hustle_market",
        type: "image",
        src: "assets/gallery/hustle_market.png",
        category: "workshops",
        tag: "Workshops & Meetups",
        title: "Hustle & Market Masterclass",
        desc: "Interactive marketing strategies, brand cases, and collaborative startup ideation check sheets."
    },
    {
        id: "cv_review",
        type: "image",
        src: "assets/gallery/cv_review.png",
        category: "workshops",
        tag: "Workshops & Meetups",
        title: "CV Review & Mock Interviews",
        desc: "One-on-one resume feedback directories and casing nutrients to unlock top-tier jobs."
    },
    {
        id: "meetup_bangalore",
        type: "image",
        src: "assets/gallery/meetup_bangalore.png",
        category: "workshops",
        tag: "Workshops & Meetups",
        title: "Professional Meetup Bangalore",
        desc: "Offline city networking mixer bringing CA, MBA, and tech builders together in Bangalore."
    },
    {
        id: "startup_scaleup",
        type: "image",
        src: "assets/gallery/startup_scaleup.png",
        category: "workshops",
        tag: "Workshops & Meetups",
        title: "StartUp to ScaleUp: Satya Mehta",
        desc: "Founding operations checklists, minimum viable products, and pitch frameworks for early-stage builders."
    }
];

function initLiveGallery() {
    const gridContainer = document.getElementById("gallery-grid-container");
    const lightboxModal = document.getElementById("gallery-lightbox-modal");
    const lightboxTitle = document.getElementById("lightbox-title");
    const lightboxDesc = document.getElementById("lightbox-desc");
    const lightboxMedia = document.getElementById("lightbox-media-content");
    const btnCloseLightbox = document.getElementById("btn-close-lightbox");
    const filterBtns = document.querySelectorAll(".gallery-filter-btn");
    
    if (!gridContainer) return;
    
    function renderItems(filterCategory = "all") {
        gridContainer.innerHTML = "";
        
        const filtered = filterCategory === "all" 
            ? galleryItems 
            : galleryItems.filter(item => item.category === filterCategory);
            
        filtered.forEach(item => {
            const card = document.createElement("div");
            card.className = "gallery-item-card reveal-on-scroll";
            card.setAttribute("data-id", item.id);
            
            let mediaContent = "";
            if (item.type === "video") {
                mediaContent = `
                    <div class="video-poster-placeholder" style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); display: flex; align-items: center; justify-content: center; height: 100%;">
                        <div style="text-align: center; color: rgba(255, 255, 255, 0.85); padding: 20px;">
                            <span style="font-size: 2.2rem; display: block; margin-bottom: 6px;">🎬</span>
                            <span style="font-family: var(--font-heading); font-weight: 850; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1.2px;">Click to Play Reel</span>
                        </div>
                    </div>
                    <div class="video-indicator-play">▶</div>
                `;
            } else {
                mediaContent = `<img src="${item.src}" alt="${item.title}" loading="lazy">`;
            }
            
            card.innerHTML = `
                <div class="gallery-media-box">
                    <span class="gallery-media-tag">${item.tag}</span>
                    ${mediaContent}
                </div>
                <div class="gallery-item-info">
                    <h4>${item.title}</h4>
                    <p>${item.desc}</p>
                </div>
            `;
            
            card.addEventListener("click", () => {
                openLightbox(item);
            });
            
            gridContainer.appendChild(card);
        });
        
        attachSoundToButtons();
        initScrollReveals();
    }
    
    function openLightbox(item) {
        if (!lightboxModal || !lightboxMedia || !lightboxTitle || !lightboxDesc) return;
        
        lightboxTitle.innerText = item.title;
        lightboxDesc.innerText = item.desc;
        lightboxMedia.innerHTML = "";
        
        if (item.type === "video") {
            const video = document.createElement("video");
            video.src = item.src;
            video.controls = true;
            video.autoplay = true;
            video.style.maxWidth = "100%";
            video.style.maxHeight = "55vh";
            video.style.outline = "none";
            lightboxMedia.appendChild(video);
        } else {
            const img = document.createElement("img");
            img.src = item.src;
            img.alt = item.title;
            img.style.maxWidth = "100%";
            img.style.maxHeight = "55vh";
            img.style.objectFit = "contain";
            lightboxMedia.appendChild(img);
        }
        
        lightboxModal.classList.add("active");
    }
    
    function closeLightbox() {
        if (!lightboxModal) return;
        lightboxModal.classList.remove("active");
        if (lightboxMedia) {
            const video = lightboxMedia.querySelector("video");
            if (video) {
                video.pause();
                video.src = "";
            }
            lightboxMedia.innerHTML = "";
        }
    }
    
    if (btnCloseLightbox) {
        btnCloseLightbox.addEventListener("click", closeLightbox);
    }
    
    lightboxModal.addEventListener("click", (e) => {
        if (e.target === lightboxModal) {
            closeLightbox();
        }
    });
    
    filterBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            filterBtns.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            
            const filterVal = this.getAttribute("data-filter");
            renderItems(filterVal);
        });
    });
    
    renderItems("all");
}

// ==========================================================================
// 🎧 FEATURE 5: COZY LO-FI WELLNESS SYNTHESIZED SOUNDBOARD ENGINE
// ==========================================================================
let wellnessAudioCtx = null;
let wellnessPadGain = null;
let wellnessChimeGain = null;
let wellnessOsc1 = null;
let wellnessOsc2 = null;
let wellnessLfo = null;
let wellnessChimeTimer = null;
let isWellnessPlaying = false;
let currentWellnessMode = "pad";

function initWellnessSoundboard() {
    const player = document.getElementById("wellness-player");
    const btnToggle = document.getElementById("btn-sidebar-lofi-toggle");
    const trackInfo = document.getElementById("wellness-track-info");
    const sliderVol = document.getElementById("wellness-volume-slider");
    
    const btnPad = document.getElementById("btn-well-pad");
    const btnChimes = document.getElementById("btn-well-chimes");
    
    if (!btnToggle) return;
    
    btnToggle.addEventListener("click", () => {
        if (!isWellnessPlaying) {
            startWellnessSynthesizer();
            player.classList.add("active");
            btnToggle.classList.add("active");
        } else {
            stopWellnessSynthesizer();
            player.classList.remove("active");
            btnToggle.classList.remove("active");
        }
    });
    
    if (btnPad) {
        btnPad.addEventListener("click", () => {
            selectWellnessMode("pad");
            playClickSound();
        });
    }
    if (btnChimes) {
        btnChimes.addEventListener("click", () => {
            selectWellnessMode("chimes");
            playClickSound();
        });
    }
    
    if (sliderVol) {
        sliderVol.addEventListener("input", function() {
            const volVal = parseFloat(this.value) / 100.0;
            if (wellnessPadGain && wellnessChimeGain) {
                const now = wellnessAudioCtx.currentTime;
                if (currentWellnessMode === "pad") {
                    wellnessPadGain.gain.setValueAtTime(volVal * 0.15, now);
                    wellnessChimeGain.gain.setValueAtTime(volVal * 0.08, now);
                } else {
                    wellnessPadGain.gain.setValueAtTime(volVal * 0.05, now);
                    wellnessChimeGain.gain.setValueAtTime(volVal * 0.18, now);
                }
            }
        });
    }
    
    function selectWellnessMode(mode) {
        currentWellnessMode = mode;
        if (btnPad) btnPad.classList.toggle("active", mode === "pad");
        if (btnChimes) btnChimes.classList.toggle("active", mode === "chimes");
        
        if (isWellnessPlaying) {
            const sliderVal = parseFloat(sliderVol.value) / 100.0;
            const now = wellnessAudioCtx.currentTime;
            
            if (mode === "pad") {
                if (trackInfo) trackInfo.innerText = "🧘 Ambient Pad Mode";
                if (wellnessPadGain) wellnessPadGain.gain.linearRampToValueAtTime(sliderVal * 0.15, now + 0.3);
                if (wellnessChimeGain) wellnessChimeGain.gain.linearRampToValueAtTime(sliderVal * 0.08, now + 0.3);
            } else {
                if (trackInfo) trackInfo.innerText = "✨ Pentatonic Chimes Mode";
                if (wellnessPadGain) wellnessPadGain.gain.linearRampToValueAtTime(sliderVal * 0.05, now + 0.3);
                if (wellnessChimeGain) wellnessChimeGain.gain.linearRampToValueAtTime(sliderVal * 0.18, now + 0.3);
            }
        }
    }
    
    function startWellnessSynthesizer() {
        try {
            wellnessAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            return;
        }
        
        const now = wellnessAudioCtx.currentTime;
        const sliderVal = parseFloat(sliderVol.value) / 100.0;
        
        wellnessPadGain = wellnessAudioCtx.createGain();
        wellnessChimeGain = wellnessAudioCtx.createGain();
        
        wellnessPadGain.gain.setValueAtTime(0.001, now);
        wellnessChimeGain.gain.setValueAtTime(0.001, now);
        
        wellnessPadGain.connect(wellnessAudioCtx.destination);
        wellnessChimeGain.connect(wellnessAudioCtx.destination);
        
        wellnessOsc1 = wellnessAudioCtx.createOscillator();
        wellnessOsc2 = wellnessAudioCtx.createOscillator();
        
        wellnessOsc1.type = "sine";
        wellnessOsc2.type = "triangle";
        
        wellnessOsc1.frequency.setValueAtTime(196.00, now);
        wellnessOsc2.frequency.setValueAtTime(293.66, now);
        
        wellnessOsc1.detune.setValueAtTime(4, now);
        wellnessOsc2.detune.setValueAtTime(-4, now);
        
        const lowpassFilter = wellnessAudioCtx.createBiquadFilter();
        lowpassFilter.type = "lowpass";
        lowpassFilter.frequency.setValueAtTime(400, now);
        lowpassFilter.Q.setValueAtTime(2.0, now);
        
        wellnessLfo = wellnessAudioCtx.createOscillator();
        wellnessLfo.type = "sine";
        wellnessLfo.frequency.setValueAtTime(0.12, now);
        
        const lfoGain = wellnessAudioCtx.createGain();
        lfoGain.gain.setValueAtTime(150, now);
        
        wellnessLfo.connect(lfoGain);
        lfoGain.connect(lowpassFilter.frequency);
        
        wellnessOsc1.connect(lowpassFilter);
        wellnessOsc2.connect(lowpassFilter);
        lowpassFilter.connect(wellnessPadGain);
        
        wellnessOsc1.start(now);
        wellnessOsc2.start(now);
        wellnessLfo.start(now);
        
        triggerPentatonicChimesLoop();
        isWellnessPlaying = true;
        selectWellnessMode(currentWellnessMode);
    }
    
    function triggerPentatonicChimesLoop() {
        const chimeNotes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 784.00, 880.00];
        
        function playChime() {
            if (!isWellnessPlaying || !wellnessAudioCtx) return;
            const now = wellnessAudioCtx.currentTime;
            
            const osc = wellnessAudioCtx.createOscillator();
            osc.type = "sine";
            
            const freq = chimeNotes[Math.floor(Math.random() * chimeNotes.length)];
            osc.frequency.setValueAtTime(freq, now);
            
            const noteGain = wellnessAudioCtx.createGain();
            noteGain.gain.setValueAtTime(0.0, now);
            
            const targetGain = (Math.random() * 0.05 + 0.03);
            noteGain.gain.linearRampToValueAtTime(targetGain, now + 0.04);
            noteGain.gain.exponentialRampToValueAtTime(0.001, now + Math.random() * 2.0 + 1.5);
            
            const delay = wellnessAudioCtx.createDelay();
            delay.delayTime.setValueAtTime(0.35, now);
            const feedback = wellnessAudioCtx.createGain();
            feedback.gain.setValueAtTime(0.4, now);
            
            osc.connect(noteGain);
            noteGain.connect(wellnessChimeGain);
            
            noteGain.connect(delay);
            delay.connect(feedback);
            feedback.connect(delay);
            feedback.connect(wellnessChimeGain);
            
            osc.start(now);
            osc.stop(now + 4.0);
            
            const nextChimeTime = Math.random() * 2000 + 2500;
            wellnessChimeTimer = setTimeout(playChime, nextChimeTime);
        }
        wellnessChimeTimer = setTimeout(playChime, 1500);
    }
    
    function stopWellnessSynthesizer() {
        isWellnessPlaying = false;
        if (trackInfo) trackInfo.innerText = "Wellness Synthesizer: Off";
        
        clearTimeout(wellnessChimeTimer);
        const now = wellnessAudioCtx ? wellnessAudioCtx.currentTime : 0;
        
        if (wellnessPadGain) {
            wellnessPadGain.gain.setValueAtTime(wellnessPadGain.gain.value, now);
            wellnessPadGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        }
        if (wellnessChimeGain) {
            wellnessChimeGain.gain.setValueAtTime(wellnessChimeGain.gain.value, now);
            wellnessChimeGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        }
        
        setTimeout(() => {
            if (wellnessOsc1) { wellnessOsc1.stop(); wellnessOsc1 = null; }
            if (wellnessOsc2) { wellnessOsc2.stop(); wellnessOsc2 = null; }
            if (wellnessLfo) { wellnessLfo.stop(); wellnessLfo = null; }
            if (wellnessAudioCtx) {
                try {
                    wellnessAudioCtx.close();
                } catch (e) {}
                wellnessAudioCtx = null;
            }
        }, 300);
    }
}

// Helper audio melody sequencer chimes
function playChimeMelody(freqList) {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const now = audioCtx.currentTime;
        
        const gain = audioCtx.createGain();
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + freqList.length * 0.15 + 0.4);
        gain.connect(audioCtx.destination);
        
        freqList.forEach((freq, idx) => {
            const osc = audioCtx.createOscillator();
            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, now + idx * 0.1);
            
            const noteGain = audioCtx.createGain();
            noteGain.gain.setValueAtTime(0.06, now + idx * 0.1);
            noteGain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.35);
            
            osc.connect(noteGain);
            noteGain.connect(gain);
            
            osc.start(now + idx * 0.1);
            osc.stop(now + idx * 0.1 + 0.4);
        });
        
        setTimeout(() => {
            audioCtx.close();
        }, (freqList.length * 0.1 + 0.5) * 1000);
    } catch (e) {}
}

// ==========================================================================
// 🚀 IMMERSIVE 3D PERSPECTIVE MORPHING STAGE (WebGL-Style Particle Engine)
// ==========================================================================
const stageCanvas = document.getElementById("particles-canvas"); // Use body BG canvas directly
const stageCtx = stageCanvas ? stageCanvas.getContext("2d") : null;

let points = [];
const numPoints = 250;
let targetShape = "sphere";
const focalLength = 220;
let rotateYAngle = 0.005;
let rotateXAngle = 0.003;

if (stageCanvas && stageCtx) {
    function resizeStageCanvas() {
        stageCanvas.width = window.innerWidth;
        stageCanvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeStageCanvas);
    resizeStageCanvas();
    
    class Node3D {
        constructor(id) {
            this.id = id;
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.targetX = 0;
            this.targetY = 0;
            this.targetZ = 0;
            this.setSphereTarget();
            this.x = this.targetX;
            this.y = this.targetY;
            this.z = this.targetZ;
        }
        
        update() {
            this.x += (this.targetX - this.x) * 0.08;
            this.y += (this.targetY - this.y) * 0.08;
            this.z += (this.targetZ - this.z) * 0.08;
        }
        
        setSphereTarget() {
            const phi = Math.acos((Math.random() * 2) - 1);
            const theta = Math.random() * 2 * Math.PI;
            const r = 180;
            this.targetX = r * Math.sin(phi) * Math.cos(theta);
            this.targetY = r * Math.sin(phi) * Math.sin(theta);
            this.targetZ = r * Math.cos(phi);
        }
        
        setHeartTarget() {
            const theta = Math.random() * 2 * Math.PI;
            const r = 9;
            this.targetX = 16 * Math.pow(Math.sin(theta), 3) * r;
            this.targetY = -(13 * Math.cos(theta) - 5 * Math.cos(2*theta) - 2 * Math.cos(3*theta) - Math.cos(4*theta)) * r;
            this.targetZ = (Math.random() - 0.5) * 80;
        }
        
        setSoundwaveTarget() {
            const theta = (this.id / numPoints) * 8 * Math.PI;
            const h = (this.id / numPoints) * 300 - 150;
            const r = 80 + Math.sin(theta * 1.5) * 40;
            this.targetX = r * Math.cos(theta);
            this.targetY = h;
            this.targetZ = r * Math.sin(theta);
        }
        
        setConstellationTarget() {
            const segments = 5;
            const step = 80;
            const idxX = this.id % segments;
            const idxY = Math.floor((this.id / segments) % segments);
            const idxZ = Math.floor(this.id / (segments * segments)) % segments;
            this.targetX = (idxX - 2) * step + (Math.random() - 0.5) * 16;
            this.targetY = (idxY - 2) * step + (Math.random() - 0.5) * 16;
            this.targetZ = (idxZ - 2) * step + (Math.random() - 0.5) * 16;
        }
        
        setRocketTarget() {
            const h = (this.id / numPoints) * 300 - 150;
            const theta = Math.random() * 2 * Math.PI;
            const maxR = 120;
            const r = maxR * ((150 - h) / 300);
            this.targetX = r * Math.cos(theta);
            this.targetY = h;
            this.targetZ = r * Math.sin(theta);
        }
        
        setLadderTarget() {
            const theta = (this.id / numPoints) * 6 * Math.PI;
            const h = (this.id / numPoints) * 280 - 140;
            const r = 90;
            const offset = (this.id % 2 === 0) ? 0 : Math.PI;
            this.targetX = r * Math.cos(theta + offset);
            this.targetY = h;
            this.targetZ = r * Math.sin(theta + offset);
        }
    }
    
    for (let i = 0; i < numPoints; i++) {
        points.push(new Node3D(i));
    }
    
    function morphStageToShape(shape) {
        targetShape = shape;
        if (shape === "heart") {
            points.forEach(p => p.setHeartTarget());
        } else if (shape === "soundwave") {
            points.forEach(p => p.setSoundwaveTarget());
        } else if (shape === "constellation") {
            points.forEach(p => p.setConstellationTarget());
        } else if (shape === "rocket") {
            points.forEach(p => p.setRocketTarget());
        } else if (shape === "ladder") {
            points.forEach(p => p.setLadderTarget());
        } else {
            points.forEach(p => p.setSphereTarget());
        }
    }
    
    function render3DStage() {
        const w = stageCanvas.width;
        const h = stageCanvas.height;
        stageCtx.clearRect(0, 0, w, h);
        
        const centerX = w / 2;
        const centerY = h / 2;
        
        const cosY = Math.cos(rotateYAngle);
        const sinY = Math.sin(rotateYAngle);
        const cosX = Math.cos(rotateXAngle);
        const sinX = Math.sin(rotateXAngle);
        
        const projectedPoints = points.map(p => {
            p.update();
            let ryx = p.x * cosY - p.z * sinY;
            let ryz = p.z * cosY + p.x * sinY;
            let rxx = ryx;
            let rxy = p.y * cosX - ryz * sinX;
            let rxz = ryz * cosX + p.y * sinX;
            
            p.x = ryx;
            p.y = p.y * cosX - ryz * sinX;
            p.z = ryz * cosX + p.y * sinX;
            
            const scale = focalLength / (focalLength + rxz);
            let projX = rxx * scale + centerX;
            let projY = rxy * scale + centerY;
            
            return { x: projX, y: projY, scale: scale, depth: rxz };
        });
        
        projectedPoints.forEach(p => {
            const size = Math.max(0.6, p.scale * 3.5);
            const opacity = Math.min(0.22, Math.max(0.04, p.scale * 0.15));
            
            stageCtx.beginPath();
            stageCtx.arc(p.x, p.y, size, 0, Math.PI * 2);
            stageCtx.fillStyle = `rgba(15, 23, 42, ${opacity})`;
            stageCtx.fill();
        });
        
        requestAnimationFrame(render3DStage);
    }
    render3DStage();
}

// ==========================================================================
// 🛠️ DYNAMIC COLLAPSIBLE SIDEBAR & NAVIGATION SWITCHER
// ==========================================================================
function initDashboardNavigation() {
    const sidebar = document.getElementById("main-sidebar");
    const toggle = document.getElementById("sidebar-toggle");
    const navItems = document.querySelectorAll(".nav-item");
    const viewPanels = document.querySelectorAll(".view-panel");
    const viewport = document.getElementById("dashboard-viewport");
    
    if (!sidebar || !toggle) return;
    
    // Toggle sidebar collapsed state on click
    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
        playClickSound();
    });
    
    // Smooth navigation viewport swap
    navItems.forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();
            const targetView = this.getAttribute("data-view");
            const targetTheme = this.getAttribute("data-theme");
            
            navItems.forEach(i => i.classList.remove("active"));
            this.classList.add("active");
            
            viewPanels.forEach(p => p.classList.remove("active"));
            const targetPanel = document.getElementById(`view-${targetView}`);
            if (targetPanel) {
                targetPanel.classList.add("active");
                if (viewport) viewport.scrollTop = 0; // Reset scroll container position
            }
            
            document.body.className = `theme-${targetTheme}`;
            
            // Adjust 3D Particle morph shape
            if (targetView === "home") morphStageToShape("sphere");
            else if (targetView === "booth") morphStageToShape("soundwave");
            else if (targetView === "gallery") morphStageToShape("sphere");
            else if (targetView === "streak") morphStageToShape("ladder");
            else if (targetView === "matchmaker") morphStageToShape("constellation");
            else if (targetView === "announcements") morphStageToShape("sphere");
            else if (targetView === "startup") morphStageToShape("rocket");
            else if (targetView === "nutrients") morphStageToShape("constellation");
            
            playClickSound();
        });
    });
    
    // Support intra-view link button jumps
    document.querySelectorAll(".trigger-view-jump").forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            const targetView = this.getAttribute("data-target-view");
            const navBtn = document.querySelector(`.nav-item[data-view="${targetView}"]`);
            if (navBtn) navBtn.click();
        });
    });
}

// ==========================================================================
// DOM INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    // 1. Safe start 3D Loader
    try {
        start3DLoaderEngine();
    } catch (e) {
        console.warn("Loader engine failed to start:", e);
    }
    
    // 2. Safe execution helper
    const safeInit = (name, fn) => {
        try {
            fn();
        } catch (err) {
            console.error(`Initialization error in ${name}:`, err);
        }
    };
    
    safeInit("initHeroHologramSimulator", initHeroHologramSimulator);
    safeInit("initDashboardNavigation", initDashboardNavigation);
    safeInit("initMicroSpeakerBooth", initMicroSpeakerBooth);
    safeInit("initCoEdPeerDirectory", initCoEdPeerDirectory);
    safeInit("initLinkedInFormatter", initLinkedInFormatter);
    safeInit("initLiveGallery", initLiveGallery);
    safeInit("initWellnessSoundboard", initWellnessSoundboard);
    
    safeInit("buildLadder", buildLadder);
    safeInit("updateLadderUI", updateLadderUI);
    safeInit("renderPortal", renderPortal);
    
    safeInit("initScrollReveals", initScrollReveals);
    safeInit("initEventsEngine", initEventsEngine);
    safeInit("renderLiveEventsCarousel", renderLiveEventsCarousel);
    safeInit("setupModalsController", setupModalsController);
    
    // 3. Guarantee that the loader ALWAYS slides up to reveal the website
    const startupLoader = document.getElementById("startup-loader");
    if (startupLoader) {
        setTimeout(() => {
            try {
                startupLoader.classList.add("slide-up");
                attachSoundToButtons();
            } catch (e) {
                console.error("Error hiding startup loader:", e);
            }
            try {
                stop3DLoaderEngine();
            } catch (e) {}
        }, 3400);
    } else {
        try {
            attachSoundToButtons();
        } catch (e) {}
    }
});
