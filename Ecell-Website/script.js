
function showSidebar(event) {
    event.preventDefault(); // Prevent page refresh
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar(event) {
    event.preventDefault(); // Prevent page refresh
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}


document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('.about');
    const whatSection = document.querySelector('.what');

    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add visible class
            }
        });
    }, options);

    observer.observe(aboutSection); // Observe About Us section
    observer.observe(whatSection); // Observe What is E-CELL section
});







document.addEventListener('DOMContentLoaded', function() {
    const tedxSections = document.querySelectorAll('.tedx');

    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add visible class
            }
        });
    }, options);

    tedxSections.forEach(section => {
        observer.observe(section); // Observe each TEDx section
    });
});








let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

const cursor = document.querySelector('.cursor');

function animateCursor() {
    cursor.style.top = `${mouseY}px`;
    cursor.style.left = `${mouseX}px`;
    requestAnimationFrame(animateCursor); // Smooth animation loop
}

animateCursor();



// Select elements to animate
const animateLeft = document.querySelectorAll('.hype-animate-left');
const animateRight = document.querySelectorAll('.hype-animate-right');

// Intersection Observer to detect when elements come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show'); // Optional: Remove class if out of view
        }
    });
}, { threshold: 0.1 }); // Adjust threshold as needed

// Observe elements
animateLeft.forEach(el => observer.observe(el));
animateRight.forEach(el => observer.observe(el));




document.addEventListener('DOMContentLoaded', () => {
    const teamCols = document.querySelectorAll('.team-col');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    teamCols.forEach((col) => observer.observe(col));
});
