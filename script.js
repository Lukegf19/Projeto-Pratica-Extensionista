document.addEventListener('DOMContentLoaded', function() {
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const infoSection = document.getElementById('about');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    learnMoreBtn.addEventListener('click', function() {
        if (infoSection.classList.contains('hidden-section')) {
            infoSection.classList.remove('hidden-section');
            learnMoreBtn.textContent = 'Leia Menos';
        } else {
            infoSection.classList.add('hidden-section');
            learnMoreBtn.textContent = 'Saiba Mais';
        }
    });

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});
