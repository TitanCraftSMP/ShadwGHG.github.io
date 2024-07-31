document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('navLinks').classList.toggle('nav-active');
    this.classList.toggle('toggle');
});

const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navLinks.forEach(link => link.classList.remove('active'));
        e.target.classList.add('active');
        const sections = document.querySelectorAll('main section');
        sections.forEach(section => section.classList.add('hidden'));
        const targetSection = document.querySelector(e.target.getAttribute('href'));
        targetSection.classList.remove('hidden');
    });
});
