const generator = document.getElementById('generator');
const numberPad = document.getElementById('number-pad');
const submitBtn = document.getElementById('submit-button');
const failureMessage = document.getElementById('failure');
const successMessage = document.getElementById('success');





// function 
function pinGenerator() {
    const randomPin = fourDigitPin();
    setInputValueById('generated-pin', randomPin);
}


function dialHandler(e) {
    const dialedNumber = e.target.innerText;
    const prevDialedNumber = getInputValueById('dialed-input');


    if (isNaN(dialedNumber)) {
        if (dialedNumber === "C") {
            setInputValueById('dialed-input', '');
        } else if (dialedNumber === "<") {
            const splitNumber = prevDialedNumber.split('');
            splitNumber.pop();
            const resNumber = splitNumber.join('');
            setInputValueById('dialed-input', resNumber);
        }
    } else {
        const newTypedNumber = prevDialedNumber + dialedNumber;
        setInputValueById('dialed-input', newTypedNumber);
    }
}

function pinSubmitHandler() {
    const generatedPin = getInputValueById('generated-pin');
    const dialedPin = getInputValueById('dialed-input');
    if(generatedPin === dialedPin){
        successMessage.style.display = 'block';
        failureMessage.style.display = 'none';
    }else{
        successMessage.style.display = 'none';
        failureMessage.style.display = 'block';
    }

}




// add event listener 
generator.addEventListener('click', pinGenerator);
numberPad.addEventListener('click', dialHandler);
submitBtn.addEventListener('click', pinSubmitHandler);

