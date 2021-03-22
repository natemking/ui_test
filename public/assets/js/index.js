const listEl = document.querySelector('ul');
const thermometerEl = document.querySelector('.thermometer');
const mercuryEl = document.querySelector('.mercury');

const url = window.location.href;
const darkBlue = 'rgb(38, 140, 195)';
const lightBlue = 'rgb(148, 207, 238)'


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


/**
 * Slider
 * 
 */
mercuryEl.setAttribute('id', 'mercury');

for (let i = 1; i <= 3; i++) {
    let mercuryElClone = mercuryEl.cloneNode(true);
    mercuryElClone.setAttribute('id', `mercury-clone${i}`);
    thermometerEl.append(mercuryElClone);
}

