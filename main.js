const printToDom = (divId, stringToPrint) => {
    document.getElementById(divId).innerHTML += stringToPrint;
};

printToDom('sorted-pupils', "test 1");
printToDom('sorted-pupils', "test 2");
printToDom('sorted-pupils', "test b");

const submitName = document.getElementById('sub-Name');


if (submitName.addEventListener){
    submitName.addEventListener("click", (e) => {
        e.preventDefault();
        console.log('something');
    })
}