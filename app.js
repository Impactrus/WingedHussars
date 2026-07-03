// Accordion control for Weapons & Armor
function toggleAccordion(index) {
    const items = document.querySelectorAll('.accordion-item');
    items.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Battle Simulation DB
const battles = {
    kircholm: {
        name: "Bitwa pod Kircholmem (1605)",
        plFaction: "Polska: 3 600",
        enemyFaction: "Szwecja: 11 000",
        plWidth: "25%",
        enemyWidth: "75%",
        desc: "Jan Karol Chodkiewicz rozgromił trzykrotnie silniejsze wojska szwedzkie. Kluczem była pozorowana ucieczka i niesamowite przełamujące uderzenie husarii, która rozbiła szwedzki szyk piechoty w zaledwie kilkanaście minut.",
        losses: "~6 000 zabitych",
        lossesPl: "~100 zabitych"
    },
    kluszyn: {
        name: "Bitwa pod Kłuszynem (1610)",
        plFaction: "Polska: 6 800",
        enemyFaction: "Rosja & Najemnicy: 35 000",
        plWidth: "16%",
        enemyWidth: "84%",
        desc: "Jedno z najbardziej spektakularnych zwycięstw w historii sztuki wojennej. Stanisław Żółkiewski rozbił pięciokrotnie liczniejszą armię rosyjsko-szwedzką. Niektóre chorągwie husarskie szarżowały tego dnia aż dziesięciokrotnie pod rząd, całkowicie wyczerpując wroga.",
        losses: "~8 000 zabitych i wziętych do niewoli",
        lossesPl: "~300 zabitych"
    },
    wieden: {
        name: "Odsiecz Wiedeńska (1683)",
        plFaction: "Koalicja: 27 000",
        enemyFaction: "Turcja: 110 000",
        plWidth: "20%",
        enemyWidth: "80%",
        desc: "Król Jan III Sobieski poprowadził największą szarżę kawaleryjską w dziejach świata (ponad 20 000 jeźdźców, w tym elita husarii). Uderzenie ze wzgórz Kahlenbergu zdemolowało obóz wezyra Kara Mustafy w niespełna godzinę.",
        losses: "~15 000 zabitych",
        lossesPl: "~1 000 zabitych"
    }
};

// Interactive Battle Selection
function selectBattle(key) {
    // Update active class on buttons
    const buttons = document.querySelectorAll('.battle-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(key)) {
            btn.classList.add('active');
        }
    });

    // Load selected battle data with animated updates
    const data = battles[key];
    if (!data) return;

    document.getElementById('battle-name').innerText = data.name;
    document.getElementById('battle-desc').innerText = data.desc;
    document.getElementById('val-losses').innerText = data.losses;
    document.getElementById('val-losses-pl').innerText = data.lossesPl;

    const plBar = document.getElementById('fact-pl');
    const enemyBar = document.getElementById('fact-enemy');

    plBar.style.width = data.plWidth;
    plBar.innerText = data.plFaction;

    enemyBar.style.width = data.enemyWidth;
    enemyBar.innerText = data.enemyFaction;
}

// Simple IntersectionObserver to animate navbar link status
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
