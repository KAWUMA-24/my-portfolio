// Smooth scrolling for navigation links
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
});

// Adding a welcome message that fades in
window.onload = function() {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.textContent = "Welcome to My Portfolio!";
    welcomeMessage.style.position = "fixed";
    welcomeMessage.style.top = "50%";
    welcomeMessage.style.left = "50%";
    welcomeMessage.style.transform = "translate(-50%, -50%)";
    welcomeMessage.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    welcomeMessage.style.color = "#fff";
    welcomeMessage.style.padding = "1rem 2rem";
    welcomeMessage.style.borderRadius = "10px";
    welcomeMessage.style.opacity = "0";
    welcomeMessage.style.transition = "opacity 2s";

    document.body.appendChild(welcomeMessage);

    setTimeout(() => {
        welcomeMessage.style.opacity = "1";
    }, 500);

    setTimeout(() => {
        welcomeMessage.style.opacity = "0";
        document.body.removeChild(welcomeMessage);
    }, 4000);
};



const divs = document.querySelectorAll('.liner-div');

window.addEventListener('scroll', () => {
    divs.forEach((div) => {
        const rect = div.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            div.style.transform = 'scale(0.8)';
            div.style.transition = 'transform 1.0s';
            setTimeout(() => {
                div.style.transform = 'scale(0.9)';
            }, 3000);
        }
    });
});

