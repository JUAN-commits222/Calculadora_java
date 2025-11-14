function convertirAFahrenheit() {
  const c = Number(document.getElementById("celsius").value);
  const f = (c * 9 / 5) + 32;
  document.getElementById("fResultado").innerText = `${f} °F`;
}

function convertirACelsius() {
  const f = Number(document.getElementById("fahrenheit").value);
  const c = (f - 32) * 5 / 9;
  document.getElementById("cResultado").innerText = `${c.toFixed(2)} °C`;
}

function convertirAMetros() {
  const cm = Number(document.getElementById("cm").value);
  document.getElementById("mResultado").innerText = `${cm / 100} m`;
}

function convertirACm() {
  const m = Number(document.getElementById("m").value);
  document.getElementById("cmResultado").innerText = `${m * 100} cm`;
}
