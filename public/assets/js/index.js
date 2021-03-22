const listEl = document.querySelector('ul');
const thermometerEl = document.querySelector('.thermometer');
const meterEl = document.querySelector('.meter')
const mercuryEl = document.querySelector('.mercury');
const sliderEl = document.querySelector('.slider');
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
    mercuryElClone.setAttribute('id', `mercuryClone${i}`);
    thermometerEl.append(mercuryElClone);


    this[`mercuryElClone${i}`] = document.querySelector(`#mercuryClone${i}`);

}

meterEl.addEventListener('click', (e) => {
    
    switch (e.target.id) {
        case ('setTo1'):
            mercuryElClone1.classList.remove('mercuryFilled');
            mercuryElClone2.classList.remove('mercuryFilled');
            mercuryElClone3.classList.remove('mercuryFilled');
            sliderEl.setAttribute('style', 'left: 10.5%');
            break;
        case ('setTo2'):
            mercuryElClone1.classList.add('mercuryFilled');
            mercuryElClone2.classList.remove('mercuryFilled');
            mercuryElClone3.classList.remove('mercuryFilled');
            sliderEl.setAttribute('style', 'left: 35%');
            break;
        case ('setTo3'):
            mercuryElClone1.classList.add('mercuryFilled');
            mercuryElClone2.classList.add('mercuryFilled');
            mercuryElClone3.classList.remove('mercuryFilled');
            sliderEl.setAttribute('style', 'left: 59.5%');
            break;
        case ('setTo4'):
            mercuryElClone1.classList.add('mercuryFilled');
            mercuryElClone2.classList.add('mercuryFilled');
            mercuryElClone3.classList.add('mercuryFilled');
            sliderEl.setAttribute('style', 'left: 85%');
            break;
        default:
            break;
    }
})

