
const gridContainer = document.querySelector('.container');
const sixteenth = document.createElement('div');
sixteenth.classList.add('box');
sixteenth.style.backgroundColor = '#ECEAE4'
const fragment = new DocumentFragment();

function removeElementsbyClass(box) {
    let boxesToRemove = document.getElementsByClassName(box);
    while(boxesToRemove.length > 0) {
        boxesToRemove[0].parentNode.removeChild(boxesToRemove[0]);
    }
}    

function randomRGB() {
    const choice = Math.floor(Math.random()*3)+1;

    if (choice === 1) {
        return ("red");
    } else if (choice === 2) {
        return ("green");
    } else {
        return ("blue")
    }
}

//creates 16 boxes for default grid
for (let i = 0; i < 16; i++) {
    const boxClone = sixteenth.cloneNode(true);

    boxClone.addEventListener('mouseenter', () => {
        const boxColor = randomRGB();
        boxClone.style.backgroundColor = `${boxColor}`;
    });
    fragment.appendChild(boxClone);
}

gridContainer.appendChild(fragment);


const button = document.createElement('button');
button.textContent = "Generate New Grid";
    button.addEventListener('click', () => {
        const answer = prompt ("Number of squares per side for the new grid?");
    
        removeElementsbyClass('box');
        
        const fragment = new DocumentFragment();
        //generate new boxes according to user input
        for (let i = 0; i < answer * answer; i++) {
            const boxClone = sixteenth.cloneNode(true);
                boxClone.classList.add('new-box');
                //flexbasis forces the default value of the box clones to conform to the size of the grid
                let divBoxCalc = (100/answer);
                    boxClone.style.flex = "0 0 0"; //disabled growth and shrink, stopping box overflow
                    boxClone.style.flexBasis = `${divBoxCalc}%`; //explicitly set box size to a percentage of the container
                    boxClone.style.height = `${divBoxCalc}%`; //forces boxes to be square
                    boxClone.style.boxSizing = "border-box"; //the size of the box includes the border, stopping overflow

                
                boxClone.style.border = "solid 1px #000000";
            boxClone.addEventListener('mouseenter', () => {
                const boxColor = randomRGB();
                boxClone.style.backgroundColor = `${boxColor}`;
        });

        fragment.appendChild(boxClone);
        }
    gridContainer.appendChild(fragment);

    })

document.querySelector('.sketch-div').appendChild(button);


