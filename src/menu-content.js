function fillMenuContent () {
    const contentContainer = document.getElementById('content');

    const menuContent = document.createElement('div');
    menuContent.setAttribute('id', 'menu-content');
    
    menuContent.innerHTML = `
    <div class="main">
    <div class="header">The best restaurant</div>
        <div class="cont-container">
            <div id="page-header">Our Menu</div>
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
            <div class="info-field" id="address">
                <img id="menu-four-img" alt="">
             Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
            </div>
            <div class="info-field" id="address">
                <img id="menu-five-img" alt="">
             Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
            </div>
            <div class="info-field" id="address">
                <img id="menu-six-img" alt="">
             Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
            </div>
        </div>
    `
    contentContainer.appendChild(menuContent);

    /* menuButton.addEventListener('click', removeContent); */
}

export default fillMenuContent

