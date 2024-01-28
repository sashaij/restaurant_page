function removeContent () {
    const contentContainer = document.querySelector('.cont-container');
    console.log(contentContainer.closest('div'));
    contentContainer.closest('div').remove();
}

export default removeContent;