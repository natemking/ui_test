const listEl = document.querySelector('ul');
const thermometerEl = document.querySelector('.thermometer');
const meterEl = document.querySelector('.meter');
const mercuryEl = document.querySelector('.mercury');
const sliderEl = document.querySelector('.slider');
const labelSetTo1El = document.querySelector('label[for="setTo1"]');
const labelSetTo2El = document.querySelector('label[for="setTo2"]');
const labelSetTo3El = document.querySelector('label[for="setTo3"]');
const labelSetTo4El = document.querySelector('label[for="setTo4"]');

const url = window.location.href;
const darkBlue = 'rgb(38, 140, 195)';



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
 * Slider Functionality
 * 
 */
mercuryEl.setAttribute('id', 'mercury');

/** Clone the mercury class element 3 more times and append to the thermometer DOM element then assign a query selector to each cloned element */
for (let i = 1; i <= 3; i++) {
    let mercuryElClone = mercuryEl.cloneNode(true);

    mercuryElClone.setAttribute('id', `mercuryClone${i}`);
    thermometerEl.append(mercuryElClone);

    this[`mercuryElClone${i}`] = document.querySelector(`#mercuryClone${i}`);

}

/** When a radio btn is clicked fill the space before it and move the slider to align with that button */
meterEl.addEventListener('click', (e) => {
    
    switch (e.target.id) {
        case ('setTo1'):
            mercuryElClone1.classList.remove('mercuryFilled');
            mercuryElClone2.classList.remove('mercuryFilled');
            mercuryElClone3.classList.remove('mercuryFilled');
            sliderEl.setAttribute('style', 'left: 10.5%');
            labelSetTo1El.classList.add('checked');
            labelSetTo2El.classList.remove('checked');
            labelSetTo3El.classList.remove('checked');
            labelSetTo4El.classList.remove('checked');
            break;
        case ('setTo2'):
            mercuryElClone1.classList.add('mercuryFilled');
            mercuryElClone2.classList.remove('mercuryFilled');
            mercuryElClone3.classList.remove('mercuryFilled');
            sliderEl.setAttribute('style', 'left: 35%');
            labelSetTo1El.classList.remove('checked');
            labelSetTo2El.classList.add('checked');
            labelSetTo3El.classList.remove('checked');
            labelSetTo4El.classList.remove('checked');
            break;
        case ('setTo3'):
            mercuryElClone1.classList.add('mercuryFilled');
            mercuryElClone2.classList.add('mercuryFilled');
            mercuryElClone3.classList.remove('mercuryFilled');
            sliderEl.setAttribute('style', 'left: 59.5%');
            labelSetTo1El.classList.remove('checked');
            labelSetTo2El.classList.remove('checked');
            labelSetTo3El.classList.add('checked');
            labelSetTo4El.classList.remove('checked');
            break;
        case ('setTo4'):
            mercuryElClone1.classList.add('mercuryFilled');
            mercuryElClone2.classList.add('mercuryFilled');
            mercuryElClone3.classList.add('mercuryFilled');
            sliderEl.setAttribute('style', 'left: 85%');
            labelSetTo1El.classList.remove('checked');
            labelSetTo2El.classList.remove('checked');
            labelSetTo3El.classList.remove('checked');
            labelSetTo4El.classList.add('checked');
            break;
        default:
            break;
    }
})

