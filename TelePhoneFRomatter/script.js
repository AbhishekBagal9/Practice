function formatPhoneNumber() {
    let input = document.getElementById('inp').value;

    // Ensure the input length is exactly 4 before formatting
    if (input.length === 4) {
        input = `+(${input.slice(0, 3)}) - ${input.slice(3)}`;
        document.getElementById('inp').value = input; // Update the input field with the formatted value
    }

    console.log(input); // Log the formatted input
}

function clearInput(event) {
    let input = document.getElementById('inp').value;
    if(event.key === "Backspace"){
        if(input.length == 10){
            console.log(input.length)
            document.getElementById('inp').value = `${input.slice(2,6)}`; // Update the input field with the formatted value
        }
    }
}