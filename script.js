const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

// Выбираем все блоки и карточки
document.querySelectorAll('.main__block, .main__element').forEach(block => {
    block.style.opacity = '0';
    block.style.transform = 'translateY(30px)';
    block.style.transition = 'all 0.6s ease-out';
    observer.observe(block);
});
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 60) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section, footer'); // Все блоки с ID
    const navLinks = document.querySelectorAll('.header__a');

    const observerOptions = {
        root: null,
        rootMargin: '-40% 0px -40% 0px', // Срабатывает, когда секция в центре экрана
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});