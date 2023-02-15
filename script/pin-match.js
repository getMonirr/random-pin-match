const generator = document.getElementById('generator');
const numberPad = document.getElementById('number-pad');
const submitBtn = document.getElementById('submit-button');
const failureMessage = document.getElementById('failure');
const successMessage = document.getElementById('success');

const generatorInput = document.getElementById('generated-pin');
const dialInput = document.getElementById('dialed-input');





// function 
function pinGenerator() {
    const randomPin = fourDigitPin();
    setInputValueById('generated-pin', randomPin);

    generatorInput.disabled = true;
    dialInput.focus();
}


function dialHandler(e) {
    const dialedNumber = e.target.innerText;
    const prevDialedNumber = getInputValueById('dialed-input');

    if (isNaN(dialedNumber) || prevDialedNumber.length >= 4) {
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

    dialInput.disabled = true;

}

function pinSubmitHandler() {
    const generatedPin = getInputValueById('generated-pin');
    const dialedPin = getInputValueById('dialed-input');
    let actionCount = getInnerTextById('action-count');
    console.log(actionCount);
    if (actionCount === 1){
        submitBtn.disabled = true;
        generator.disabled = true;
        numberPad.setAttributes = 'disabled'
    }

    if(generatedPin === '' || dialedPin === ''){
        alert(`Please generate a pin then submit`);
        return;
    }


    if (generatedPin === dialedPin) {
        successMessage.style.display = 'block';
        failureMessage.style.display = 'none';
    } else {
        successMessage.style.display = 'none';
        failureMessage.style.display = 'block';
        actionCount = actionCount - 1;
        setInnerTextById('action-count',parseInt(actionCount));
    }

}




// add event listener 
generator.addEventListener('click', pinGenerator);
numberPad.addEventListener('click', dialHandler);
submitBtn.addEventListener('click', pinSubmitHandler);

