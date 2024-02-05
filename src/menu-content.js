function fillMenuContent () {
    const contentContainer = document.getElementById('content');

    const menuContent = document.createElement('div');
    menuContent.setAttribute('id', 'menu-content');
    
    menuContent.innerHTML = `
    <div class="main">
    <div class="header">The best restaurant</div>
        <div class="cont-container">
            <div id="page-header">Our Menu</div>
            <div id='menu-plates'>
            <div class="info-field menu-plate" id="description">
                <img id="menu-one-img" class='menu-img' alt="">
               <p>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</p>
            </div>
            <div class="info-field menu-plate" id="working-hours">
                <img id="menu-two-img" class='menu-img' alt="">
             <p>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</p>
            </div>
            <div class="info-field menu-plate" id="address">
                <img id="menu-three-img" class='menu-img' alt="">
             <p>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</p>
            </div>
            <div class="info-field menu-plate" id="address">
                <img id="menu-four-img" class='menu-img' alt="">
             <p>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</p>
            </div>
            <div class="info-field menu-plate" id="address">
                <img id="menu-five-img" class='menu-img' alt="">
             <p>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</p>
            </div>
            <div class="info-field menu-plate" id="address">
                <img id="menu-six-img" class='menu-img' alt="">
             <p>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</p>
            </div>
            </div>
        </div>
    `
    contentContainer.appendChild(menuContent);

    const menuImgOne = document.getElementById('menu-one-img');
    const menuImgTwo = document.getElementById('menu-two-img');
    const menuImgThree = document.getElementById('menu-three-img');
    const menuImgFour = document.getElementById('menu-four-img');
    const menuImgFive = document.getElementById('menu-five-img');
    const menuImgSix = document.getElementById('menu-six-img');

    menuImgOne.src = bacon;
    menuImgTwo.src = burger;
    menuImgThree.src = egg;
    menuImgFour.src = noodles;
    menuImgFive.src = chocolate;
    menuImgSix.src = pancakes;


    /* menuButton.addEventListener('click', removeContent); */

}

import bacon from './assets/bacon-spinach-bowl.jpg'
import burger from './assets/burger-with-melted-cheese.jpg'
import chef from './assets/chef.jpg'
import chocolate from './assets/chocolate-cake.jpg'
import pancakes from './assets/pancakes.jpg'
import egg from './assets/egg-toast.jpg'
import noodles from './assets/noodles.jpg'
export default fillMenuContent

