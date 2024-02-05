function fillAboutContent () {
    const contentContainer = document.getElementById('content');

    const aboutContent = document.createElement('div');
    aboutContent.setAttribute('id', 'menu-content');
    
    aboutContent.innerHTML = `
    <div class="main" id="about-main">
    <div class="header">About the restaurant</div>
        <div class="cont-container" id='about-container'>
            <div id="page-header">Our philosophy</div>
            <div class="info-field about-plate" id="description">
                <img id="about-one-img" alt="">
                <p>
                    Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                </p>
                <p>
                    Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                </p>
                <p>
                    Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                </p>
            </div>
        </div>

    `
    contentContainer.appendChild(aboutContent);

    const topImg = document.getElementById('about-one-img');
    topImg.src = chef;

    /* menuButton.addEventListener('click', removeContent); */
}

import chef from './assets/chef.jpg'
export default fillAboutContent