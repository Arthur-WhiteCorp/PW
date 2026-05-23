console.log("Script Loaded");
let form = document.forms.namedItem('Circulo');
let button = form?.querySelector('input[name="Calcular"]');
let raioInput = form?.elements.namedItem('Raio');
let areaOutput = document.querySelector('input[name="Area"]');
let circunOutput = document.querySelector('input[name="Circun"]');
button?.addEventListener("click", () => {
    let raio = Number(raioInput?.value);
    let area = Math.PI * raio * raio;
    let circunferencia = 2 * Math.PI * raio;
    if (areaOutput)
        areaOutput.value = area.toFixed(2);
    if (circunOutput)
        circunOutput.value = circunferencia.toFixed(2);
});
export {};
//# sourceMappingURL=ts1.js.map