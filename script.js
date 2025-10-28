
const gridContainer = document.querySelector('.container');
const sixteenth = document.createElement('div');
sixteenth.classList.add('box');
const fragment = new DocumentFragment();

function removeElementsbyClass(box) {
    let boxesToRemove = document.getElementsByClassName(box);
    while(boxesToRemove.length > 0) {
        boxesToRemove[0].parentNode.removeChild(boxesToRemove[0]);
    }
}    


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
    
        removeElementsbyClass('box');
        
        const fragment = new DocumentFragment();

        for (let i = 0; i < answer * answer; i++) {
            const boxClone = sixteenth.cloneNode(true);
                boxClone.style.width = 750/answer + "px";
                boxClone.style.height = 750/answer + "px";
                boxClone.style.border = "solid 1px #000000";
            boxClone.addEventListener('mouseenter', () => {
                boxClone.style.backgroundColor = 'red';
        });

        fragment.appendChild(boxClone);
        }
    gridContainer.appendChild(fragment);

    })

document.body.appendChild(button)


