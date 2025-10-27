
const gridContainer = document.querySelector('.container');
const sixteenth = document.createElement('div');
sixteenth.classList.add('box');
const fragment = new DocumentFragment();


for (let i = 0; i < 16; i++) {
    const boxClone = sixteenth.cloneNode(true);

    boxClone.addEventListener('mouseenter', () => {
        boxClone.style.backgroundColor = 'red';
    });

    fragment.appendChild(boxClone);
}

gridContainer.appendChild(fragment);

const button = document.createElement('button');
button.addEventListener('click', () => {
    const answer = prompt ("Number of squares per side for the new grid?");
    box.remove();

    for (let i = 0; i < $answer; i++) {
    const boxClone = sixteenth.cloneNode(true);

    boxClone.addEventListener('mouseenter', () => {
        boxClone.style.backgroundColor = 'red';
    });

    fragment.appendChild(boxClone);
}


    const boxes = document.getElementsByClassName('box');
        box.style.width = $1000/(Math.sqrt(answer));
        box.style.height = $1000/(Math.sqrt(answer));
        box.style.border = "solid 1px #000000";

})

document.body.appendChild(button)


