function generateHeart() {
    const heart = document.createElement("div");
    const hearts = ["💘", "💓", "😍"];
    const random = Math.floor(Math.random() * hearts.length);
    heart.innerText = hearts[random];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 5 + 6 + 's';
    heart.classList.add('rain-heart');
    document.body.appendChild(heart);
}

setInterval(generateHeart, 100);