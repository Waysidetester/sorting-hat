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
const houseSelector = () => {
    return separateButEqual[numGenerator()];
};
const numGenerator = () => {
    return Math.round(Math.random()*(separateButEqual.length-1));
};

submitName.addEventListener("click", (e) => {
    e.preventDefault();

    fValue = fName.value;
    lValue = lName.value;
    let newString = ``;
    newString += `  <div class="card w-50">
            <div class="card-body">
                <h5 class="card-title">${fValue} ${lValue}</h5>
                <p class="card-text">${houseSelector()}</p>
                <a href="#" class="btn btn-primary">Expel</a>
            </div>
        </div>`;
    if (fValue && lValue !== ''){
        printToDom('sorted-pupils',newString);
        fValue.value = null;
        lValue.value = null;
    }
})
