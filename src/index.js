console.log('something');

import fillContent from "./home-content.js";
import removeContent from "./remove-content.js";
import './styles/main.css'
import restaurant from './assets/restaurant.jpg'

console.log(fillContent());

const restaurantImg = document.getElementById('rest-img');
restaurantImg.src = restaurant;

