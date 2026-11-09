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
        applyUrl: "https://chat.whatsapp.com/HrgxdxPQEn9DAlp4PFH6d0"
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
        applyUrl: "https://chat.whatsapp.com/HrgxdxPQEn9DAlp4PFH6d0"
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
    document.querySelectorAll(".btn, .filter-btn, .quiz-option-btn, .nav-link, .nav-item, .btn-sidebar-lofi, .btn-sidebar-team, .indicator, .btn-close-modal, .btn-close-lightbox, .hidden-admin-key, .gallery-filter-btn, .tenure-pill, .mobile-toggle-btn, .admin-tab-btn, .quick-adjust-btn, .btn-remove-tenure").forEach(btn => {
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
// 🛡️ UNIFIED SYSTEM DATA: TEAM, COMMITTEE, TENURES & ACTIVE COMPETITIONS
// ==========================================================================
function escapeHtml(str) {
    if (!str) return "";
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

const DEFAULT_TEAM_DATA = {
    "teamPasscode": "teamup2026",
    "adminPasscode": "adminup2026",
    "tenures": [
        "Tenure 2025 - 2026",
        "Tenure 2024 - 2025",
        "Founding Tenure",
        "Tenure 2026 - 2027"
    ],
    "leaderboard": [],
    "committeeMembers": [
        {
            "id": "comm-1794259452724",
            "name": "Megha",
            "tenure": "Tenure 2026 - 2027",
            "desc": "President",
            "image": "data:image/jpeg;base64,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"
        }
    ],
    "competitions": [
        {
            "id": "debate-impromptu",
            "title": "Impromptu debates & Stage Presence",
            "badge": "Active Competition",
            "desc": "Ditch the stage fright! Register for this quick, fun impromptu speaking challenge. Get a surprise topic, share your ideas in 2 minutes, and claim your certified winner badge. 100% friendly and supportive.",
            "link": "https://chat.whatsapp.com/HrgxdxPQEn9DAlp4PFH6d0",
            "template": "speaking",
            "icon": "🎙️"
        },
        {
            "id": "wellness-mixer",
            "title": "Connect Circle Wellness Mixer",
            "badge": "Live Workshop",
            "desc": "Looking to make authentic friends? Jump into our next curated wellness session! Share stories, play bonding games, and connect with people who support your mental health and soft-skills goals.",
            "link": "https://forms.gle/EJ5njy2RpcLyCZdo7",
            "template": "wellness",
            "icon": "🤍"
        },
        {
            "id": "casing-nutrients",
            "title": "Collaborative Soft Skills Casing Challenge",
            "badge": "Ongoing Challenge",
            "desc": "Solve practical business and social problems in friendly groups of 3. Excellent for learning team leadership, building active communication skills, and gaining confident collaboration experience.",
            "link": "https://chat.whatsapp.com/HrgxdxPQEn9DAlp4PFH6d0",
            "template": "casing",
            "icon": "📊"
        }
    ]
};

let appTeamData = (() => {
    try {
        const saved = localStorage.getItem("interactup_team_portal_data");
        if (saved) {
            const parsed = JSON.parse(saved);
            return {
                teamPasscode: parsed.teamPasscode || DEFAULT_TEAM_DATA.teamPasscode,
                adminPasscode: parsed.adminPasscode || DEFAULT_TEAM_DATA.adminPasscode,
                tenures: Array.isArray(parsed.tenures) && parsed.tenures.length > 0 ? parsed.tenures : DEFAULT_TEAM_DATA.tenures,
                leaderboard: Array.isArray(parsed.leaderboard) ? parsed.leaderboard : DEFAULT_TEAM_DATA.leaderboard,
                committeeMembers: Array.isArray(parsed.committeeMembers) ? parsed.committeeMembers : DEFAULT_TEAM_DATA.committeeMembers,
                competitions: Array.isArray(parsed.competitions) && parsed.competitions.length > 0 ? parsed.competitions : DEFAULT_TEAM_DATA.competitions
            };
        }
    } catch (e) {
        console.error("Failed to parse saved team data", e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_TEAM_DATA));
})();

// ==========================================================================
// 🔥 GOOGLE FIREBASE REALTIME CLOUD DATABASE INTEGRATION
// ==========================================================================
const firebaseConfig = {
    apiKey: "AIzaSyChFIHDUso_wY3AdWSO4O4Dw9MRmo7z_Ts",
    authDomain: "interactup-3881b.firebaseapp.com",
    projectId: "interactup-3881b",
    storageBucket: "interactup-3881b.firebasestorage.app",
    messagingSenderId: "318701080525",
    appId: "1:318701080525:web:c99980fffceea178dd3e84"
};

let db = null;
let isFirestoreSeeded = false;

try {
    if (typeof firebase !== 'undefined' && firebase.initializeApp) {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        db = firebase.firestore();
        console.log("🔥 Firebase initialized. Listening for real-time cloud updates...");
        
        db.collection("interactup_config").doc("team_data").onSnapshot((doc) => {
            if (doc.exists) {
                const cloud = doc.data();
                if (cloud && typeof cloud === 'object') {
                    appTeamData.teamPasscode = cloud.teamPasscode || appTeamData.teamPasscode;
                    appTeamData.adminPasscode = cloud.adminPasscode || appTeamData.adminPasscode;
                    if (Array.isArray(cloud.tenures) && cloud.tenures.length > 0) {
                        appTeamData.tenures = cloud.tenures;
                    }
                    if (Array.isArray(cloud.leaderboard)) {
                        appTeamData.leaderboard = cloud.leaderboard;
                    }
                    if (Array.isArray(cloud.committeeMembers)) {
                        appTeamData.committeeMembers = cloud.committeeMembers;
                    }
                    if (Array.isArray(cloud.competitions) && cloud.competitions.length > 0) {
                        appTeamData.competitions = cloud.competitions;
                        liveEvents = appTeamData.competitions;
                    }
                    try {
                        localStorage.setItem("interactup_team_portal_data", JSON.stringify(appTeamData));
                    } catch(e) {}
                    
                    // Trigger live UI re-render across the entire website
                    if (typeof renderLeaderboardTable === 'function') renderLeaderboardTable();
                    if (typeof renderCoreCommitteeMainView === 'function') renderCoreCommitteeMainView();
                    if (typeof renderLiveEventsCarousel === 'function') renderLiveEventsCarousel();
                    if (typeof renderAllEventsTable === 'function') renderAllEventsTable();
                    if (typeof renderAdminLeaderboardList === 'function') renderAdminLeaderboardList();
                    if (typeof renderAdminTenureChips === 'function') renderAdminTenureChips();
                    if (typeof renderAdminCommitteeTenureDropdown === 'function') renderAdminCommitteeTenureDropdown();
                    if (typeof renderAdminCommitteeRosterList === 'function') renderAdminCommitteeRosterList();
                    if (typeof renderAdminEventsList === 'function') renderAdminEventsList();
                    if (typeof renderAdminExportCode === 'function') renderAdminExportCode();
                }
            } else if (!isFirestoreSeeded) {
                isFirestoreSeeded = true;
                console.log("🔥 Initializing Firestore document with current team data...");
                db.collection("interactup_config").doc("team_data").set(appTeamData)
                    .then(() => console.log("🔥 Successfully seeded Firestore with initial team data!"))
                    .catch(err => console.error("Firestore seed error:", err));
            }
        }, (err) => {
            console.warn("Firestore sync warning (falling back to local cache):", err);
        });
    }
} catch (e) {
    console.warn("Firebase initialization skipped or failed:", e);
}

let liveEvents = appTeamData.competitions;
let currentCarouselIndex = 0;
let carouselTimer = null;

function initEventsEngine() {
    liveEvents = appTeamData.competitions;
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
    appTeamData.competitions = appTeamData.competitions.filter(ev => ev.id !== id);
    liveEvents = appTeamData.competitions;
    saveTeamData();
    if (currentCarouselIndex >= liveEvents.length) {
        currentCarouselIndex = Math.max(0, liveEvents.length - 1);
    }
    renderLiveEventsCarousel();
    renderAllEventsTable();
    renderAdminEventsList();
}

// ==========================================================================
// 🛡️ INTERACTUP TEAM PORTAL, LEADERBOARD & MASTER ADMIN SYSTEM
// ==========================================================================
let currentActiveTenure = appTeamData.tenures[0] || "Tenure 2025 - 2026";
let adminCommPhotoData = "";

function saveTeamData() {
    try {
        localStorage.setItem("interactup_team_portal_data", JSON.stringify(appTeamData));
        localStorage.setItem("interactup_events", JSON.stringify(appTeamData.competitions));
        if (db) {
            db.collection("interactup_config").doc("team_data").set(appTeamData)
                .then(() => {
                    console.log("🔥 Successfully synced to Firebase Cloud Database!");
                })
                .catch(err => {
                    console.error("Firebase cloud sync error:", err);
                });
        }
    } catch (e) {
        console.error("Failed to save team data to localStorage", e);
    }
    liveEvents = appTeamData.competitions;
    renderLeaderboardTable();
    renderCoreCommitteeMainView();
    renderAdminLeaderboardList();
    renderAdminTenureChips();
    renderAdminCommitteeTenureDropdown();
    renderAdminCommitteeRosterList();
    renderAdminExportCode();
}

// 1. RENDER MAIN PAGE CORE COMMITTEE DIRECTORY
function renderCoreCommitteeMainView() {
    const tabsContainer = document.getElementById("committee-tenure-tabs-container");
    const gridContainer = document.getElementById("committee-members-grid");
    const emptyState = document.getElementById("committee-empty-state");
    
    if (!tabsContainer || !gridContainer) return;
    
    if (!appTeamData.tenures.includes(currentActiveTenure)) {
        currentActiveTenure = appTeamData.tenures[0] || "";
    }
    
    tabsContainer.innerHTML = appTeamData.tenures.map(tenure => {
        const isActive = tenure === currentActiveTenure ? "active" : "";
        return `<span class="tenure-pill ${isActive}" data-tenure="${escapeHtml(tenure)}">${escapeHtml(tenure)}</span>`;
    }).join("");
    
    tabsContainer.querySelectorAll(".tenure-pill").forEach(pill => {
        pill.addEventListener("click", function() {
            currentActiveTenure = this.getAttribute("data-tenure");
            renderCoreCommitteeMainView();
            playClickSound();
        });
    });
    
    const members = appTeamData.committeeMembers.filter(m => m.tenure === currentActiveTenure);
    
    if (members.length === 0) {
        gridContainer.innerHTML = "";
        if (emptyState) {
            emptyState.style.display = "inline-flex";
            const emptyText = document.getElementById("committee-empty-state-text");
            if (emptyText) emptyText.textContent = `${currentActiveTenure}: Profiles Under Curation`;
        }
    } else {
        if (emptyState) emptyState.style.display = "none";
        gridContainer.innerHTML = members.map(m => `
            <div class="committee-member-card">
                <img src="${m.image || 'assets/images/logo.png'}" alt="${escapeHtml(m.name)}" class="committee-member-img" onerror="this.src='assets/images/logo.png'">
                <div class="committee-member-name">${escapeHtml(m.name)}</div>
                <div class="committee-member-desc">${escapeHtml(m.desc)}</div>
            </div>
        `).join("");
    }
}

// 2. RENDER VIEW-ONLY TEAM LEADERBOARD
function renderLeaderboardTable(filterText = "") {
    const tbody = document.getElementById("leaderboard-table-body");
    if (!tbody) return;
    
    const sorted = [...appTeamData.leaderboard].sort((a, b) => (b.points || 0) - (a.points || 0));
    const query = (filterText || "").trim().toLowerCase();
    const filtered = query ? sorted.filter(m => m.name.toLowerCase().includes(query)) : sorted;
    
    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="3" style="text-align: center; padding: 24px; color: var(--text-muted);">No members found matching "${escapeHtml(query)}"</td></tr>`;
        return;
    }
    
    tbody.innerHTML = filtered.map(m => {
        const rank = sorted.indexOf(m) + 1;
        return `
            <tr>
                <td class="leaderboard-rank-col">#${rank}</td>
                <td class="leaderboard-name-col">${escapeHtml(m.name)}</td>
                <td class="leaderboard-points-col">${m.points} pts</td>
            </tr>
        `;
    }).join("");
}

// 3. ADMIN: LEADERBOARD ROSTER LIST
function renderAdminLeaderboardList() {
    const tbody = document.getElementById("admin-leaderboard-list");
    if (!tbody) return;
    
    const sorted = [...appTeamData.leaderboard].sort((a, b) => (b.points || 0) - (a.points || 0));
    
    if (sorted.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 16px;">No members added yet. Add one above!</td></tr>`;
        return;
    }
    
    tbody.innerHTML = sorted.map(m => `
        <tr>
            <td><strong>${escapeHtml(m.name)}</strong></td>
            <td>${m.points} pts</td>
            <td>
                <button type="button" class="quick-adjust-btn" data-id="${m.id}" data-delta="10">+10</button>
                <button type="button" class="quick-adjust-btn" data-id="${m.id}" data-delta="50">+50</button>
                <button type="button" class="quick-adjust-btn" data-id="${m.id}" data-delta="-10">-10</button>
            </td>
            <td>
                <button type="button" class="btn-delete-row" data-id="${m.id}" title="Remove Member">✕</button>
            </td>
        </tr>
    `).join("");
    
    tbody.querySelectorAll(".quick-adjust-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            const id = this.getAttribute("data-id");
            const delta = parseInt(this.getAttribute("data-delta"), 10);
            const mem = appTeamData.leaderboard.find(x => x.id === id);
            if (mem) {
                mem.points = Math.max(0, (mem.points || 0) + delta);
                saveTeamData();
                playClickSound();
            }
        });
    });
    
    tbody.querySelectorAll(".btn-delete-row").forEach(btn => {
        btn.addEventListener("click", function() {
            const id = this.getAttribute("data-id");
            appTeamData.leaderboard = appTeamData.leaderboard.filter(x => x.id !== id);
            saveTeamData();
            playClickSound();
        });
    });
}

// 4. ADMIN: TENURE CHIPS LIST
function renderAdminTenureChips() {
    const chipsContainer = document.getElementById("admin-tenure-chips-list");
    if (!chipsContainer) return;
    
    chipsContainer.innerHTML = appTeamData.tenures.map(tenure => `
        <span class="tenure-chip-item">
            ${escapeHtml(tenure)}
            <button type="button" class="btn-remove-tenure" data-tenure="${escapeHtml(tenure)}" title="Delete Tenure">&times;</button>
        </span>
    `).join("");
    
    chipsContainer.querySelectorAll(".btn-remove-tenure").forEach(btn => {
        btn.addEventListener("click", function() {
            const t = this.getAttribute("data-tenure");
            if (appTeamData.tenures.length <= 1) {
                alert("You must maintain at least one active tenure.");
                return;
            }
            if (confirm(`Delete '${t}' and its associated committee profiles?`)) {
                appTeamData.tenures = appTeamData.tenures.filter(x => x !== t);
                appTeamData.committeeMembers = appTeamData.committeeMembers.filter(m => m.tenure !== t);
                saveTeamData();
                playClickSound();
            }
        });
    });
}

// 5. ADMIN: COMMITTEE TENURE DROPDOWN
function renderAdminCommitteeTenureDropdown() {
    const select = document.getElementById("admin-comm-tenure-select");
    if (!select) return;
    select.innerHTML = appTeamData.tenures.map(t => `<option value="${escapeHtml(t)}">${escapeHtml(t)}</option>`).join("");
}

// 6. ADMIN: COMMITTEE MEMBERS ROSTER
function renderAdminCommitteeRosterList() {
    const list = document.getElementById("admin-committee-roster-list");
    if (!list) return;
    
    if (appTeamData.committeeMembers.length === 0) {
        list.innerHTML = `<div style="text-align: center; padding: 20px; color: var(--text-muted); font-size: 0.82rem;">No committee members listed yet. Add one on the left!</div>`;
        return;
    }
    
    list.innerHTML = appTeamData.committeeMembers.map(m => `
        <div class="admin-comm-item-card">
            <img src="${m.image || 'assets/images/logo.png'}" alt="${escapeHtml(m.name)}" class="admin-comm-item-img" onerror="this.src='assets/images/logo.png'">
            <div class="admin-comm-item-info">
                <span class="admin-comm-item-name">${escapeHtml(m.name)}</span>
                <span class="admin-comm-item-tenure">${escapeHtml(m.tenure)}</span>
                <p class="admin-comm-item-desc">${escapeHtml(m.desc)}</p>
            </div>
            <button type="button" class="btn-delete-row" data-id="${m.id}" title="Remove Member">✕</button>
        </div>
    `).join("");
    
    list.querySelectorAll(".btn-delete-row").forEach(btn => {
        btn.addEventListener("click", function() {
            const id = this.getAttribute("data-id");
            appTeamData.committeeMembers = appTeamData.committeeMembers.filter(x => x.id !== id);
            saveTeamData();
            playClickSound();
        });
    });
}

// 7. ADMIN: EXPORT CODE GENERATOR
function renderAdminExportCode() {
    const textarea = document.getElementById("admin-export-textarea");
    if (!textarea) return;
    textarea.value = `const DEFAULT_TEAM_DATA = ${JSON.stringify(appTeamData, null, 4)};`;
}

// 8. MASTER SETUP CONTROLLER FOR MODALS & ACCESS
function setupModalsController() {
    const allEventsModal = document.getElementById("all-events-modal");
    const teamLoginModal = document.getElementById("team-login-modal");
    const teamLeaderboardModal = document.getElementById("team-leaderboard-modal");
    const adminMasterModal = document.getElementById("admin-master-modal");
    
    // Competitions Modal open / close
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
    
    // Close on backdrop click for all modals
    document.querySelectorAll(".modal-backdrop").forEach(modal => {
        modal.addEventListener("click", function(e) {
            if (e.target === this) {
                this.classList.remove("active");
            }
        });
    });
    
    // Team Login Trigger (Sidebar Button & Footer Key)
    const btnTeamLoginTrigger = document.getElementById("btn-team-login-trigger");
    if (btnTeamLoginTrigger) {
        btnTeamLoginTrigger.addEventListener("click", () => {
            const sidebar = document.getElementById("main-sidebar");
            const overlay = document.getElementById("sidebar-overlay");
            if (sidebar) sidebar.classList.remove("mobile-open");
            if (overlay) overlay.classList.remove("active");
            openTeamLoginPrompt();
            playClickSound();
        });
    }
    
    const adminTrigger = document.getElementById("footer-admin-trigger");
    if (adminTrigger) {
        adminTrigger.addEventListener("click", (e) => {
            e.preventDefault();
            openTeamLoginPrompt();
            playClickSound();
        });
    }
    
    // Close buttons for Team Login, Leaderboard, Admin Master
    const btnCloseTeamLogin = document.getElementById("btn-close-team-login");
    if (btnCloseTeamLogin) {
        btnCloseTeamLogin.addEventListener("click", () => {
            if (teamLoginModal) teamLoginModal.classList.remove("active");
        });
    }
    
    const btnCloseLeaderboard = document.getElementById("btn-close-team-leaderboard");
    if (btnCloseLeaderboard) {
        btnCloseLeaderboard.addEventListener("click", () => {
            if (teamLeaderboardModal) teamLeaderboardModal.classList.remove("active");
        });
    }
    
    const btnCloseAdminMaster = document.getElementById("btn-close-admin-master");
    if (btnCloseAdminMaster) {
        btnCloseAdminMaster.addEventListener("click", () => {
            if (adminMasterModal) adminMasterModal.classList.remove("active");
        });
    }
    
    // DUAL-ROLE PASSCODE VERIFICATION
    const passcodeField = document.getElementById("team-passcode-input");
    const passcodeError = document.getElementById("team-passcode-error");
    const btnValidatePasscode = document.getElementById("btn-validate-team-passcode");
    
    function validateTeamPasscode() {
        const val = (passcodeField.value || "").trim();
        if (val === appTeamData.adminPasscode) {
            // ADMIN LOGIN
            passcodeError.style.display = "none";
            passcodeField.value = "";
            if (teamLoginModal) teamLoginModal.classList.remove("active");
            
            // Populate admin fields
            document.getElementById("admin-edit-team-passcode").value = appTeamData.teamPasscode;
            document.getElementById("admin-edit-admin-passcode").value = appTeamData.adminPasscode;
            renderAdminLeaderboardList();
            renderAdminTenureChips();
            renderAdminCommitteeTenureDropdown();
            renderAdminCommitteeRosterList();
            renderAdminEventsList();
            renderAdminExportCode();
            
            if (adminMasterModal) adminMasterModal.classList.add("active");
            playClickSound();
        } else if (val === appTeamData.teamPasscode) {
            // TEAM LEADERBOARD LOGIN
            passcodeError.style.display = "none";
            passcodeField.value = "";
            if (teamLoginModal) teamLoginModal.classList.remove("active");
            
            renderLeaderboardTable();
            if (teamLeaderboardModal) teamLeaderboardModal.classList.add("active");
            playClickSound();
        } else {
            passcodeError.style.display = "block";
            passcodeError.style.animation = 'none';
            passcodeError.offsetHeight;
            passcodeError.style.animation = null;
        }
    }
    
    if (btnValidatePasscode) btnValidatePasscode.addEventListener("click", validateTeamPasscode);
    if (passcodeField) {
        passcodeField.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                validateTeamPasscode();
            }
        });
    }
    
    // Leaderboard search filter
    const searchInput = document.getElementById("leaderboard-search-input");
    if (searchInput) {
        searchInput.addEventListener("input", function() {
            renderLeaderboardTable(this.value);
        });
    }
    
    // Admin Tab Navigation
    document.querySelectorAll(".admin-tab-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            const tabId = this.getAttribute("data-tab");
            document.querySelectorAll(".admin-tab-btn").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".admin-tab-content").forEach(c => c.classList.remove("active"));
            this.classList.add("active");
            const targetTab = document.getElementById(tabId);
            if (targetTab) targetTab.classList.add("active");
            playClickSound();
        });
    });
    
    // Admin Add Leaderboard Member
    const btnAddMember = document.getElementById("btn-admin-add-member");
    if (btnAddMember) {
        btnAddMember.addEventListener("click", () => {
            const nameInput = document.getElementById("admin-member-name");
            const pointsInput = document.getElementById("admin-member-points");
            if (!nameInput.value.trim()) return;
            
            const newMember = {
                id: "mem-" + Date.now(),
                name: nameInput.value.trim(),
                points: parseInt(pointsInput.value, 10) || 0
            };
            
            appTeamData.leaderboard.push(newMember);
            saveTeamData();
            nameInput.value = "";
            pointsInput.value = "50";
            playClickSound();
        });
    }
    
    // Admin Add Tenure
    const btnAddTenure = document.getElementById("btn-admin-add-tenure");
    if (btnAddTenure) {
        btnAddTenure.addEventListener("click", () => {
            const input = document.getElementById("admin-new-tenure-input");
            const val = (input.value || "").trim();
            if (!val) return;
            if (appTeamData.tenures.includes(val)) {
                alert("This tenure already exists.");
                return;
            }
            appTeamData.tenures.push(val);
            input.value = "";
            saveTeamData();
            playClickSound();
        });
    }
    
    // 50-Word limit enforcement on committee description
    const commDesc = document.getElementById("admin-comm-desc");
    const commWordCount = document.getElementById("committee-desc-word-count");
    const commWordBadge = document.getElementById("admin-comm-word-badge");
    
    if (commDesc) {
        commDesc.addEventListener("input", function() {
            const words = this.value.trim().split(/\s+/).filter(Boolean);
            if (words.length > 50) {
                this.value = words.slice(0, 50).join(" ");
            }
            const currentCount = Math.min(50, this.value.trim().split(/\s+/).filter(Boolean).length);
            if (commWordCount) commWordCount.textContent = currentCount;
            if (commWordBadge) {
                if (currentCount >= 50) commWordBadge.classList.add("limit-reached");
                else commWordBadge.classList.remove("limit-reached");
            }
        });
    }
    
    // Photo File Upload to Base64
    const commPhotoFile = document.getElementById("admin-comm-photo-file");
    const commPhotoPreview = document.getElementById("admin-comm-photo-preview");
    const commPhotoPlaceholder = document.getElementById("admin-comm-photo-placeholder");
    
    if (commPhotoFile) {
        commPhotoFile.addEventListener("change", function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(evt) {
                    adminCommPhotoData = evt.target.result;
                    if (commPhotoPreview) {
                        commPhotoPreview.src = adminCommPhotoData;
                        commPhotoPreview.style.display = "block";
                    }
                    if (commPhotoPlaceholder) commPhotoPlaceholder.style.display = "none";
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Admin Add Committee Member
    const btnAddCommittee = document.getElementById("btn-admin-add-committee");
    if (btnAddCommittee) {
        btnAddCommittee.addEventListener("click", () => {
            const tenureSelect = document.getElementById("admin-comm-tenure-select");
            const nameInput = document.getElementById("admin-comm-name");
            const descInput = document.getElementById("admin-comm-desc");
            
            if (!nameInput.value.trim() || !descInput.value.trim()) {
                alert("Please enter both the member name and description.");
                return;
            }
            
            const newComm = {
                id: "comm-" + Date.now(),
                name: nameInput.value.trim(),
                tenure: tenureSelect.value,
                desc: descInput.value.trim(),
                image: adminCommPhotoData || "assets/images/logo.png"
            };
            
            appTeamData.committeeMembers.push(newComm);
            saveTeamData();
            
            nameInput.value = "";
            descInput.value = "";
            if (commWordCount) commWordCount.textContent = "0";
            adminCommPhotoData = "";
            if (commPhotoPreview) commPhotoPreview.style.display = "none";
            if (commPhotoPlaceholder) commPhotoPlaceholder.style.display = "block";
            if (commPhotoFile) commPhotoFile.value = "";
            playClickSound();
        });
    }
    
    // Admin Save Passwords
    const btnSavePasswords = document.getElementById("btn-save-passwords");
    if (btnSavePasswords) {
        btnSavePasswords.addEventListener("click", () => {
            const teamInput = document.getElementById("admin-edit-team-passcode");
            const adminInput = document.getElementById("admin-edit-admin-passcode");
            
            if (!teamInput.value.trim() || !adminInput.value.trim()) {
                alert("Passcodes cannot be empty.");
                return;
            }
            
            appTeamData.teamPasscode = teamInput.value.trim();
            appTeamData.adminPasscode = adminInput.value.trim();
            saveTeamData();
            
            const feedback = document.getElementById("password-save-feedback");
            if (feedback) {
                feedback.style.display = "block";
                setTimeout(() => { feedback.style.display = "none"; }, 3500);
            }
            playClickSound();
        });
    }
    
    // Admin Copy Export Code
    const btnCopyExport = document.getElementById("btn-copy-export-code");
    if (btnCopyExport) {
        btnCopyExport.addEventListener("click", () => {
            const textarea = document.getElementById("admin-export-textarea");
            const status = document.getElementById("export-copy-status");
            if (textarea) {
                textarea.focus();
                textarea.select();
                textarea.setSelectionRange(0, 999999);
                
                let success = false;
                try {
                    success = document.execCommand("copy");
                } catch (err) {
                    success = false;
                }
                
                if (success) {
                    if (status) {
                        status.style.display = "inline-block";
                        setTimeout(() => { status.style.display = "none"; }, 3500);
                    }
                } else if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(textarea.value).then(() => {
                        if (status) {
                            status.style.display = "inline-block";
                            setTimeout(() => { status.style.display = "none"; }, 3500);
                        }
                    }).catch(() => {
                        alert("Please select the text in the box and press Ctrl + C to copy.");
                    });
                } else {
                    alert("Please select the text in the box and press Ctrl + C to copy.");
                }
            }
        });
    }

    // Auto-select text on textarea click
    const exportTextarea = document.getElementById("admin-export-textarea");
    if (exportTextarea) {
        exportTextarea.addEventListener("click", function() {
            this.select();
        });
    }
    
    // Live Competitions Save Event
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
            
            appTeamData.competitions.unshift(newEv);
            liveEvents = appTeamData.competitions;
            saveTeamData();
            
            titleField.value = "";
            descField.value = "";
            linkField.value = "";
            currentCarouselIndex = 0;
            
            renderLiveEventsCarousel();
            renderAllEventsTable();
            renderAdminEventsList();
        });
    }
    
    // Initial Render of Core Committee & Leaderboard
    renderCoreCommitteeMainView();
    renderLeaderboardTable();
    
    window.addEventListener("hashchange", checkHashAccess);
    checkHashAccess();
}

function openTeamLoginPrompt() {
    const teamLoginModal = document.getElementById("team-login-modal");
    if (teamLoginModal) {
        const input = document.getElementById("team-passcode-input");
        const error = document.getElementById("team-passcode-error");
        if (input) input.value = "";
        if (error) error.style.display = "none";
        teamLoginModal.classList.add("active");
    }
}

function checkHashAccess() {
    if (window.location.hash === "#admin" || window.location.hash === "#team") {
        openTeamLoginPrompt();
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
        { name: "InteractUp WhatsApp Official", desc: "Main entry point to communicate, interact and join weekend debates.", icon: "💬", url: "https://chat.whatsapp.com/HrgxdxPQEn9DAlp4PFH6d0" },
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
    const mobileToggle = document.getElementById("mobile-sidebar-toggle");
    const overlay = document.getElementById("sidebar-overlay");
    const navItems = document.querySelectorAll(".nav-item");
    const viewPanels = document.querySelectorAll(".view-panel");
    const viewport = document.getElementById("dashboard-viewport");
    
    if (!sidebar) return;

    const closeMobileSidebar = () => {
        sidebar.classList.remove("mobile-open");
        if (overlay) overlay.classList.remove("active");
    };

    const openMobileSidebar = () => {
        sidebar.classList.add("mobile-open");
        if (overlay) overlay.classList.add("active");
        playClickSound();
    };
    
    // Toggle sidebar collapsed state on click (desktop) or close on mobile
    if (toggle) {
        toggle.addEventListener("click", () => {
            if (window.innerWidth <= 1024) {
                closeMobileSidebar();
            } else {
                sidebar.classList.toggle("collapsed");
            }
            playClickSound();
        });
    }

    // Mobile Hamburger button open/toggle
    if (mobileToggle) {
        mobileToggle.addEventListener("click", () => {
            if (sidebar.classList.contains("mobile-open")) {
                closeMobileSidebar();
            } else {
                openMobileSidebar();
            }
        });
    }

    // Click on overlay backdrop to close mobile drawer
    if (overlay) {
        overlay.addEventListener("click", () => {
            closeMobileSidebar();
            playClickSound();
        });
    }
    
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
            else if (targetView === "committee") morphStageToShape("sphere");
            else if (targetView === "startup") morphStageToShape("rocket");
            else if (targetView === "nutrients") morphStageToShape("constellation");
            
            // Close mobile sidebar drawer after tapping a view
            if (window.innerWidth <= 1024) {
                closeMobileSidebar();
            }

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
            if (window.innerWidth <= 1024) {
                closeMobileSidebar();
            }
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
