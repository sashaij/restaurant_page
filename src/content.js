function fillContent () {
    const contentEl = document.getElementById("content");

    const navEl = document.querySelector("nav");
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const aboutButton = document.createElement('button');

    const headerEl = document.createElement('header');
    const mainEl = document.createElement('div');
    const contentContainer = document.createElement('div');
    const pageHeader = document.createElement('div');
    const pageDescription = document.createElement('div');
    const workingHours = document.createElement('div');
    const addressInfo = document.createElement('div');

    homeButton.setAttribute('id', 'home');
    homeButton.setAttribute('class', 'nav-button');
    menuButton.setAttribute('id', 'menu');
    menuButton.setAttribute('class', 'nav-button');
    aboutButton.setAttribute('id', 'about');
    aboutButton.setAttribute('class', 'nav-button');

    headerEl.setAttribute('class', 'header');
    mainEl.setAttribute('class', 'main');
    contentContainer.setAttribute('class', 'cont-container');
    pageHeader.setAttribute('id', 'page-header');
    pageDescription.setAttribute('class', 'info-field');
    pageDescription.setAttribute('id', 'description');
    workingHours.setAttribute('class', 'info-field');
    workingHours.setAttribute('id', 'working-hours');
    addressInfo.setAttribute('class', 'info-field');
    addressInfo.setAttribute('id', 'address');

    homeButton.innerHTML = 'Home';
    menuButton.innerHTML = 'Menu';
    aboutButton.innerHTML = 'About';

    headerEl.innerHTML = 'The Best Restaurant';
    pageHeader.innerHTML = 'Our Restaurant'
    pageDescription.innerHTML = 'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text';
    workingHours.innerHTML = 'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text';
    addressInfo.innerHTML = 'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text';

    navEl.appendChild(homeButton);
    navEl.appendChild(menuButton);
    navEl.appendChild(aboutButton);
    contentEl.appendChild(headerEl);
    contentEl.appendChild(mainEl);
    mainEl.appendChild(contentContainer);
    contentContainer.appendChild(pageHeader);
    contentContainer.appendChild(pageDescription);
    contentContainer.appendChild(workingHours);
    contentContainer.appendChild(addressInfo);
}

export default fillContent;

//nav
/*
            <button id="home" class="nav-button">Home</button>
            <button id="menu" class="nav-button">Menu</button>
            <button id="about" class="nav-button">About</button> 
 */

 //content
  /* 
  <div class="header">The best restaurant</div>
    <div class="main">
        <div class="cont-container">
            <div id="page-header">Our Restaurant</div>
            <div class="info-field" id="description">
                Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
            </div>
            <div class="info-field" id="working-hours">
                Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
            </div>
            <div class="info-field" id="address">
                Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
            </div>
        </div>
  */          