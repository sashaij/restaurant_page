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
import bacon from './assets/bacon-spinach-bowl.jpg'
import burger from './assets/burger-with-melted-cheese.jpg'
import chef from './assets/chef.jpg'
import chocolate from './assets/chocolate-cake.jpg'
import pancakes from './assets/pancakes.jpg'
import egg from './assets/egg-toast.jpg'
import noodles from './assets/noodles.jpg'


console.log(fillContent());

function restImgSrc() {
    const restaurantImg = document.getElementById('rest-img');
    restaurantImg.src = restaurant;
}



restImgSrc();

homeButton.addEventListener('click', removeContent);
homeButton.addEventListener('click', fillContent);
homeButton.addEventListener('click', restImgSrc);
menuButton.addEventListener('click', removeContent);
menuButton.addEventListener('click', fillMenuContent);
aboutButton.addEventListener('click', removeContent);
aboutButton.addEventListener('click', fillAboutContent);

