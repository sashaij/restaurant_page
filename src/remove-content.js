function removeContent () {
    const header = document.querySelector('.header');
    const contentContainer = document.querySelector('.main');
    console.log(contentContainer.closest('div'));
    contentContainer.closest('div').remove();
    //header.closest('div').remove();
}

export default removeContent;