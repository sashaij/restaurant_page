console.log('something');

const menuButton = document.getElementById('menu');


import fillContent from "./home-content.js";
import fillMenuContent from "./menu-content.js";
import removeContent from "./remove-content.js";
import './styles/main.css'
import restaurant from './assets/restaurant.jpg'

console.log(fillContent());

const restaurantImg = document.getElementById('rest-img');
restaurantImg.src = restaurant;

menuButton.addEventListener('click', removeContent);
menuButton.addEventListener('click', fillMenuContent);
