function fillContent () {
    const contentEl = document.getElementById("content");

    const navEl = document.querySelector("nav");
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const aboutButton = document.createElement('button');
    homeButton.setAttribute('id', 'home');
    homeButton.setAttribute('class', 'nav-button');
    menuButton.setAttribute('id', 'menu');
    menuButton.setAttribute('class', 'nav-button');
    aboutButton.setAttribute('id', 'about');
    aboutButton.setAttribute('class', 'nav-button');
    homeButton.innerHTML = 'Home';
    menuButton.innerHTML = 'Menu';
    aboutButton.innerHTML = 'About';
    navEl.appendChild(homeButton);
    navEl.appendChild(menuButton);
    navEl.appendChild(aboutButton);
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