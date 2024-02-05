function fillContent () {
    const contentEl = document.getElementById("content");

    const navEl = document.querySelector("nav");


    const headerEl = document.createElement('header');
    const mainEl = document.createElement('div');
    const contentContainer = document.createElement('div');
    const pageHeader = document.createElement('div');
    const restImg = document.createElement('img');
    const pageDescription = document.createElement('div');
    const workingHours = document.createElement('div');
    const addressInfo = document.createElement('div');

    headerEl.setAttribute('class', 'header');
    mainEl.setAttribute('class', 'main');
    mainEl.setAttribute('id', 'home-main');
    contentContainer.setAttribute('class', 'cont-container');
    contentContainer.setAttribute('id', 'home-container');
    pageHeader.setAttribute('id', 'page-header');
    restImg.setAttribute('id', 'rest-img');
    pageDescription.setAttribute('class', 'info-field');
    pageDescription.setAttribute('id', 'description');
    workingHours.setAttribute('class', 'info-field');
    workingHours.setAttribute('id', 'working-hours');
    addressInfo.setAttribute('class', 'info-field');
    addressInfo.setAttribute('id', 'address');


    headerEl.innerHTML = 'The Best Restaurant';
    pageHeader.innerHTML = 'Our Restaurant'
    pageDescription.innerHTML = 'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text';
    workingHours.innerHTML = 'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text';
    addressInfo.innerHTML = 'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text';

    contentEl.appendChild(mainEl);
    mainEl.appendChild(headerEl);
    mainEl.appendChild(contentContainer);
    contentContainer.appendChild(pageHeader);
    contentContainer.appendChild(restImg);
    contentContainer.appendChild(pageDescription);
    contentContainer.appendChild(workingHours);
    contentContainer.appendChild(addressInfo);

}

/* function fillContent () {
    const contentContainer = document.getElementById('content');

    const menuContent = document.createElement('div');
    menuContent.setAttribute('id', 'menu-content');
    
    menuContent.innerHTML = `
    <div class="main">
    <div class="header">The best restaurant</div>
        <div class="cont-container">
            <div id="page-header">Our Menu</div>
            <img id='rest-img'>
            <div class="info-field" id="description">
                <img id="menu-one-img" alt="">
               Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
            </div>
            <div class="info-field" id="working-hours">
                <img id="menu-two-img" alt="">
             Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
            </div>
            <div class="info-field" id="address">
                <img id="menu-three-img" alt="">
             Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
            </div>
        </div>
    `
    contentContainer.appendChild(menuContent);
    const contContainer = document.querySelector('.cont-container');
}
*/


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