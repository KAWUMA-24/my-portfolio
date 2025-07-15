// Smooth scrolling for navigation links
$(document).ready(function() {
    // Smooth scrolling
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 70
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });

    // Navbar background change on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.head').css('background', 'linear-gradient(135deg, #1a2a3a 0%, #2980b9 100%)');
        } else {
            $('.head').css('background', 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)');
        }
    });

    // Animate elements when they come into view
    function checkVisibility() {
        $('.liner-div').each(function() {
            var elem = $(this);
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = elem.offset().top;
            var elemBottom = elemTop + elem.height();
            
            if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
                elem.addClass('visible');
            }
        });
    }

    // Check on load and scroll
    checkVisibility();
    $(window).scroll(checkVisibility);

    // Typewriter effect for welcome message
    const messages = ["KAWUMA DEO", "Data Analyst", "Software Engineer"];
    let messageIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const welcomeElement = document.getElementById("welcome");
    
    function typeWriter() {
        const currentMessage = messages[messageIndex];
        
        if (isDeleting) {
            welcomeElement.textContent = currentMessage.substring(0, charIndex - 1);
            charIndex--;
        } else {
            welcomeElement.textContent = currentMessage.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentMessage.length) {
            isDeleting = true;
            setTimeout(typeWriter, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            messageIndex = (messageIndex + 1) % messages.length;
            setTimeout(typeWriter, 500);
        } else {
            const speed = isDeleting ? 100 : 150;
            setTimeout(typeWriter, speed);
        }
    }
    
    // Start the typewriter effect
    setTimeout(typeWriter, 1000);

    // Interactive skill bars (for data analysis section)
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Floating particles background effect
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.3';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = window.innerWidth < 768 ? 30 : 80;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: Math.random() * 1 - 0.5,
            speedY: Math.random() * 1 - 0.5
        });
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = '#3498db';
            ctx.fill();
            
            p.x += p.speedX;
            p.y += p.speedY;
            
            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        }
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
    
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
