const printToDom = (divId, stringToPrint) => {
    document.getElementById(divId).innerHTML += stringToPrint;
};

printToDom('sorted-pupils', "test 1");
printToDom('sorted-pupils', "test 2");
printToDom('sorted-pupils', "test b");