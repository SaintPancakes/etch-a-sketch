
const gridContainer = document.querySelector('.container');
const sixteenth = document.createElement('div');
sixteenth.classList.add('box');
const fragment = new DocumentFragment();


for(let i=0; i<16; i++) {
    fragment.appendChild(sixteenth.cloneNode(true));
}

gridContainer.appendChild(fragment);
