//scripts

document.getElementById('convert-btn').addEventListener('click', function() {
    const degreeInput = document.getElementById('degree').value;
    const tempType = document.getElementById('temp-value').value;
    const celsiusElement = document.getElementById('celsius');
    
    // Check if inputs are valid
    if (degreeInput === '' || tempType === '') {
        alert('Please enter a temperature and select a conversion type.');
        return;
    }

    // Convert input to a number
    const degree = parseFloat(degreeInput);

    // Variable to hold the converted Celsius value
    let celsiusValue;

    // Fahrenheit to Celsius conversion
    if (tempType === 'fahrenheit') {
        celsiusValue = (degree - 32) * (5 / 9);
    }
    // Kelvin to Celsius conversion
    else if (tempType === 'kelvin') {
        celsiusValue = degree - 273.15;
    }

    // Display the converted value in the result
    celsiusElement.innerHTML = celsiusValue.toFixed(2);
});
