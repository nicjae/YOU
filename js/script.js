document.addEventListener("DOMContentLoaded", () => {

    const loadingScreen = document.getElementById("loadingScreen");
    const mainContent = document.getElementById("mainContent");

    const apologySection = document.getElementById("apologySection");
    const continueBtn = document.getElementById("continueBtn");

    const valentineSection = document.getElementById("valentineSection");
    const yesBtn = document.querySelector(".yes");
    const noBtn = document.querySelector(".no");

    const finalMessage = document.getElementById("finalMessage");
    const finalImage = document.getElementById("finalImage");

    const heartsContainer = document.getElementById("hearts");
    const music = document.getElementById("bgMusic");

    const chancePopup = document.getElementById("chancePopup");
    const okBtn = document.getElementById("okBtn");

    // Confetti
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let confettiPieces = [];

    // --- Loading Screen ---
    setTimeout(() => {
        loadingScreen.style.display = "none";
        mainContent.classList.remove("hidden");
    }, 2500);

    // --- Continue Button ---
    continueBtn.addEventListener("click", () => {
        apologySection.classList.add("hidden");
        valentineSection.classList.remove("hidden");
        music.play(); // start music after apology
    });

    // --- No button click ---
    noBtn.addEventListener("click", () => {
        chancePopup.classList.remove("hidden");
    });

    // --- Chance popup OK ---
    okBtn.addEventListener("click", () => {
        chancePopup.classList.add("hidden");
    });

    // --- Yes button ---
    yesBtn.addEventListener("click", () => {
        valentineSection.classList.add("hidden");
        finalMessage.classList.remove("hidden");
        finalImage.classList.remove("hidden"); // show your image
        music.play();
        startHearts();
        startConfetti();
    });

    // --- Floating hearts ---
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerText = "💖";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight + "px";
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }

    function startHearts() {
        setInterval(createHeart, 300);
    }

    // --- Confetti ---
    function startConfetti() {
        for (let i = 0; i < 150; i++) {
            confettiPieces.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                size: Math.random() * 6 + 4,
                speed: Math.random() * 3 + 2
            });
        }
        animateConfetti();
    }

    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confettiPieces.forEach(p => {
            ctx.fillStyle = "#ff0a54";
            ctx.fillRect(p.x, p.y, p.size, p.size);
            p.y += p.speed;
            if (p.y > canvas.height) p.y = -10;
        });
        requestAnimationFrame(animateConfetti);
    }

});
