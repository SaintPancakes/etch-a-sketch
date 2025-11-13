
const gridContainer = document.querySelector('.container');
const sixteenth = document.createElement('div');
sixteenth.classList.add('box');
sixteenth.style.backgroundColor = '#f6f5f2ff'
const fragment = new DocumentFragment();

function removeElementsbyClass(box) {
    let boxesToRemove = document.getElementsByClassName(box);
    while(boxesToRemove.length > 0) {
        boxesToRemove[0].parentNode.removeChild(boxesToRemove[0]);
    }
}    

//when a box is highlighted, it will be red, green or blue
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
        let currentOpacity = parseFloat(boxClone.style.opacity);
        let newOpacity = Math.abs(currentOpacity + 0.1);
        boxClone.style.opacity = newOpacity;
    });
    fragment.appendChild(boxClone);
}

gridContainer.appendChild(fragment);


const button = document.createElement('button');
button.textContent = "Change Grid Size";
    button.addEventListener('click', () => {
        const answer = prompt ("Choose the number of squares for each side of the grid. Answer must be between 1 and 100.");
           if (isNaN(answer) || answer <1 || answer > 100){
                alert ("Invalid answer, try again");
                return;
           }
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
                    boxClone.style.opacity = '0.1'
                
                boxClone.style.border = "solid 1px #000000";
            boxClone.addEventListener('mouseenter', () => {
                const boxColor = randomRGB();
                boxClone.style.backgroundColor = `${boxColor}`;
                let currentOpacity = parseFloat(boxClone.style.opacity);
                let newOpacity = Math.abs(currentOpacity + 0.1);
                boxClone.style.opacity = newOpacity;

        });

        fragment.appendChild(boxClone);
        }
    gridContainer.appendChild(fragment);

    })

document.querySelector('.title-div').appendChild(button);


