console.log('something');

const menuButton = document.getElementById('menu');
const aboutButton = document.getElementById('about');
const homeButton = document.getElementById('home');


import fillContent from "./home-content.js";
import fillMenuContent from "./menu-content.js";
import fillAboutContent from "./about-content.js";
import removeContent from "./remove-content.js";
import './styles/main.css'
import restaurant from './assets/restaurant.jpg'

console.log(fillContent());

const restaurantImg = document.getElementById('rest-img');
function restImgSrc() {
    restaurantImg.src = restaurant;
}

//find out why image won't load after switching tabs
restImgSrc();

homeButton.addEventListener('click', restImgSrc);
homeButton.addEventListener('click', removeContent);
homeButton.addEventListener('click', fillContent);
menuButton.addEventListener('click', removeContent);
menuButton.addEventListener('click', fillMenuContent);
aboutButton.addEventListener('click', removeContent);
aboutButton.addEventListener('click', fillAboutContent);

