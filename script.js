// ==========================================
// BIO SITE - VINILU BURGER
// Edite os links abaixo:
// ==========================================

const LINKS = {
    whatsapp: "https://wa.me/5519989048576",
    food99: "https://oia.99app.com/dlp9/aleS2X?area=BR",
    instagram: "https://www.instagram.com/vinilu_burger/",
    google: "https://search.google.com/local/writereview?placeid=ChIJoZqJ_j5Nz5QRO8JYlWBYy70",
    location: "https://maps.app.goo.gl/JcPWBe4KnXyRp56d7?g_st=aw"
};

// ==========================================
// Não edite abaixo desta linha
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button");

    buttons.forEach((button) => {
        button.addEventListener("click", function (e) {
            e.preventDefault();

            let url = null;

            if (button.classList.contains("whatsapp")) {
                url = LINKS.whatsapp;
            } else if (button.classList.contains("food99")) {
                url = LINKS.food99;
            } else if (button.classList.contains("instagram")) {
                url = LINKS.instagram;
            } else if (button.classList.contains("google")) {
                url = LINKS.google;
            } else if (button.classList.contains("location")) {
                url = LINKS.location;
            }

            if (url) {
                window.open(url, "_blank", "noopener,noreferrer");
            }
        });
    });
});
