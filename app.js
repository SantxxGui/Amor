document.addEventListener("DOMContentLoaded", () => {
    const heartContainer = document.querySelector(".heart-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️"; // Pode usar 💕 ou outros emojis
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";

        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 500); // Criar corações a cada 500ms
});