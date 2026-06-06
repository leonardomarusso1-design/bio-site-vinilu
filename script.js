// ==========================================
// BIO SITE - VINILU BURGER
// Edite os links abaixo:
// ==========================================

const LINKS = {
    whatsapp: "http://wa.me/5519989048576",      // Coloque o link do WhatsApp aqui
    food99: "https://oia.99app.com/dlp9/aleS2X?area=BR",         // Coloque o link do 99Food aqui
    instagram: "https://www.instagram.com/vinilu_burger/",     // Coloque o link do Instagram aqui
    google: "https://search.google.com/local/writereview?placeid=ChIJoZqJ_j5Nz5QRO8JYlWBYy70",        // Coloque o link do Google Reviews aqui
    location: "https://maps.app.goo.gl/JcPWBe4KnXyRp56d7?g_st=aw"       // Coloque o link do Google Maps aqui
};

// ==========================================
// Não edite abaixo desta linha
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (button.classList.contains('whatsapp')) {
                window.open(LINKS.whatsapp, '_blank');
            } else if (button.classList.contains('ifood')) {
                window.open(LINKS.ifood, '_blank');
            } else if (button.classList.contains('instagram')) {
                window.open(LINKS.instagram, '_blank');
            } else if (button.classList.contains('google')) {
                window.open(LINKS.google, '_blank');
            } else if (button.classList.contains('location')) {
                window.open(LINKS.location, '_blank');
            }
        });
    });
});
