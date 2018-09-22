// fucntions
const printToDom = (divId, stringToPrint) => {
    document.getElementById(divId).innerHTML += stringToPrint;
};


// Data
const separateButEqual = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
let fName = document.getElementById('first-name');
let lName = document.getElementById('last-name');
let fValue = fName.value;
let lValue = lName.value;
fName.setAttribute("autocomplete", "off");
lName.setAttribute("autocomplete", "off");
// selectors
const submitName = document.getElementById('sub-Name');
const houseSelector = () => { //uses randomly generated number to input house name
    return separateButEqual[numGenerator()];
};
const numGenerator = () => { //Generates random number
    return Math.round(Math.random()*(separateButEqual.length-1));
};

submitName.addEventListener("click", (e) => {
    e.preventDefault();
    fValue = fName.value;
    lValue = lName.value;
    let newString = ``;
    newString += `  <div class="card card-width border border-dark">
            <div class="card-body d-flex flex-column align-items-center">
                <h5 class="card-title">${fValue} ${lValue}</h5>
                <p class="card-text">${houseSelector()}</p>
                <a href="#" class="btn btn-danger expel-this">Expel</a>
            </div>
        </div>`;
    // Prevents card generation if a field is left blank
    if (fValue && lValue !== ''){
        printToDom('sorted-pupils',newString);
        const houseClass = document.getElementsByClassName('card-text');
        for (i = 0; i < houseClass.length; i++) {
            houseClass[i].parentNode.parentNode.classList.add(`${houseClass[i].innerHTML}`)
        }
        fName.value = null;
        lName.value = null;
        fName.focus();
    }
    const expel = document.getElementsByClassName('expel-this');
    // adds remove button for each card
    for (i = 0; i < expel.length; i++){
        expel[i].addEventListener('click', (e) => {
            e.preventDefault(); //prevents page from auto scrolling
            e.target.parentNode.parentNode.remove();
    })
    }
})
