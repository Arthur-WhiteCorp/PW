
console.log("Script Loaded");

let form = document.forms.namedItem('Circulo');
let button = form?.querySelector('input[name="Calcular"]');

let raioInput = form?.elements.namedItem('Raio') as HTMLInputElement;
let areaOutput = document.querySelector('input[name="Area"]') as HTMLInputElement;
let circunOutput = document.querySelector('input[name="Circun"]') as HTMLInputElement;

button?.addEventListener("click", () => {
	let raio = Number(raioInput?.value);
	let area = Math.PI * raio * raio;
	let circunferencia = 2 * Math.PI * raio;

	if (areaOutput) areaOutput.value = area.toFixed(2);
	if (circunOutput) circunOutput.value = circunferencia.toFixed(2);
})
