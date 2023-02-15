// random 4 digit pin
function fourDigitPin() {
    return Math.floor(Math.random() * 9000 + 1000);
}


// set input value by id
function setInputValueById(id, value) {
    const targetInput = document.getElementById(id);
    targetInput.value = value;
}
// set inner text
function setInnerTextById(id,value) {
    const targetElement = document.getElementById(id);
    targetElement.innerText = value;
}


// get input value by id
function getInputValueById(id) {
    const targetInput = document.getElementById(id);
    return targetInput.value;
}

// get innerText value

function getInnerTextById(id) {
    return parseInt(document.getElementById(id).innerText);
}