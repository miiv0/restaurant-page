import { homePage } from './home.js';
import { menuPage } from './menu.js';
import { aboutPage } from './about.js';

const homeBtn = document.getElementById('home')
homeBtn.addEventListener("click", () => {
    console.log("home Button was pressed!");
});