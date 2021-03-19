const listEl = document.querySelector('ul');
const url = window.location.href;
const darkBlue = 'rgb(38, 140, 195)'
const lightBlue = 'rgb(148, 207, 138)'

listEl.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(e.target);

    console.log(url.match(/index/gi));
})


/**
 * Set the style for the navbar list element
 * depending on the page displayed
 */
switch (true) {
    case (/index/gi).test(url):
        listEl.children[0].setAttribute('style', `color: ${darkBlue}; border: 2px solid ${darkBlue}`)
        break;
    case (/about/gi).test(url):
        listEl.children[1].setAttribute('style', `color: ${darkBlue}; border: 2px solid ${darkBlue}`)
        break;
    case (/services/gi).test(url):
        listEl.children[2].setAttribute('style', `color: ${darkBlue}; border: 2px solid ${darkBlue}`)
        break;
    case (/contact/gi).test(url):
        listEl.children[3].setAttribute('style', `color: ${darkBlue}; border: 2px solid ${darkBlue}`)
        break;
    default:
        break;
}