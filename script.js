function convertToCelsius() {
  const fahrenheitInput = document.getElementById("fahrenheit");
  const celsiusInput = document.getElementById("celsius");
  const resultSpan = document.getElementById("result");

  if (fahrenheitInput.value !== "") {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = (fahrenheit - 32) * (5 / 9);
    celsiusInput.value = celsius.toFixed(2);
    resultSpan.textContent = `${celsius.toFixed(2)} °C`;
  } else {
    alert("Please enter a valid temperature in Fahrenheit.");
  }
}

function convertToFahrenheit() {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");
  const resultSpan = document.getElementById("result");

  if (celsiusInput.value !== "") {
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9) / 5 + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
    resultSpan.textContent = `${fahrenheit.toFixed(2)} °F`;
  } else {
    alert("Please enter a valid temperature in Celsius.");
  }
}
