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

const READ_ONLY_SHOWCASE_MODE = false;
const ADMIN_AUTH_UID = "FX9s7HkfmRhqRRy3S37WyLEVNkj2";

const DEMO_COMMITTEE_MEMBERS = [
    {
        id: "comm-megha",
        name: "Megha",
        tenure: "Tenure 2026 - 2027",
        desc: "President",
        trait: "Compassionate guide | Turning ideas into actions!",
        image: "assets/images/committee/megha.png"
    },
    {
        id: "comm-nayna",
        name: "Nayna",
        tenure: "Tenure 2026 - 2027",
        desc: "General Secretary",
        trait: "Stoic | Levelheaded optimistic voice | Resolute leader",
        image: "assets/images/committee/nayna.png"
    },
    {
        id: "comm-farahan",
        name: "Farahan",
        tenure: "Tenure 2026 - 2027",
        desc: "Core Member",
        trait: "Curious Initiator | Vocal Visionary",
        image: "assets/images/committee/farahan.png"
    },
    {
        id: "comm-nishita",
        name: "Nishita",
        tenure: "Tenure 2026 - 2027",
        desc: "Core Member",
        trait: "Driven Dreamer | Articulate Organizer",
        image: "assets/images/committee/nishita.png"
    },
    {
        id: "comm-indhuja",
        name: "Indhuja",
        tenure: "Tenure 2026 - 2027",
        desc: "Core Member",
        trait: "Dynamic Explorer | Tech Catalyst",
        image: "assets/images/committee/indhuja.png"
    },
    {
        id: "comm-deven",
        name: "Deven",
        tenure: "Tenure 2026 - 2027",
        desc: "Core Member",
        trait: "Resourceful Strategist | Inspiring Collaborator",
        image: "assets/images/committee/deven.png"
    },
    {
        id: "comm-sai",
        name: "Sai",
        tenure: "Tenure 2026 - 2027",
        desc: "Core Member",
        trait: "Meticulous Planner | Operational Anchor",
        image: "assets/images/committee/sai.png"
    },
    {
        id: "comm-ananya",
        name: "Ananya",
        tenure: "Tenure 2026 - 2027",
        desc: "Core Member",
        trait: "Eloquent Communicator | Community Builder",
        image: "assets/images/committee/ananya.png"
    },
    {
        id: "comm-somyaditya",
        name: "Somyaditya",
        tenure: "Tenure 2026 - 2027",
        desc: "Core Member",
        trait: "Proactive Networker | Growth Catalyst",
        image: "assets/images/committee/somyaditya.png"
    },
    {
        id: "comm-vedika",
        name: "Vedika",
        tenure: "Tenure 2026 - 2027",
        desc: "Core Member",
        trait: "Empathetic Mentor | Creative Thinker",
        image: "assets/images/committee/vedika.png"
    },
    {
        id: "comm-ankur",
        name: "Ankur",
        tenure: "Tenure 2026 - 2027",
        desc: "Core Member",
        trait: "Dedicated Student Leader | Empowering Peers",
        image: "assets/images/logo.png"
    },
    {
        id: "comm-tauheed",
        name: "Tauheed",
        tenure: "Tenure 2026 - 2027",
        desc: "Core Member",
        trait: "Active Contributor | Youth Engagement Catalyst",
        image: "assets/images/logo.png"
    },
    {
        id: "comm-dhruv",
        name: "Dhruv",
        tenure: "Tenure 2026 - 2027",
        desc: "Core Member",
        trait: "Strategic Thinker | Initiative Driver",
        image: "assets/images/logo.png"
    },
    {
        id: "comm-nikhil",
        name: "Nikhil",
        tenure: "Tenure 2026 - 2027",
        desc: "Core Member",
        trait: "Energetic | People-oriented | Cultivated mind",
        image: "assets/images/committee/nikhil.png"
    }
];

function ensureDemoCommitteeMembers(data) {
    if (!data) return;
    if (!Array.isArray(data.tenures)) data.tenures = ["Tenure 2026 - 2027"];
    if (!data.tenures.includes("Tenure 2026 - 2027")) {
        data.tenures.unshift("Tenure 2026 - 2027");
    }
    if (!Array.isArray(data.committeeMembers)) data.committeeMembers = [];

    // Specifically purge Arpita and Kritika per explicit user instruction ("remove Kritika and Arpita")
    // and old provisional dummy placeholders.
    const purgedNames = ["arpita", "kritika"];
    const oldIds = ["comm-member-1", "comm-member-2", "comm-member-7", "comm-member-10", "comm-member-11", "comm-devain"];
    data.committeeMembers = data.committeeMembers.filter(m => {
        const n = (m.name || '').toLowerCase();
        const img = (m.image || '').toLowerCase();
        const id = m.id || '';
        const isPurged = purgedNames.some(p => n.includes(p) || img.includes(p));
        return !isPurged && !oldIds.includes(id) && !img.includes("member_") && n !== "devain"
            && !n.includes("rohan verma") && !n.includes("aman sharma") && !n.includes("riya kapoor") && !n.includes("saurav das") && !n.includes("sneha patel");
    });

    // Migrate any accidental "Saumya" entry to "Somyaditya" so no duplicate Saumya exists
    data.committeeMembers.forEach(m => {
        if (m.tenure === "Tenure 2026 - 2027") {
            const raw = (m.name || '').toLowerCase();
            if (raw.includes("saumya")) {
                m.id = "comm-somyaditya";
                m.name = "Somyaditya";
                m.desc = "Core Member";
                m.image = "assets/images/committee/somyaditya.png";
                delete m.passcode;
            }
        }
    });

    // Helper to match existing member
    function findExisting(demo) {
        const demoKey = demo.name.toLowerCase();
        return data.committeeMembers.find(m => {
            if (m.tenure !== demo.tenure) return false;
            if (m.id === demo.id) return true;
            const mName = (m.name || '').toLowerCase();
            if (demoKey === 'farahan') {
                return mName.includes('farahan') || mName.includes('farhan');
            }
            if (demoKey === 'deven') {
                return mName.includes('deven') || mName.includes('devain');
            }
            if (demoKey === 'somyaditya') {
                return mName.includes('somyaditya') || mName.includes('somy') || mName.includes('saumya');
            }
            if (demoKey === 'tauheed') {
                return mName.includes('tauheed') || mName.includes('towhid') || mName.includes('tauhid');
            }
            return mName.includes(demoKey);
        });
    }

    // Update existing or add missing demo members without creating duplicates
    const matchedOfficialIds = new Set();
    DEMO_COMMITTEE_MEMBERS.forEach(demo => {
        let existing = findExisting(demo);
        if (existing) {
            existing.id = demo.id;
            existing.name = demo.name;
            existing.desc = demo.desc;
            if (demo.image && demo.image !== "assets/images/logo.png") {
                existing.image = demo.image;
            } else if (!existing.image) {
                existing.image = demo.image;
            }
            if (!existing.trait) existing.trait = demo.trait;
            delete existing.passcode;
            matchedOfficialIds.add(existing.id);
        } else {
            const newMember = JSON.parse(JSON.stringify(demo));
            data.committeeMembers.push(newMember);
            matchedOfficialIds.add(newMember.id);
        }
    });

    // Deduplicate any repeated entries for the roster in Tenure 2026 - 2027
    const seenOfficial = new Set();
    data.committeeMembers = data.committeeMembers.filter(m => {
        if (m.tenure === "Tenure 2026 - 2027" && matchedOfficialIds.has(m.id)) {
            if (seenOfficial.has(m.id)) return false;
            seenOfficial.add(m.id);
        }
        return true;
    });

    // Sequence for Tenure 2026 - 2027:
    // 1. Megha (President)
    // 2. Nayna (General Secretary)
    // 3. Farahan (Core Member)
    // 4. Nishita (Core Member)
    // 5. Indhuja (Core Member)
    // 6. Deven (Core Member)
    // 7. Sai (Core Member)
    // 8. Ananya (Core Member)
    // 9. Somyaditya (Core Member)
    // 10. Vedika (Core Member)
    // 11. Ankur (Core Member)
    // 12. Tauheed (Core Member)
    // 13. Dhruv (Core Member)
    // 14. Nikhil (Core Member) -> placed at the very end (#14)
    const officialOrder = [
        "comm-megha",
        "comm-nayna",
        "comm-farahan",
        "comm-nishita",
        "comm-indhuja",
        "comm-deven",
        "comm-sai",
        "comm-ananya",
        "comm-somyaditya",
        "comm-vedika",
        "comm-ankur",
        "comm-tauheed",
        "comm-dhruv"
    ];

    function getRank(m) {
        if (m.id === "comm-nikhil") return 1000;
        const idx = officialOrder.indexOf(m.id);
        if (idx !== -1) return idx;
        return 500;
    }

    data.committeeMembers.sort((a, b) => {
        if (a.tenure === "Tenure 2026 - 2027" && b.tenure === "Tenure 2026 - 2027") {
            return getRank(a) - getRank(b);
        }
        return 0;
    });

    data.committeeMembers.forEach(m => {
        if (m && typeof m === "object") delete m.passcode;
    });
}

const DEFAULT_TEAM_DATA = {
    "tenures": [
        "Tenure 2026 - 2027",
        "Tenure 2025 - 2026",
        "Tenure 2024 - 2025",
        "Founding Tenure"
    ],
    "leaderboard": [],
    "committeeMembers": JSON.parse(JSON.stringify(DEMO_COMMITTEE_MEMBERS)),
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
    ],
    "peerRatings": [],
    "demerits": [],
    "warnings": [],
    "offerLetterRequests": [],
    "appreciations": [
        {
            "id": "appr-sample-1",
            "memberId": "comm-1794259452724",
            "memberName": "Megha",
            "points": 25,
            "reason": "Outstanding initiative leading the National Impromptu Debate Series and mentoring regional chapters.",
            "issuedAt": "Nov 10, 2026"
        },
        {
            "id": "appr-sample-2",
            "memberId": "mem-sample-2",
            "memberName": "Arjun S.",
            "points": 15,
            "reason": "Exemplary facilitation of peer speaking practice and high-energy workshop support.",
            "issuedAt": "Nov 12, 2026"
        }
    ],
    "appreciationTasks": [
        {
            "id": "task-sample-1",
            "title": "Design 5 Instagram Promo Posts for Impromptu Debate Showcase",
            "points": 50,
            "desc": "Create vibrant social media flyers highlighting speaker topics, registration link, and date.",
            "allowTeam": true,
            "status": "open",
            "allottedTo": [],
            "claims": []
        },
        {
            "id": "task-sample-2",
            "title": "Coordinate Speaker Timing & Feedback Forms",
            "points": 40,
            "desc": "Manage timer bell for the live speaking cohort and distribute attendee review links.",
            "allowTeam": false,
            "status": "open",
            "allottedTo": [],
            "claims": []
        }
    ],
    "impactContent": {
        "heroTag": "🇮🇳 Pan-India Movement • 5,000+ Voices",
        "heroTitle": "WHERE NERVOUS TALKERS BECOME NATIONAL LEADERS.",
        "heroLead": "InteractUp was born with a singular mission: to eradicate stage anxiety, dismantle transactional networking, and build a peer-led sanctuary where college students, young MBAs, and aspiring professionals discover the power of their voice.",
        "metrics": [
            { "id": "m1", "num": "5,000+", "label": "Active Student Members", "sub": "Across 45+ premier institutions" },
            { "id": "m2", "num": "120+", "label": "National Showcases", "sub": "Impromptu & parliamentary formats" },
            { "id": "m3", "num": "45+", "label": "Campus Chapters", "sub": "Tier-1 B-schools to regional universities" },
            { "id": "m4", "num": "15,000+", "label": "Peer Connections", "sub": "Zero business-card transactional bias" },
            { "id": "m5", "num": "98%", "label": "Anxiety Reduction", "sub": "Reported within first 3 speaking cohorts" }
        ],
        "pillars": [
            { "id": "p1", "icon": "🎙️", "title": "Fearless Impromptu Expression", "desc": "We throw away rehearsed scripts. Members practice spontaneous 2-minute table topics with instant, loving feedback, making fear on stage vanish forever." },
            { "id": "p2", "icon": "🤝", "title": "Non-Transactional Fellowship", "desc": "No corporate pretenses or resume bragging. First-year undergrads connect as genuine peers with top-tier MBA scholars and startup builders." },
            { "id": "p3", "icon": "💼", "title": "Placement & Corporate Edge", "desc": "Members master spontaneous case studies, unstructured group discussions, and high-pressure interview storytelling that wins dream placements." },
            { "id": "p4", "icon": "🤍", "title": "Mental Wellness & Sanctuary", "desc": "Academic burnout and social isolation are real. Our weekly curated wellness mixers offer an empathetic space to de-stress and be heard." }
        ],
        "hallOfFame": [
            { "id": "h1", "tag": "Flagship Event", "title": "National Inter-College Impromptu Debate Championship", "desc": "Over 1,200 delegates from across 35 campuses competed in spontaneous clash rounds, adjudicated by seasoned debate masters and corporate alumni." },
            { "id": "h2", "tag": "Community Outreach", "title": "Tier-2 & Tier-3 Equal Expression Fellowship", "desc": "Sponsored 100% free speech coaching and English fluency cohorts for over 850 students from small-town colleges seeking equal placement footing." },
            { "id": "h3", "tag": "Executive Mentorship", "title": "Corporate Leaders Fireside & Casing Conclave", "desc": "Partnered with industry directors and McKinsey/BCG alumni to deliver practical casing masterclasses and boardroom communication simulations." }
        ],
        "testimonials": [
            { "id": "t1", "emoji": "🎓", "quote": "In my first week at B-school, I shook every time a professor called my name. Four weeks at InteractUp completely rewired my confidence. I ended up placing in top-bracket consulting.", "name": "Arjun S.", "role": "MBA Student, Class of 2026" },
            { "id": "t2", "emoji": "✨", "quote": "Most college clubs are about ego and hierarchy. InteractUp is the complete opposite. It is an authentic safe space where people genuinely cheer for your growth.", "name": "Rhea K.", "role": "Undergraduate Leader, Delhi Chapter" },
            { "id": "t3", "emoji": "🤍", "quote": "The Connect Circles saved my mental health during placement season. Having a group of 5,000 supportive peers behind you makes you unstoppable.", "name": "Tanvi M.", "role": "Core Committee Member" }
        ],
        "ctaHeading": "Ready to Experience the Movement?",
        "ctaBody": "Join 5,000+ ambitious students across India. Participate in our next impromptu speaking challenge or bring an InteractUp chapter to your college.",
        "ctaWhatsappUrl": "https://chat.whatsapp.com/HrgxdxPQEn9DAlp4PFH6d0",
        "ctaPartnerUrl": "https://forms.gle/EJ5njy2RpcLyCZdo7"
    },
    "vaultContent": {
        "heroTitle": "Career Vault & Tenure Endowments",
        "heroSubtitle": "Official credential repository, institutional assets, board profit-shares, and post-tenure career honors. As you deliver impact, earn appreciation, and maintain high accountability, each executive milestone unlocks automatically.",
        "offerSubtitle": "Authenticated appointment letter on formal InteractUp corporate stationery certifying your tenure, executive role, and community credentials.",
        "offerLockMode": "unlocked",
        "offerMinPoints": 100,
        "exemptPastSubmitters": true,
        "completionSubtitle": "Formal institutional accreditation awarded upon successful conclusion of your official executive tenure with verifiable verification code.",
        "lorSubtitle": "Bespoke executive reference letter signed by Founders & Board of Directors for university admissions, venture grants, and leadership roles. Authored strictly based on your performance, initiative, and appreciation standing during tenure.",
        "alumniSubtitle": "Lifetime VIP access to our closed executive alumni directory, senior corporate mentors, venture capital syndicates, and private alumni mixers worldwide.",
        "boardSubtitle": "Receive annual financial distributions for 20 years post-tenure from the Sovereign Board Fund. Payout allocation is calculated based on net appreciation points, leadership tenure, and zero-infraction standing.",
        "moreSubtitle": "Classified institutional benefits, founder grants, speaker fellowships, and private global roundtables will be unsealed as milestones are conquered."
    }
};

let appTeamData = (() => {
    try {
        const saved = localStorage.getItem("interactup_team_portal_data");
        if (saved) {
            const parsed = JSON.parse(saved);
            const data = {
                tenures: Array.isArray(parsed.tenures) && parsed.tenures.length > 0 ? parsed.tenures : DEFAULT_TEAM_DATA.tenures,
                leaderboard: Array.isArray(parsed.leaderboard) ? parsed.leaderboard : DEFAULT_TEAM_DATA.leaderboard,
                committeeMembers: Array.isArray(parsed.committeeMembers) ? parsed.committeeMembers : DEFAULT_TEAM_DATA.committeeMembers,
                competitions: Array.isArray(parsed.competitions) && parsed.competitions.length > 0 ? parsed.competitions : DEFAULT_TEAM_DATA.competitions,
                peerRatings: Array.isArray(parsed.peerRatings) ? parsed.peerRatings : [],
                demerits: Array.isArray(parsed.demerits) ? parsed.demerits : [],
                warnings: Array.isArray(parsed.warnings) ? parsed.warnings : [],
                offerLetterRequests: Array.isArray(parsed.offerLetterRequests) ? parsed.offerLetterRequests : [],
                appreciations: Array.isArray(parsed.appreciations) ? parsed.appreciations : (DEFAULT_TEAM_DATA.appreciations || []),
                appreciationTasks: Array.isArray(parsed.appreciationTasks) && parsed.appreciationTasks.length > 0 ? parsed.appreciationTasks : DEFAULT_TEAM_DATA.appreciationTasks,
                impactContent: (parsed.impactContent && typeof parsed.impactContent === 'object') ? parsed.impactContent : DEFAULT_TEAM_DATA.impactContent,
                vaultContent: (parsed.vaultContent && typeof parsed.vaultContent === 'object') ? parsed.vaultContent : JSON.parse(JSON.stringify(DEFAULT_TEAM_DATA.vaultContent))
            };
            ensureDemoCommitteeMembers(data);
            return data;
        }
    } catch (e) {
        console.error("Failed to parse saved team data", e);
    }
    const fallback = JSON.parse(JSON.stringify(DEFAULT_TEAM_DATA));
    ensureDemoCommitteeMembers(fallback);
    return fallback;
})();

// ==========================================================================
// 🔥 GOOGLE FIREBASE REALTIME CLOUD DATABASE INTEGRATION
// ==========================================================================
const firebaseConfig = {
    apiKey: "AIzaSyChfIHDUso_wY3AdWSO4O4Dw9MRmo7z_Ts",
    authDomain: "interactup-3881b.firebaseapp.com",
    projectId: "interactup-3881b",
    storageBucket: "interactup-3881b.firebasestorage.app",
    messagingSenderId: "318701080525",
    appId: "1:318701080525:web:c99980fffceea178dd3e84"
};

let db = null;
let auth = null;
let isFirestoreSeeded = false;

function getSecondaryAuthApp() {
    if (typeof firebase === 'undefined' || !firebase.initializeApp) return null;
    const existing = firebase.apps.find(a => a.name === "AdminUserCreator");
    return existing || firebase.initializeApp(firebaseConfig, "AdminUserCreator");
}

function resolveCommitteeMemberFromUser(user) {
    if (!user || !user.email) return null;
    const email = user.email.trim().toLowerCase();
    const localPart = email.split("@")[0].replace(/[^a-z0-9]/g, "");
    const members = appTeamData.committeeMembers || [];
    return members.find(m => m.email && m.email.trim().toLowerCase() === email)
        || members.find(m => {
            const cleanName = (m.name || "").toLowerCase().replace(/[^a-z0-9]/g, "");
            return cleanName && (localPart === cleanName || localPart.startsWith(cleanName));
        })
        || null;
}

try {
    if (typeof firebase !== 'undefined' && firebase.initializeApp) {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        db = firebase.firestore();
        if (typeof firebase.auth === 'function') {
            auth = firebase.auth();
            auth.onAuthStateChanged((user) => {
                sessionStorage.removeItem("interactup_is_admin");
                sessionStorage.removeItem("interactup_member_id");
                if (user && user.uid === ADMIN_AUTH_UID) {
                    if (typeof activateAdminMode === 'function') activateAdminMode();
                } else if (user) {
                    if (typeof isAdminModeActive !== 'undefined' && isAdminModeActive && typeof deactivateAdminMode === 'function') {
                        isAdminModeActive = false;
                        document.body.classList.remove("admin-mode-active");
                    }
                    const matched = resolveCommitteeMemberFromUser(user);
                    if (matched && !matched.portalLocked) {
                        currentLoggedInMember = matched;
                        const btnTeam = document.getElementById("btn-team-login-trigger");
                        if (btnTeam) {
                            const label = btnTeam.querySelector(".nav-label");
                            if (label) label.textContent = `👤 ${matched.name}`;
                            btnTeam.style.borderColor = "#10b981";
                        }
                    } else if (matched && matched.portalLocked) {
                        auth.signOut().catch(() => {});
                    }
                } else {
                    currentLoggedInMember = null;
                    if (typeof isAdminModeActive !== 'undefined' && isAdminModeActive) {
                        isAdminModeActive = false;
                        document.body.classList.remove("admin-mode-active");
                        const dock = document.getElementById("admin-persistent-dock");
                        if (dock) dock.classList.remove("active");
                    }
                    const btnTeam = document.getElementById("btn-team-login-trigger");
                    if (btnTeam) {
                        const label = btnTeam.querySelector(".nav-label");
                        if (label) label.textContent = "Team Login";
                        btnTeam.style.borderColor = "";
                    }
                }
            });
        }
        console.log("🔥 Firebase initialized. Listening for real-time cloud updates...");
        
        db.collection("interactup_config").doc("team_data").onSnapshot((doc) => {
            if (doc.exists) {
                const cloud = doc.data();
                if (cloud && typeof cloud === 'object') {
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
                    if (Array.isArray(cloud.peerRatings)) {
                        appTeamData.peerRatings = cloud.peerRatings;
                    }
                    if (Array.isArray(cloud.demerits)) {
                        appTeamData.demerits = cloud.demerits;
                    }
                    if (Array.isArray(cloud.warnings)) {
                        appTeamData.warnings = cloud.warnings;
                    }
                    if (Array.isArray(cloud.offerLetterRequests)) {
                        appTeamData.offerLetterRequests = cloud.offerLetterRequests;
                    }
                    if (Array.isArray(cloud.appreciations)) {
                        appTeamData.appreciations = cloud.appreciations;
                    }
                    if (Array.isArray(cloud.appreciationTasks)) {
                        appTeamData.appreciationTasks = cloud.appreciationTasks;
                    }
                    if (cloud.impactContent && typeof cloud.impactContent === 'object') {
                        appTeamData.impactContent = cloud.impactContent;
                    }
                    if (cloud.vaultContent && typeof cloud.vaultContent === 'object') {
                        appTeamData.vaultContent = cloud.vaultContent;
                        if (typeof renderMemberVaultTab === 'function') renderMemberVaultTab();
                        if (typeof renderAdminVaultSettings === 'function') renderAdminVaultSettings();
                    }
                    ensureDemoCommitteeMembers(appTeamData);
                    if (typeof currentLoggedInMember !== 'undefined' && currentLoggedInMember) {
                        const updatedSelf = appTeamData.committeeMembers.find(m => m.id === currentLoggedInMember.id);
                        if (updatedSelf) currentLoggedInMember = updatedSelf;
                        if (typeof renderMemberPortal === 'function') renderMemberPortal();
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
                    if (typeof renderAdminDemeritDropdown === 'function') renderAdminDemeritDropdown();
                    if (typeof renderAdminDemeritsList === 'function') renderAdminDemeritsList();
                    if (typeof renderAdminWarningDropdown === 'function') renderAdminWarningDropdown();
                    if (typeof renderAdminWarningsList === 'function') renderAdminWarningsList();
                    if (typeof renderAdminOfferLetterRequestsList === 'function') renderAdminOfferLetterRequestsList();
                    if (typeof renderAdminVaultSettings === 'function') renderAdminVaultSettings();
                    if (typeof renderMemberVaultTab === 'function') renderMemberVaultTab();
                    if (typeof renderAdminAppreciationDropdown === 'function') renderAdminAppreciationDropdown();
                    if (typeof renderAdminAppreciationsList === 'function') renderAdminAppreciationsList();
                    if (typeof renderPublicLeaderboardLogsBin === 'function') renderPublicLeaderboardLogsBin();
                    if (typeof renderMemberLogsBinTab === 'function') renderMemberLogsBinTab();
                    if (typeof renderAdminTenureChips === 'function') renderAdminTenureChips();
                    if (typeof renderAdminCommitteeTenureDropdown === 'function') renderAdminCommitteeTenureDropdown();
                    if (typeof renderAdminCommitteeRosterList === 'function') renderAdminCommitteeRosterList();
                    if (typeof renderAdminTasksList === 'function') renderAdminTasksList();
                    if (typeof renderAdminRatingsFeed === 'function') renderAdminRatingsFeed();
                    if (typeof renderAdminEventsList === 'function') renderAdminEventsList();
                    if (typeof renderAdminExportCode === 'function') renderAdminExportCode();
                    if (typeof renderImpactShowcase === 'function') renderImpactShowcase();
                }
            } else if (!READ_ONLY_SHOWCASE_MODE && !isFirestoreSeeded && auth && auth.currentUser && auth.currentUser.uid === ADMIN_AUTH_UID) {
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

let carouselTotalSlides = 0;

function renderLiveEventsCarousel() {
    const container = document.getElementById("events-carousel-container");
    const dotsContainer = document.getElementById("carousel-dots");
    if (!container || !dotsContainer) return;
    
    container.innerHTML = "";
    dotsContainer.innerHTML = "";
    
    const impactSlide = {
        id: "event-impact-branding",
        title: "National Impact & Achievements Showcase",
        badge: "🌟 Brand Impact & Footprint",
        desc: "5,000+ Students Empowered across 45+ Premier Colleges • 120+ Public Speaking & Debate Showcases. Discover how InteractUp creates real student goodwill & leadership across India.",
        link: "#impact-showcase",
        template: "impact",
        icon: "🌟",
        isImpact: true
    };
    
    const allSlides = [...liveEvents, impactSlide];
    carouselTotalSlides = allSlides.length;
    
    if (allSlides.length === 0) {
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
    
    allSlides.forEach((ev, idx) => {
        const card = document.createElement("div");
        card.className = `live-event-card theme-${ev.template} ${idx === currentCarouselIndex ? 'active' : ''}`;
        
        let badgeClass = "badge-speaking";
        if (ev.template === "wellness") badgeClass = "badge-wellness";
        if (ev.template === "casing") badgeClass = "badge-casing";
        if (ev.template === "creative") badgeClass = "badge-creative";
        if (ev.template === "impact") badgeClass = "badge-impact";
        
        const safeBadge = escapeHtml(ev.badge || "");
        const safeTitle = escapeHtml(ev.title || "");
        const safeDesc = escapeHtml(ev.desc || "");
        const rawLink = String(ev.link || "#").trim();
        const safeLink = /^https?:\/\//i.test(rawLink) ? escapeHtml(rawLink) : "#";

        if (ev.isImpact) {
            card.innerHTML = `
                <div class="event-card-header">
                    <span class="event-card-badge ${badgeClass}">${safeBadge}</span>
                </div>
                <h4 style="color: #f59e0b;">${safeTitle}</h4>
                <p>${safeDesc}</p>
                <button type="button" class="btn btn-primary btn-open-impact-showcase" style="background: linear-gradient(135deg, #f59e0b, #ef4444); border: none; font-weight: 800; width: 100%;">
                    ✨ Explore Impact & Achievements ➜
                </button>
            `;
        } else {
            card.innerHTML = `
                <div class="event-card-header">
                    <span class="event-card-badge ${badgeClass}">${safeBadge}</span>
                </div>
                <h4>${safeTitle}</h4>
                <p>${safeDesc}</p>
                <a href="${safeLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-apply-event">Apply Now & Register</a>
            `;
        }
        
        container.appendChild(card);
        
        const dot = document.createElement("span");
        dot.className = `indicator ${idx === currentCarouselIndex ? 'active' : ''}`;
        dot.addEventListener("click", () => {
            selectCarouselCard(idx);
            playClickSound();
        });
        dotsContainer.appendChild(dot);
    });
    
    container.querySelectorAll(".btn-open-impact-showcase").forEach(btn => {
        btn.addEventListener("click", () => {
            if (typeof openImpactShowcase === 'function') openImpactShowcase();
        });
    });
    
    startCarouselLoop();
}

function selectCarouselCard(index) {
    if (index < 0 || index >= carouselTotalSlides) return;
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
    if (nextIndex >= carouselTotalSlides) nextIndex = 0;
    selectCarouselCard(nextIndex);
}

function startCarouselLoop() {
    if (carouselTotalSlides <= 1) return;
    stopCarouselLoop();
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
        
        const safeTitle = escapeHtml(ev.title || "");
        const safeBadge = escapeHtml(ev.badge || "");
        const safeDesc = escapeHtml(ev.desc || "");
        const rawLink = String(ev.link || "#").trim();
        const safeLink = /^https?:\/\//i.test(rawLink) ? escapeHtml(rawLink) : "#";

        row.innerHTML = `
            <td><span class="table-event-name">${safeTitle}</span></td>
            <td><span class="event-card-badge ${badgeClass}" style="display:inline-block;">${safeBadge}</span></td>
            <td><div class="table-event-desc">${safeDesc}</div></td>
            <td><a href="${safeLink}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">Quick Apply</a></td>
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
let currentActiveTenure = (appTeamData.tenures && appTeamData.tenures.includes("Tenure 2026 - 2027")) 
    ? "Tenure 2026 - 2027" 
    : (appTeamData.tenures[0] || "Tenure 2026 - 2027");
let currentCommitteeViewMode = 'orbital'; // 'orbital' | 'grid'
let currentOrbitalIndex = 0;
let adminCommPhotoData = "";

function saveTeamData() {
    if (READ_ONLY_SHOWCASE_MODE) return;
    try {
        localStorage.setItem("interactup_team_portal_data", JSON.stringify(appTeamData));
        localStorage.setItem("interactup_events", JSON.stringify(appTeamData.competitions));
        if (db && auth && auth.currentUser && auth.currentUser.uid === ADMIN_AUTH_UID) {
            db.collection("interactup_config").doc("team_data").set(appTeamData)
                .then(() => {
                    console.log("🔥 Successfully synced to Firebase Cloud Database!");
                    const cloudSyncStatus = document.getElementById("cloud-sync-status");
                    if (cloudSyncStatus) {
                        cloudSyncStatus.style.display = "block";
                        cloudSyncStatus.style.color = "#10b981";
                        cloudSyncStatus.innerHTML = "✓ Auto-saved & Synced to Live Site! 🚀";
                        setTimeout(() => {
                            if (cloudSyncStatus) cloudSyncStatus.style.display = "none";
                        }, 4000);
                    }
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
    if (typeof renderAdminDemeritDropdown === 'function') renderAdminDemeritDropdown();
    if (typeof renderAdminDemeritsList === 'function') renderAdminDemeritsList();
    if (typeof renderAdminWarningDropdown === 'function') renderAdminWarningDropdown();
    if (typeof renderAdminWarningsList === 'function') renderAdminWarningsList();
    if (typeof renderAdminOfferLetterRequestsList === 'function') renderAdminOfferLetterRequestsList();
    if (typeof renderAdminVaultSettings === 'function') renderAdminVaultSettings();
    if (typeof renderMemberVaultTab === 'function') renderMemberVaultTab();
    renderAdminTenureChips();
    renderAdminCommitteeTenureDropdown();
    renderAdminCommitteeRosterList();
    if (typeof renderAdminTasksList === 'function') renderAdminTasksList();
    if (typeof renderAdminRatingsFeed === 'function') renderAdminRatingsFeed();
    if (typeof renderMemberPortal === 'function' && typeof currentLoggedInMember !== 'undefined' && currentLoggedInMember) renderMemberPortal();
    renderAdminExportCode();
}

// 1. RENDER MAIN PAGE CORE COMMITTEE DIRECTORY (3D ORBITAL & PLAIN GRID)
function renderCoreCommitteeMainView() {
    const tabsContainer = document.getElementById("committee-tenure-tabs-container");
    const orbitalWrapper = document.getElementById("committee-orbital-wrapper");
    const plainWrapper = document.getElementById("committee-plain-wrapper");
    const emptyState = document.getElementById("committee-empty-state");
    
    if (!tabsContainer) return;
    
    if (!appTeamData.tenures.includes(currentActiveTenure)) {
        currentActiveTenure = (appTeamData.tenures.includes("Tenure 2026 - 2027")) 
            ? "Tenure 2026 - 2027" 
            : (appTeamData.tenures[0] || "");
    }
    
    tabsContainer.innerHTML = appTeamData.tenures.map(tenure => {
        const isActive = tenure === currentActiveTenure ? "active" : "";
        return `<span class="tenure-pill ${isActive}" data-tenure="${escapeHtml(tenure)}">${escapeHtml(tenure)}</span>`;
    }).join("");
    
    tabsContainer.querySelectorAll(".tenure-pill").forEach(pill => {
        pill.addEventListener("click", function() {
            currentActiveTenure = this.getAttribute("data-tenure");
            currentOrbitalIndex = 0;
            renderCoreCommitteeMainView();
            playClickSound();
        });
    });
    
    const members = appTeamData.committeeMembers.filter(m => m.tenure === currentActiveTenure && !m.portalHidden);
    
    if (members.length === 0) {
        if (orbitalWrapper) orbitalWrapper.style.display = "none";
        if (plainWrapper) plainWrapper.style.display = "none";
        if (emptyState) {
            emptyState.style.display = "inline-flex";
            const emptyText = document.getElementById("committee-empty-state-text");
            if (emptyText) emptyText.textContent = `${currentActiveTenure}: Profiles Under Curation`;
        }
        return;
    }
    
    if (emptyState) emptyState.style.display = "none";
    if (currentOrbitalIndex >= members.length) currentOrbitalIndex = 0;
    
    if (currentCommitteeViewMode === 'orbital') {
        if (orbitalWrapper) orbitalWrapper.style.display = "block";
        if (plainWrapper) plainWrapper.style.display = "none";
        renderOrbitalStage(members);
    } else {
        if (orbitalWrapper) orbitalWrapper.style.display = "none";
        if (plainWrapper) plainWrapper.style.display = "block";
        renderPlainGrid(members);
    }
}

function renderOrbitalStage(members) {
    const orbitalStage = document.getElementById("committee-orbital-stage");
    if (!orbitalStage) return;

    orbitalStage.innerHTML = members.map((m, idx) => `
        <div class="orbital-member-card ${isAdminModeActive ? 'admin-card-active' : ''}" data-idx="${idx}" id="orbital-card-${idx}">
            ${isAdminModeActive ? `
                <div class="member-card-admin-bar">
                    <button type="button" class="btn-card-move-prev" data-id="${m.id}" data-idx="${idx}" ${idx === 0 ? 'disabled' : ''} title="Move Left / Earlier">⬅️</button>
                    <span class="member-order-badge">#${idx + 1}</span>
                    <button type="button" class="btn-card-move-next" data-id="${m.id}" data-idx="${idx}" ${idx === members.length - 1 ? 'disabled' : ''} title="Move Right / Later">➡️</button>
                    <button type="button" class="btn-card-edit-member" data-id="${m.id}" title="Edit Member & Photo">✏️</button>
                    <button type="button" class="btn-card-delete-member" data-id="${m.id}" title="Remove Member">🗑️</button>
                </div>
            ` : ''}
            <div class="comm-card-trait-box">
                ${escapeHtml(m.trait || "Dedicated Student Leader | Empowering Peers")}
            </div>
            <div class="comm-card-photo-wrapper">
                <img src="${m.image || 'assets/images/logo.png'}" alt="${escapeHtml(m.name)}" class="comm-card-img" onerror="this.src='assets/images/logo.png'">
                <div class="comm-card-photo-overlay"></div>
            </div>
            <div class="comm-card-bottom">
                <span class="comm-card-arrow">↗</span>
                <div class="comm-card-name">${escapeHtml(m.name)}</div>
                <div class="comm-card-role">${escapeHtml(m.desc || 'Core Committee Member')}</div>
            </div>
        </div>
    `).join("");

    updateOrbitalPositions(members);
    renderOrbitalIndicators(members);
    attachOrbitalEventListeners(members);
}

function updateOrbitalPositions(members) {
    const N = members.length;
    const isMobile = window.innerWidth <= 768;

    members.forEach((m, idx) => {
        const card = document.getElementById(`orbital-card-${idx}`);
        if (!card) return;

        let offset = idx - currentOrbitalIndex;
        while (offset > N / 2) offset -= N;
        while (offset < -N / 2) offset += N;

        card.classList.remove("is-active", "is-flank");

        if (offset === 0) {
            // Center / Active card
            card.classList.add("is-active");
            const tz = isMobile ? 35 : 70;
            const scale = isMobile ? 1.0 : 1.05;
            card.style.transform = `translateX(0px) translateZ(${tz}px) rotateY(0deg) scale(${scale})`;
            card.style.opacity = "1";
            card.style.filter = "blur(0px)";
            card.style.zIndex = "10";
            card.style.pointerEvents = "auto";
        } else if (offset === -1 || (N === 2 && offset === 1 && currentOrbitalIndex === 1)) {
            // Left Flank
            card.classList.add("is-flank");
            const tx = isMobile ? -145 : -260;
            const tz = isMobile ? -35 : -60;
            const rotY = isMobile ? 18 : 24;
            const scale = isMobile ? 0.78 : 0.82;
            card.style.transform = `translateX(${tx}px) translateZ(${tz}px) rotateY(${rotY}deg) scale(${scale})`;
            card.style.opacity = "0.55";
            card.style.filter = "blur(3.5px)";
            card.style.zIndex = "5";
            card.style.pointerEvents = "auto";
        } else if (offset === 1) {
            // Right Flank
            card.classList.add("is-flank");
            const tx = isMobile ? 145 : 260;
            const tz = isMobile ? -35 : -60;
            const rotY = isMobile ? -18 : -24;
            const scale = isMobile ? 0.78 : 0.82;
            card.style.transform = `translateX(${tx}px) translateZ(${tz}px) rotateY(${rotY}deg) scale(${scale})`;
            card.style.opacity = "0.55";
            card.style.filter = "blur(3.5px)";
            card.style.zIndex = "5";
            card.style.pointerEvents = "auto";
        } else {
            // Background / Far card
            const tx = offset > 0 ? (isMobile ? 240 : 420) : (isMobile ? -240 : -420);
            const tz = -150;
            const scale = 0.65;
            card.style.transform = `translateX(${tx}px) translateZ(${tz}px) scale(${scale})`;
            card.style.opacity = "0";
            card.style.filter = "blur(8px)";
            card.style.zIndex = "1";
            card.style.pointerEvents = "none";
        }
    });
}

function renderOrbitalIndicators(members) {
    const container = document.getElementById("committee-orbital-indicators");
    if (!container) return;
    container.innerHTML = members.map((m, idx) => `
        <span class="orbital-indicator-dot ${idx === currentOrbitalIndex ? 'active' : ''}" data-idx="${idx}" title="${escapeHtml(m.name)}"></span>
    `).join("");

    container.querySelectorAll(".orbital-indicator-dot").forEach(dot => {
        dot.addEventListener("click", function() {
            currentOrbitalIndex = parseInt(this.getAttribute("data-idx"), 10);
            updateOrbitalPositions(members);
            renderOrbitalIndicators(members);
            playClickSound();
        });
    });
}

function attachOrbitalEventListeners(members) {
    const btnPrev = document.getElementById("btn-orbital-prev");
    const btnNext = document.getElementById("btn-orbital-next");
    const btnSeeAll = document.getElementById("btn-orbital-see-all");

    if (btnPrev) {
        btnPrev.onclick = () => {
            currentOrbitalIndex = (currentOrbitalIndex - 1 + members.length) % members.length;
            updateOrbitalPositions(members);
            renderOrbitalIndicators(members);
            playClickSound();
        };
    }

    if (btnNext) {
        btnNext.onclick = () => {
            currentOrbitalIndex = (currentOrbitalIndex + 1) % members.length;
            updateOrbitalPositions(members);
            renderOrbitalIndicators(members);
            playClickSound();
        };
    }

    if (btnSeeAll) {
        btnSeeAll.onclick = () => {
            currentCommitteeViewMode = 'grid';
            renderCoreCommitteeMainView();
            playClickSound();
        };
    }

    // Direct card click: brings card to center
    members.forEach((m, idx) => {
        const card = document.getElementById(`orbital-card-${idx}`);
        if (card) {
            card.onclick = (e) => {
                if (e.target.closest(".member-card-admin-bar")) return;
                if (idx !== currentOrbitalIndex) {
                    currentOrbitalIndex = idx;
                    updateOrbitalPositions(members);
                    renderOrbitalIndicators(members);
                    playClickSound();
                }
            };
        }
    });

    // Touch swipe gestures
    const viewport = document.getElementById("orbital-stage-viewport");
    if (viewport && !viewport._hasTouchListeners) {
        viewport._hasTouchListeners = true;
        let touchStartX = 0;
        viewport.addEventListener("touchstart", (e) => {
            if (e.changedTouches && e.changedTouches[0]) {
                touchStartX = e.changedTouches[0].screenX;
            }
        }, { passive: true });
        viewport.addEventListener("touchend", (e) => {
            if (!e.changedTouches || !e.changedTouches[0]) return;
            const touchEndX = e.changedTouches[0].screenX;
            const diffX = touchEndX - touchStartX;
            const currentMembers = appTeamData.committeeMembers.filter(m => m.tenure === currentActiveTenure);
            if (currentMembers.length > 1 && Math.abs(diffX) > 40) {
                if (diffX < 0) {
                    currentOrbitalIndex = (currentOrbitalIndex + 1) % currentMembers.length;
                } else {
                    currentOrbitalIndex = (currentOrbitalIndex - 1 + currentMembers.length) % currentMembers.length;
                }
                updateOrbitalPositions(currentMembers);
                renderOrbitalIndicators(currentMembers);
                playClickSound();
            }
        }, { passive: true });
    }

    if (isAdminModeActive) {
        attachCommitteeAdminListeners(members);
    }
}

function renderPlainGrid(members) {
    const plainGrid = document.getElementById("committee-plain-grid");
    const btnReturn = document.getElementById("btn-switch-to-orbital");
    if (!plainGrid) return;

    plainGrid.innerHTML = members.map((m, idx) => `
        <div class="plain-member-card ${isAdminModeActive ? 'admin-card-active' : ''}" data-idx="${idx}">
            ${isAdminModeActive ? `
                <div class="member-card-admin-bar">
                    <button type="button" class="btn-card-move-prev" data-id="${m.id}" data-idx="${idx}" ${idx === 0 ? 'disabled' : ''} title="Move Left / Earlier">⬅️</button>
                    <span class="member-order-badge">#${idx + 1}</span>
                    <button type="button" class="btn-card-move-next" data-id="${m.id}" data-idx="${idx}" ${idx === members.length - 1 ? 'disabled' : ''} title="Move Right / Later">➡️</button>
                    <button type="button" class="btn-card-edit-member" data-id="${m.id}" title="Edit Member & Photo">✏️</button>
                    <button type="button" class="btn-card-delete-member" data-id="${m.id}" title="Remove Member">🗑️</button>
                </div>
            ` : ''}
            <div class="comm-card-trait-box">
                ${escapeHtml(m.trait || "Dedicated Student Leader | Empowering Peers")}
            </div>
            <div class="comm-card-photo-wrapper">
                <img src="${m.image || 'assets/images/logo.png'}" alt="${escapeHtml(m.name)}" class="comm-card-img" onerror="this.src='assets/images/logo.png'">
                <div class="comm-card-photo-overlay"></div>
            </div>
            <div class="comm-card-bottom">
                <span class="comm-card-arrow">↗</span>
                <div class="comm-card-name">${escapeHtml(m.name)}</div>
                <div class="comm-card-role">${escapeHtml(m.desc || 'Core Committee Member')}</div>
            </div>
        </div>
    `).join("");

    if (btnReturn) {
        btnReturn.onclick = () => {
            currentCommitteeViewMode = 'orbital';
            renderCoreCommitteeMainView();
            playClickSound();
        };
    }

    if (isAdminModeActive) {
        attachCommitteeAdminListeners(members);
    }
}

function attachCommitteeAdminListeners(members) {
    document.querySelectorAll(".btn-card-move-prev").forEach(btn => {
        btn.onclick = function(e) {
            e.stopPropagation();
            const idx = parseInt(this.getAttribute("data-idx"), 10);
            if (idx > 0) {
                moveCommitteeMemberOrder(currentActiveTenure, idx, idx - 1);
            }
        };
    });
    document.querySelectorAll(".btn-card-move-next").forEach(btn => {
        btn.onclick = function(e) {
            e.stopPropagation();
            const idx = parseInt(this.getAttribute("data-idx"), 10);
            if (idx < members.length - 1) {
                moveCommitteeMemberOrder(currentActiveTenure, idx, idx + 1);
            }
        };
    });
    document.querySelectorAll(".btn-card-edit-member").forEach(btn => {
        btn.onclick = function(e) {
            e.stopPropagation();
            const id = this.getAttribute("data-id");
            openEditCommitteeMemberModal(id);
        };
    });
    document.querySelectorAll(".btn-card-delete-member").forEach(btn => {
        btn.onclick = function(e) {
            e.stopPropagation();
            const id = this.getAttribute("data-id");
            if (confirm("Remove this member profile from " + currentActiveTenure + "?")) {
                appTeamData.committeeMembers = appTeamData.committeeMembers.filter(x => x.id !== id);
                saveTeamData();
                playClickSound();
            }
        };
    });
}

// HELPER: REORDER COMMITTEE MEMBERS WITHIN A TENURE
function moveCommitteeMemberOrder(tenure, fromIdx, toIdx) {
    const tenureMembers = appTeamData.committeeMembers.filter(m => m.tenure === tenure);
    if (!tenureMembers[fromIdx] || !tenureMembers[toIdx]) return;
    
    const memberA = tenureMembers[fromIdx];
    const memberB = tenureMembers[toIdx];
    
    const realIndexA = appTeamData.committeeMembers.indexOf(memberA);
    const realIndexB = appTeamData.committeeMembers.indexOf(memberB);
    
    if (realIndexA !== -1 && realIndexB !== -1) {
        appTeamData.committeeMembers[realIndexA] = memberB;
        appTeamData.committeeMembers[realIndexB] = memberA;
        saveTeamData();
        playClickSound();
    }
}

// Window resize listener to keep 3D orbital positions calibrated
window.addEventListener("resize", () => {
    if (currentCommitteeViewMode === 'orbital') {
        const members = appTeamData.committeeMembers.filter(m => m.tenure === currentActiveTenure && !m.portalHidden);
        if (members && members.length > 0) updateOrbitalPositions(members);
    }
});

// 2. RENDER VIEW-ONLY TEAM LEADERBOARD
function renderLeaderboardTable(filterText = "") {
    const tbody = document.getElementById("leaderboard-table-body");
    if (typeof renderPublicLeaderboardLogsBin === 'function') renderPublicLeaderboardLogsBin();
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

// 3. ADMIN: DIRECT POINTS REWRITER & LEADERBOARD TABLE
function renderAdminLeaderboardList() {
    const tbody = document.getElementById("admin-leaderboard-list");
    if (!tbody) return;
    
    const sorted = [...appTeamData.leaderboard].sort((a, b) => (b.points || 0) - (a.points || 0));
    
    if (sorted.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 20px; color: var(--text-muted);">No members added yet. Add one on the left!</td></tr>`;
        return;
    }
    
    tbody.innerHTML = sorted.map((m, idx) => `
        <tr>
            <td style="font-size: 0.88rem; color: var(--text-primary); font-weight: 700;">
                <span style="color: var(--primary); font-weight: 800; font-size: 0.78rem; margin-right: 4px;">#${idx + 1}</span>
                <strong>${escapeHtml(m.name)}</strong>
            </td>
            <td>
                <div style="display: flex; align-items: center; gap: 4px;">
                    <input type="number" class="admin-rewrite-input" data-id="${m.id}" value="${m.points}" style="width: 70px; padding: 4px 6px; font-weight: 800; font-size: 0.85rem; border-radius: 6px; border: 1.5px solid var(--border-bold); background: var(--bg-surface); color: #10b981; text-align: center;">
                    <button type="button" class="btn-set-points" data-id="${m.id}" title="Rewrite & Save Exact Points" style="padding: 4px 8px; font-size: 0.72rem; font-weight: 800; border-radius: 6px; background: #10b981; color: #fff; border: none; cursor: pointer;">Set</button>
                </div>
            </td>
            <td>
                <div style="display: flex; align-items: center; gap: 4px;">
                    <input type="number" class="admin-add-delta-input" data-id="${m.id}" placeholder="+/-" style="width: 55px; padding: 4px 4px; font-size: 0.8rem; border-radius: 6px; border: 1px solid var(--border-bold); background: var(--bg-surface); color: var(--text-primary); text-align: center;">
                    <button type="button" class="btn-add-delta-points" data-id="${m.id}" title="Add Custom Points" style="padding: 4px 8px; font-size: 0.72rem; font-weight: 800; border-radius: 6px; background: var(--primary); color: #fff; border: none; cursor: pointer;">Add</button>
                    <button type="button" class="quick-adjust-btn" data-id="${m.id}" data-delta="10" title="Quick +10">+10</button>
                    <button type="button" class="quick-adjust-btn" data-id="${m.id}" data-delta="50" title="Quick +50">+50</button>
                </div>
            </td>
            <td>
                <button type="button" class="btn-delete-row" data-id="${m.id}" title="Remove Member">✕</button>
            </td>
        </tr>
    `).join("");
    
    // Wire Direct Rewrite Set buttons
    tbody.querySelectorAll(".btn-set-points").forEach(btn => {
        btn.addEventListener("click", function() {
            const id = this.getAttribute("data-id");
            const input = tbody.querySelector(`.admin-rewrite-input[data-id="${id}"]`);
            if (!input) return;
            const newPoints = parseInt(input.value, 10);
            if (isNaN(newPoints)) return;
            const mem = appTeamData.leaderboard.find(x => x.id === id);
            if (mem) {
                mem.points = Math.max(0, newPoints);
                saveTeamData();
                playClickSound();
            }
        });
    });
    
    // Wire Enter key in Rewrite inputs
    tbody.querySelectorAll(".admin-rewrite-input").forEach(input => {
        input.addEventListener("keydown", function(e) {
            if (e.key === "Enter") {
                const id = this.getAttribute("data-id");
                const newPoints = parseInt(this.value, 10);
                if (isNaN(newPoints)) return;
                const mem = appTeamData.leaderboard.find(x => x.id === id);
                if (mem) {
                    mem.points = Math.max(0, newPoints);
                    saveTeamData();
                    playClickSound();
                }
            }
        });
    });
    
    // Wire Add Custom Delta buttons
    tbody.querySelectorAll(".btn-add-delta-points").forEach(btn => {
        btn.addEventListener("click", function() {
            const id = this.getAttribute("data-id");
            const input = tbody.querySelector(`.admin-add-delta-input[data-id="${id}"]`);
            if (!input) return;
            const delta = parseInt(input.value, 10);
            if (isNaN(delta) || delta === 0) return;
            const mem = appTeamData.leaderboard.find(x => x.id === id);
            if (mem) {
                mem.points = Math.max(0, (mem.points || 0) + delta);
                saveTeamData();
                playClickSound();
            }
        });
    });
    
    // Quick adjust (+10, +50)
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
    
    // Delete row
    tbody.querySelectorAll(".btn-delete-row").forEach(btn => {
        btn.addEventListener("click", function() {
            const id = this.getAttribute("data-id");
            if (confirm("Remove this member from leaderboard?")) {
                appTeamData.leaderboard = appTeamData.leaderboard.filter(x => x.id !== id);
                saveTeamData();
                playClickSound();
            }
        });
    });
}

// 3B. ADMIN: DEMERITS (NEGATIVE POINTS) DROPDOWN & LOG
function renderAdminDemeritDropdown() {
    const select = document.getElementById("admin-demerit-member-select");
    const checklist = document.getElementById("admin-demerit-members-checklist");
    const countBadge = document.getElementById("admin-demerit-selected-count");
    const searchInput = document.getElementById("admin-demerit-member-search");
    const btnSelectAll = document.getElementById("btn-demerit-select-all");
    const btnDeselectAll = document.getElementById("btn-demerit-deselect-all");
    
    if (!checklist) return;

    const memberMap = new Map();
    (appTeamData.committeeMembers || []).forEach(m => {
        if (m && m.name) {
            memberMap.set(m.name.trim().toLowerCase(), { id: m.id, name: m.name, sub: (m.tenure || "Tenure") + " (" + (m.desc || "Member") + ")" });
        }
    });
    (appTeamData.leaderboard || []).forEach(l => {
        if (l && l.name) {
            const key = l.name.trim().toLowerCase();
            if (!memberMap.has(key)) {
                memberMap.set(key, { id: l.id, name: l.name, sub: "Leaderboard Roster" });
            }
        }
    });
    
    const members = Array.from(memberMap.values()).sort((a, b) => a.name.localeCompare(b.name));
    
    // Populate fallback select
    if (select) {
        if (members.length === 0) {
            select.innerHTML = `<option value="">No members available</option>`;
        } else {
            select.innerHTML = members.map(m => `<option value="${m.id}" data-name="${escapeHtml(m.name)}">${escapeHtml(m.name)} — ${escapeHtml(m.sub)}</option>`).join("");
        }
    }
    
    if (members.length === 0) {
        checklist.innerHTML = `<div style="padding: 14px; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No members available. Add members in the leaderboard panel.</div>`;
        if (countBadge) countBadge.textContent = "0 selected";
        return;
    }
    
    // Preserve checked state if re-rendering
    const currentlyChecked = new Set();
    checklist.querySelectorAll(".demerit-chk-input:checked").forEach(chk => {
        currentlyChecked.add(chk.value);
    });

    checklist.innerHTML = members.map(m => {
        const isChecked = currentlyChecked.has(m.id);
        return `
        <label class="demerit-member-card${isChecked ? ' selected' : ''}" for="demerit-chk-${m.id}" data-name="${escapeHtml(m.name.toLowerCase())}">
            <input type="checkbox" class="demerit-chk-input" id="demerit-chk-${m.id}" value="${m.id}" data-name="${escapeHtml(m.name)}"${isChecked ? ' checked' : ''}>
            <div class="demerit-member-info">
                <strong>${escapeHtml(m.name)}</strong>
                <span>${escapeHtml(m.sub)}</span>
            </div>
        </label>
        `;
    }).join("") + `<div id="demerit-search-empty-notice" style="display: none; padding: 12px; text-align: center; color: var(--text-muted); font-size: 0.82rem; grid-column: 1 / -1;">No members found matching your search.</div>`;
    
    function updateSelectedCount() {
        const checked = checklist.querySelectorAll(".demerit-chk-input:checked");
        if (countBadge) countBadge.textContent = `${checked.length} selected`;
        
        checklist.querySelectorAll(".demerit-member-card").forEach(card => {
            const chk = card.querySelector(".demerit-chk-input");
            if (chk && chk.checked) {
                card.classList.add("selected");
            } else {
                card.classList.remove("selected");
            }
        });
    }
    
    checklist.querySelectorAll(".demerit-chk-input").forEach(chk => {
        chk.addEventListener("change", updateSelectedCount);
    });
    
    function filterDemeritMembers(query) {
        query = (query || "").trim().toLowerCase();
        let visibleCount = 0;
        checklist.querySelectorAll(".demerit-member-card").forEach(card => {
            const name = card.getAttribute("data-name") || "";
            const text = card.textContent.toLowerCase();
            if (!query || name.includes(query) || text.includes(query)) {
                card.style.display = "flex";
                visibleCount++;
            } else {
                card.style.display = "none";
            }
        });
        const emptyNotice = document.getElementById("demerit-search-empty-notice");
        if (emptyNotice) {
            emptyNotice.style.display = (visibleCount === 0 && query) ? "block" : "none";
        }
    }

    // Live search filter
    if (searchInput && !searchInput.dataset.bound) {
        searchInput.dataset.bound = "true";
        searchInput.addEventListener("input", function() {
            filterDemeritMembers(this.value);
        });
    }

    if (searchInput && searchInput.value) {
        filterDemeritMembers(searchInput.value);
    }
    
    // Select All button
    if (btnSelectAll && !btnSelectAll.dataset.bound) {
        btnSelectAll.dataset.bound = "true";
        btnSelectAll.addEventListener("click", () => {
            checklist.querySelectorAll(".demerit-member-card").forEach(card => {
                if (card.style.display !== "none") {
                    const chk = card.querySelector(".demerit-chk-input");
                    if (chk) chk.checked = true;
                }
            });
            updateSelectedCount();
        });
    }
    
    // Deselect All button
    if (btnDeselectAll && !btnDeselectAll.dataset.bound) {
        btnDeselectAll.dataset.bound = "true";
        btnDeselectAll.addEventListener("click", () => {
            checklist.querySelectorAll(".demerit-chk-input").forEach(chk => {
                chk.checked = false;
            });
            updateSelectedCount();
        });
    }
    
    updateSelectedCount();
}

function renderAdminDemeritsList() {
    const tbody = document.getElementById("admin-demerits-log-tbody");
    const countBadge = document.getElementById("admin-demerits-count-badge");
    if (!tbody) return;
    
    const demerits = Array.isArray(appTeamData.demerits) ? appTeamData.demerits : [];
    if (countBadge) countBadge.textContent = `${demerits.length} Demerits`;
    
    if (demerits.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 18px; color: var(--text-muted); font-size: 0.84rem;">No system demerits on file. Team compliance is 100%!</td></tr>`;
        return;
    }
    
    tbody.innerHTML = demerits.map(d => `
        <tr>
            <td style="font-weight: 700; font-size: 0.85rem;">${escapeHtml(d.memberName)}</td>
            <td><span class="demerit-pill">${d.points} pts</span></td>
            <td>
                <div style="font-size: 0.8rem; color: var(--text-primary); max-width: 240px; word-break: break-word;">${escapeHtml(d.reason)}</div>
                <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 2px;">${escapeHtml(d.issuedAt || "Recent")}</div>
            </td>
            <td>
                <button type="button" class="btn-revoke-demerit" data-id="${d.id}" title="Revoke Demerit & Refund Points" style="padding: 3px 8px; font-size: 0.72rem; font-weight: 700; border-radius: 6px; background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3); cursor: pointer;">
                    Revoke
                </button>
            </td>
        </tr>
    `).join("");
    
    tbody.querySelectorAll(".btn-revoke-demerit").forEach(btn => {
        btn.addEventListener("click", function() {
            const id = this.getAttribute("data-id");
            revokeAdminDemerit(id);
        });
    });
}

function revokeAdminDemerit(demeritId) {
    const d = (appTeamData.demerits || []).find(x => x.id === demeritId);
    if (!d) return;
    
    if (confirm(`Revoke this system demerit (${d.points} pts) for ${d.memberName}? This will remove the demerit notice from their portal record.`)) {
        // Demerits are independent - no appreciation point refund needed
        appTeamData.demerits = appTeamData.demerits.filter(x => x.id !== demeritId);
        saveTeamData();
        playClickSound();
        renderAdminDemeritsList();
        
        if (typeof renderMemberPortal === 'function' && typeof currentLoggedInMember !== 'undefined' && currentLoggedInMember) {
            renderMemberPortal();
        }
    }
}


// 3D. ADMIN: WARNINGS DROPDOWN & LOG (v8)
function renderAdminWarningDropdown() {
    const select = document.getElementById("admin-warning-member-select");
    const checklist = document.getElementById("admin-warning-members-checklist");
    const countBadge = document.getElementById("admin-warning-selected-count");
    const searchInput = document.getElementById("admin-warning-member-search");
    const btnSelectAll = document.getElementById("btn-warning-select-all");
    const btnDeselectAll = document.getElementById("btn-warning-deselect-all");
    
    if (!checklist) return;

    const memberMap = new Map();
    (appTeamData.committeeMembers || []).forEach(m => {
        if (m && m.name) {
            memberMap.set(m.name.trim().toLowerCase(), { id: m.id, name: m.name, sub: (m.tenure || "Tenure") + " (" + (m.desc || "Member") + ")" });
        }
    });
    (appTeamData.leaderboard || []).forEach(l => {
        if (l && l.name) {
            const key = l.name.trim().toLowerCase();
            if (!memberMap.has(key)) {
                memberMap.set(key, { id: l.id, name: l.name, sub: "Leaderboard Roster" });
            }
        }
    });
    
    const members = Array.from(memberMap.values()).sort((a, b) => a.name.localeCompare(b.name));
    
    // Populate fallback select
    if (select) {
        if (members.length === 0) {
            select.innerHTML = `<option value="">No members available</option>`;
        } else {
            select.innerHTML = members.map(m => `<option value="${m.id}" data-name="${escapeHtml(m.name)}">${escapeHtml(m.name)} — ${escapeHtml(m.sub)}</option>`).join("");
        }
    }
    
    if (members.length === 0) {
        checklist.innerHTML = `<div style="padding: 14px; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No members available. Add members in the leaderboard panel.</div>`;
        if (countBadge) countBadge.textContent = "0 selected";
        return;
    }

    // Preserve checked state if re-rendering
    const currentlyChecked = new Set();
    checklist.querySelectorAll(".warning-chk-input:checked").forEach(chk => {
        currentlyChecked.add(chk.value);
    });
    
    checklist.innerHTML = members.map(m => {
        const isChecked = currentlyChecked.has(m.id);
        return `
        <label class="warning-member-card${isChecked ? ' selected' : ''}" for="warn-chk-${m.id}" data-name="${escapeHtml(m.name.toLowerCase())}">
            <input type="checkbox" class="warning-chk-input" id="warn-chk-${m.id}" value="${m.id}" data-name="${escapeHtml(m.name)}"${isChecked ? ' checked' : ''}>
            <div class="demerit-member-info">
                <strong>${escapeHtml(m.name)}</strong>
                <span>${escapeHtml(m.sub)}</span>
            </div>
        </label>
        `;
    }).join("") + `<div id="warning-search-empty-notice" style="display: none; padding: 12px; text-align: center; color: var(--text-muted); font-size: 0.82rem; grid-column: 1 / -1;">No members found matching your search.</div>`;
    
    function updateSelectedCount() {
        const checked = checklist.querySelectorAll(".warning-chk-input:checked");
        if (countBadge) countBadge.textContent = `${checked.length} selected`;
        
        checklist.querySelectorAll(".warning-member-card").forEach(card => {
            const chk = card.querySelector(".warning-chk-input");
            if (chk && chk.checked) {
                card.classList.add("selected");
            } else {
                card.classList.remove("selected");
            }
        });
    }
    
    checklist.querySelectorAll(".warning-chk-input").forEach(chk => {
        chk.addEventListener("change", updateSelectedCount);
    });
    
    function filterWarningMembers(query) {
        query = (query || "").trim().toLowerCase();
        let visibleCount = 0;
        checklist.querySelectorAll(".warning-member-card").forEach(card => {
            const name = card.getAttribute("data-name") || "";
            const text = card.textContent.toLowerCase();
            if (!query || name.includes(query) || text.includes(query)) {
                card.style.display = "flex";
                visibleCount++;
            } else {
                card.style.display = "none";
            }
        });
        const emptyNotice = document.getElementById("warning-search-empty-notice");
        if (emptyNotice) {
            emptyNotice.style.display = (visibleCount === 0 && query) ? "block" : "none";
        }
    }

    // Live search filter
    if (searchInput && !searchInput.dataset.bound) {
        searchInput.dataset.bound = "true";
        searchInput.addEventListener("input", function() {
            filterWarningMembers(this.value);
        });
    }

    if (searchInput && searchInput.value) {
        filterWarningMembers(searchInput.value);
    }
    
    // Select All button
    if (btnSelectAll && !btnSelectAll.dataset.bound) {
        btnSelectAll.dataset.bound = "true";
        btnSelectAll.addEventListener("click", () => {
            checklist.querySelectorAll(".warning-member-card").forEach(card => {
                if (card.style.display !== "none") {
                    const chk = card.querySelector(".warning-chk-input");
                    if (chk) chk.checked = true;
                }
            });
            updateSelectedCount();
        });
    }
    
    // Deselect All button
    if (btnDeselectAll && !btnDeselectAll.dataset.bound) {
        btnDeselectAll.dataset.bound = "true";
        btnDeselectAll.addEventListener("click", () => {
            checklist.querySelectorAll(".warning-chk-input").forEach(chk => {
                chk.checked = false;
            });
            updateSelectedCount();
        });
    }
    
    updateSelectedCount();
}

function renderAdminWarningsList() {
    const tbody = document.getElementById("admin-warnings-log-tbody");
    const countBadge = document.getElementById("admin-warnings-count-badge");
    if (!tbody) return;
    
    const warnings = Array.isArray(appTeamData.warnings) ? appTeamData.warnings : [];
    if (countBadge) countBadge.textContent = `${warnings.length} Warning${warnings.length === 1 ? '' : 's'}`;
    
    if (warnings.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 18px; color: var(--text-muted); font-size: 0.84rem;">No official warnings on file. Team compliance is 100%!</td></tr>`;
        return;
    }
    
    tbody.innerHTML = warnings.map(w => `
        <tr>
            <td style="font-weight: 700; font-size: 0.85rem;">${escapeHtml(w.memberName)}</td>
            <td><span class="logs-stat-pill orange" style="font-size: 0.72rem; padding: 2px 8px;">${escapeHtml(w.category || 'Warning')}</span></td>
            <td>
                <div style="font-size: 0.8rem; color: var(--text-primary); max-width: 240px; word-break: break-word;">${escapeHtml(w.message)}</div>
                <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 2px;">${escapeHtml(w.issuedAt || "Recent")}</div>
            </td>
            <td>
                <button type="button" class="btn-revoke-warning" data-id="${w.id}" title="Dismiss Warning" style="padding: 3px 8px; font-size: 0.72rem; font-weight: 700; border-radius: 6px; background: rgba(249, 115, 22, 0.15); color: #ea580c; border: 1px solid rgba(249, 115, 22, 0.35); cursor: pointer;">
                    Dismiss
                </button>
            </td>
        </tr>
    `).join("");
    
    tbody.querySelectorAll(".btn-revoke-warning").forEach(btn => {
        btn.addEventListener("click", function() {
            const id = this.getAttribute("data-id");
            revokeAdminWarning(id);
        });
    });
}

function revokeAdminWarning(warningId) {
    const w = (appTeamData.warnings || []).find(x => x.id === warningId);
    if (!w) return;
    
    if (confirm(`Dismiss this official warning notice for ${w.memberName}? This will remove it from their portal record.`)) {
        appTeamData.warnings = appTeamData.warnings.filter(x => x.id !== warningId);
        saveTeamData();
        playClickSound();
        renderAdminWarningsList();
        
        if (typeof renderMemberPortal === 'function' && typeof currentLoggedInMember !== 'undefined' && currentLoggedInMember) {
            renderMemberPortal();
        }
    }
}

// 3E. ADMIN: OFFER LETTER REQUESTS LOG
function renderAdminOfferLetterRequestsList() {
    const tbody = document.getElementById("admin-offer-requests-tbody");
    const countBadge = document.getElementById("admin-offer-requests-count-badge");
    if (!tbody) return;
    
    const requests = Array.isArray(appTeamData.offerLetterRequests) ? appTeamData.offerLetterRequests : [];
    if (countBadge) countBadge.textContent = `${requests.length} Request${requests.length === 1 ? '' : 's'}`;
    
    if (requests.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 18px; color: var(--text-muted); font-size: 0.84rem;">No offer letter requests received yet.</td></tr>`;
        return;
    }
    
    tbody.innerHTML = requests.map(r => `
        <tr>
            <td style="font-weight: 700; font-size: 0.85rem;">${escapeHtml(r.memberName)}</td>
            <td><a href="mailto:${escapeHtml(r.email)}" style="color: var(--primary); font-weight: 600; font-size: 0.82rem;">${escapeHtml(r.email)}</a></td>
            <td>
                <div style="font-size: 0.78rem; font-weight: 700; color: ${r.status === 'Dispatched / Sent ✓' ? '#10b981' : '#f59e0b'};">
                    ${escapeHtml(r.status || 'Pending Dispatch')}
                </div>
                <div style="font-size: 0.72rem; color: var(--text-muted);">${escapeHtml(r.requestedAt || 'Recent')}</div>
            </td>
            <td>
                <button type="button" class="btn-toggle-offer-status" data-id="${r.id}" style="padding: 3px 8px; font-size: 0.72rem; font-weight: 700; border-radius: 6px; background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.35); cursor: pointer;">
                    ${r.status === 'Dispatched / Sent ✓' ? 'Mark Pending' : '✓ Mark Sent'}
                </button>
            </td>
        </tr>
    `).join("");
    
    tbody.querySelectorAll(".btn-toggle-offer-status").forEach(btn => {
        btn.addEventListener("click", function() {
            const id = this.getAttribute("data-id");
            const req = (appTeamData.offerLetterRequests || []).find(x => x.id === id);
            if (req) {
                req.status = (req.status === 'Dispatched / Sent ✓' ? 'Pending Dispatch' : 'Dispatched / Sent ✓');
                saveTeamData();
                playClickSound();
                renderAdminOfferLetterRequestsList();
                if (typeof renderMemberVaultTab === 'function') renderMemberVaultTab();
            }
        });
    });
}

// 3C. ADMIN: APPRECIATION POINTS CITATIONS DROPDOWN & LOG
function renderAdminAppreciationDropdown() {
    const select = document.getElementById("admin-appreciation-member-select");
    if (!select) return;
    
    const memberMap = new Map();
    (appTeamData.committeeMembers || []).forEach(m => {
        memberMap.set(m.name.trim().toLowerCase(), { id: m.id, name: m.name, sub: m.tenure + " (" + m.desc + ")" });
    });
    (appTeamData.leaderboard || []).forEach(l => {
        const key = l.name.trim().toLowerCase();
        if (!memberMap.has(key)) {
            memberMap.set(key, { id: l.id, name: l.name, sub: "Leaderboard Roster" });
        }
    });
    
    const members = Array.from(memberMap.values());
    if (members.length === 0) {
        select.innerHTML = `<option value="">No members available</option>`;
        return;
    }
    
    select.innerHTML = `<option value="">-- Choose Candidate / Member --</option>` + 
        members.map(m => `<option value="${m.id}" data-name="${escapeHtml(m.name)}">${escapeHtml(m.name)} — ${escapeHtml(m.sub)}</option>`).join("");
}

function renderAdminAppreciationsList() {
    const tbody = document.getElementById("admin-appreciations-log-tbody");
    const countBadge = document.getElementById("admin-appreciations-count-badge");
    if (!tbody) return;
    
    const appreciations = Array.isArray(appTeamData.appreciations) ? appTeamData.appreciations : [];
    if (countBadge) countBadge.textContent = `${appreciations.length} Citations`;
    
    if (appreciations.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 18px; color: var(--text-muted); font-size: 0.84rem;">No appreciation citations issued yet. Use the form on the left to award recognition!</td></tr>`;
        return;
    }
    
    tbody.innerHTML = appreciations.map(a => `
        <tr>
            <td style="font-weight: 700; font-size: 0.85rem;">${escapeHtml(a.memberName)}</td>
            <td><span class="demerit-pill" style="background: rgba(16, 185, 129, 0.15); color: #10b981; border-color: rgba(16, 185, 129, 0.3);">+${a.points} pts</span></td>
            <td>
                <div style="font-size: 0.8rem; color: var(--text-primary); max-width: 240px; word-break: break-word;">${escapeHtml(a.reason)}</div>
                <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 2px;">${escapeHtml(a.issuedAt || "Recent")}</div>
            </td>
            <td>
                <button type="button" class="btn-revoke-appreciation" data-id="${a.id}" title="Revoke Citation & Deduct Points" style="padding: 3px 8px; font-size: 0.72rem; font-weight: 700; border-radius: 6px; background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3); cursor: pointer;">
                    Revoke
                </button>
            </td>
        </tr>
    `).join("");
    
    tbody.querySelectorAll(".btn-revoke-appreciation").forEach(btn => {
        btn.addEventListener("click", function() {
            const id = this.getAttribute("data-id");
            revokeAdminAppreciation(id);
        });
    });
}

function revokeAdminAppreciation(apprId) {
    const a = (appTeamData.appreciations || []).find(x => x.id === apprId);
    if (!a) return;
    
    if (confirm(`Revoke this appreciation citation (+${a.points} pts) for ${a.memberName}? Points will be deducted from their total.`)) {
        const deduct = Math.abs(a.points || 0);
        const leaderMem = (appTeamData.leaderboard || []).find(l => l.name.trim().toLowerCase() === a.memberName.trim().toLowerCase());
        if (leaderMem) {
            leaderMem.points = Math.max(0, (leaderMem.points || 0) - deduct);
        }
        
        appTeamData.appreciations = appTeamData.appreciations.filter(x => x.id !== apprId);
        saveTeamData();
        playClickSound();
        if (typeof renderAdminAppreciationsList === 'function') renderAdminAppreciationsList();
        if (typeof renderPublicLeaderboardLogsBin === 'function') renderPublicLeaderboardLogsBin();
        if (typeof renderMemberLogsBinTab === 'function') renderMemberLogsBinTab();
    }
}

// 4. ADMIN: TENURE CHIPS LIST WITH REORDERING
function renderAdminTenureChips() {
    const chipsContainer = document.getElementById("admin-tenure-chips-list");
    if (!chipsContainer) return;
    
    chipsContainer.innerHTML = appTeamData.tenures.map((tenure, idx) => `
        <div class="tenure-reorder-card">
            <div class="tenure-reorder-info">
                <span class="tenure-order-num">${idx + 1}</span>
                <span class="tenure-order-title">${escapeHtml(tenure)}</span>
            </div>
            <div class="tenure-reorder-actions">
                <button type="button" class="btn-order-move btn-tenure-move-up" data-idx="${idx}" ${idx === 0 ? 'disabled' : ''} title="Move Earlier (Higher)">⬆️</button>
                <button type="button" class="btn-order-move btn-tenure-move-down" data-idx="${idx}" ${idx === appTeamData.tenures.length - 1 ? 'disabled' : ''} title="Move Later (Lower)">⬇️</button>
                <button type="button" class="btn-order-delete btn-remove-tenure" data-tenure="${escapeHtml(tenure)}" title="Delete Tenure">🗑️</button>
            </div>
        </div>
    `).join("");
    
    chipsContainer.querySelectorAll(".btn-tenure-move-up").forEach(btn => {
        btn.addEventListener("click", function() {
            const idx = parseInt(this.getAttribute("data-idx"), 10);
            if (idx > 0) {
                const temp = appTeamData.tenures[idx];
                appTeamData.tenures[idx] = appTeamData.tenures[idx - 1];
                appTeamData.tenures[idx - 1] = temp;
                saveTeamData();
                playClickSound();
            }
        });
    });
    
    chipsContainer.querySelectorAll(".btn-tenure-move-down").forEach(btn => {
        btn.addEventListener("click", function() {
            const idx = parseInt(this.getAttribute("data-idx"), 10);
            if (idx < appTeamData.tenures.length - 1) {
                const temp = appTeamData.tenures[idx];
                appTeamData.tenures[idx] = appTeamData.tenures[idx + 1];
                appTeamData.tenures[idx + 1] = temp;
                saveTeamData();
                playClickSound();
            }
        });
    });
    
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

// 6. ADMIN: COMMITTEE MEMBERS ROSTER WITH REORDERING & TENURE FILTER
let adminSelectedRosterTenure = "";

function renderAdminCommitteeRosterList() {
    const list = document.getElementById("admin-committee-roster-list");
    const filterSelect = document.getElementById("admin-roster-filter-tenure");
    if (!list) return;
    
    if (filterSelect) {
        if (!adminSelectedRosterTenure || !appTeamData.tenures.includes(adminSelectedRosterTenure)) {
            adminSelectedRosterTenure = appTeamData.tenures[0] || "";
        }
        filterSelect.innerHTML = appTeamData.tenures.map(t => `
            <option value="${escapeHtml(t)}" ${t === adminSelectedRosterTenure ? 'selected' : ''}>${escapeHtml(t)}</option>
        `).join("");
        
        filterSelect.onchange = function() {
            adminSelectedRosterTenure = this.value;
            renderAdminCommitteeRosterList();
        };
    }
    
    const members = appTeamData.committeeMembers.filter(m => m.tenure === adminSelectedRosterTenure);
    
    if (members.length === 0) {
        list.innerHTML = `<div style="text-align: center; padding: 24px; color: var(--text-muted); font-size: 0.84rem;">No committee members listed for <strong>${escapeHtml(adminSelectedRosterTenure)}</strong> yet. Add one on the left!</div>`;
        return;
    }
    
    list.innerHTML = members.map((m, idx) => `
        <div class="admin-comm-item-card" style="display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 16px; ${m.portalHidden ? 'opacity: 0.6;' : ''}">
            <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
                <span style="font-weight: 800; font-size: 0.82rem; color: var(--primary); min-width: 26px;">#${idx + 1}</span>
                <img src="${m.image || 'assets/images/logo.png'}" alt="${escapeHtml(m.name)}" class="admin-comm-item-img" onerror="this.src='assets/images/logo.png'">
                <div class="admin-comm-item-info">
                    <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                        <span class="admin-comm-item-name" style="font-weight: 800; font-size: 0.95rem;">${escapeHtml(m.name)}</span>
                        <span style="font-size: 0.72rem; background: rgba(37, 99, 235, 0.1); color: var(--primary); padding: 1px 8px; border-radius: 4px; font-weight: 700;">
                            ✉️ ${escapeHtml(m.email || ((m.name || 'member').toLowerCase().replace(/[^a-z0-9]/g, '') + '@...'))}
                        </span>
                        ${m.portalLocked ? `<span style="font-size: 0.7rem; background: rgba(239, 68, 68, 0.14); color: #ef4444; padding: 1px 7px; border-radius: 4px; font-weight: 800;">🔒 Locked</span>` : ''}
                        ${m.portalHidden ? `<span style="font-size: 0.7rem; background: rgba(100, 116, 139, 0.18); color: #64748b; padding: 1px 7px; border-radius: 4px; font-weight: 800;">🙈 Hidden</span>` : ''}
                    </div>
                    <span class="admin-comm-item-tenure" style="font-size: 0.76rem; color: var(--text-muted);">${escapeHtml(m.tenure)}</span>
                    <p class="admin-comm-item-desc" style="font-size: 0.8rem; margin: 4px 0 0 0; color: var(--text-secondary);">${escapeHtml(m.desc)}</p>
                    ${m.trait ? `<div style="font-size: 0.74rem; color: #ea580c; font-weight: 700; margin-top: 2px;">🏷️ ${escapeHtml(m.trait)}</div>` : ''}
                </div>
            </div>
            <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap; justify-content: flex-end;">
                <button type="button" class="btn-order-move btn-edit-comm-member" data-id="${m.id}" title="Edit Member, Email & Photo" style="background: rgba(234, 88, 12, 0.12); color: #ea580c; border: 1px solid rgba(234, 88, 12, 0.35); font-weight: 700; padding: 4px 10px;">✏️ Edit</button>
                <button type="button" class="btn-order-move btn-toggle-lock-member" data-id="${m.id}" title="${m.portalLocked ? 'Unlock Member Portal' : 'Lock Member Portal'}" style="font-weight: 700; padding: 4px 8px;">${m.portalLocked ? '🔓 Unlock' : '🔒 Lock'}</button>
                <button type="button" class="btn-order-move btn-toggle-hide-member" data-id="${m.id}" title="${m.portalHidden ? 'Show on Public Site' : 'Hide from Public Site'}" style="font-weight: 700; padding: 4px 8px;">${m.portalHidden ? '👁️ Show' : '🙈 Hide'}</button>
                <button type="button" class="btn-order-move btn-comm-move-up" data-idx="${idx}" ${idx === 0 ? 'disabled' : ''} title="Move Earlier (Higher)">⬆️</button>
                <button type="button" class="btn-order-move btn-comm-move-down" data-idx="${idx}" ${idx === members.length - 1 ? 'disabled' : ''} title="Move Later (Lower)">⬇️</button>
                <button type="button" class="btn-order-delete btn-delete-row" data-id="${m.id}" title="Delete Member & Portal">🗑️</button>
            </div>
        </div>
    `).join("");
    
    list.querySelectorAll(".btn-edit-comm-member").forEach(btn => {
        btn.addEventListener("click", function() {
            const id = this.getAttribute("data-id");
            openEditCommitteeMemberModal(id);
        });
    });

    list.querySelectorAll(".btn-toggle-lock-member").forEach(btn => {
        btn.addEventListener("click", function() {
            const id = this.getAttribute("data-id");
            const m = appTeamData.committeeMembers.find(x => x.id === id);
            if (!m) return;
            m.portalLocked = !m.portalLocked;
            saveTeamData();
            playClickSound();
        });
    });

    list.querySelectorAll(".btn-toggle-hide-member").forEach(btn => {
        btn.addEventListener("click", function() {
            const id = this.getAttribute("data-id");
            const m = appTeamData.committeeMembers.find(x => x.id === id);
            if (!m) return;
            m.portalHidden = !m.portalHidden;
            saveTeamData();
            playClickSound();
        });
    });
    
    list.querySelectorAll(".btn-comm-move-up").forEach(btn => {
        btn.addEventListener("click", function() {
            const idx = parseInt(this.getAttribute("data-idx"), 10);
            if (idx > 0) {
                moveCommitteeMemberOrder(adminSelectedRosterTenure, idx, idx - 1);
            }
        });
    });
    
    list.querySelectorAll(".btn-comm-move-down").forEach(btn => {
        btn.addEventListener("click", function() {
            const idx = parseInt(this.getAttribute("data-idx"), 10);
            if (idx < members.length - 1) {
                moveCommitteeMemberOrder(adminSelectedRosterTenure, idx, idx + 1);
            }
        });
    });
    
    list.querySelectorAll(".btn-delete-row").forEach(btn => {
        btn.addEventListener("click", function() {
            const id = this.getAttribute("data-id");
            if (confirm("Remove this member profile?")) {
                appTeamData.committeeMembers = appTeamData.committeeMembers.filter(x => x.id !== id);
                saveTeamData();
                playClickSound();
            }
        });
    });
}

// 6B. ADMIN EDIT COMMITTEE MEMBER MODAL CONTROLLERS
let editCommPhotoData = "";

function openEditCommitteeMemberModal(memberId) {
    const m = appTeamData.committeeMembers.find(x => x.id === memberId);
    if (!m) return;
    
    const modal = document.getElementById("modal-edit-committee-member");
    if (!modal) return;
    
    const idInput = document.getElementById("edit-comm-member-id");
    if (idInput) idInput.value = m.id;
    
    const tenureSelect = document.getElementById("edit-comm-tenure");
    if (tenureSelect) {
        tenureSelect.innerHTML = appTeamData.tenures.map(t => `
            <option value="${escapeHtml(t)}" ${t === m.tenure ? 'selected' : ''}>${escapeHtml(t)}</option>
        `).join("");
    }
    
    const nameInput = document.getElementById("edit-comm-name");
    if (nameInput) nameInput.value = m.name || "";
    
    const descInput = document.getElementById("edit-comm-desc");
    if (descInput) descInput.value = m.desc || "";
    
    const traitInput = document.getElementById("edit-comm-trait");
    if (traitInput) traitInput.value = m.trait || "";
    
    const emailInput = document.getElementById("edit-comm-email");
    if (emailInput) emailInput.value = m.email || "";

    const newPasswordInput = document.getElementById("edit-comm-new-password");
    if (newPasswordInput) newPasswordInput.value = "";
    
    editCommPhotoData = m.image || "";
    const preview = document.getElementById("edit-comm-photo-preview");
    if (preview) {
        preview.src = m.image || "assets/images/logo.png";
    }
    const fileInput = document.getElementById("edit-comm-photo-file");
    if (fileInput) fileInput.value = "";
    
    modal.style.display = "flex";
    playClickSound();
}

function closeEditCommitteeMemberModal() {
    const modal = document.getElementById("modal-edit-committee-member");
    if (modal) modal.style.display = "none";
    editCommPhotoData = "";
}

async function handleSaveEditCommitteeMember() {
    const idInput = document.getElementById("edit-comm-member-id");
    if (!idInput) return;
    const id = idInput.value;
    const m = appTeamData.committeeMembers.find(x => x.id === id);
    if (!m) {
        alert("Member profile not found.");
        return;
    }
    
    const tenureSelect = document.getElementById("edit-comm-tenure");
    const nameInput = document.getElementById("edit-comm-name");
    const descInput = document.getElementById("edit-comm-desc");
    const traitInput = document.getElementById("edit-comm-trait");
    const emailInput = document.getElementById("edit-comm-email");
    const newPasswordInput = document.getElementById("edit-comm-new-password");
    
    const tenure = tenureSelect ? tenureSelect.value : m.tenure;
    const name = nameInput ? nameInput.value.trim() : m.name;
    const desc = descInput ? descInput.value.trim() : m.desc;
    const trait = traitInput ? traitInput.value.trim() : m.trait;
    const email = emailInput ? emailInput.value.trim().toLowerCase() : (m.email || "");
    const newPassword = newPasswordInput ? newPasswordInput.value : "";
    
    if (!name || !desc) {
        alert("Please provide both the member name and role title/position.");
        return;
    }

    if (newPassword && !email) {
        alert("Please enter a Linked Login Email to create their Firebase Auth account.");
        return;
    }
    if (email && newPassword && newPassword.length < 6) {
        alert("Firebase Auth password must be at least 6 characters.");
        return;
    }

    if (email && newPassword) {
        const secondaryApp = getSecondaryAuthApp();
        if (secondaryApp && typeof secondaryApp.auth === 'function') {
            const btnSave = document.getElementById("btn-save-edit-comm");
            if (btnSave) btnSave.disabled = true;
            try {
                const secAuth = secondaryApp.auth();
                await secAuth.createUserWithEmailAndPassword(email, newPassword);
                await secAuth.signOut();
            } catch (err) {
                if (err && err.code === "auth/email-already-in-use") {
                    if (btnSave) btnSave.disabled = false;
                    alert("This email already has a Firebase Auth account. To change its password, use Reset Password in Firebase Console → Authentication → Users.");
                } else {
                    if (btnSave) btnSave.disabled = false;
                    alert("Could not create Firebase Auth account: " + (err && err.message ? err.message : "Unknown error"));
                    return;
                }
            }
            if (btnSave) btnSave.disabled = false;
        }
    }
    
    m.tenure = tenure;
    m.name = name;
    m.desc = desc;
    m.trait = trait || "Dedicated Student Leader | Empowering Peers";
    if (email) {
        m.email = email;
    } else {
        delete m.email;
    }
    delete m.passcode;
    if (editCommPhotoData) {
        m.image = editCommPhotoData;
    }
    
    saveTeamData();
    closeEditCommitteeMemberModal();
    playClickSound();
    
    renderCoreCommitteeMainView();
    renderAdminCommitteeRosterList();
    if (typeof renderMemberPortal === 'function' && typeof currentLoggedInMember !== 'undefined' && currentLoggedInMember && currentLoggedInMember.id === m.id) {
        currentLoggedInMember = m;
        renderMemberPortal();
    }
}

// 7. ADMIN: APPRECIATION TASKS & CLAIMS MANAGER
function renderAdminTasksList() {
    const container = document.getElementById("admin-tasks-claims-list");
    if (!container) return;
    
    const tasks = Array.isArray(appTeamData.appreciationTasks) ? appTeamData.appreciationTasks : [];
    if (tasks.length === 0) {
        container.innerHTML = `<div style="text-align: center; padding: 28px 12px; color: var(--text-muted); font-size: 0.85rem;">No tasks created yet. Publish an appreciation task on the left!</div>`;
        return;
    }
    
    container.innerHTML = tasks.map(task => {
        const claims = Array.isArray(task.claims) ? task.claims : [];
        return `
            <div class="admin-task-claim-card">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; margin-bottom: 8px;">
                    <div>
                        <strong style="font-size: 0.98rem; color: var(--text-primary);">${escapeHtml(task.title)}</strong>
                        <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 3px;">
                            Bounty: <strong style="color: #10b981;">+${task.points} pts</strong> &bull; 
                            Collaboration: <em>${task.allowTeam ? '🤝 Teammates Allowed' : '👤 Individual Only'}</em>
                        </div>
                    </div>
                    <button type="button" class="btn-order-delete btn-delete-task" data-id="${task.id}" title="Delete Task">🗑️</button>
                </div>
                <p style="font-size: 0.82rem; color: var(--text-secondary); margin: 6px 0 12px 0;">${escapeHtml(task.desc)}</p>
                
                <div style="border-top: 1px dashed var(--border-light); padding-top: 10px;">
                    <div style="font-size: 0.76rem; font-weight: 800; text-transform: uppercase; color: var(--text-muted); margin-bottom: 8px;">
                        Member Claims (${claims.length}):
                    </div>
                    ${claims.length > 0 ? `
                        <div style="display: flex; flex-direction: column; gap: 8px;">
                            ${claims.map(c => `
                                <div style="background: var(--bg-surface); padding: 10px 12px; border-radius: 8px; border: 1px solid var(--border-light); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
                                    <div>
                                        <div style="font-weight: 800; font-size: 0.88rem; color: var(--text-primary);">
                                            👤 ${escapeHtml(c.memberName)}
                                            <span style="font-size: 0.74rem; font-weight: 500; color: var(--text-muted); margin-left: 6px;">(${escapeHtml(c.claimedAt || 'Recently')})</span>
                                        </div>
                                        ${c.teammateName ? `
                                            <div style="margin-top: 4px; font-size: 0.78rem;">
                                                Partner: <strong>${escapeHtml(c.teammateName)}</strong> &bull; 
                                                ${c.teammateStatus === 'pending' ? '<span class="status-pill status-pill-pending">⏳ Partner Pending</span>' : ''}
                                                ${c.teammateStatus === 'accepted' ? '<span class="status-pill status-pill-accepted">✓ Partner Accepted</span>' : ''}
                                                ${c.teammateStatus === 'declined' ? '<span class="status-pill status-pill-declined">✕ Partner Declined</span>' : ''}
                                            </div>
                                        ` : '<div style="margin-top: 2px; font-size: 0.75rem; color: var(--text-muted);">Solo Applicant</div>'}
                                    </div>
                                    <div>
                                        ${c.isAllotted ? `
                                            <span style="background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3); font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 999px;">
                                                ✓ Points Awarded
                                            </span>
                                        ` : `
                                            <button type="button" class="btn btn-primary btn-sm btn-award-task-points" data-task-id="${task.id}" data-claim-id="${c.id}" style="font-size: 0.76rem; padding: 5px 12px;">
                                                🏆 Allot & Award +${task.points} pts
                                            </button>
                                        `}
                                    </div>
                                </div>
                            `).join("")}
                        </div>
                    ` : `
                        <div style="font-size: 0.78rem; color: var(--text-muted); font-style: italic;">No members have claimed this task yet. It is visible on all member portals!</div>
                    `}
                </div>
            </div>
        `;
    }).join("");
    
    // Wire delete task
    container.querySelectorAll(".btn-delete-task").forEach(btn => {
        btn.addEventListener("click", function() {
            const id = this.getAttribute("data-id");
            if (confirm("Delete this appreciation task?")) {
                appTeamData.appreciationTasks = appTeamData.appreciationTasks.filter(t => t.id !== id);
                saveTeamData();
                playClickSound();
            }
        });
    });
    
    // Wire award points
    container.querySelectorAll(".btn-award-task-points").forEach(btn => {
        btn.addEventListener("click", function() {
            const taskId = this.getAttribute("data-task-id");
            const claimId = this.getAttribute("data-claim-id");
            awardTaskPointsToClaim(taskId, claimId);
        });
    });
}

function awardTaskPointsToClaim(taskId, claimId) {
    const task = (appTeamData.appreciationTasks || []).find(t => t.id === taskId);
    if (!task || !Array.isArray(task.claims)) return;
    
    const claim = task.claims.find(c => c.id === claimId);
    if (!claim) return;
    
    claim.isAllotted = true;
    task.status = "allotted";
    
    function creditLeaderboard(name, pts) {
        if (!name) return;
        if (!Array.isArray(appTeamData.leaderboard)) appTeamData.leaderboard = [];
        let item = appTeamData.leaderboard.find(l => l.name.trim().toLowerCase() === name.trim().toLowerCase());
        if (item) {
            item.points = (item.points || 0) + pts;
        } else {
            appTeamData.leaderboard.push({
                id: "mem-" + Date.now() + "-" + Math.random().toString(36).substr(2, 4),
                name: name.trim(),
                points: pts
            });
        }
    }
    
    creditLeaderboard(claim.memberName, task.points);
    
    let teammateMsg = "";
    if (claim.teammateName && claim.teammateStatus === "accepted") {
        creditLeaderboard(claim.teammateName, task.points);
        teammateMsg = ` and ${claim.teammateName} (Teammate)`;
    }
    
    saveTeamData();
    playClickSound();
    alert(`🎉 Success! Awarded +${task.points} appreciation points to ${claim.memberName}${teammateMsg} on the official Leaderboard!`);
}

// 8. ADMIN: CONFIDENTIAL MEMBER RATINGS FEED
function renderAdminRatingsFeed() {
    const container = document.getElementById("admin-ratings-feed-list");
    const countBadge = document.getElementById("admin-ratings-count-badge");
    if (!container) return;
    
    const ratings = Array.isArray(appTeamData.peerRatings) ? appTeamData.peerRatings : [];
    if (countBadge) countBadge.textContent = `${ratings.length} Reviews`;
    
    if (ratings.length === 0) {
        container.innerHTML = `<div style="text-align: center; padding: 36px 16px; color: var(--text-muted); font-size: 0.88rem;">No confidential peer reviews submitted by committee members yet. When members submit ratings on their portals, they will appear here privately!</div>`;
        return;
    }
    
    container.innerHTML = ratings.map(r => {
        const ratingNum = Math.max(1, Math.min(5, parseInt(r.rating, 10) || 5));
        const starsText = "★".repeat(ratingNum) + "☆".repeat(5 - ratingNum);
        return `
            <div class="rating-review-card">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                    <div>
                        <div style="color: #f59e0b; font-size: 1.15rem; letter-spacing: 2px;">
                            ${starsText}
                            <span style="font-size: 0.85rem; font-weight: 800; color: var(--text-primary); margin-left: 6px;">${ratingNum}/5</span>
                        </div>
                        <div style="margin-top: 6px; font-size: 0.88rem;">
                            Reviewer: <strong>${escapeHtml(r.fromMemberName)}</strong> &rarr; 
                            Rated: <strong style="color: var(--primary);">${escapeHtml(r.toMemberName)}</strong>
                        </div>
                        <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 3px;">
                            Project: <strong>${escapeHtml(r.project)}</strong> &bull; Submitted: ${escapeHtml(r.createdAt || 'Recent')}
                        </div>
                    </div>
                    <button type="button" class="btn-order-delete btn-delete-rating" data-id="${r.id}" title="Delete Review">🗑️</button>
                </div>
                <div style="margin-top: 10px; padding: 10px 14px; background: var(--bg-surface); border-radius: 8px; border-left: 3.5px solid var(--primary); font-size: 0.84rem; line-height: 1.5; color: var(--text-primary);">
                    "${escapeHtml(r.description)}"
                </div>
            </div>
        `;
    }).join("");
    
    container.querySelectorAll(".btn-delete-rating").forEach(btn => {
        btn.addEventListener("click", function() {
            const id = this.getAttribute("data-id");
            if (confirm("Delete this confidential peer review?")) {
                appTeamData.peerRatings = appTeamData.peerRatings.filter(r => r.id !== id);
                saveTeamData();
                playClickSound();
            }
        });
    });
}

// 9. ADMIN: EXPORT CODE GENERATOR
function renderAdminExportCode() {
    const textarea = document.getElementById("admin-export-textarea");
    if (!textarea) return;
    textarea.value = `const DEFAULT_TEAM_DATA = ${JSON.stringify(appTeamData, null, 4)};`;
}

// 10. MASTER SETUP CONTROLLER FOR MODALS & ACCESS
let isAdminModeActive = false;

function openAdminMasterConsole() {
    if (READ_ONLY_SHOWCASE_MODE || !auth || !auth.currentUser || auth.currentUser.uid !== ADMIN_AUTH_UID) return;
    const adminMasterModal = document.getElementById("admin-master-modal");
    if (!adminMasterModal) return;
    
    // Populate admin fields
    const teamInput = document.getElementById("admin-edit-team-passcode");
    const adminInput = document.getElementById("admin-edit-admin-passcode");
    if (teamInput) teamInput.value = "";
    if (adminInput) adminInput.value = "";
    
    renderAdminLeaderboardList();
    renderAdminDemeritDropdown();
    renderAdminDemeritsList();
    renderAdminWarningDropdown();
    renderAdminWarningsList();
    renderAdminOfferLetterRequestsList();
    renderAdminVaultSettings();
    renderAdminAppreciationDropdown();
    renderAdminAppreciationsList();
    renderAdminTenureChips();
    renderAdminCommitteeTenureDropdown();
    renderAdminCommitteeRosterList();
    renderAdminTasksList();
    renderAdminRatingsFeed();
    renderAdminEventsList();
    renderAdminExportCode();
    if (typeof renderAdminWinnerCertsTab === 'function') renderAdminWinnerCertsTab();
    
    adminMasterModal.classList.add("active");
    playClickSound();
}

function activateAdminMode() {
    if (READ_ONLY_SHOWCASE_MODE || !auth || !auth.currentUser || auth.currentUser.uid !== ADMIN_AUTH_UID) {
        sessionStorage.removeItem("interactup_is_admin");
        return;
    }
    isAdminModeActive = true;
    document.body.classList.add("admin-mode-active");
    
    const dock = document.getElementById("admin-persistent-dock");
    if (dock) dock.classList.add("active");
    
    const btnTeam = document.getElementById("btn-team-login-trigger");
    if (btnTeam) {
        const label = btnTeam.querySelector(".nav-label");
        if (label) label.textContent = "👑 Admin Console";
        btnTeam.style.borderColor = "#10b981";
    }
    
    renderCoreCommitteeMainView();
    if (typeof renderImpactShowcase === 'function') renderImpactShowcase();
}

function deactivateAdminMode() {
    isAdminModeActive = false;
    sessionStorage.removeItem("interactup_is_admin");
    if (auth && auth.currentUser) {
        auth.signOut().catch(() => {});
    }
    document.body.classList.remove("admin-mode-active");
    
    const dock = document.getElementById("admin-persistent-dock");
    if (dock) dock.classList.remove("active");
    
    const btnTeam = document.getElementById("btn-team-login-trigger");
    if (btnTeam) {
        const label = btnTeam.querySelector(".nav-label");
        if (label) label.textContent = "Team Login";
        btnTeam.style.borderColor = "";
    }
    
    const adminMasterModal = document.getElementById("admin-master-modal");
    if (adminMasterModal) adminMasterModal.classList.remove("active");
    
    renderCoreCommitteeMainView();
    if (typeof renderImpactShowcase === 'function') renderImpactShowcase();
    playClickSound();
}

function setupModalsController() {
    const allEventsModal = document.getElementById("all-events-modal");
    const teamLoginModal = document.getElementById("team-login-modal");
    const teamLeaderboardModal = document.getElementById("team-leaderboard-modal");
    const adminMasterModal = document.getElementById("admin-master-modal");
    
    // Check for existing active admin session (verified strictly via Firebase Auth)
    sessionStorage.removeItem("interactup_is_admin");
    sessionStorage.removeItem("interactup_member_id");
    if (!READ_ONLY_SHOWCASE_MODE && auth && auth.currentUser && auth.currentUser.uid === ADMIN_AUTH_UID) {
        activateAdminMode();
    }
    
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
    
    // Admin Fullscreen, Browse Site & Log Out Buttons
    const btnFullscreen = document.getElementById("btn-admin-fullscreen");
    const adminCardContainer = document.getElementById("admin-master-card-container");
    const fullscreenIcon = document.getElementById("fullscreen-icon");
    if (btnFullscreen && adminCardContainer) {
        btnFullscreen.addEventListener("click", () => {
            const isFull = adminCardContainer.classList.toggle("is-fullscreen");
            if (fullscreenIcon) fullscreenIcon.textContent = isFull ? "🗗" : "⛶";
            playClickSound();
        });
    }
    
    const btnBrowseSite = document.getElementById("btn-admin-browse-site");
    if (btnBrowseSite) {
        btnBrowseSite.addEventListener("click", () => {
            if (adminMasterModal) adminMasterModal.classList.remove("active");
            playClickSound();
        });
    }
    
    const btnAdminLogout = document.getElementById("btn-admin-logout");
    const btnDockLogout = document.getElementById("btn-dock-logout");
    [btnAdminLogout, btnDockLogout].forEach(btn => {
        if (btn) btn.addEventListener("click", deactivateAdminMode);
    });
    
    const btnDockOpen = document.getElementById("btn-dock-open-admin");
    if (btnDockOpen) {
        btnDockOpen.addEventListener("click", openAdminMasterConsole);
    }
    
    const btnDockSync = document.getElementById("btn-dock-quick-sync");
    if (btnDockSync) {
        btnDockSync.addEventListener("click", () => {
            saveTeamData();
            btnDockSync.textContent = "✓ Synced!";
            setTimeout(() => { btnDockSync.textContent = "☁️ Quick Sync"; }, 3000);
            playClickSound();
        });
    }
    
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
    
    function openTeamLoginPrompt() {
        if (isAdminModeActive) {
            openAdminMasterConsole();
            return;
        }
        if (currentLoggedInMember) {
            openMemberPortal(currentLoggedInMember);
            return;
        }
        if (teamLoginModal) {
            teamLoginModal.classList.add("active");
            if (passcodeField) {
                passcodeField.value = "";
                setTimeout(() => passcodeField.focus(), 150);
            }
        }
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
    
    // FIREBASE AUTHENTICATION LOGIN
    const emailField = document.getElementById("team-login-email");
    const passcodeField = document.getElementById("team-passcode-input");
    const passcodeError = document.getElementById("team-passcode-error");
    const btnValidatePasscode = document.getElementById("btn-validate-team-passcode");
    
    function validateTeamPasscode() {
        if (READ_ONLY_SHOWCASE_MODE) return;
        const email = (emailField ? emailField.value : "").trim();
        const password = (passcodeField ? passcodeField.value : "").trim();
        if (!email || !password) {
            if (passcodeError) {
                passcodeError.textContent = "Please enter both your email and password.";
                passcodeError.style.display = "block";
            }
            return;
        }
        if (!auth) {
            if (passcodeError) {
                passcodeError.textContent = "Authentication service unavailable. Please refresh.";
                passcodeError.style.display = "block";
            }
            return;
        }

        if (btnValidatePasscode) btnValidatePasscode.disabled = true;
        auth.signInWithEmailAndPassword(email, password)
            .then((cred) => {
                if (btnValidatePasscode) btnValidatePasscode.disabled = false;
                const user = cred.user;
                if (passcodeError) passcodeError.style.display = "none";
                if (passcodeField) passcodeField.value = "";
                if (emailField) emailField.value = "";

                if (user && user.uid === ADMIN_AUTH_UID) {
                    if (teamLoginModal) teamLoginModal.classList.remove("active");
                    activateAdminMode();
                    openAdminMasterConsole();
                    return;
                }

                const matchedMember = resolveCommitteeMemberFromUser(user);
                if (matchedMember) {
                    if (matchedMember.portalLocked) {
                        auth.signOut().catch(() => {});
                        if (passcodeError) {
                            passcodeError.textContent = "Your Member Portal is currently locked by the Master Admin.";
                            passcodeError.style.display = "block";
                        }
                        return;
                    }
                    if (teamLoginModal) teamLoginModal.classList.remove("active");
                    openMemberPortal(matchedMember);
                    return;
                }

                // Authenticated user without a matching committee profile
                auth.signOut().catch(() => {});
                if (passcodeError) {
                    passcodeError.textContent = "No committee member profile linked to this email.";
                    passcodeError.style.display = "block";
                }
            })
            .catch(() => {
                if (btnValidatePasscode) btnValidatePasscode.disabled = false;
                if (passcodeError) {
                    passcodeError.textContent = "Invalid email or password. Please check with Master Admin.";
                    passcodeError.style.display = "block";
                    passcodeError.style.animation = 'none';
                    passcodeError.offsetHeight;
                    passcodeError.style.animation = null;
                }
            });
    }
    
    if (btnValidatePasscode) btnValidatePasscode.addEventListener("click", validateTeamPasscode);
    if (emailField) {
        emailField.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                if (passcodeField && !passcodeField.value) {
                    passcodeField.focus();
                } else {
                    validateTeamPasscode();
                }
            }
        });
    }
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
            
            if (tabId === "tab-points") {
                if (typeof renderAdminWarningDropdown === 'function') renderAdminWarningDropdown();
                if (typeof renderAdminWarningsList === 'function') renderAdminWarningsList();
                if (typeof renderAdminDemeritDropdown === 'function') renderAdminDemeritDropdown();
                if (typeof renderAdminDemeritsList === 'function') renderAdminDemeritsList();
                if (typeof renderAdminOfferLetterRequestsList === 'function') renderAdminOfferLetterRequestsList();
            } else if (tabId === "tab-vault-admin") {
                if (typeof renderAdminVaultSettings === 'function') renderAdminVaultSettings();
            } else if (tabId === "tab-winner-certs") {
                if (typeof renderAdminWinnerCertsTab === 'function') renderAdminWinnerCertsTab();
            }
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
    
    // Admin Add Committee Member (with optional Firebase Auth account creation)
    const btnAddCommittee = document.getElementById("btn-admin-add-committee");
    if (btnAddCommittee) {
        btnAddCommittee.addEventListener("click", async () => {
            const tenureSelect = document.getElementById("admin-comm-tenure-select");
            const nameInput = document.getElementById("admin-comm-name");
            const descInput = document.getElementById("admin-comm-desc");
            const traitInput = document.getElementById("admin-comm-trait");
            const emailInput = document.getElementById("admin-comm-email");
            const passcodeInput = document.getElementById("admin-comm-passcode");
            
            if (!nameInput.value.trim() || !descInput.value.trim()) {
                alert("Please enter both the member name and description.");
                return;
            }

            const memberEmail = emailInput ? emailInput.value.trim().toLowerCase() : "";
            const initialPassword = passcodeInput ? passcodeInput.value : "";

            if (initialPassword && !memberEmail) {
                alert("Please enter a Member Login Email to create their Firebase Auth account.");
                return;
            }
            if (memberEmail && initialPassword && initialPassword.length < 6) {
                alert("Firebase Auth password must be at least 6 characters.");
                return;
            }

            if (memberEmail && initialPassword) {
                const secondaryApp = getSecondaryAuthApp();
                if (secondaryApp && typeof secondaryApp.auth === 'function') {
                    btnAddCommittee.disabled = true;
                    try {
                        const secAuth = secondaryApp.auth();
                        await secAuth.createUserWithEmailAndPassword(memberEmail, initialPassword);
                        await secAuth.signOut();
                    } catch (err) {
                        if (err && err.code === "auth/email-already-in-use") {
                            // Account already exists in Firebase Auth; still link the email to this profile
                        } else {
                            btnAddCommittee.disabled = false;
                            alert("Could not create Firebase Auth account: " + (err && err.message ? err.message : "Unknown error"));
                            return;
                        }
                    }
                    btnAddCommittee.disabled = false;
                }
            }
            
            const newComm = {
                id: "comm-" + Date.now(),
                name: nameInput.value.trim(),
                tenure: tenureSelect.value,
                desc: descInput.value.trim(),
                trait: (traitInput && traitInput.value.trim()) ? traitInput.value.trim() : "Dedicated Student Leader | Empowering Peers",
                image: adminCommPhotoData || "assets/images/logo.png"
            };
            if (memberEmail) {
                newComm.email = memberEmail;
            }
            
            appTeamData.committeeMembers.push(newComm);
            saveTeamData();
            
            nameInput.value = "";
            descInput.value = "";
            if (traitInput) traitInput.value = "";
            if (emailInput) emailInput.value = "";
            if (passcodeInput) passcodeInput.value = "";
            if (commWordCount) commWordCount.textContent = "0";
            adminCommPhotoData = "";
            if (commPhotoPreview) commPhotoPreview.style.display = "none";
            if (commPhotoPlaceholder) commPhotoPlaceholder.style.display = "block";
            if (commPhotoFile) commPhotoFile.value = "";
            playClickSound();
        });
    }

    // Admin Edit Committee Member Modal Listeners
    const editCommPhotoFile = document.getElementById("edit-comm-photo-file");
    if (editCommPhotoFile) {
        editCommPhotoFile.addEventListener("change", function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(evt) {
                    editCommPhotoData = evt.target.result;
                    const preview = document.getElementById("edit-comm-photo-preview");
                    if (preview) preview.src = editCommPhotoData;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    const btnCloseEditCommModal = document.getElementById("btn-close-edit-committee-modal");
    if (btnCloseEditCommModal) {
        btnCloseEditCommModal.addEventListener("click", closeEditCommitteeMemberModal);
    }

    const btnCancelEditComm = document.getElementById("btn-cancel-edit-comm");
    if (btnCancelEditComm) {
        btnCancelEditComm.addEventListener("click", closeEditCommitteeMemberModal);
    }

    const formEditComm = document.getElementById("form-edit-committee-member");
    if (formEditComm) {
        formEditComm.addEventListener("submit", function(e) {
            e.preventDefault();
            handleSaveEditCommitteeMember();
        });
    }

    const btnSaveEditComm = document.getElementById("btn-save-edit-comm");
    if (btnSaveEditComm) {
        btnSaveEditComm.addEventListener("click", function(e) {
            e.preventDefault();
            handleSaveEditCommitteeMember();
        });
    }

    const modalEditComm = document.getElementById("modal-edit-committee-member");
    if (modalEditComm) {
        modalEditComm.addEventListener("click", function(e) {
            if (e.target === modalEditComm) {
                closeEditCommitteeMemberModal();
            }
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
    
    // Admin Direct Cloud Sync Button
    const btnSyncCloud = document.getElementById("btn-sync-cloud");
    const cloudSyncStatus = document.getElementById("cloud-sync-status");
    if (btnSyncCloud) {
        btnSyncCloud.addEventListener("click", () => {
            if (!db) {
                if (cloudSyncStatus) {
                    cloudSyncStatus.style.display = "block";
                    cloudSyncStatus.style.color = "#ef4444";
                    cloudSyncStatus.innerHTML = "❌ Firebase not ready. Check internet connection or browser console.";
                }
                return;
            }

            if (cloudSyncStatus) {
                cloudSyncStatus.style.display = "block";
                cloudSyncStatus.style.color = "#2563eb";
                cloudSyncStatus.innerHTML = "⏳ Syncing to live cloud database...";
            }

            db.collection("interactup_config").doc("team_data").set(appTeamData)
                .then(() => {
                    if (cloudSyncStatus) {
                        cloudSyncStatus.style.color = "#10b981";
                        cloudSyncStatus.innerHTML = "✓ Synced to Live Site! 🚀 Website is updated!";
                        setTimeout(() => {
                            if (cloudSyncStatus) cloudSyncStatus.style.display = "none";
                        }, 5000);
                    }
                })
                .catch(err => {
                    console.error("Firebase sync error:", err);
                    if (cloudSyncStatus) {
                        cloudSyncStatus.style.color = "#ef4444";
                        if (err.code === "permission-denied" || (err.message && err.message.toLowerCase().includes("permission"))) {
                            cloudSyncStatus.innerHTML = "⚠️ Permission Denied: In Firebase Console &rarr; Firestore &rarr; Rules, change <code>allow read, write: if false;</code> to <code>allow read, write: if true;</code> and click Publish!";
                        } else {
                            cloudSyncStatus.innerHTML = "❌ Cloud Error: " + (err.message || "Failed to update");
                        }
                    }
                });
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
    
    // Admin Create Appreciation Task Form
    const btnCreateTask = document.getElementById("btn-admin-create-task");
    if (btnCreateTask) {
        btnCreateTask.addEventListener("click", () => {
            const titleField = document.getElementById("admin-task-title");
            const pointsField = document.getElementById("admin-task-points");
            const descField = document.getElementById("admin-task-desc");
            const allowTeamField = document.getElementById("admin-task-allow-team");
            
            if (!titleField || !pointsField || !descField) return;
            if (!titleField.value.trim() || !descField.value.trim()) {
                alert("Please provide both a task title and deliverables description.");
                return;
            }
            
            const newTask = {
                id: "task-" + Date.now(),
                title: titleField.value.trim(),
                points: parseInt(pointsField.value, 10) || 50,
                desc: descField.value.trim(),
                allowTeam: allowTeamField ? allowTeamField.checked : true,
                status: "open",
                createdAt: new Date().toLocaleDateString(),
                claims: []
            };
            
            if (!Array.isArray(appTeamData.appreciationTasks)) appTeamData.appreciationTasks = [];
            appTeamData.appreciationTasks.unshift(newTask);
            saveTeamData();
            
            titleField.value = "";
            descField.value = "";
            pointsField.value = "50";
            if (allowTeamField) allowTeamField.checked = true;
            playClickSound();
        });
    }
    
    // Admin Issue System Demerit (Negative Points to Multiple Members, NO Appreciation Point Deduction)
    const btnIssueDemerit = document.getElementById("btn-admin-issue-demerit");
    if (btnIssueDemerit) {
        btnIssueDemerit.addEventListener("click", (e) => {
            e.preventDefault();
            const pointsInput = document.getElementById("admin-demerit-points");
            const descInput = document.getElementById("admin-demerit-desc");
            const feedback = document.getElementById("admin-demerit-feedback");
            
            // Gather selected members from checklist (or fallback select)
            let selectedMembers = [];
            const checkedBoxes = document.querySelectorAll("#admin-demerit-members-checklist .demerit-chk-input:checked");
            if (checkedBoxes.length > 0) {
                checkedBoxes.forEach(chk => {
                    selectedMembers.push({
                        id: chk.value,
                        name: (chk.getAttribute("data-name") || "Member").trim()
                    });
                });
            } else {
                const memberSelect = document.getElementById("admin-demerit-member-select");
                if (memberSelect && memberSelect.value) {
                    const selectedOpt = memberSelect.options[memberSelect.selectedIndex];
                    const memberName = selectedOpt ? selectedOpt.getAttribute("data-name") || selectedOpt.text.split(" — ")[0] : memberSelect.value;
                    selectedMembers.push({
                        id: memberSelect.value,
                        name: memberName.trim()
                    });
                }
            }
            
            if (selectedMembers.length === 0) {
                alert("Please select at least one member to issue the system demerit to.");
                return;
            }
            
            let pts = parseInt(pointsInput ? pointsInput.value : "-1", 10);
            if (isNaN(pts) || pts === 0) pts = -1;
            if (pts > 0) pts = -pts; // Guarantee negative value
            
            const reason = descInput ? descInput.value.trim() : "";
            if (!reason) {
                alert("Please specify the system notice reason / infraction.");
                return;
            }
            
            if (!Array.isArray(appTeamData.demerits)) appTeamData.demerits = [];
            const nowFormatted = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            
            // Issue individual demerits to all selected members
            // NOTE: Demerits are strictly independent - do NOT deduct from leaderboard appreciation points!
            selectedMembers.forEach((m, idx) => {
                const newDemerit = {
                    id: "demerit-" + Date.now() + "-" + idx + "-" + Math.random().toString(36).substr(2, 4),
                    memberId: m.id,
                    memberName: m.name,
                    points: pts,
                    reason: reason,
                    issuedAt: nowFormatted
                };
                appTeamData.demerits.unshift(newDemerit);
            });
            
            saveTeamData();
            playClickSound();
            
            // Refresh logs and dropdowns
            renderAdminDemeritsList();
            
            // If any affected member is currently viewing their personal portal, refresh their portal
            if (typeof renderMemberPortal === 'function' && typeof currentLoggedInMember !== 'undefined' && currentLoggedInMember) {
                renderMemberPortal();
            }
            
            if (descInput) descInput.value = "";
            if (pointsInput) pointsInput.value = "-1";
            
            // Uncheck all member checkboxes
            document.querySelectorAll("#admin-demerit-members-checklist .demerit-chk-input").forEach(chk => {
                chk.checked = false;
            });
            document.querySelectorAll("#admin-demerit-members-checklist .demerit-member-card").forEach(c => {
                c.classList.remove("selected");
            });
            const countBadge = document.getElementById("admin-demerit-selected-count");
            if (countBadge) countBadge.textContent = "0 selected";
            
            const namesList = selectedMembers.map(m => m.name).join(", ");
            if (feedback) {
                feedback.innerHTML = `✓ Demerit (${pts} pts) issued to ${selectedMembers.length} member(s): ${escapeHtml(namesList)}. Recorded in respective personal portals without altering appreciation points!`;
                feedback.style.display = "block";
                setTimeout(() => { feedback.style.display = "none"; }, 5000);
            }
        });
    }

    
    // Admin Issue Official Warning
    const btnIssueWarning = document.getElementById("btn-admin-issue-warning");
    if (btnIssueWarning) {
        btnIssueWarning.addEventListener("click", (e) => {
            e.preventDefault();
            const categorySelect = document.getElementById("admin-warning-category");
            const descInput = document.getElementById("admin-warning-desc");
            const feedback = document.getElementById("admin-warning-feedback");
            
            // Gather selected members from checklist (or fallback select)
            let selectedMembers = [];
            const checkedBoxes = document.querySelectorAll("#admin-warning-members-checklist .warning-chk-input:checked");
            if (checkedBoxes.length > 0) {
                checkedBoxes.forEach(chk => {
                    selectedMembers.push({
                        id: chk.value,
                        name: (chk.getAttribute("data-name") || "Member").trim()
                    });
                });
            } else {
                const memberSelect = document.getElementById("admin-warning-member-select");
                if (memberSelect && memberSelect.value) {
                    const selectedOpt = memberSelect.options[memberSelect.selectedIndex];
                    const memberName = selectedOpt ? selectedOpt.getAttribute("data-name") || selectedOpt.text.split(" — ")[0] : memberSelect.value;
                    selectedMembers.push({
                        id: memberSelect.value,
                        name: memberName.trim()
                    });
                }
            }
            
            if (selectedMembers.length === 0) {
                alert("Please select at least one member to issue the official warning to.");
                return;
            }
            
            const category = categorySelect ? categorySelect.value : "Operational Advisory";
            const message = descInput ? descInput.value.trim() : "";
            if (!message) {
                alert("Please specify the warning notice message / cause.");
                return;
            }
            
            if (!Array.isArray(appTeamData.warnings)) appTeamData.warnings = [];
            const nowFormatted = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            
            selectedMembers.forEach((m, idx) => {
                const newWarn = {
                    id: "warn-" + Date.now() + "-" + idx + "-" + Math.random().toString(36).substr(2, 4),
                    memberId: m.id,
                    memberName: m.name,
                    category: category,
                    message: message,
                    issuedAt: nowFormatted
                };
                appTeamData.warnings.unshift(newWarn);
            });
            
            saveTeamData();
            playClickSound();
            
            renderAdminWarningsList();
            
            if (typeof renderMemberPortal === 'function' && typeof currentLoggedInMember !== 'undefined' && currentLoggedInMember) {
                renderMemberPortal();
            }
            
            if (descInput) descInput.value = "";
            
            document.querySelectorAll("#admin-warning-members-checklist .warning-chk-input").forEach(chk => {
                chk.checked = false;
            });
            document.querySelectorAll("#admin-warning-members-checklist .warning-member-card").forEach(c => {
                c.classList.remove("selected");
            });
            const countBadge = document.getElementById("admin-warning-selected-count");
            if (countBadge) countBadge.textContent = "0 selected";
            
            const namesList = selectedMembers.map(m => m.name).join(", ");
            if (feedback) {
                feedback.innerHTML = `✓ Warning issued to ${selectedMembers.length} member(s): ${escapeHtml(namesList)}. Visible in orange alert box in their portal!`;
                feedback.style.display = "block";
                setTimeout(() => { feedback.style.display = "none"; }, 5000);
            }
        });
    }

    // Award Appreciation Points Form Submission
    const btnIssueAppreciation = document.getElementById("btn-admin-issue-appreciation");
    const formIssueAppreciation = document.getElementById("admin-appreciation-form");
    if (btnIssueAppreciation && formIssueAppreciation) {
        formIssueAppreciation.addEventListener("submit", function(e) {
            e.preventDefault();
            const memberSelect = document.getElementById("admin-appreciation-member-select");
            const pointsInput = document.getElementById("admin-appreciation-points");
            const descInput = document.getElementById("admin-appreciation-desc");
            const feedback = document.getElementById("admin-appreciation-feedback");

            if (!memberSelect || !memberSelect.value) {
                alert("Please select a candidate / member to award appreciation points to.");
                return;
            }

            let pts = parseInt(pointsInput ? pointsInput.value : "25", 10);
            if (isNaN(pts) || pts <= 0) pts = 25;

            const reason = descInput ? descInput.value.trim() : "";
            if (!reason) {
                alert("Please provide the citation / reason for this appreciation award.");
                return;
            }

            const selectedOpt = memberSelect.options[memberSelect.selectedIndex];
            const memberName = selectedOpt ? selectedOpt.getAttribute("data-name") || selectedOpt.text.split(" — ")[0] : memberSelect.value;
            const memberId = memberSelect.value;

            const newAppr = {
                id: "appr-" + Date.now(),
                memberId: memberId,
                memberName: memberName.trim(),
                points: pts,
                reason: reason,
                issuedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
            };

            if (!Array.isArray(appTeamData.appreciations)) appTeamData.appreciations = [];
            appTeamData.appreciations.unshift(newAppr);

            // Add points to member in leaderboard
            if (Array.isArray(appTeamData.leaderboard)) {
                let leaderMem = appTeamData.leaderboard.find(l => l.name.trim().toLowerCase() === memberName.trim().toLowerCase());
                if (!leaderMem) {
                    leaderMem = {
                        id: "mem-" + Date.now(),
                        name: memberName.trim(),
                        points: 50
                    };
                    appTeamData.leaderboard.push(leaderMem);
                }
                leaderMem.points = (leaderMem.points || 0) + pts;
            }

            saveTeamData();
            playClickSound();

            if (descInput) descInput.value = "";
            if (pointsInput) pointsInput.value = "25";

            if (feedback) {
                feedback.style.display = "block";
                setTimeout(() => { feedback.style.display = "none"; }, 3500);
            }

            if (typeof renderAdminAppreciationsList === 'function') renderAdminAppreciationsList();
            if (typeof renderAdminLeaderboardList === 'function') renderAdminLeaderboardList();
            if (typeof renderLeaderboardTable === 'function') renderLeaderboardTable();
            if (typeof renderPublicLeaderboardLogsBin === 'function') renderPublicLeaderboardLogsBin();
            if (typeof renderMemberPortal === 'function' && typeof currentLoggedInMember !== 'undefined' && currentLoggedInMember) {
                renderMemberPortal();
            }
        });
    }

    // Accountability Policy Modal Handlers
    const policyModal = document.getElementById("accountability-policy-modal");
    const btnOpenPolicy = document.getElementById("btn-open-accountability-policy");
    const btnClosePolicy = document.getElementById("btn-close-accountability-policy");
    const btnClosePolicyFooter = document.getElementById("btn-close-accountability-policy-footer");

    function openAccountabilityPolicy() {
        if (policyModal) policyModal.classList.add("active");
        playClickSound();
    }
    function closeAccountabilityPolicy() {
        if (policyModal) policyModal.classList.remove("active");
        playClickSound();
    }

    if (btnOpenPolicy) btnOpenPolicy.addEventListener("click", openAccountabilityPolicy);
    if (btnClosePolicy) btnClosePolicy.addEventListener("click", closeAccountabilityPolicy);
    if (btnClosePolicyFooter) btnClosePolicyFooter.addEventListener("click", closeAccountabilityPolicy);

    // Impact & Brand Showcase Modal Handlers
    const impactModal = document.getElementById("impact-showcase-modal");
    const btnOpenImpactHeader = document.getElementById("btn-open-impact-showcase-btn");
    const btnCloseImpact = document.getElementById("btn-close-impact-modal");
    const sidebarNavImpact = document.getElementById("sidebar-nav-impact");
    
    function openImpactShowcase() {
        if (impactModal) impactModal.classList.add("active");
        renderImpactShowcase();
        playClickSound();
    }
    
    function closeImpactShowcase() {
        if (impactModal) impactModal.classList.remove("active");
        playClickSound();
    }
    
    if (btnOpenImpactHeader) btnOpenImpactHeader.addEventListener("click", openImpactShowcase);
    if (btnCloseImpact) btnCloseImpact.addEventListener("click", closeImpactShowcase);
    if (sidebarNavImpact) {
        sidebarNavImpact.addEventListener("click", (e) => {
            e.preventDefault();
            const sidebar = document.getElementById("main-sidebar");
            const overlay = document.getElementById("sidebar-overlay");
            if (sidebar) sidebar.classList.remove("mobile-open");
            if (overlay) overlay.classList.remove("active");
            openImpactShowcase();
        });
    }
    
    window.openImpactShowcase = openImpactShowcase;
    window.closeImpactShowcase = closeImpactShowcase;
    
    // Restore Member Session strictly from Firebase Auth (never sessionStorage)
    const savedMemberId = null;
    if (savedMemberId) {
        const foundMember = (appTeamData.committeeMembers || []).find(m => m.id === savedMemberId);
        if (foundMember) {
            currentLoggedInMember = foundMember;
            const btnTeam = document.getElementById("btn-team-login-trigger");
            if (btnTeam && !isAdminModeActive) {
                const label = btnTeam.querySelector(".nav-label");
                if (label) label.textContent = `👤 ${foundMember.name}`;
                btnTeam.style.borderColor = "#10b981";
            }
        }
    }
    
    // Initial Render of Core Committee & Leaderboard
    renderCoreCommitteeMainView();
    renderLeaderboardTable();
    
    window.addEventListener("hashchange", checkHashAccess);
    checkHashAccess();
}

// ==========================================================================
// 👤 PERSONALIZED MEMBER PORTAL & PEER APPRECIATION ENGINE
// ==========================================================================
let currentLoggedInMember = null;

function openMemberPortal(member) {
    if (READ_ONLY_SHOWCASE_MODE || !auth || !auth.currentUser || !member || member.portalLocked) {
        sessionStorage.removeItem("interactup_member_id");
        return;
    }
    currentLoggedInMember = member;
    
    const btnTeam = document.getElementById("btn-team-login-trigger");
    if (btnTeam && !isAdminModeActive) {
        const label = btnTeam.querySelector(".nav-label");
        if (label) label.textContent = `👤 ${member.name}`;
        btnTeam.style.borderColor = "#10b981";
    }
    
    const portal = document.getElementById("member-portal-modal");
    if (!portal) return;
    
    // Ensure member lands on Homepage (Total Team Leadership Dashboard) by default
    const homeTabBtn = document.querySelector('.portal-nav-tabs .portal-tab-btn[data-portal-tab="portal-tab-leaderboard"]');
    if (homeTabBtn) {
        document.querySelectorAll(".portal-nav-tabs .portal-tab-btn").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".member-portal-card .portal-tab-content").forEach(c => c.classList.remove("active"));
        homeTabBtn.classList.add("active");
        const homeContent = document.getElementById("portal-tab-leaderboard");
        if (homeContent) homeContent.classList.add("active");
    }

    renderMemberPortal();
    portal.classList.add("active");
    playClickSound();
}

function closeMemberPortal() {
    const portal = document.getElementById("member-portal-modal");
    if (portal) portal.classList.remove("active");
    const memberCardContainer = document.getElementById("member-portal-card-container");
    if (memberCardContainer) memberCardContainer.classList.remove("is-fullscreen");
    const memberFullscreenIcon = document.getElementById("member-fullscreen-icon");
    if (memberFullscreenIcon) memberFullscreenIcon.textContent = "⛶";
    currentLoggedInMember = null;
    sessionStorage.removeItem("interactup_member_id");
    if (auth && auth.currentUser && auth.currentUser.uid !== ADMIN_AUTH_UID) {
        auth.signOut().catch(() => {});
    }
    
    const btnTeam = document.getElementById("btn-team-login-trigger");
    if (btnTeam && !isAdminModeActive) {
        const label = btnTeam.querySelector(".nav-label");
        if (label) label.textContent = "Team Login";
        btnTeam.style.borderColor = "";
    }
    playClickSound();
}

function renderMemberPortal() {
    if (!currentLoggedInMember) return;
    
    // 1. Header Information
    const avatar = document.getElementById("member-portal-avatar");
    const nameEl = document.getElementById("member-portal-name");
    const tenureBadge = document.getElementById("member-portal-tenure-badge");
    const roleEl = document.getElementById("member-portal-role");
    const pointsEl = document.getElementById("member-portal-points-display");
    
    if (avatar) avatar.src = currentLoggedInMember.image || "assets/images/logo.png";
    if (nameEl) nameEl.textContent = currentLoggedInMember.name;
    if (tenureBadge) tenureBadge.textContent = currentLoggedInMember.tenure;
    if (roleEl) roleEl.textContent = currentLoggedInMember.desc;
    
    // Calculate points from leaderboard
    let myPts = 0;
    if (Array.isArray(appTeamData.leaderboard)) {
        const leaderItem = appTeamData.leaderboard.find(l => l.name.trim().toLowerCase() === currentLoggedInMember.name.trim().toLowerCase());
        if (leaderItem) myPts = leaderItem.points || 0;
    }

    // Demerits calculation (system audit notices for this member)
    const myDemerits = (appTeamData.demerits || []).filter(d => 
        (d.memberId && d.memberId === currentLoggedInMember.id) || 
        (d.memberName && d.memberName.trim().toLowerCase() === currentLoggedInMember.name.trim().toLowerCase())
    );
    const totalDemeritPts = myDemerits.reduce((acc, d) => acc + (d.points || 0), 0);

    if (pointsEl) {
        pointsEl.textContent = `${myPts} pts`;
    }
    const demeritsDisplayEl = document.getElementById("member-portal-demerits-display");
    if (demeritsDisplayEl) {
        demeritsDisplayEl.textContent = `${totalDemeritPts} pts`;
        demeritsDisplayEl.style.color = (totalDemeritPts < 0 ? "#ef4444" : "#10b981");
    }
    
    // 2. Pending Teammate Invitations Banner
    renderMemberInvitationsBanner();

    // 2B. Tab 0 (Home): Total Team Leadership & Appreciation Dashboard
    if (typeof renderMemberPortalLeaderboard === 'function') renderMemberPortalLeaderboard();
    
    // 3. Tab 1: Available Appreciation Tasks
    renderMemberAvailableTasks();
    
    // 4. Tab 2: Rate a Teammate Form & Submitted Reviews
    renderMemberRatingsTab();
    
    // 5. Tab 3: My Claimed Tasks
    renderMemberMyClaimsTab();
    
    // 6. Tab 4: System Performance & Demerits Log
    renderMemberDemeritsTab(myDemerits, totalDemeritPts);
    
    // 7. Tab 5: Personal Recognition & Accountability Logs Bin
    renderMemberLogsBinTab();

    // 8. Tab 6: Career Vault & Privileges
    if (typeof renderMemberVaultTab === 'function') renderMemberVaultTab();
}

function renderMemberInvitationsBanner() {
    const container = document.getElementById("member-invitations-container");
    if (!container || !currentLoggedInMember) return;
    
    const pendingInvites = [];
    (appTeamData.appreciationTasks || []).forEach(task => {
        (task.claims || []).forEach(c => {
            if (c.teammateId === currentLoggedInMember.id && c.teammateStatus === "pending") {
                pendingInvites.push({ task, claim: c });
            }
        });
    });
    
    if (pendingInvites.length === 0) {
        container.style.display = "none";
        container.innerHTML = "";
        return;
    }
    
    container.style.display = "block";
    container.innerHTML = pendingInvites.map(item => `
        <div class="invite-banner-card">
            <div class="invite-banner-info">
                <strong>🤝 Collaboration Invitation!</strong>
                <span style="font-size: 0.84rem;"><strong>${escapeHtml(item.claim.memberName)}</strong> invited you to team up for <em>"${escapeHtml(item.task.title)}"</em> (+${item.task.points} pts bounty).</span>
            </div>
            <div class="invite-banner-actions">
                <button type="button" class="btn-invite-accept" data-task-id="${item.task.id}" data-claim-id="${item.claim.id}">✓ Accept Collaboration</button>
                <button type="button" class="btn-invite-decline" data-task-id="${item.task.id}" data-claim-id="${item.claim.id}">✕ Decline</button>
            </div>
        </div>
    `).join("");
    
    container.querySelectorAll(".btn-invite-accept").forEach(btn => {
        btn.addEventListener("click", function() {
            const tId = this.getAttribute("data-task-id");
            const cId = this.getAttribute("data-claim-id");
            respondToTeammateInvite(tId, cId, "accepted");
        });
    });
    
    container.querySelectorAll(".btn-invite-decline").forEach(btn => {
        btn.addEventListener("click", function() {
            const tId = this.getAttribute("data-task-id");
            const cId = this.getAttribute("data-claim-id");
            respondToTeammateInvite(tId, cId, "declined");
        });
    });
}

function respondToTeammateInvite(taskId, claimId, responseStatus) {
    const task = (appTeamData.appreciationTasks || []).find(t => t.id === taskId);
    if (!task || !Array.isArray(task.claims)) return;
    
    const claim = task.claims.find(c => c.id === claimId);
    if (!claim) return;
    
    claim.teammateStatus = responseStatus;
    saveTeamData();
    playClickSound();
    renderMemberPortal();
}

// ==========================================================================
// MEMBER PORTAL TAB 0 (HOMEPAGE): TOTAL TEAM LEADERSHIP DASHBOARD
// ==========================================================================
function renderMemberPortalLeaderboard(filterText = "") {
    const tbody = document.getElementById("member-portal-leaderboard-table-body");
    const myRankBadge = document.getElementById("member-leaderboard-my-rank-badge");
    const logsContainer = document.getElementById("member-portal-public-logs-bin");
    const logsBadge = document.getElementById("member-portal-logs-count-badge");
    if (!tbody) return;

    const sorted = [...(appTeamData.leaderboard || [])].sort((a, b) => (b.points || 0) - (a.points || 0));

    // Update current member's personal standing badge
    if (myRankBadge && currentLoggedInMember) {
        const myIndex = sorted.findIndex(m => m.name && m.name.trim().toLowerCase() === currentLoggedInMember.name.trim().toLowerCase());
        const myRank = myIndex !== -1 ? myIndex + 1 : "—";
        const myPoints = myIndex !== -1 ? (sorted[myIndex].points || 0) : 0;
        myRankBadge.innerHTML = `
            <span>Your Standing:</span>
            <strong style="color: #5b21b6; font-size: 0.95rem;">Rank #${myRank}</strong>
            <span style="color: var(--text-muted);">•</span>
            <strong style="color: #10b981; font-size: 0.95rem;">${myPoints} pts</strong>
        `;
    }

    // Filter by query
    const query = (filterText || "").trim().toLowerCase();
    const filtered = query ? sorted.filter(m => (m.name || "").toLowerCase().includes(query)) : sorted;

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="3" style="text-align: center; padding: 24px; color: var(--text-muted);">No members found matching "${escapeHtml(query)}"</td></tr>`;
    } else {
        tbody.innerHTML = filtered.map(m => {
            const rank = sorted.indexOf(m) + 1;
            const isSelf = currentLoggedInMember && m.name && (m.name.trim().toLowerCase() === currentLoggedInMember.name.trim().toLowerCase());
            let rankDisplay = `#${rank}`;
            if (rank === 1) rankDisplay = `🥇 #${rank}`;
            else if (rank === 2) rankDisplay = `🥈 #${rank}`;
            else if (rank === 3) rankDisplay = `🥉 #${rank}`;

            return `
                <tr class="${isSelf ? 'leaderboard-row-self' : ''}">
                    <td class="leaderboard-rank-col" style="${isSelf ? 'font-weight: 800; color: #5b21b6;' : ''}">${rankDisplay}</td>
                    <td class="leaderboard-name-col">
                        <span>${escapeHtml(m.name || "")}</span>
                        ${isSelf ? '<span class="current-user-tag">⭐ You</span>' : ''}
                    </td>
                    <td class="leaderboard-points-col" style="${isSelf ? 'font-weight: 800; color: #10b981;' : ''}">${m.points || 0} pts</td>
                </tr>
            `;
        }).join("");
    }

    // Render Public Recognition Logs Bin in Member Portal
    if (logsContainer) {
        const appreciations = Array.isArray(appTeamData.appreciations) ? appTeamData.appreciations : [];
        if (logsBadge) logsBadge.textContent = `${appreciations.length} Citations`;

        if (appreciations.length === 0) {
            logsContainer.innerHTML = `
                <div style="text-align: center; padding: 24px 16px; color: var(--text-muted); font-size: 0.84rem;">
                    🌟 No appreciation citations recorded yet. Earn recognition by completing tasks and contributing to the community!
                </div>
            `;
        } else {
            logsContainer.innerHTML = appreciations.map(a => `
                <div class="log-citation-card">
                    <div class="log-citation-header">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <span style="font-size: 1.1rem;">🌟</span>
                            <span class="log-citation-member">${escapeHtml(a.memberName || "")}</span>
                        </div>
                        <span class="log-citation-points">+${a.points || 0} pts</span>
                    </div>
                    <div class="log-citation-quote">
                        "${escapeHtml(a.reason || "")}"
                    </div>
                    <div class="log-citation-meta">
                        <span style="color: #10b981; font-weight: 700;">🌟 Verified Community Citation</span>
                    </div>
                </div>
            `).join("");
        }
    }
}

function renderMemberAvailableTasks() {
    const grid = document.getElementById("member-tasks-grid");
    if (!grid || !currentLoggedInMember) return;
    
    const tasks = Array.isArray(appTeamData.appreciationTasks) ? appTeamData.appreciationTasks : [];
    if (tasks.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 24px; color: var(--text-muted);">No appreciation tasks available right now. Check back soon!</div>`;
        return;
    }
    
    // Other committee members for teammate dropdown
    const otherMembers = (appTeamData.committeeMembers || []).filter(m => m.id !== currentLoggedInMember.id);
    
    grid.innerHTML = tasks.map(task => {
        const myClaim = (task.claims || []).find(c => c.memberId === currentLoggedInMember.id);
        const teammateClaim = (task.claims || []).find(c => c.teammateId === currentLoggedInMember.id && c.teammateStatus === "accepted");
        
        if (myClaim) {
            return `
                <div class="member-task-card claimed">
                    <div class="member-task-card-header">
                        <h4 class="member-task-title">${escapeHtml(task.title)}</h4>
                        <span class="member-task-points-badge">+${task.points} pts</span>
                    </div>
                    <p class="member-task-desc">${escapeHtml(task.desc)}</p>
                    <div style="margin: 12px 0 10px 0;">
                        <span class="claimed-badge">✓ Claimed by You</span>
                        ${myClaim.teammateName ? `
                            <div style="margin-top: 8px; font-size: 0.8rem;">
                                Teammate: <strong>${escapeHtml(myClaim.teammateName)}</strong> &bull; 
                                ${myClaim.teammateStatus === 'pending' ? '<span class="status-pill status-pill-pending">⏳ Partner Pending</span>' : ''}
                                ${myClaim.teammateStatus === 'accepted' ? '<span class="status-pill status-pill-accepted">✓ Partner Accepted</span>' : ''}
                                ${myClaim.teammateStatus === 'declined' ? '<span class="status-pill status-pill-declined">✕ Partner Declined</span>' : ''}
                            </div>
                        ` : ''}
                        ${myClaim.isAllotted ? '<div style="margin-top: 6px; font-weight: 800; color: #10b981; font-size: 0.82rem;">🏆 Task Allotted & Points Awarded!</div>' : ''}
                    </div>
                    <button type="button" class="btn-claim-task" disabled>✓ Claimed (Locked)</button>
                </div>
            `;
        }
        
        if (teammateClaim) {
            return `
                <div class="member-task-card claimed">
                    <div class="member-task-card-header">
                        <h4 class="member-task-title">${escapeHtml(task.title)}</h4>
                        <span class="member-task-points-badge">+${task.points} pts</span>
                    </div>
                    <p class="member-task-desc">${escapeHtml(task.desc)}</p>
                    <div style="margin: 12px 0 10px 0;">
                        <span class="claimed-badge">✓ Teaming up with ${escapeHtml(teammateClaim.memberName)}</span>
                        ${teammateClaim.isAllotted ? '<div style="margin-top: 6px; font-weight: 800; color: #10b981; font-size: 0.82rem;">🏆 Task Allotted & Points Awarded!</div>' : ''}
                    </div>
                    <button type="button" class="btn-claim-task" disabled>✓ Teammate Assigned (Locked)</button>
                </div>
            `;
        }
        
        return `
            <div class="member-task-card">
                <div class="member-task-card-header">
                    <h4 class="member-task-title">${escapeHtml(task.title)}</h4>
                    <span class="member-task-points-badge">+${task.points} pts</span>
                </div>
                <p class="member-task-desc">${escapeHtml(task.desc)}</p>
                <div style="font-size: 0.76rem; color: var(--text-muted); margin-bottom: 12px;">
                    ${task.allowTeam ? '🤝 Teammate Collaboration Allowed' : '👤 Individual Solo Task Only'}
                </div>
                ${task.allowTeam ? `
                    <div style="margin-bottom: 12px;">
                        <label style="display: block; font-size: 0.76rem; font-weight: 700; margin-bottom: 4px; color: var(--text-secondary);">
                            Invite Teammate / Partner (Optional):
                        </label>
                        <select class="task-partner-select" data-task-id="${task.id}" style="width: 100%; font-size: 0.8rem; padding: 6px 10px; border-radius: 6px; border: 1.5px solid var(--border-bold); background: var(--bg-white); color: var(--text-primary);">
                            <option value="">Work Solo (No partner)</option>
                            ${otherMembers.map(m => `<option value="${m.id}">${escapeHtml(m.name)} (${escapeHtml(m.tenure)})</option>`).join("")}
                        </select>
                    </div>
                ` : ''}
                <button type="button" class="btn-claim-task" data-task-id="${task.id}">🎯 Claim Task (+${task.points} pts)</button>
            </div>
        `;
    }).join("");
    
    // Wire Claim buttons
    grid.querySelectorAll(".btn-claim-task:not([disabled])").forEach(btn => {
        btn.addEventListener("click", function() {
            const taskId = this.getAttribute("data-task-id");
            const selectEl = grid.querySelector(`.task-partner-select[data-task-id="${taskId}"]`);
            const partnerId = selectEl ? selectEl.value : null;
            claimAppreciationTask(taskId, partnerId);
        });
    });
}

function claimAppreciationTask(taskId, partnerId) {
    if (!currentLoggedInMember) return;
    const task = (appTeamData.appreciationTasks || []).find(t => t.id === taskId);
    if (!task) return;
    
    if (!Array.isArray(task.claims)) task.claims = [];
    if (task.claims.some(c => c.memberId === currentLoggedInMember.id)) {
        alert("You have already claimed this task!");
        return;
    }
    
    let partnerObj = null;
    if (partnerId) {
        partnerObj = (appTeamData.committeeMembers || []).find(m => m.id === partnerId);
    }
    
    const newClaim = {
        id: "claim-" + Date.now(),
        memberId: currentLoggedInMember.id,
        memberName: currentLoggedInMember.name,
        claimedAt: new Date().toLocaleString([], { dateStyle: 'short', timeStyle: 'short' }),
        teammateId: partnerObj ? partnerObj.id : null,
        teammateName: partnerObj ? partnerObj.name : null,
        teammateStatus: partnerObj ? "pending" : "none",
        isAllotted: false
    };
    
    task.claims.push(newClaim);
    saveTeamData();
    playClickSound();
    renderMemberPortal();
}

function renderMemberRatingsTab() {
    if (!currentLoggedInMember) return;
    
    // Populate teammate dropdown
    const select = document.getElementById("rate-target-member");
    if (select) {
        const others = (appTeamData.committeeMembers || []).filter(m => m.id !== currentLoggedInMember.id);
        if (others.length === 0) {
            select.innerHTML = `<option value="">No other members available</option>`;
        } else {
            select.innerHTML = `<option value="">-- Choose Committee Member --</option>` + 
                others.map(m => `<option value="${m.id}">${escapeHtml(m.name)} (${escapeHtml(m.tenure)} - ${escapeHtml(m.desc)})</option>`).join("");
        }
    }
    
    // Submitted Reviews list for this member
    const list = document.getElementById("member-submitted-ratings-list");
    if (list) {
        const mySubmitted = (appTeamData.peerRatings || []).filter(r => r.fromMemberId === currentLoggedInMember.id);
        if (mySubmitted.length === 0) {
            list.innerHTML = `<div style="text-align: center; padding: 24px; color: var(--text-muted); font-size: 0.84rem;">You haven't submitted any peer reviews yet. Submit your first review on the left!</div>`;
        } else {
            list.innerHTML = mySubmitted.map(r => {
                const ratingNum = Math.max(1, Math.min(5, parseInt(r.rating, 10) || 5));
                const starsText = "★".repeat(ratingNum) + "☆".repeat(5 - ratingNum);
                return `
                    <div class="rating-review-card" style="margin-bottom: 12px;">
                        <div style="color: #f59e0b; font-size: 1rem; letter-spacing: 2px;">
                            ${starsText} <span style="font-size: 0.8rem; font-weight: 800; color: var(--text-primary);">${ratingNum}/5</span>
                        </div>
                        <div style="margin-top: 4px; font-size: 0.84rem;">
                            Rated: <strong style="color: var(--primary);">${escapeHtml(r.toMemberName)}</strong> &bull; 
                            <span style="font-size: 0.76rem; color: var(--text-muted);">${escapeHtml(r.createdAt || 'Recent')}</span>
                        </div>
                        <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 2px;">
                            Project: <strong>${escapeHtml(r.project)}</strong>
                        </div>
                        <div style="margin-top: 6px; padding: 8px 12px; background: var(--bg-surface); border-radius: 6px; border-left: 3px solid var(--primary); font-size: 0.8rem; color: var(--text-primary);">
                            "${escapeHtml(r.description)}"
                        </div>
                    </div>
                `;
            }).join("");
        }
    }
}

function renderMemberMyClaimsTab() {
    const list = document.getElementById("member-my-claims-list");
    if (!list || !currentLoggedInMember) return;
    
    const myTasks = [];
    (appTeamData.appreciationTasks || []).forEach(t => {
        const primary = (t.claims || []).find(c => c.memberId === currentLoggedInMember.id);
        const partner = (t.claims || []).find(c => c.teammateId === currentLoggedInMember.id && c.teammateStatus === "accepted");
        if (primary) myTasks.push({ task: t, claim: primary, role: "Primary Applicant" });
        else if (partner) myTasks.push({ task: t, claim: partner, role: "Teammate / Partner" });
    });
    
    if (myTasks.length === 0) {
        list.innerHTML = `<div style="text-align: center; padding: 28px; color: var(--text-muted); font-size: 0.88rem;">You have not claimed any appreciation tasks yet. Visit the "Claim Appreciation Tasks" tab to get started!</div>`;
        return;
    }
    
    list.innerHTML = myTasks.map(item => `
        <div class="admin-task-claim-card" style="margin-bottom: 12px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                <div>
                    <strong style="font-size: 0.95rem; color: var(--text-primary);">${escapeHtml(item.task.title)}</strong>
                    <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 3px;">
                        Role: <strong>${item.role}</strong> &bull; Bounty: <strong style="color: #10b981;">+${item.task.points} pts</strong>
                    </div>
                </div>
                <div>
                    ${item.claim.isAllotted ? `
                        <span style="background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3); font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 999px;">
                            ✓ Allotted & Points Awarded!
                        </span>
                    ` : `
                        <span style="background: rgba(245, 158, 11, 0.15); color: #d97706; border: 1px solid rgba(245, 158, 11, 0.3); font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 999px;">
                            ⏳ Claimed &bull; Under Admin Review
                        </span>
                    `}
                </div>
            </div>
            <p style="font-size: 0.82rem; color: var(--text-secondary); margin: 8px 0;">${escapeHtml(item.task.desc)}</p>
            ${item.claim.teammateName ? `
                <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 4px;">
                    Teammate: <strong>${escapeHtml(item.claim.teammateName)}</strong> (${escapeHtml(item.claim.teammateStatus)})
                </div>
            ` : ''}
        </div>
    `).join("");
}


// ==========================================================================
// 📜 PUBLIC RECOGNITION & APPRECIATION LOGS BIN (TEAM LEADERBOARD)
// ==========================================================================
function renderPublicLeaderboardLogsBin() {
    const container = document.getElementById("leaderboard-public-logs-bin");
    const badge = document.getElementById("leaderboard-logs-count-badge");
    if (!container) return;

    const appreciations = Array.isArray(appTeamData.appreciations) ? appTeamData.appreciations : [];
    if (badge) badge.textContent = `${appreciations.length} Citations`;

    if (appreciations.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 24px 16px; color: var(--text-muted); font-size: 0.84rem;">
                🌟 No appreciation citations recorded yet. Earn recognition by completing tasks and contributing to the community!
            </div>
        `;
        return;
    }

    container.innerHTML = appreciations.map(a => `
        <div class="log-citation-card">
            <div class="log-citation-header">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="font-size: 1.1rem;">🌟</span>
                    <span class="log-citation-member">${escapeHtml(a.memberName)}</span>
                </div>
                <span class="log-citation-points">+${a.points} pts</span>
            </div>
            <div class="log-citation-quote">
                "${escapeHtml(a.reason)}"
            </div>
            <div class="log-citation-meta">
                <span style="color: #10b981; font-weight: 700;">🌟 Verified Community Citation</span>
                <span style="color: var(--text-muted); font-size: 0.74rem;">Chronological Merit Recognition</span>
            </div>
        </div>
    `).join("");
}
window.renderPublicLeaderboardLogsBin = renderPublicLeaderboardLogsBin;

// ==========================================================================
// 📜 PERSONAL RECOGNITION & AUDIT LOGS BIN (MEMBER PORTAL)
// ==========================================================================
let currentLogsFilter = "all";

function renderMemberLogsBinTab() {
    const container = document.getElementById("member-personal-logs-container");
    const apprTotalBadge = document.getElementById("member-logs-appr-total");
    const demeritTotalBadge = document.getElementById("member-logs-demerit-total");
    const warningTotalBadge = document.getElementById("member-logs-warning-total");
    const countAll = document.getElementById("count-logs-all");
    const countAppr = document.getElementById("count-logs-appr");
    const countDemerit = document.getElementById("count-logs-demerit");
    const countWarning = document.getElementById("count-logs-warning");

    if (!container || !currentLoggedInMember) return;

    // Filter appreciations for this member
    const myAppreciations = (appTeamData.appreciations || []).filter(a =>
        (a.memberId && a.memberId === currentLoggedInMember.id) ||
        (a.memberName && a.memberName.trim().toLowerCase() === currentLoggedInMember.name.trim().toLowerCase())
    );

    // Filter demerits for this member
    const myDemerits = (appTeamData.demerits || []).filter(d =>
        (d.memberId && d.memberId === currentLoggedInMember.id) ||
        (d.memberName && d.memberName.trim().toLowerCase() === currentLoggedInMember.name.trim().toLowerCase())
    );

    // Filter warnings for this member
    const myWarnings = (appTeamData.warnings || []).filter(w =>
        (w.memberId && w.memberId === currentLoggedInMember.id) ||
        (w.memberName && w.memberName.trim().toLowerCase() === currentLoggedInMember.name.trim().toLowerCase())
    );

    const totalApprPts = myAppreciations.reduce((acc, a) => acc + (a.points || 0), 0);
    const totalDemeritPts = myDemerits.reduce((acc, d) => acc + (d.points || 0), 0);

    if (apprTotalBadge) apprTotalBadge.textContent = `+${totalApprPts} pts Earned`;
    if (demeritTotalBadge) demeritTotalBadge.textContent = `${totalDemeritPts} pts Demerits`;
    if (warningTotalBadge) warningTotalBadge.textContent = `${myWarnings.length} Warning${myWarnings.length === 1 ? '' : 's'}`;

    if (countAll) countAll.textContent = myAppreciations.length + myDemerits.length + myWarnings.length;
    if (countAppr) countAppr.textContent = myAppreciations.length;
    if (countDemerit) countDemerit.textContent = myDemerits.length;
    if (countWarning) countWarning.textContent = myWarnings.length;

    // Combine into unified activity feed
    let unified = [];
    myAppreciations.forEach(a => {
        unified.push({
            id: a.id,
            type: "appreciation",
            points: a.points,
            reason: a.reason,
            title: "🌟 Official Appreciation Citation",
            raw: a
        });
    });
    myDemerits.forEach(d => {
        unified.push({
            id: d.id,
            type: "demerit",
            points: d.points,
            reason: d.reason,
            issuedAt: d.issuedAt || "Recent",
            title: `⚙️ System Compliance Audit Record (#${d.id.slice(-6).toUpperCase()})`,
            raw: d
        });
    });
    myWarnings.forEach(w => {
        unified.push({
            id: w.id,
            type: "warning",
            points: 0,
            category: w.category || "Official Operational Warning",
            reason: w.message,
            issuedAt: w.issuedAt || "Recent",
            title: `⚠️ ${w.category || "Official Advisory Notice"} (#${w.id.slice(-6).toUpperCase()})`,
            raw: w
        });
    });

    // Sort by id descending (chronological newest first)
    unified.sort((x, y) => String(y.id).localeCompare(String(x.id)));

    // Apply active filter
    let filtered = unified;
    if (currentLogsFilter === "appreciation") {
        filtered = unified.filter(item => item.type === "appreciation");
    } else if (currentLogsFilter === "demerits") {
        filtered = unified.filter(item => item.type === "demerit");
    } else if (currentLogsFilter === "warning") {
        filtered = unified.filter(item => item.type === "warning");
    }

    // Wire filter buttons
    document.querySelectorAll(".logs-filter-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-filter") === currentLogsFilter);
        btn.onclick = function() {
            currentLogsFilter = this.getAttribute("data-filter");
            renderMemberLogsBinTab();
            playClickSound();
        };
    });

    if (filtered.length === 0) {
        let emptyMsg = "No activity logs recorded yet.";
        if (currentLogsFilter === "appreciation") emptyMsg = "No appreciation citations recorded yet.";
        if (currentLogsFilter === "demerits") emptyMsg = "Clean record! No system accountability notices on file.";
        if (currentLogsFilter === "warning") emptyMsg = "Clean record! No official warnings on file.";

        container.innerHTML = `
            <div style="text-align: center; padding: 36px 20px; background: var(--bg-surface); border-radius: 12px; border: 1px dashed var(--border-light);">
                <div style="font-size: 2rem; margin-bottom: 8px;">${currentLogsFilter === 'demerits' ? '🛡️' : (currentLogsFilter === 'warning' ? '🛡️' : '📜')}</div>
                <strong style="display: block; font-size: 0.95rem; color: var(--text-primary); margin-bottom: 4px;">${emptyMsg}</strong>
                <p style="font-size: 0.8rem; color: var(--text-muted); margin: 0;">Entries appear here automatically in chronological order.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(item => {
        if (item.type === "appreciation") {
            // GREEN COLOR BOX FOR APPRECIATION - NO DATES DISPLAYED AS REQUESTED
            return `
                <div class="personal-log-card appreciation">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; flex-wrap: wrap;">
                        <div>
                            <span class="log-type-tag green">🌟 Official Merit Recognition</span>
                            <strong style="display: block; font-size: 0.94rem; margin-top: 3px; color: var(--text-primary);">${escapeHtml(item.title)}</strong>
                        </div>
                        <div>
                            <span class="logs-stat-pill green">+${item.points} pts</span>
                        </div>
                    </div>
                    <div style="margin: 8px 0; font-size: 0.86rem; color: var(--text-secondary); line-height: 1.5; background: rgba(16, 185, 129, 0.05); padding: 10px 14px; border-radius: 8px; border-left: 3.5px solid #10b981;">
                        "${escapeHtml(item.reason)}"
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.74rem; color: var(--text-muted); flex-wrap: wrap; gap: 6px;">
                        <span>Accreditation: <strong style="color: #10b981;">Verified Community Citation</strong></span>
                        <span style="color: #10b981; font-weight: 700;">Chronological Order</span>
                    </div>
                </div>
            `;
        } else if (item.type === "demerit") {
            // RED COLOR BOX FOR NEGATIVE POINTS - NO DATES DISPLAYED AS REQUESTED
            return `
                <div class="personal-log-card demerit">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; flex-wrap: wrap;">
                        <div>
                            <span class="log-type-tag red">⚙️ System Accountability Notice</span>
                            <strong style="display: block; font-size: 0.94rem; margin-top: 3px; color: var(--text-primary);">${escapeHtml(item.title)}</strong>
                        </div>
                        <div>
                            <span class="logs-stat-pill red">${item.points} pts</span>
                        </div>
                    </div>
                    <div style="margin: 8px 0; font-size: 0.86rem; color: var(--text-secondary); line-height: 1.5; background: rgba(239, 68, 68, 0.05); padding: 10px 14px; border-radius: 8px; border-left: 3.5px solid #ef4444;">
                        ${escapeHtml(item.reason)}
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.74rem; color: var(--text-muted); flex-wrap: wrap; gap: 6px;">
                        <span>Classification: <strong style="color: #ef4444;">System Demerit</strong></span>
                        <span style="color: #ef4444; font-weight: 700;">Chronological Order</span>
                    </div>
                </div>
            `;
        } else {
            // ORANGE COLOR BOX FOR WARNINGS - NO DATES DISPLAYED AS REQUESTED
            return `
                <div class="personal-log-card warning">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; flex-wrap: wrap;">
                        <div>
                            <span class="log-type-tag orange">⚠️ Formal Advisory Notice</span>
                            <strong style="display: block; font-size: 0.94rem; margin-top: 3px; color: var(--text-primary);">${escapeHtml(item.title)}</strong>
                        </div>
                        <div>
                            <span class="logs-stat-pill orange">⚠️ Official Warning</span>
                        </div>
                    </div>
                    <div style="margin: 8px 0; font-size: 0.86rem; color: var(--text-secondary); line-height: 1.5; background: rgba(249, 115, 22, 0.06); padding: 10px 14px; border-radius: 8px; border-left: 3.5px solid #ea580c;">
                        ${escapeHtml(item.reason)}
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.74rem; color: var(--text-muted); flex-wrap: wrap; gap: 6px;">
                        <span>Classification: <strong style="color: #ea580c;">Administrative Advisory</strong></span>
                        <span style="color: #ea580c; font-weight: 700;">Chronological Order</span>
                    </div>
                </div>
            `;
        }
    }).join("");
}
window.renderMemberLogsBinTab = renderMemberLogsBinTab;

function renderMemberDemeritsTab(myDemerits, totalDemeritPts) {
    const list = document.getElementById("member-demerits-list");
    const badge = document.getElementById("member-total-demerits-badge");
    if (!list || !currentLoggedInMember) return;
    
    if (badge) {
        if (totalDemeritPts < 0) {
            badge.textContent = `${totalDemeritPts} pts`;
            badge.style.background = "rgba(239, 68, 68, 0.2)";
            badge.style.color = "#ef4444";
            badge.style.borderColor = "rgba(239, 68, 68, 0.4)";
        } else {
            badge.textContent = "0 pts";
            badge.style.background = "rgba(16, 185, 129, 0.15)";
            badge.style.color = "#10b981";
            badge.style.borderColor = "rgba(16, 185, 129, 0.3)";
        }
    }
    
    if (!myDemerits || myDemerits.length === 0) {
        list.innerHTML = `
            <div style="text-align: center; padding: 36px 20px; background: var(--surface-secondary, rgba(255,255,255,0.03)); border-radius: 12px; border: 1px dashed var(--border-color);">
                <div style="font-size: 2.2rem; margin-bottom: 8px;">🛡️</div>
                <strong style="display: block; font-size: 1rem; color: #10b981; margin-bottom: 4px;">Clean Accountability Record!</strong>
                <p style="font-size: 0.84rem; color: var(--text-muted); margin: 0; max-width: 480px; margin-inline: auto;">
                    You have zero active system demerits on file. Keep up the high standard of commitment, punctuality, and community contribution!
                </p>
            </div>
        `;
        return;
    }
    
    list.innerHTML = myDemerits.map(d => `
        <div class="demerit-notice-card">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; flex-wrap: wrap;">
                <div>
                    <span class="system-audit-tag">⚙️ System Compliance Audit Record</span>
                    <strong style="display: block; font-size: 0.95rem; margin-top: 4px; color: var(--text-primary);">Notice Ref: #${d.id.slice(-6).toUpperCase()}</strong>
                </div>
                <div>
                    <span class="demerit-pill" style="font-size: 0.88rem; font-weight: 800; padding: 4px 12px;">${d.points} pts</span>
                </div>
            </div>
            <div style="margin: 10px 0; font-size: 0.86rem; color: var(--text-secondary); line-height: 1.5; background: rgba(0,0,0,0.04); padding: 10px 14px; border-radius: 8px; border-left: 3px solid #ef4444;">
                ${escapeHtml(d.reason)}
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.76rem; color: var(--text-muted); flex-wrap: wrap; gap: 8px;">
                <span>Audit Classification: <strong style="color: #ef4444;">Procedural Demerit</strong></span>
                <span style="color: #ef4444; font-weight: 700;">Chronological Order</span>
            </div>
        </div>
    `).join("");
}


// ==========================================================================
// 🌟 IMPACT & BRAND SHOWCASE - DYNAMIC RENDER + ADMIN INLINE EDITING
// ==========================================================================
function renderImpactShowcase() {
    const body = document.getElementById("impact-modal-scroll-body");
    if (!body) return;
    const ic = appTeamData.impactContent || DEFAULT_TEAM_DATA.impactContent;
    const isAdmin = isAdminModeActive;

    function esc(s) { return escapeHtml(String(s || '')); }

    body.innerHTML = `
        <!-- Hero Banner -->
        <div class="impact-hero-banner">
            ${isAdmin ? `<div class="impact-admin-edit-bar">
                <button type="button" class="btn-impact-edit" id="btn-edit-impact-hero">✏️ Edit Hero Text</button>
            </div>` : ''}
            <span class="impact-hero-tag">${esc(ic.heroTag)}</span>
            <h2 class="impact-hero-title">${esc(ic.heroTitle)}</h2>
            <p class="impact-hero-lead">${esc(ic.heroLead)}</p>
            ${isAdmin ? `<div id="form-edit-impact-hero" class="impact-inline-edit-form" style="display:none;">
                <label style="font-size:0.76rem;font-weight:700;color:var(--text-secondary);">Hero Tag Line</label>
                <input type="text" id="ieh-tag" value="${esc(ic.heroTag)}">
                <label style="font-size:0.76rem;font-weight:700;color:var(--text-secondary);">Hero Title</label>
                <input type="text" id="ieh-title" value="${esc(ic.heroTitle)}">
                <label style="font-size:0.76rem;font-weight:700;color:var(--text-secondary);">Lead Paragraph</label>
                <textarea id="ieh-lead">${esc(ic.heroLead)}</textarea>
                <button type="button" class="impact-inline-save-btn" id="btn-save-impact-hero">💾 Save Hero</button>
            </div>` : ''}
        </div>

        <!-- Proof of Impact Metrics -->
        <h4 style="font-size:1.15rem;font-weight:800;margin:0 0 16px 0;">📊 Our Scale &amp; Verifiable Impact</h4>
        <div class="impact-metrics-grid">
            ${(ic.metrics || []).map(m => `
                <div class="impact-metric-card impact-card-wrap" data-metric-id="${esc(m.id)}">
                    ${isAdmin ? `<button type="button" class="btn-impact-delete btn-delete-metric" data-id="${esc(m.id)}" title="Remove metric">✕</button>` : ''}
                    <div class="impact-metric-num" contenteditable="${isAdmin}" data-field="num" data-metric-id="${esc(m.id)}">${esc(m.num)}</div>
                    <div class="impact-metric-label" contenteditable="${isAdmin}" data-field="label" data-metric-id="${esc(m.id)}">${esc(m.label)}</div>
                    <div class="impact-metric-sub" contenteditable="${isAdmin}" data-field="sub" data-metric-id="${esc(m.id)}">${esc(m.sub)}</div>
                </div>
            `).join('')}
        </div>
        ${isAdmin ? `<div style="text-align:center;margin:8px 0 20px;">
            <button type="button" class="btn-impact-add" id="btn-add-metric">➕ Add Metric</button>
        </div>` : ''}

        <!-- Core Pillars -->
        <h4 style="font-size:1.15rem;font-weight:800;margin:28px 0 16px 0;">🛡️ The Goodwill Foundations of InteractUp</h4>
        <div class="impact-pillars-grid">
            ${(ic.pillars || []).map(p => `
                <div class="impact-pillar-card impact-card-wrap" data-pillar-id="${esc(p.id)}">
                    ${isAdmin ? `<button type="button" class="btn-impact-delete btn-delete-pillar" data-id="${esc(p.id)}" title="Remove pillar">✕</button>` : ''}
                    <div class="impact-pillar-icon" contenteditable="${isAdmin}" data-field="icon" data-pillar-id="${esc(p.id)}">${esc(p.icon)}</div>
                    <h5 class="impact-pillar-title" contenteditable="${isAdmin}" data-field="title" data-pillar-id="${esc(p.id)}">${esc(p.title)}</h5>
                    <p class="impact-pillar-desc" contenteditable="${isAdmin}" data-field="desc" data-pillar-id="${esc(p.id)}">${esc(p.desc)}</p>
                </div>
            `).join('')}
        </div>
        ${isAdmin ? `<div style="text-align:center;margin:8px 0 20px;">
            <button type="button" class="btn-impact-add" id="btn-add-pillar">➕ Add Pillar</button>
        </div>` : ''}

        <!-- Hall of Fame -->
        <h4 style="font-size:1.15rem;font-weight:800;margin:28px 0 16px 0;">🏆 Landmark Milestones &amp; Hall of Fame</h4>
        <div class="impact-hall-grid">
            ${(ic.hallOfFame || []).map(h => `
                <div class="impact-hall-card impact-card-wrap" data-hall-id="${esc(h.id)}">
                    ${isAdmin ? `<button type="button" class="btn-impact-delete btn-delete-hall" data-id="${esc(h.id)}" title="Remove milestone">✕</button>` : ''}
                    <div style="font-size:0.76rem;font-weight:800;color:#f59e0b;text-transform:uppercase;" contenteditable="${isAdmin}" data-field="tag" data-hall-id="${esc(h.id)}">${esc(h.tag)}</div>
                    <h5 style="margin:6px 0 8px 0;font-size:1.05rem;" contenteditable="${isAdmin}" data-field="title" data-hall-id="${esc(h.id)}">${esc(h.title)}</h5>
                    <p style="margin:0;font-size:0.84rem;color:var(--text-secondary);line-height:1.5;" contenteditable="${isAdmin}" data-field="desc" data-hall-id="${esc(h.id)}">${esc(h.desc)}</p>
                </div>
            `).join('')}
        </div>
        ${isAdmin ? `<div style="text-align:center;margin:8px 0 20px;">
            <button type="button" class="btn-impact-add" id="btn-add-hall">➕ Add Milestone</button>
        </div>` : ''}

        <!-- Student Testimonials -->
        <h4 style="font-size:1.15rem;font-weight:800;margin:28px 0 16px 0;">💬 Voices of Student Transformation</h4>
        <div class="impact-testimonials-grid">
            ${(ic.testimonials || []).map(t => `
                <div class="impact-quote-card impact-card-wrap" data-test-id="${esc(t.id)}">
                    ${isAdmin ? `<button type="button" class="btn-impact-delete btn-delete-testimonial" data-id="${esc(t.id)}" title="Remove testimonial">✕</button>` : ''}
                    <em style="display:block;margin-bottom:12px;line-height:1.55;font-size:0.9rem;" contenteditable="${isAdmin}" data-field="quote" data-test-id="${esc(t.id)}">"${esc(t.quote)}"</em>
                    <div class="impact-quote-author">
                        <div style="font-size:1.3rem;" contenteditable="${isAdmin}" data-field="emoji" data-test-id="${esc(t.id)}">${esc(t.emoji)}</div>
                        <div>
                            <strong style="font-size:0.85rem;display:block;" contenteditable="${isAdmin}" data-field="name" data-test-id="${esc(t.id)}">${esc(t.name)}</strong>
                            <span class="impact-author-role" contenteditable="${isAdmin}" data-field="role" data-test-id="${esc(t.id)}">${esc(t.role)}</span>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        ${isAdmin ? `<div style="text-align:center;margin:8px 0 20px;">
            <button type="button" class="btn-impact-add" id="btn-add-testimonial">➕ Add Testimonial</button>
        </div>` : ''}

        <!-- CTA Banner -->
        <div class="impact-cta-banner">
            ${isAdmin ? `<div class="impact-admin-edit-bar" style="margin-bottom:12px;">
                <button type="button" class="btn-impact-edit" id="btn-edit-impact-cta">✏️ Edit CTA Section</button>
            </div>` : ''}
            <h3 style="margin:0 0 8px 0;font-size:1.4rem;">${esc(ic.ctaHeading)}</h3>
            <p style="margin:0 auto 20px auto;max-width:600px;font-size:0.9rem;color:var(--text-secondary);">${esc(ic.ctaBody)}</p>
            <div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap;">
                <a href="${esc(ic.ctaWhatsappUrl)}" target="_blank" class="btn btn-primary" style="padding:10px 22px;font-weight:800;font-size:0.9rem;">📲 Join WhatsApp Community</a>
                <a href="${esc(ic.ctaPartnerUrl)}" target="_blank" class="btn btn-secondary" style="padding:10px 22px;font-weight:800;font-size:0.9rem;">🤝 Partner / Start a Chapter</a>
            </div>
            ${isAdmin ? `<div id="form-edit-impact-cta" class="impact-inline-edit-form" style="display:none;margin-top:16px;">
                <label style="font-size:0.76rem;font-weight:700;color:var(--text-secondary);">CTA Heading</label>
                <input type="text" id="icta-heading" value="${esc(ic.ctaHeading)}">
                <label style="font-size:0.76rem;font-weight:700;color:var(--text-secondary);">CTA Body Text</label>
                <textarea id="icta-body">${esc(ic.ctaBody)}</textarea>
                <label style="font-size:0.76rem;font-weight:700;color:var(--text-secondary);">WhatsApp Community URL</label>
                <input type="url" id="icta-wa" value="${esc(ic.ctaWhatsappUrl)}">
                <label style="font-size:0.76rem;font-weight:700;color:var(--text-secondary);">Partner / Chapter URL</label>
                <input type="url" id="icta-partner" value="${esc(ic.ctaPartnerUrl)}">
                <button type="button" class="impact-inline-save-btn" id="btn-save-impact-cta">💾 Save CTA</button>
            </div>` : ''}
        </div>

        ${isAdmin ? `<div style="text-align:center;margin:16px 0;padding:12px;background:rgba(239,68,68,0.06);border-radius:10px;border:1px dashed rgba(239,68,68,0.3);">
            <span style="font-size:0.78rem;color:var(--text-muted);">🛡️ <strong>Admin Mode:</strong> Click on any text to edit it directly. Use ✕ buttons to remove items. Click 💾 to save text boxes, or just blur a field — contenteditable fields auto-save on focus-out.</span>
        </div>` : ''}
    `;

    if (!isAdmin) return;

    // --- Wire Hero toggle ---
    const btnEditHero = body.querySelector('#btn-edit-impact-hero');
    const formHero = body.querySelector('#form-edit-impact-hero');
    if (btnEditHero && formHero) {
        btnEditHero.addEventListener('click', () => {
            formHero.style.display = formHero.style.display === 'none' ? 'flex' : 'none';
        });
    }
    body.querySelector('#btn-save-impact-hero')?.addEventListener('click', () => {
        if (!appTeamData.impactContent) appTeamData.impactContent = {};
        const tagEl = document.getElementById('ieh-tag');
        const titleEl = document.getElementById('ieh-title');
        const leadEl = document.getElementById('ieh-lead');
        if (tagEl) appTeamData.impactContent.heroTag = tagEl.value.trim();
        if (titleEl) appTeamData.impactContent.heroTitle = titleEl.value.trim();
        if (leadEl) appTeamData.impactContent.heroLead = leadEl.value.trim();
        saveTeamData();
        playClickSound();
        renderImpactShowcase();
    });

    // --- Wire CTA toggle ---
    const btnEditCTA = body.querySelector('#btn-edit-impact-cta');
    const formCTA = body.querySelector('#form-edit-impact-cta');
    if (btnEditCTA && formCTA) {
        btnEditCTA.addEventListener('click', () => {
            formCTA.style.display = formCTA.style.display === 'none' ? 'flex' : 'none';
        });
    }
    body.querySelector('#btn-save-impact-cta')?.addEventListener('click', () => {
        if (!appTeamData.impactContent) appTeamData.impactContent = {};
        const hEl = document.getElementById('icta-heading');
        const bEl = document.getElementById('icta-body');
        const waEl = document.getElementById('icta-wa');
        const pEl = document.getElementById('icta-partner');
        if (hEl) appTeamData.impactContent.ctaHeading = hEl.value.trim();
        if (bEl) appTeamData.impactContent.ctaBody = bEl.value.trim();
        if (waEl) appTeamData.impactContent.ctaWhatsappUrl = waEl.value.trim();
        if (pEl) appTeamData.impactContent.ctaPartnerUrl = pEl.value.trim();
        saveTeamData();
        playClickSound();
        renderImpactShowcase();
    });

    // --- Wire contenteditable blur-to-save: Metrics ---
    body.querySelectorAll('[contenteditable="true"][data-metric-id]').forEach(el => {
        el.addEventListener('blur', () => {
            if (!appTeamData.impactContent) appTeamData.impactContent = {};
            if (!Array.isArray(appTeamData.impactContent.metrics)) appTeamData.impactContent.metrics = [];
            const id = el.getAttribute('data-metric-id');
            const field = el.getAttribute('data-field');
            const metric = appTeamData.impactContent.metrics.find(m => m.id === id);
            if (metric) { metric[field] = el.textContent.trim(); saveTeamData(); }
        });
    });

    // --- Wire contenteditable blur-to-save: Pillars ---
    body.querySelectorAll('[contenteditable="true"][data-pillar-id]').forEach(el => {
        el.addEventListener('blur', () => {
            if (!appTeamData.impactContent) appTeamData.impactContent = {};
            if (!Array.isArray(appTeamData.impactContent.pillars)) appTeamData.impactContent.pillars = [];
            const id = el.getAttribute('data-pillar-id');
            const field = el.getAttribute('data-field');
            const pillar = appTeamData.impactContent.pillars.find(p => p.id === id);
            if (pillar) { pillar[field] = el.textContent.trim(); saveTeamData(); }
        });
    });

    // --- Wire contenteditable blur-to-save: Hall of Fame ---
    body.querySelectorAll('[contenteditable="true"][data-hall-id]').forEach(el => {
        el.addEventListener('blur', () => {
            if (!appTeamData.impactContent) appTeamData.impactContent = {};
            if (!Array.isArray(appTeamData.impactContent.hallOfFame)) appTeamData.impactContent.hallOfFame = [];
            const id = el.getAttribute('data-hall-id');
            const field = el.getAttribute('data-field');
            const hall = appTeamData.impactContent.hallOfFame.find(h => h.id === id);
            if (hall) { hall[field] = el.textContent.trim(); saveTeamData(); }
        });
    });

    // --- Wire contenteditable blur-to-save: Testimonials ---
    body.querySelectorAll('[contenteditable="true"][data-test-id]').forEach(el => {
        el.addEventListener('blur', () => {
            if (!appTeamData.impactContent) appTeamData.impactContent = {};
            if (!Array.isArray(appTeamData.impactContent.testimonials)) appTeamData.impactContent.testimonials = [];
            const id = el.getAttribute('data-test-id');
            const field = el.getAttribute('data-field');
            const test = appTeamData.impactContent.testimonials.find(t => t.id === id);
            if (test) { test[field] = el.textContent.trim(); saveTeamData(); }
        });
    });

    // --- Wire Delete buttons ---
    body.querySelectorAll('.btn-delete-metric').forEach(btn => {
        btn.addEventListener('click', () => {
            if (!appTeamData.impactContent) return;
            appTeamData.impactContent.metrics = (appTeamData.impactContent.metrics || []).filter(m => m.id !== btn.getAttribute('data-id'));
            saveTeamData(); renderImpactShowcase();
        });
    });
    body.querySelectorAll('.btn-delete-pillar').forEach(btn => {
        btn.addEventListener('click', () => {
            if (!appTeamData.impactContent) return;
            appTeamData.impactContent.pillars = (appTeamData.impactContent.pillars || []).filter(p => p.id !== btn.getAttribute('data-id'));
            saveTeamData(); renderImpactShowcase();
        });
    });
    body.querySelectorAll('.btn-delete-hall').forEach(btn => {
        btn.addEventListener('click', () => {
            if (!appTeamData.impactContent) return;
            appTeamData.impactContent.hallOfFame = (appTeamData.impactContent.hallOfFame || []).filter(h => h.id !== btn.getAttribute('data-id'));
            saveTeamData(); renderImpactShowcase();
        });
    });
    body.querySelectorAll('.btn-delete-testimonial').forEach(btn => {
        btn.addEventListener('click', () => {
            if (!appTeamData.impactContent) return;
            appTeamData.impactContent.testimonials = (appTeamData.impactContent.testimonials || []).filter(t => t.id !== btn.getAttribute('data-id'));
            saveTeamData(); renderImpactShowcase();
        });
    });

    // --- Wire Add buttons ---
    body.querySelector('#btn-add-metric')?.addEventListener('click', () => {
        if (!appTeamData.impactContent) appTeamData.impactContent = {};
        if (!Array.isArray(appTeamData.impactContent.metrics)) appTeamData.impactContent.metrics = [];
        appTeamData.impactContent.metrics.push({ id: 'metric-' + Date.now(), num: 'NEW', label: 'New Metric', sub: 'Sub-label here' });
        saveTeamData(); renderImpactShowcase();
    });
    body.querySelector('#btn-add-pillar')?.addEventListener('click', () => {
        if (!appTeamData.impactContent) appTeamData.impactContent = {};
        if (!Array.isArray(appTeamData.impactContent.pillars)) appTeamData.impactContent.pillars = [];
        appTeamData.impactContent.pillars.push({ id: 'pillar-' + Date.now(), icon: '⭐', title: 'New Pillar', desc: 'Describe this pillar...' });
        saveTeamData(); renderImpactShowcase();
    });
    body.querySelector('#btn-add-hall')?.addEventListener('click', () => {
        if (!appTeamData.impactContent) appTeamData.impactContent = {};
        if (!Array.isArray(appTeamData.impactContent.hallOfFame)) appTeamData.impactContent.hallOfFame = [];
        appTeamData.impactContent.hallOfFame.push({ id: 'hall-' + Date.now(), tag: 'Achievement', title: 'New Milestone', desc: 'Describe the milestone...' });
        saveTeamData(); renderImpactShowcase();
    });
    body.querySelector('#btn-add-testimonial')?.addEventListener('click', () => {
        if (!appTeamData.impactContent) appTeamData.impactContent = {};
        if (!Array.isArray(appTeamData.impactContent.testimonials)) appTeamData.impactContent.testimonials = [];
        appTeamData.impactContent.testimonials.push({ id: 'test-' + Date.now(), emoji: '💬', quote: 'New testimonial quote here.', name: 'Member Name', role: 'Role & Chapter' });
        saveTeamData(); renderImpactShowcase();
    });
}
window.renderImpactShowcase = renderImpactShowcase;

function initMemberPortal() {
    // Portal Tabs switching
    document.querySelectorAll(".portal-tab-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            const targetId = this.getAttribute("data-portal-tab");
            document.querySelectorAll(".portal-tab-btn").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".portal-tab-content").forEach(c => c.classList.remove("active"));
            this.classList.add("active");
            const targetEl = document.getElementById(targetId);
            if (targetEl) targetEl.classList.add("active");
            if (targetId === "portal-tab-leaderboard" && typeof renderMemberPortalLeaderboard === 'function') {
                renderMemberPortalLeaderboard();
            }
            if (targetId === "portal-tab-logs" && typeof renderMemberLogsBinTab === 'function') {
                renderMemberLogsBinTab();
            }
            if (targetId === "portal-tab-vault" && typeof renderMemberVaultTab === 'function') {
                renderMemberVaultTab();
            }
            playClickSound();
        });
    });
    
    // Star Rating Click & Label Handlers
    const starSelector = document.getElementById("star-rating-selector");
    const starHiddenInput = document.getElementById("rate-stars-input");
    const starLabel = document.getElementById("star-rating-label");
    const starLabels = {
        1: "1/5 - Needs Improvement",
        2: "2/5 - Fair Contribution",
        3: "3/5 - Good Team Player",
        4: "4/5 - Excellent Impact",
        5: "5/5 - Outstanding Leadership"
    };
    
    function setStars(num) {
        if (starHiddenInput) starHiddenInput.value = num;
        if (starLabel) starLabel.textContent = starLabels[num] || `${num}/5`;
        if (starSelector) {
            starSelector.querySelectorAll(".star-btn").forEach(btn => {
                const val = parseInt(btn.getAttribute("data-stars"), 10);
                if (val <= num) btn.classList.add("active");
                else btn.classList.remove("active");
            });
        }
    }
    
    if (starSelector) {
        starSelector.querySelectorAll(".star-btn").forEach(btn => {
            btn.addEventListener("click", function() {
                const num = parseInt(this.getAttribute("data-stars"), 10);
                setStars(num);
                playClickSound();
            });
        });
    }
    
    // Submit Peer Rating Form
    const rateForm = document.getElementById("member-rate-form");
    if (rateForm) {
        rateForm.addEventListener("submit", function(e) {
            e.preventDefault();
            if (!currentLoggedInMember) return;
            
            const targetSelect = document.getElementById("rate-target-member");
            const projectInput = document.getElementById("rate-project-name");
            const descInput = document.getElementById("rate-description");
            const starsVal = parseInt(starHiddenInput ? starHiddenInput.value : "5", 10) || 5;
            
            if (!targetSelect.value) {
                alert("Please select a committee member to rate.");
                return;
            }
            if (!projectInput.value.trim() || !descInput.value.trim()) {
                alert("Please fill in both the project name and your feedback description.");
                return;
            }
            
            const targetMember = (appTeamData.committeeMembers || []).find(m => m.id === targetSelect.value);
            if (!targetMember) return;
            
            const newReview = {
                id: "review-" + Date.now(),
                fromMemberId: currentLoggedInMember.id,
                fromMemberName: currentLoggedInMember.name,
                toMemberId: targetMember.id,
                toMemberName: targetMember.name,
                project: projectInput.value.trim(),
                rating: starsVal,
                description: descInput.value.trim(),
                createdAt: new Date().toLocaleString([], { dateStyle: 'short', timeStyle: 'short' })
            };
            
            if (!Array.isArray(appTeamData.peerRatings)) appTeamData.peerRatings = [];
            appTeamData.peerRatings.unshift(newReview);
            saveTeamData();
            playClickSound();
            
            projectInput.value = "";
            descInput.value = "";
            setStars(5);
            
            const feedback = document.getElementById("peer-rating-feedback");
            if (feedback) {
                feedback.style.display = "block";
                setTimeout(() => { feedback.style.display = "none"; }, 4000);
            }
            renderMemberRatingsTab();
        });
    }
    
    // Member Portal Leaderboard Search Filter
    const memberLeaderboardSearch = document.getElementById("member-portal-leaderboard-search");
    if (memberLeaderboardSearch) {
        memberLeaderboardSearch.addEventListener("input", function() {
            if (typeof renderMemberPortalLeaderboard === 'function') {
                renderMemberPortalLeaderboard(this.value);
            }
        });
    }

    // Member Portal Fullscreen Toggle
    const btnMemberFullscreen = document.getElementById("btn-member-fullscreen");
    const memberCardContainer = document.getElementById("member-portal-card-container");
    const memberFullscreenIcon = document.getElementById("member-fullscreen-icon");
    if (btnMemberFullscreen && memberCardContainer) {
        btnMemberFullscreen.addEventListener("click", () => {
            const isFull = memberCardContainer.classList.toggle("is-fullscreen");
            if (memberFullscreenIcon) memberFullscreenIcon.textContent = isFull ? "🗗" : "⛶";
            if (isFull) {
                if (document.documentElement.requestFullscreen && !document.fullscreenElement) {
                    document.documentElement.requestFullscreen().catch(() => {});
                }
            } else {
                if (document.exitFullscreen && document.fullscreenElement) {
                    document.exitFullscreen().catch(() => {});
                }
            }
            playClickSound();
        });

        document.addEventListener("fullscreenchange", () => {
            if (!document.fullscreenElement && memberCardContainer.classList.contains("is-fullscreen")) {
                memberCardContainer.classList.remove("is-fullscreen");
                if (memberFullscreenIcon) memberFullscreenIcon.textContent = "⛶";
            }
        });
    }

    // Close / Logout buttons
    const btnClosePortal = document.getElementById("btn-close-member-portal");
    if (btnClosePortal) btnClosePortal.addEventListener("click", closeMemberPortal);
    
    const btnLogout = document.getElementById("btn-member-logout");
    if (btnLogout) btnLogout.addEventListener("click", closeMemberPortal);
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
    if (READ_ONLY_SHOWCASE_MODE) return;
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

// Advanced Semantic Coherence & Anti-Parroting Knowledge Engine
const STOP_WORDS_SET = new Set([
    "why", "how", "should", "the", "and", "for", "with", "than", "this", "that", "you", "your", 
    "what", "less", "more", "into", "next", "under", "been", "from", "most", "over", "are", 
    "can", "our", "all", "is", "a", "an", "in", "to", "of", "on", "by", "at", "my", "his", "her",
    "their", "its", "it", "we", "they", "i", "me", "us", "them", "he", "she", "was", "were", 
    "be", "being", "have", "has", "had", "do", "does", "did", "but", "so", "if", "or", "as",
    "because", "very", "just", "now", "then", "there", "here", "also", "too", "any", "some",
    "would", "could", "will", "shall", "about", "above", "below", "between", "both", "each", "few"
]);

const UNIVERSAL_COMMUNICATION_CONCEPTS = [
    "speak", "speaking", "speech", "talk", "talking", "express", "expression", "expressing",
    "communicate", "communication", "communicating", "interpersonal", "confidence", "confident",
    "fear", "anxiety", "nervous", "nervousness", "articulate", "articulation", "voice", "vocal",
    "message", "audience", "conversation", "conversations", "practice", "practicing", "skill", "skills",
    "learn", "learning", "improve", "improving", "improvement", "art", "heart", "mindset", "connect",
    "connection", "relationship", "relationships", "impact", "perspective", "perspectives", "idea", "ideas",
    "share", "sharing", "presentation", "presenting", "pitch", "pitching", "influence", "presence"
];

const COMPREHENSIVE_TOPIC_KNOWLEDGE = {
    "pizza": {
        domainTerms: [
            "customer", "market", "product", "taste", "flavor", "sweet", "savory", "topping", "decision", 
            "polarizing", "risk", "bold", "choice", "divide", "brand", "controversial", "consumer", "opinion", 
            "stand", "differentiate", "segment", "loyalty", "preference", "pineapple", "crust", "strategy", 
            "casing", "consulting", "marketing", "audience", "debate", "positioning", "target"
        ],
        alienKeywords: ["cricket", "football", "gym", "workout", "hospital", "doctor"],
        disconnectPhrases: ["not related", "no sense", "unrelated", "nothing to do", "dont know", "don't know", "makes no sense", "is not related", "are not related"]
    },
    "grandmother": {
        domainTerms: [
            "explain", "family", "elder", "social media", "internet", "profile", "post", "posts", "career", 
            "job", "opportunity", "reputation", "community", "resume", "company", "recruit", "network", 
            "networking", "modern", "workplace", "story", "trust", "generation", "grandma", "relatives", 
            "values", "word of mouth", "digital", "platform", "online", "professional"
        ],
        alienKeywords: ["cooking", "cook", "recipe", "kitchen", "bake", "baking", "eat", "eating", "delicious", "tasty", "resort", "hotel"],
        allowedAnalogyPhrases: ["like", "metaphor", "analogy", "as if", "recipe for success", "secret sauce"],
        disconnectPhrases: ["not related", "no sense", "unrelated", "nothing to do", "dont know", "don't know", "makes no sense", "is not related", "are not related"]
    },
    "university": {
        domainTerms: [
            "practical", "skills", "real world", "job", "career", "learning", "theory", "knowledge", 
            "employment", "industry", "experience", "replace", "curriculum", "traditional", "value", 
            "worth", "waste", "future", "degree", "degrees", "college", "portfolio", "showcase", "hire", 
            "hiring", "talent", "proof of work", "projects", "practicality"
        ],
        alienKeywords: ["cooking", "recipe", "kitchen", "fashion", "makeup"],
        disconnectPhrases: ["not related", "no sense", "unrelated", "nothing to do", "makes no sense", "is not related"]
    },
    "wellness lounge": {
        domainTerms: [
            "authentic", "people", "bonds", "mental", "support", "vulnerable", "genuine", "friend", 
            "friendship", "relationship", "talk", "community", "human", "heart", "safe", "pressure", 
            "judgment", "conversations", "networking", "transactional", "business cards", "burnout", 
            "stress", "empathy", "wellbeing", "listen", "listening", "unwind", "belonging"
        ],
        alienKeywords: ["cryptocurrency", "blockchain", "bitcoin", "trading", "stocks"],
        disconnectPhrases: ["not related", "no sense", "unrelated", "nothing to do", "makes no sense", "is not related"]
    },
    "stage fear": {
        domainTerms: [
            "audience", "voice", "hands", "shaking", "nervous", "anxiety", "butterflies", "mic", 
            "breathe", "breathing", "words", "confidence", "fluent", "practice", "overcome", "scared", 
            "terrified", "shyness", "courage", "mind", "adrenaline", "stage", "freeze", "freezing", 
            "panic", "preparation", "exposure", "comfort zone", "spotlight"
        ],
        alienKeywords: ["cooking", "recipe", "crypto", "coding", "software"],
        disconnectPhrases: ["not related", "no sense", "unrelated", "nothing to do", "makes no sense", "is not related"]
    },
    "viral": {
        domainTerms: [
            "growth", "members", "engagement", "algorithm", "content", "reach", "platform", "online", 
            "retention", "scale", "community", "moderation", "events", "discord", "whatsapp", "culture", 
            "gen-z", "student", "campus", "ambassador", "word of mouth", "hype", "network effect", "funnel"
        ],
        alienKeywords: ["hospital", "surgery", "medicine", "doctor"],
        disconnectPhrases: ["not related", "no sense", "unrelated", "nothing to do", "makes no sense", "is not related"]
    },
    "soft skills": {
        domainTerms: [
            "empathy", "communication", "listening", "leadership", "eq", "interpersonal", "teamwork", 
            "feelings", "human", "negotiation", "collaboration", "workplace", "career", "success", 
            "future", "artificial intelligence", "ai", "moat", "automation", "robots", "uniquely human", 
            "adaptability", "critical thinking", "persuasion"
        ],
        alienKeywords: ["cooking", "football", "cricket", "gaming"],
        disconnectPhrases: ["not related", "no sense", "unrelated", "nothing to do", "makes no sense", "is not related"]
    },
    "co-create": {
        domainTerms: [
            "founder", "company", "problem", "solution", "product", "market", "customer", "build", 
            "money", "revenue", "partner", "team", "app", "service", "solve", "venture", "industry", 
            "prototype", "mvp", "ideation", "startup", "brainstorm", "complimentary", "execution", "pitch"
        ],
        alienKeywords: ["cooking", "cricket", "astrology", "horoscope"],
        disconnectPhrases: ["not related", "no sense", "unrelated", "nothing to do", "makes no sense", "is not related"]
    },
    "ca/mba": {
        domainTerms: [
            "corporate", "career", "human", "authentic", "connections", "network", "friend", "support", 
            "pressure", "exams", "placement", "internship", "business cards", "mental", "wellness", 
            "peers", "finance", "consulting", "hustle", "burnout", "rat race", "sanity", "circle", "balance"
        ],
        alienKeywords: ["cooking", "cricket", "football", "gaming"],
        disconnectPhrases: ["not related", "no sense", "unrelated", "nothing to do", "makes no sense", "is not related"]
    },
    "theatre": {
        domainTerms: [
            "acting", "drama", "voice", "projection", "role", "character", "rehearse", "rehearsal", 
            "stage", "presence", "body language", "expression", "express", "script", "fear", "vocal", 
            "performer", "speak", "speaking", "speech", "talk", "interpersonal", "skills", "skill", 
            "anxiety", "builder", "builders", "confidence", "art", "heart", "dialogue", "improv", 
            "impromptu", "audience", "inculcate", "empathy", "storytelling", "overcome"
        ],
        alienKeywords: ["crypto", "coding", "finance", "accounting"],
        disconnectPhrases: ["not related", "no sense", "unrelated", "nothing to do", "makes no sense", "is not related"]
    }
};

const ABSURD_PATTERNS = [
    { pattern: /\beat\s+(linkedin|software|internet|crypto|ai|algorithm|cloud|corporate|pitch|branding|website|network)\b/i, label: "consuming abstract digital entity" },
    { pattern: /\b(eat|eating|ate|chew|chewing)\s+(linkedin|technology|facebook|twitter|instagram|reddit|google)\b/i, label: "eating technology" },
    { pattern: /\b(i\s+love\s+you|marry\s+me|kiss\s+me|love\s+you)\b/i, label: "inappropriate non-sequitur expression of romance" },
    { pattern: /\b(sauce\s+is\s+masterclass|masterclass\s+is\s+sauce|pizza\s+is\s+corporate)\b/i, label: "absurd circular equating" },
    { pattern: /\b(bla\s+bla|blah\s+blah|yada\s+yada|gibberish|nonsense)\b/i, label: "filler babble" }
];

function analyzeSpeechCoherence(speechText, activeTopic) {
    if (!speechText || speechText.trim().length === 0) {
        return { isCoherent: false, reason: "SILENCE", detail: "No speech detected.", score: 0 };
    }

    const lowerSpeech = speechText.toLowerCase();
    const cleanSpeech = lowerSpeech.replace(/[^\w\s]/g, ' ');
    const speechWords = cleanSpeech.split(/\s+/).filter(w => w.length > 0);
    const wordCount = speechWords.length;

    // Identify topic key
    let knowledge = null;
    for (const [key, data] of Object.entries(COMPREHENSIVE_TOPIC_KNOWLEDGE)) {
        if (activeTopic.toLowerCase().includes(key)) {
            knowledge = data;
            break;
        }
    }

    // Isolate prompt title content words
    const titleContentWords = activeTopic.toLowerCase().replace(/[^\w\s]/g, ' ')
        .split(/\s+/)
        .filter(w => w.length > 2 && !STOP_WORDS_SET.has(w));

    // Parroting analysis
    let titleMatches = 0;
    const nonTitleContentWords = [];
    speechWords.forEach(w => {
        if (titleContentWords.includes(w)) {
            titleMatches++;
        } else if (!STOP_WORDS_SET.has(w) && w.length > 2) {
            nonTitleContentWords.push(w);
        }
    });
    const parrotRatio = wordCount > 0 ? (titleMatches / wordCount) : 0;
    const uniqueNonTitle = new Set(nonTitleContentWords).size;

    // 1. Direct Absurdity / Nonsense Pattern Check
    for (const item of ABSURD_PATTERNS) {
        if (item.pattern.test(lowerSpeech)) {
            const matched = lowerSpeech.match(item.pattern)[0];
            return {
                isCoherent: false,
                reason: "ABSURD_STATEMENT",
                title: "⚠️ ILLOGICAL / NONSENSICAL STATEMENT",
                detail: `Your speech contained an illogical or absurd statement ('${matched}'). Impromptu speaking evaluates genuine reasoning and realistic examples, not nonsensical juxtapositions.`,
                score: 0
            };
        }
    }

    // 2. Disconnect phrases check ("not related", "no sense", etc.)
    const universalDisconnect = ["not related", "no sense", "unrelated", "nothing to do", "dont know", "don't know", "is not related", "are not related", "makes no sense"];
    for (const phrase of universalDisconnect) {
        if (lowerSpeech.includes(phrase)) {
            return {
                isCoherent: false,
                reason: "DISCONNECT_EXPRESSED",
                title: "⚠️ CONFLICT DETECTED: 'NOT RELATED'",
                detail: `You stated that the concepts are '${phrase}', rather than developing an argument that connects them. An impromptu speaker must build a persuasive bridge between the prompt ideas.`,
                score: 0
            };
        }
    }

    // 3. Parroting without substance check
    if (parrotRatio > 0.45 && uniqueNonTitle < 3) {
        return {
            isCoherent: false,
            reason: "PARROTING_WITHOUT_SUBSTANCE",
            title: "⚠️ SURFACE PARROTING DETECTED (NO ARGUMENT)",
            detail: `You repeated prompt keywords (${titleContentWords.slice(0, 4).map(w => `"${w}"`).join(', ')}), but did not provide any substantive reasoning, arguments, or domain insights. Merely echoing the topic does not earn speech points.`,
            score: 0
        };
    }

    // 4. Match Topic Domain Terms + Universal Communication Concepts
    const matchedDomain = new Set();
    const matchedCommunication = new Set();
    const matchedTitle = new Set();

    titleContentWords.forEach(tw => {
        if (speechWords.includes(tw)) matchedTitle.add(tw);
    });

    if (knowledge && knowledge.domainTerms) {
        knowledge.domainTerms.forEach(term => {
            if (term.includes(' ') && lowerSpeech.includes(term)) {
                matchedDomain.add(term);
                return;
            }
            const found = speechWords.some(w => {
                if (w === term) return true;
                if (w.length >= 4 && term.length >= 4) {
                    const root = term.substring(0, 4);
                    if (w.startsWith(root) || term.startsWith(w.substring(0, 4))) return true;
                }
                return false;
            });
            if (found) matchedDomain.add(term);
        });
    }

    UNIVERSAL_COMMUNICATION_CONCEPTS.forEach(term => {
        const found = speechWords.some(w => {
            if (w === term) return true;
            if (w.length >= 4 && term.length >= 4) {
                const root = term.substring(0, 4);
                if (w.startsWith(root) || term.startsWith(w.substring(0, 4))) return true;
            }
            return false;
        });
        if (found) matchedCommunication.add(term);
    });

    const totalSubstantiveMatches = new Set([...matchedDomain, ...matchedCommunication, ...matchedTitle]);
    const substantiveCount = totalSubstantiveMatches.size;

    // 5. Alien Domain Incongruity Check
    if (knowledge && knowledge.alienKeywords) {
        const foundAlien = knowledge.alienKeywords.filter(k => lowerSpeech.includes(k));
        const allowedAnalogy = (knowledge.allowedAnalogyPhrases || []).some(p => lowerSpeech.includes(p));
        if (foundAlien.length >= 2 && !allowedAnalogy) {
            return {
                isCoherent: false,
                reason: "OFF_DOMAIN_INTRUSION",
                title: "⚠️ IRRELEVANT TOPIC DIVERSION",
                detail: `Your speech drifted into unrelated concepts (${foundAlien.slice(0, 3).map(w => `'${w}'`).join(', ')}) without establishing a metaphorical link to the prompt topic.`,
                score: 0
            };
        }
    }

    // 6. Halves / Temporal Drift Check
    const contentWords = speechWords.filter(w => !STOP_WORDS_SET.has(w) && w.length > 2);
    if (contentWords.length >= 8) {
        const mid = Math.floor(contentWords.length / 2);
        const firstHalfContent = contentWords.slice(0, mid);
        const secondHalfContent = contentWords.slice(mid);

        const isWordRelevant = (w) => {
            return totalSubstantiveMatches.has(w) || 
                   Array.from(totalSubstantiveMatches).some(m => m.length >= 4 && (w.startsWith(m.substring(0, 4)) || m.startsWith(w.substring(0, 4))));
        };

        const firstHalfMatches = firstHalfContent.filter(isWordRelevant).length;
        const secondHalfMatches = secondHalfContent.filter(isWordRelevant).length;

        if (firstHalfMatches >= 2 && secondHalfMatches === 0 && secondHalfContent.length >= 4) {
            return {
                isCoherent: false,
                reason: "SECOND_HALF_DRIFT",
                title: "⚠️ PARTIAL DRIFT: SECOND HALF DERAILED",
                detail: `You started with relevant concepts in the first half, but your speech trailed off into completely unrelated territory in the second half (${secondHalfContent.slice(0, 4).map(w => `'${w}'`).join(', ')}). Impromptu speaking requires sustaining your point through to the conclusion.`,
                score: 0
            };
        }
    }

    // 7. Circular repetition check
    let circularRepeats = 0;
    for (let i = 0; i < speechWords.length - 2; i++) {
        const trigram = speechWords[i] + " " + speechWords[i+1] + " " + speechWords[i+2];
        const restOfSpeech = speechWords.slice(i + 3).join(" ");
        if (restOfSpeech.includes(trigram)) {
            circularRepeats++;
        }
    }
    if (circularRepeats >= 2 && substantiveCount < 2) {
        return {
            isCoherent: false,
            reason: "CIRCULAR_NONSENSE",
            title: "⚠️ CIRCULAR GIBBERISH DETECTED",
            detail: "Your speech contained repetitive circular loops without developing real progression or insights.",
            score: 0
        };
    }

    // 8. Completely Off-Topic Check
    const hasTopicAnchor = matchedDomain.size >= 1 || matchedTitle.size >= 1;
    const hasSufficientSubstance = (hasTopicAnchor && (matchedCommunication.size >= 1 || matchedDomain.size >= 2)) || substantiveCount >= 3;

    if (!hasSufficientSubstance) {
        return {
            isCoherent: false,
            reason: "OFF_TOPIC",
            title: "⚠️ OFF-TOPIC SPEECH DETECTED",
            detail: `Your speech did not address the core subject matter of the assigned topic: "${activeTopic}". Please talk about the prompt to receive marks.`,
            score: 0
        };
    }

    // 9. Valid on-topic speech!
    const coherenceScore = Math.min(100, Math.round(65 + (substantiveCount * 5)));
    const sampleTerms = Array.from(totalSubstantiveMatches).slice(0, 5).join(', ');
    return {
        isCoherent: true,
        reason: "COHERENT_ON_TOPIC",
        title: "100% (On-Topic)",
        detail: `Great elaboration! You addressed the prompt with ${substantiveCount} substantive concepts (${sampleTerms}).`,
        score: coherenceScore
    };
}

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
    const liveStreamBox = document.getElementById("booth-live-stream-box");
    const liveStreamText = document.getElementById("booth-live-stream-text");
    const transcriptCard = document.getElementById("score-transcript-card");
    const transcriptBody = document.getElementById("score-transcript-body");
    
    if (!btnAction) return;
    
    let isRecording = false;
    let secondsLeft = 30;
    let currentChallengeTopic = "";
    
    let dataArray = null;
    let bufferLength = 0;

    // Speech-to-Text & Real Acoustic Tracking
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
    let recognition = null;
    let recognizedTranscript = "";
    let interimTranscript = "";
    let audibleFramesCount = 0;
    let totalFramesSampled = 0;
    let peakRms = 0;
    
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
            let sumSquares = 0;
            
            for (let i = 0; i < bufferLength; i++) {
                const normalized = (dataArray[i] - 128) / 128.0;
                sumSquares += normalized * normalized;
                const v = dataArray[i] / 128.0;
                const y = v * h / 2;
                if (i === 0) waveCtx.moveTo(x, y);
                else waveCtx.lineTo(x, y);
                x += sliceWidth;
            }
            waveCtx.lineTo(w, h / 2);
            waveCtx.stroke();

            // Real acoustic decibel calculation for silence detection
            const rms = Math.sqrt(sumSquares / bufferLength);
            totalFramesSampled++;
            if (rms > 0.035) { // audible threshold above baseline mic noise
                audibleFramesCount++;
                peakRms = Math.max(peakRms, rms);
            }
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
        recognizedTranscript = "";
        interimTranscript = "";
        audibleFramesCount = 0;
        totalFramesSampled = 0;
        peakRms = 0;

        btnAction.innerText = "Stop & View Real Score";
        btnAction.classList.remove("btn-primary");
        btnAction.classList.add("btn-accent");
        
        if (recIndicator) recIndicator.classList.add("active");
        if (eqBars) eqBars.classList.add("active");
        if (statusText) statusText.innerText = "REC: SPEECH ANALYSIS LIVE";
        if (timerDisplay) timerDisplay.innerText = "30s";
        
        const randTopic = genZTopics[Math.floor(Math.random() * genZTopics.length)];
        currentChallengeTopic = randTopic;
        if (topicText) topicText.innerText = randTopic;

        // Show live transcript box
        if (liveStreamBox) liveStreamBox.style.display = "block";
        if (liveStreamText) liveStreamText.innerText = "Listening for your voice... Start speaking on your topic!";
        
        // 1. Setup Microphone & Audio Analyzer
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

        // 2. Setup Real-Time Web Speech Recognition Engine
        if (SpeechRecognition) {
            try {
                recognition = new SpeechRecognition();
                recognition.continuous = true;
                recognition.interimResults = true;
                recognition.lang = "en-US";
                
                recognition.onresult = (event) => {
                    interimTranscript = "";
                    for (let i = event.resultIndex; i < event.results.length; ++i) {
                        if (event.results[i].isFinal) {
                            recognizedTranscript += event.results[i][0].transcript + " ";
                        } else {
                            interimTranscript += event.results[i][0].transcript;
                        }
                    }
                    const liveWords = (recognizedTranscript + " " + interimTranscript).trim();
                    if (liveStreamText && liveWords.length > 0) {
                        liveStreamText.innerText = `"${liveWords}"`;
                    }
                };

                recognition.onerror = (err) => {
                    console.warn("Speech recognition notice:", err.error);
                };

                recognition.onend = () => {
                    if (isRecording) {
                        try { recognition.start(); } catch(e) {}
                    }
                };

                recognition.start();
            } catch(e) {
                console.warn("Could not start SpeechRecognition:", e);
            }
        } else {
            if (liveStreamText) {
                liveStreamText.innerText = "🎙️ Microphone active! (Speech-to-text not available in this browser; measuring vocal energy & timing).";
            }
        }
            
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

        // Stop Speech Recognition
        if (recognition) {
            try { recognition.stop(); } catch(e) {}
            recognition = null;
        }
        
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

        const elapsedSec = Math.max(2, 30 - secondsLeft);
        const fullSpeech = (recognizedTranscript + " " + interimTranscript).trim();
        const words = fullSpeech.length > 0 ? fullSpeech.split(/\s+/).filter(w => w.length > 0) : [];
        const wordCount = words.length;

        // Calculate acoustic energy ratio
        const voiceRatio = totalFramesSampled > 0 ? (audibleFramesCount / totalFramesSampled) : 0;
        const isSilent = (wordCount === 0 && voiceRatio < 0.06);

        const fluencyEl = document.getElementById("score-fluency");
        const relevanceEl = document.getElementById("score-relevance");
        const wpmEl = document.getElementById("score-wpm");
        const fillersEl = document.getElementById("score-fillers");
        const feedbackEl = document.getElementById("score-feedback");

        // CASE 1: USER DID NOT SPEAK / SILENCE DETECTED
        if (isSilent || wordCount === 0) {
            if (fluencyEl) fluencyEl.innerText = "0%";
            if (relevanceEl) relevanceEl.innerHTML = '<span style="color: #ef4444;">0% (Silent)</span>';
            if (wpmEl) wpmEl.innerText = "0 WPM";
            if (fillersEl) fillersEl.innerText = "0";

            if (transcriptCard) transcriptCard.style.display = "block";
            if (transcriptBody) transcriptBody.innerText = "(No audible words detected. Microphone remained quiet.)";

            if (feedbackEl) {
                feedbackEl.innerHTML = `<span style="color: #ef4444; font-weight: 800; font-size: 0.95rem;">⚠️ NO SPEECH DETECTED (0%)</span><br><br>We couldn't hear you speak! Your microphone was quiet or muted for the duration of the challenge.<br>Please ensure your microphone is unmuted and speak clearly into your device. Click <strong>Try Again</strong> to practice!`;
            }
            playChimeMelody([330, 293, 261]);
            if (scorecard) scorecard.classList.add("active");
            return;
        }

        // CASE 2: SPEECH WAS TOO BRIEF (< 5 words)
        if (wordCount < 5) {
            const briefWpm = Math.round((wordCount / elapsedSec) * 60);
            if (fluencyEl) fluencyEl.innerText = "15%";
            if (relevanceEl) relevanceEl.innerHTML = '<span style="color: #f59e0b;">Incomplete</span>';
            if (wpmEl) wpmEl.innerText = `${briefWpm} WPM`;
            if (fillersEl) fillersEl.innerText = "0";

            if (transcriptCard) transcriptCard.style.display = "block";
            if (transcriptBody) transcriptBody.innerText = `"${fullSpeech}"`;

            if (feedbackEl) {
                feedbackEl.innerHTML = `<span style="color: #f59e0b; font-weight: 800; font-size: 0.95rem;">⚠️ SPEECH TOO BRIEF (${wordCount} words)</span><br><br>You only spoke a few words! A 30-second impromptu speech needs at least 25–40 words to properly assess fluency, pacing, and vocabulary. Click <strong>Try Again</strong> and speak continuously on your topic!`;
            }
            playChimeMelody([330, 293, 261]);
            if (scorecard) scorecard.classList.add("active");
            return;
        }

        // 3. SEMANTIC COHERENCE & ANTI-PARROTING CHECK
        const coherenceResult = analyzeSpeechCoherence(fullSpeech, currentChallengeTopic);

        // Calculate WPM & Filler Words
        const wpm = Math.round((wordCount / elapsedSec) * 60);
        const fillerRegex = /\b(um|uh|uhm|er|like|you know|actually|basically|literally|sort of|kind of|i mean|so|right|you see)\b/gi;
        const fillerMatches = fullSpeech.match(fillerRegex) || [];
        const fillerCount = fillerMatches.length;

        const fillerCountsMap = {};
        fillerMatches.forEach(f => {
            const lower = f.toLowerCase();
            fillerCountsMap[lower] = (fillerCountsMap[lower] || 0) + 1;
        });
        const fillerSummary = Object.entries(fillerCountsMap)
            .map(([k, v]) => `"${k}" (${v}x)`)
            .join(', ');

        // CASE 3: INCOHERENT, PARROTING, OR OFF-TOPIC SPEECH DETECTED (0% SCORE)
        if (!coherenceResult.isCoherent) {
            if (fluencyEl) fluencyEl.innerText = "0%";
            if (relevanceEl) relevanceEl.innerHTML = `<span style="color: #ef4444; font-weight: 900;">0% (${coherenceResult.reason.replace(/_/g, ' ')})</span>`;
            if (wpmEl) wpmEl.innerText = `${wpm} WPM`;
            if (fillersEl) fillersEl.innerText = fillerCount;

            if (transcriptCard) transcriptCard.style.display = "block";
            if (transcriptBody) transcriptBody.innerText = `"${fullSpeech}"`;

            if (feedbackEl) {
                feedbackEl.innerHTML = `<div style="background: rgba(239, 68, 68, 0.08); border: 2px solid #ef4444; border-radius: 8px; padding: 14px; text-align: left;">
                    <div style="color: #ef4444; font-weight: 900; font-size: 0.95rem; margin-bottom: 6px;">
                        ${coherenceResult.title}
                    </div>
                    <div style="font-size: 0.84rem; color: var(--text-primary); line-height: 1.5;">
                        ${coherenceResult.detail}<br><br>
                        <strong>Captured Transcript (${wordCount} words):</strong> <em>"${fullSpeech}"</em><br><br>
                        👉 <em>To earn fluency marks and streak achievements, you must present genuine reasoning, arguments, or real-world examples. Click <strong>Try Again</strong> and speak authentically on the topic!</em>
                    </div>
                </div>`;
            }

            playChimeMelody([349, 311, 261]);
            if (scorecard) scorecard.classList.add("active");
            return;
        }

        // CASE 4: RELEVANT, ON-TOPIC SPEECH EVALUATED!
        let baseScore = 75;

        // Pace rating (Ideal conversational speed: 115 - 155 WPM)
        if (wpm >= 115 && wpm <= 155) {
            baseScore += 18;
        } else if ((wpm >= 95 && wpm < 115) || (wpm > 155 && wpm <= 175)) {
            baseScore += 8;
        } else if (wpm < 80) {
            baseScore -= 14;
        } else if (wpm > 180) {
            baseScore -= 14;
        }

        // Word volume stamina
        if (wordCount >= 30) baseScore += 7;
        else if (wordCount < 12) baseScore -= 12;

        // Filler deductions
        if (fillerCount === 0) baseScore += 5;
        else if (fillerCount <= 2) baseScore -= 4;
        else if (fillerCount <= 4) baseScore -= 10;
        else baseScore -= Math.min(22, fillerCount * 3);

        const finalFluency = Math.min(98, Math.max(25, baseScore));

        // Update Scorecard
        if (fluencyEl) fluencyEl.innerText = `${finalFluency}%`;
        if (relevanceEl) relevanceEl.innerHTML = '<span style="color: #10b981; font-weight: 900;">100% (On-Topic)</span>';
        if (wpmEl) wpmEl.innerText = `${wpm} WPM`;
        if (fillersEl) fillersEl.innerText = fillerCount;

        // Display Captured Transcript
        if (transcriptCard) transcriptCard.style.display = "block";
        if (transcriptBody) transcriptBody.innerText = `"${fullSpeech}"`;

        // Contextual Feedback
        let feedbackHtml = "";
        if (finalFluency >= 88) {
            feedbackHtml = `🔥 <strong>Outstanding Delivery!</strong> You spoke <strong>${wordCount} words</strong> on topic at an optimal conversational pace (<strong>${wpm} WPM</strong>) with <strong>${fillerCount === 0 ? 'zero filler words' : `only ${fillerCount} filler word(s)`}</strong>. Your articulation is clear and commanding. Join Mrs. Shukla's weekly chapter to test this under stage spotlight!`;
        } else if (wpm > 165) {
            feedbackHtml = `⚡ <strong>High-Energy Delivery (${wpm} WPM):</strong> You delivered <strong>${wordCount} on-topic words</strong> with great enthusiasm, but you are speaking slightly too fast. Try pacing yourself to ~130 WPM so key arguments sink in.${fillerCount > 0 ? `<br><br>💡 <em>Detected ${fillerCount} filler word(s): ${fillerSummary}. Replace these with a 1-second silent pause.</em>` : ''}`;
        } else if (wpm < 95) {
            feedbackHtml = `🎙️ <strong>Deliberate & Thoughtful (${wpm} WPM):</strong> You spoke <strong>${wordCount} on-topic words</strong>. While relevant, your delivery was hesitant with prolonged pauses. Practice continuous flow of thought without trailing off.${fillerCount > 0 ? `<br><br>💡 <em>Detected ${fillerCount} filler word(s): ${fillerSummary}.</em>` : ''}`;
        } else {
            feedbackHtml = `👏 <strong>Solid Impromptu Attempt!</strong> You delivered <strong>${wordCount} on-topic words</strong> in ${elapsedSec}s (<strong>${wpm} WPM</strong>). ${fillerCount > 0 ? `We caught ${fillerCount} filler word(s) (${fillerSummary})—practice replacing filler vocal crutches with silent breathing pauses to sound more authoritative.` : 'Fantastic discipline cutting out filler words!'}`;
        }

        if (feedbackEl) feedbackEl.innerHTML = feedbackHtml;
        
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
        if (liveStreamBox) liveStreamBox.style.display = "none";
        if (liveStreamText) liveStreamText.innerText = "Listening for your voice... Start speaking on your topic!";
        if (transcriptCard) transcriptCard.style.display = "none";
        isRecording = false;
    }
}

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
// Lo-fi player retired per user preference
function initWellnessSoundboard() {}

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
            
            if (targetView === "impact") {
                if (typeof openImpactShowcase === "function") openImpactShowcase();
                return;
            }
            
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
            else if (targetView === "immersion") morphStageToShape("sphere");
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
// 🌙 MIDNIGHT NEON / DAYLIGHT THEME ENGINE
// ==========================================================================
function initThemeEngine() {
    const btnToggle = document.getElementById("btn-theme-toggle");
    const mobileBtnToggle = document.getElementById("mobile-theme-toggle");
    const iconIndicator = document.getElementById("theme-icon-indicator");
    const labelIndicator = document.getElementById("theme-label-indicator");
    const mobileIcon = document.getElementById("mobile-theme-icon");
    
    function applyTheme(theme) {
        if (theme === "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
            if (iconIndicator) iconIndicator.textContent = "☀️";
            if (labelIndicator) labelIndicator.textContent = "Daylight Mode";
            if (mobileIcon) mobileIcon.textContent = "☀️";
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            if (iconIndicator) iconIndicator.textContent = "🌙";
            if (labelIndicator) labelIndicator.textContent = "Midnight Neon";
            if (mobileIcon) mobileIcon.textContent = "🌙";
        }
    }
    
    const savedTheme = localStorage.getItem("interactup_theme") || "light";
    applyTheme(savedTheme);
    
    function toggle() {
        const current = document.documentElement.getAttribute("data-theme") || "light";
        const next = current === "dark" ? "light" : "dark";
        applyTheme(next);
        localStorage.setItem("interactup_theme", next);
        playClickSound();
    }
    
    if (btnToggle) btnToggle.addEventListener("click", toggle);
    if (mobileBtnToggle) mobileBtnToggle.addEventListener("click", toggle);
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
    
    safeInit("initThemeEngine", initThemeEngine);
    safeInit("initHeroHologramSimulator", initHeroHologramSimulator);
    safeInit("initDashboardNavigation", initDashboardNavigation);
    safeInit("initMicroSpeakerBooth", initMicroSpeakerBooth);
    safeInit("initCoEdPeerDirectory", initCoEdPeerDirectory);
    safeInit("initLinkedInFormatter", initLinkedInFormatter);
    safeInit("initLiveGallery", initLiveGallery);
    
    safeInit("buildLadder", buildLadder);
    safeInit("updateLadderUI", updateLadderUI);
    safeInit("renderPortal", renderPortal);
    
    safeInit("initScrollReveals", initScrollReveals);
    safeInit("initEventsEngine", initEventsEngine);
    safeInit("renderLiveEventsCarousel", renderLiveEventsCarousel);
    safeInit("setupModalsController", setupModalsController);
    safeInit("initMemberPortal", initMemberPortal);
    
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


// ==========================================================================
// 🏛️ TAB 6: CAREER VAULT & EXECUTIVE PRIVILEGES ENGINE (v8)
// ==========================================================================
function renderMemberVaultTab() {
    // 1. Always apply dynamic vault content titles & subtitles across DOM
    const vc = (appTeamData && appTeamData.vaultContent) ? appTeamData.vaultContent : (DEFAULT_TEAM_DATA.vaultContent || {});
    
    const heroTitle = document.getElementById("vault-hero-title-text");
    if (heroTitle && vc.heroTitle) heroTitle.textContent = vc.heroTitle;

    const heroSub = document.getElementById("vault-hero-sub-text");
    if (heroSub && vc.heroSubtitle) heroSub.textContent = vc.heroSubtitle;
    
    const descOffer = document.getElementById("vault-desc-offer");
    if (descOffer && vc.offerSubtitle) descOffer.textContent = vc.offerSubtitle;
    
    const descCompletion = document.getElementById("vault-desc-completion");
    if (descCompletion && vc.completionSubtitle) descCompletion.textContent = vc.completionSubtitle;
    
    const descLor = document.getElementById("vault-desc-lor");
    if (descLor && vc.lorSubtitle) descLor.textContent = vc.lorSubtitle;
    
    const descAlumni = document.getElementById("vault-desc-alumni");
    if (descAlumni && vc.alumniSubtitle) descAlumni.textContent = vc.alumniSubtitle;
    
    const descBoard = document.getElementById("vault-desc-board");
    if (descBoard && vc.boardSubtitle) descBoard.textContent = vc.boardSubtitle;
    
    const descMore = document.getElementById("vault-desc-more");
    if (descMore && vc.moreSubtitle) descMore.textContent = vc.moreSubtitle;

    if (!currentLoggedInMember) return;
    
    const offerCard = document.getElementById("vault-card-offer-letter");
    const offerBadge = document.getElementById("vault-offer-badge");
    const offerIconFrame = document.getElementById("vault-offer-icon-frame");
    const offerStatusTxt = document.getElementById("vault-offer-status-txt");
    const btnTriggerOffer = document.getElementById("btn-trigger-offer-letter");
    
    const lockMode = vc.offerLockMode || "unlocked";
    const minPoints = (typeof vc.offerMinPoints !== 'undefined') ? parseInt(vc.offerMinPoints, 10) : 100;
    const exemptPastSubmitters = (typeof vc.exemptPastSubmitters !== 'undefined') ? (vc.exemptPastSubmitters === true || vc.exemptPastSubmitters === "true") : true;

    // Calculate current member's appreciation points from leaderboard
    let myPts = 0;
    if (Array.isArray(appTeamData.leaderboard)) {
        const leaderItem = appTeamData.leaderboard.find(l => l.name && l.name.trim().toLowerCase() === currentLoggedInMember.name.trim().toLowerCase());
        if (leaderItem) myPts = leaderItem.points || 0;
    }

    // Check if member has an existing request
    const requests = Array.isArray(appTeamData.offerLetterRequests) ? appTeamData.offerLetterRequests : [];
    const myReq = requests.find(r => 
        (r.memberId && r.memberId === currentLoggedInMember.id) ||
        (r.memberName && r.memberName.trim().toLowerCase() === currentLoggedInMember.name.trim().toLowerCase())
    );
    const hasAlreadyFilled = Boolean(myReq);

    // Determine access
    let isUnlocked = true;
    let lockReason = "";

    if (hasAlreadyFilled && exemptPastSubmitters) {
        // Grandfathered in: member already submitted on time, keep space unlocked
        isUnlocked = true;
    } else if (lockMode === "locked_all") {
        isUnlocked = false;
        lockReason = "Offer letter requests are currently closed by Master Admin.";
    } else if (lockMode === "points_required") {
        if (myPts >= minPoints) {
            isUnlocked = true;
        } else {
            isUnlocked = false;
            lockReason = `Requires ${minPoints} appreciation points to unlock (You have ${myPts} / ${minPoints} pts). Earn ${minPoints - myPts} more points to qualify!`;
        }
    }

    if (offerStatusTxt && btnTriggerOffer) {
        if (isUnlocked) {
            if (offerCard) {
                offerCard.classList.remove("status-locked");
                offerCard.classList.add("status-unlocked");
            }
            if (offerIconFrame) {
                offerIconFrame.style.borderColor = "rgba(16, 185, 129, 0.4)";
                offerIconFrame.style.color = "#10b981";
            }
            if (offerBadge) {
                offerBadge.className = "vault-badge unlocked";
                if (hasAlreadyFilled) {
                    offerBadge.textContent = "🔓 Unlocked (Request On File)";
                } else if (lockMode === "points_required") {
                    offerBadge.textContent = `🔓 Unlocked (${myPts}/${minPoints} pts)`;
                } else {
                    offerBadge.textContent = "🔓 Available Now";
                }
            }

            btnTriggerOffer.className = "btn-vault-action primary";
            if (myReq) {
                offerStatusTxt.innerHTML = `<span style="color: #10b981;">✓ Requested (${escapeHtml(myReq.email)}) &bull; ${escapeHtml(myReq.status || 'Pending Dispatch')}</span>`;
                btnTriggerOffer.textContent = "Update Email 📨";
            } else {
                if (lockMode === "points_required") {
                    offerStatusTxt.innerHTML = `<span style="color: #10b981; font-weight: 700;">✓ Threshold Met (${myPts}/${minPoints} pts) &bull; Ready</span>`;
                } else {
                    offerStatusTxt.textContent = "Ready to Dispatch";
                }
                btnTriggerOffer.textContent = "Request Letter 📨";
            }
            btnTriggerOffer.onclick = openOfferLetterModal;
        } else {
            if (offerCard) {
                offerCard.classList.remove("status-unlocked");
                offerCard.classList.add("status-locked");
            }
            if (offerIconFrame) {
                offerIconFrame.style.borderColor = "";
                offerIconFrame.style.color = "";
            }
            if (offerBadge) {
                offerBadge.className = "vault-badge locked";
                if (lockMode === "points_required") {
                    offerBadge.textContent = `🔒 Locked (${myPts}/${minPoints} pts)`;
                } else {
                    offerBadge.textContent = "🔒 Locked by Admin";
                }
            }
            
            if (lockMode === "points_required") {
                offerStatusTxt.innerHTML = `<span style="color: #ef4444; font-weight: 700;">🔒 Requires ${minPoints} pts (${myPts}/${minPoints} earned)</span>`;
                btnTriggerOffer.textContent = `🔒 Locked (${myPts}/${minPoints} pts)`;
            } else {
                offerStatusTxt.innerHTML = `<span style="color: #ef4444; font-weight: 700;">🔒 Requests Currently Closed</span>`;
                btnTriggerOffer.textContent = "🔒 Locked";
            }
            
            btnTriggerOffer.className = "btn-vault-action locked-btn";
            btnTriggerOffer.onclick = () => {
                alert(`🔒 Official Executive Offer Letter\n\nStatus: Locked\n\nRequirement: ${lockReason}`);
                playClickSound();
            };
        }
    }
    
    // Wire locked cards info toasts
    const lockedCards = [
        { id: "vault-card-completion", name: "Certificate of Completion", req: "Unlocks automatically upon reaching the end of your official tenure cycle." },
        { id: "vault-card-lor", name: "Letter of Recommendation (LOR)", req: "Authored and signed based strictly on high performance and positive appreciation standing during tenure." },
        { id: "vault-card-alumni", name: "Executive Alum Guild", req: "Unlocks post-tenure upon successful tenure completion." },
        { id: "vault-card-board-share", name: "Board Share & 20-Year Endowment", req: "Annual payouts for 20 years from the Board Fund. Allocation tier is based on net appreciation points, tenure, and zero-infraction standing." },
        { id: "vault-card-many-more", name: "Many More Sovereign Perks", req: "Classified founder grants, incubators, and leadership perks will be revealed with time." }
    ];
    
    lockedCards.forEach(c => {
        const el = document.getElementById(c.id);
        if (el && !el.dataset.bound) {
            el.dataset.bound = "true";
            el.addEventListener("click", () => {
                alert(`🔒 ${c.name}\n\nStatus: Locked\n\nCriteria: ${c.req}`);
                playClickSound();
            });
        }
    });
}

// 🏛️ ADMIN: CAREER VAULT SETTINGS EDITOR
function renderAdminVaultSettings() {
    const vc = (appTeamData && appTeamData.vaultContent) ? appTeamData.vaultContent : (DEFAULT_TEAM_DATA.vaultContent || {});
    
    const inpHeroTitle = document.getElementById("admin-vault-hero-title");
    const inpHeroSub = document.getElementById("admin-vault-hero-sub");
    const inpOffer = document.getElementById("admin-vault-sub-offer");
    const inpCompletion = document.getElementById("admin-vault-sub-completion");
    const inpLor = document.getElementById("admin-vault-sub-lor");
    const inpAlumni = document.getElementById("admin-vault-sub-alumni");
    const inpBoard = document.getElementById("admin-vault-sub-board");
    const inpMore = document.getElementById("admin-vault-sub-more");

    const selLockMode = document.getElementById("admin-vault-offer-lock-mode");
    const inpMinPoints = document.getElementById("admin-vault-offer-min-points");
    const pointsContainer = document.getElementById("admin-vault-offer-points-container");
    const badgePreview = document.getElementById("admin-offer-policy-preview-badge");
    const chkExempt = document.getElementById("admin-vault-offer-exempt-past");
    
    if (inpHeroTitle) inpHeroTitle.value = vc.heroTitle || "Career Vault & Tenure Endowments";
    if (inpHeroSub) inpHeroSub.value = vc.heroSubtitle || "";
    if (inpOffer) inpOffer.value = vc.offerSubtitle || "";
    if (inpCompletion) inpCompletion.value = vc.completionSubtitle || "";
    if (inpLor) inpLor.value = vc.lorSubtitle || "";
    if (inpAlumni) inpAlumni.value = vc.alumniSubtitle || "";
    if (inpBoard) inpBoard.value = vc.boardSubtitle || "";
    if (inpMore) inpMore.value = vc.moreSubtitle || "";

    if (chkExempt) {
        chkExempt.checked = (typeof vc.exemptPastSubmitters !== 'undefined') ? (vc.exemptPastSubmitters === true || vc.exemptPastSubmitters === "true") : true;
    }

    function updateAdminOfferBadge() {
        if (!badgePreview || !selLockMode) return;
        const mode = selLockMode.value;
        const pts = inpMinPoints ? (parseInt(inpMinPoints.value, 10) || 0) : 100;
        if (mode === "unlocked") {
            badgePreview.textContent = "🔓 Currently Unlocked (Open)";
            badgePreview.style.background = "rgba(16, 185, 129, 0.15)";
            badgePreview.style.color = "#10b981";
            badgePreview.style.borderColor = "rgba(16, 185, 129, 0.3)";
        } else if (mode === "points_required") {
            badgePreview.textContent = `🎯 Locked: Requires ${pts} Pts`;
            badgePreview.style.background = "rgba(245, 158, 11, 0.15)";
            badgePreview.style.color = "#b45309";
            badgePreview.style.borderColor = "rgba(245, 158, 11, 0.35)";
        } else {
            badgePreview.textContent = "🔒 Completely Locked";
            badgePreview.style.background = "rgba(239, 68, 68, 0.15)";
            badgePreview.style.color = "#ef4444";
            badgePreview.style.borderColor = "rgba(239, 68, 68, 0.3)";
        }
    }

    if (selLockMode) {
        selLockMode.value = vc.offerLockMode || "unlocked";
        selLockMode.onchange = function() {
            if (pointsContainer) {
                pointsContainer.style.display = (this.value === "points_required") ? "block" : "none";
            }
            updateAdminOfferBadge();
        };
    }
    if (inpMinPoints) {
        inpMinPoints.value = (typeof vc.offerMinPoints !== 'undefined') ? vc.offerMinPoints : 100;
        inpMinPoints.oninput = updateAdminOfferBadge;
    }
    if (pointsContainer && selLockMode) {
        pointsContainer.style.display = (selLockMode.value === "points_required") ? "block" : "none";
    }
    updateAdminOfferBadge();
}

function saveAdminVaultSettings() {
    if (!appTeamData.vaultContent) {
        appTeamData.vaultContent = JSON.parse(JSON.stringify(DEFAULT_TEAM_DATA.vaultContent || {}));
    }
    
    const inpHeroTitle = document.getElementById("admin-vault-hero-title");
    const inpHeroSub = document.getElementById("admin-vault-hero-sub");
    const inpOffer = document.getElementById("admin-vault-sub-offer");
    const inpCompletion = document.getElementById("admin-vault-sub-completion");
    const inpLor = document.getElementById("admin-vault-sub-lor");
    const inpAlumni = document.getElementById("admin-vault-sub-alumni");
    const inpBoard = document.getElementById("admin-vault-sub-board");
    const inpMore = document.getElementById("admin-vault-sub-more");

    const selLockMode = document.getElementById("admin-vault-offer-lock-mode");
    const inpMinPoints = document.getElementById("admin-vault-offer-min-points");
    const chkExempt = document.getElementById("admin-vault-offer-exempt-past");
    
    if (inpHeroTitle && inpHeroTitle.value.trim()) appTeamData.vaultContent.heroTitle = inpHeroTitle.value.trim();
    if (inpHeroSub) appTeamData.vaultContent.heroSubtitle = inpHeroSub.value.trim();
    if (inpOffer) appTeamData.vaultContent.offerSubtitle = inpOffer.value.trim();
    if (inpCompletion) appTeamData.vaultContent.completionSubtitle = inpCompletion.value.trim();
    if (inpLor) appTeamData.vaultContent.lorSubtitle = inpLor.value.trim();
    if (inpAlumni) appTeamData.vaultContent.alumniSubtitle = inpAlumni.value.trim();
    if (inpBoard) appTeamData.vaultContent.boardSubtitle = inpBoard.value.trim();
    if (inpMore) appTeamData.vaultContent.moreSubtitle = inpMore.value.trim();

    if (selLockMode) appTeamData.vaultContent.offerLockMode = selLockMode.value;
    if (inpMinPoints) appTeamData.vaultContent.offerMinPoints = Math.max(0, parseInt(inpMinPoints.value, 10) || 0);
    if (chkExempt) appTeamData.vaultContent.exemptPastSubmitters = chkExempt.checked;
    
    saveTeamData();
    if (typeof renderMemberVaultTab === 'function') renderMemberVaultTab();
    
    const feedback = document.getElementById("vault-admin-feedback");
    if (feedback) {
        feedback.style.display = "block";
        feedback.textContent = "✓ Career Vault settings and offer letter lock policy successfully saved and published!";
        setTimeout(() => { feedback.style.display = "none"; }, 4000);
    }
    playClickSound();
}

function resetAdminVaultSettings() {
    if (!confirm("Reset all Career Vault titles, subtitles, and lock policy back to official defaults?")) return;
    appTeamData.vaultContent = JSON.parse(JSON.stringify(DEFAULT_TEAM_DATA.vaultContent || {}));
    saveTeamData();
    renderAdminVaultSettings();
    if (typeof renderMemberVaultTab === 'function') renderMemberVaultTab();
    
    const feedback = document.getElementById("vault-admin-feedback");
    if (feedback) {
        feedback.style.display = "block";
        feedback.textContent = "✓ Reset to default Career Vault titles, subtitles, and unlocked policy.";
        setTimeout(() => { feedback.style.display = "none"; }, 4000);
    }
    playClickSound();
}

function openOfferLetterModal() {
    const vc = (appTeamData && appTeamData.vaultContent) ? appTeamData.vaultContent : {};
    const lockMode = vc.offerLockMode || "unlocked";
    const minPoints = (typeof vc.offerMinPoints !== 'undefined') ? parseInt(vc.offerMinPoints, 10) : 100;
    const exemptPastSubmitters = (typeof vc.exemptPastSubmitters !== 'undefined') ? (vc.exemptPastSubmitters === true || vc.exemptPastSubmitters === "true") : true;
    
    const requests = Array.isArray(appTeamData.offerLetterRequests) ? appTeamData.offerLetterRequests : [];
    const myReq = (currentLoggedInMember && requests) ? requests.find(r => 
        (r.memberId && r.memberId === currentLoggedInMember.id) ||
        (r.memberName && r.memberName.trim().toLowerCase() === currentLoggedInMember.name.trim().toLowerCase())
    ) : null;
    const isExempt = Boolean(myReq && exemptPastSubmitters);

    let myPts = 0;
    if (currentLoggedInMember && Array.isArray(appTeamData.leaderboard)) {
        const leaderItem = appTeamData.leaderboard.find(l => l.name && l.name.trim().toLowerCase() === currentLoggedInMember.name.trim().toLowerCase());
        if (leaderItem) myPts = leaderItem.points || 0;
    }

    if (!isExempt) {
        if (lockMode === "locked_all") {
            alert("🔒 Official Executive Offer Letter requests are currently closed by Master Admin.");
            return;
        }
        if (lockMode === "points_required" && myPts < minPoints) {
            alert(`🔒 Offer Letter Locked\n\nYou need at least ${minPoints} appreciation points to request an offer letter.\nYour current points: ${myPts} pts (${minPoints - myPts} more needed).`);
            return;
        }
    }

    const modal = document.getElementById("modal-offer-letter-request");
    const inputEmail = document.getElementById("input-offer-letter-email");
    const feedback = document.getElementById("offer-letter-modal-feedback");
    
    if (!modal) return;
    modal.classList.add("active");
    modal.style.display = "flex";
    if (feedback) feedback.style.display = "none";
    
    if (inputEmail) {
        inputEmail.value = myReq ? myReq.email : "";
        setTimeout(() => {
            try { inputEmail.focus(); } catch(e) {}
        }, 100);
    }
    playClickSound();
}

function closeOfferLetterModal() {
    const modal = document.getElementById("modal-offer-letter-request");
    if (modal) {
        modal.classList.remove("active");
        modal.style.display = "none";
    }
    playClickSound();
}

// Wire Offer Letter modal close & form submission, and Vault admin buttons
document.addEventListener("DOMContentLoaded", () => {
    const btnCloseOffer = document.getElementById("btn-close-offer-modal");
    if (btnCloseOffer) btnCloseOffer.addEventListener("click", closeOfferLetterModal);

    // Close when clicking outside on the backdrop
    const modalOffer = document.getElementById("modal-offer-letter-request");
    if (modalOffer) {
        modalOffer.addEventListener("click", (e) => {
            if (e.target === modalOffer) closeOfferLetterModal();
        });
    }

    // Close on Escape key press
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            const m = document.getElementById("modal-offer-letter-request");
            if (m && (m.classList.contains("active") || m.style.display === "flex")) {
                closeOfferLetterModal();
            }
        }
    });
    
    const formOffer = document.getElementById("form-submit-offer-letter");
    if (formOffer) {
        formOffer.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!currentLoggedInMember) return;
            
            const inputEmail = document.getElementById("input-offer-letter-email");
            const feedback = document.getElementById("offer-letter-modal-feedback");
            const emailVal = inputEmail ? inputEmail.value.trim() : "";
            
            if (!emailVal || !emailVal.includes("@")) {
                alert("Please provide a valid email address.");
                return;
            }
            
            if (!Array.isArray(appTeamData.offerLetterRequests)) appTeamData.offerLetterRequests = [];
            
            let existing = appTeamData.offerLetterRequests.find(r => 
                (r.memberId && r.memberId === currentLoggedInMember.id) ||
                (r.memberName && r.memberName.trim().toLowerCase() === currentLoggedInMember.name.trim().toLowerCase())
            );
            
            const nowFormatted = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            
            if (existing) {
                existing.email = emailVal;
                existing.requestedAt = nowFormatted;
                existing.status = "Pending Dispatch";
            } else {
                appTeamData.offerLetterRequests.unshift({
                    id: "req-" + Date.now(),
                    memberId: currentLoggedInMember.id,
                    memberName: currentLoggedInMember.name,
                    email: emailVal,
                    requestedAt: nowFormatted,
                    status: "Pending Dispatch"
                });
            }
            
            saveTeamData();
            playClickSound();
            
            if (feedback) {
                feedback.style.display = "block";
            }
            
            setTimeout(() => {
                closeOfferLetterModal();
                renderMemberVaultTab();
                if (typeof renderAdminOfferLetterRequestsList === 'function') renderAdminOfferLetterRequestsList();
            }, 1200);
        });
    }

    // Wire Vault Admin settings buttons
    const btnSaveVault = document.getElementById("btn-save-vault-subtitles");
    if (btnSaveVault) btnSaveVault.addEventListener("click", saveAdminVaultSettings);
    
    const btnSaveVaultBottom = document.getElementById("btn-save-vault-subtitles-bottom");
    if (btnSaveVaultBottom) btnSaveVaultBottom.addEventListener("click", saveAdminVaultSettings);
    
    const btnResetVault = document.getElementById("btn-reset-vault-subtitles");
    if (btnResetVault) btnResetVault.addEventListener("click", resetAdminVaultSettings);

    // Initial render of vault and warning components
    if (typeof renderMemberVaultTab === 'function') renderMemberVaultTab();
    if (typeof renderAdminVaultSettings === 'function') renderAdminVaultSettings();
    if (typeof renderAdminWarningDropdown === 'function') renderAdminWarningDropdown();
    if (typeof renderAdminWarningsList === 'function') renderAdminWarningsList();
    if (typeof renderAdminOfferLetterRequestsList === 'function') renderAdminOfferLetterRequestsList();
});
