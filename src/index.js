import { homePage } from './home.js';
import { menuPage } from './menu.js';
import { aboutPage } from './about.js';

const content = document.getElementById('content')
const pages = { home: homePage, menu: menuPage, about: aboutPage };

function updateContentWithTransition(elementId, newHtml) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

    setTimeout(() => {
        element.innerHTML = newHtml;
        element.classList.remove('hidden');
    }, 300);
}

function navigate(page) {
    updateContentWithTransition('content', pages[page]);
    document.querySelectorAll('.navButton').forEach(btn => btn.classList.remove('active'));
    document.getElementById(page).classList.add('active');
}

document.getElementById('home').addEventListener('click', () => navigate('home'));
document.getElementById('menu').addEventListener('click', () => navigate('menu'));
document.getElementById('about').addEventListener('click', () => navigate('about'));

navigate('home');