function removeContent () {
    const contentContainer = document.querySelector('.main');
    console.log(contentContainer.closest('div'));
    contentContainer.closest('div').remove();
}

export default removeContent;