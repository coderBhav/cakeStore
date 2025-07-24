
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const toggleDark = document.getElementById('toggleDark');
const toggleDarkMobile = document.getElementById('toggleDarkMobile');
const html = document.documentElement;

menuBtn.addEventListener('click', () => {
mobileMenu.classList.toggle('hidden');
});

// Toggle dark mode (desktop + mobile)
function toggleDarkMode() {
html.classList.toggle('dark');
}

toggleDark.addEventListener('click', toggleDarkMode);
toggleDarkMobile.addEventListener('click', toggleDarkMode);