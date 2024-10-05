// Seleciona os elementos do DOM
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

// Adiciona um evento de clique ao menu toggle
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Adiciona um evento de clique para fechar o menu ao clicar fora dele
document.addEventListener('click', (event) => {
    if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});
