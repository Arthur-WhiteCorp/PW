let form = document.maths;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Enviado Rapaize");
  let area;
  let circum;
  area = Math.PI * Number(form.Raio.value) ** 2;
  circum = 2 * Math.PI * Number(form.Raio.value);
  console.log(area);
  console.log(circum);
  form.Area.value = `${area.toFixed(2)}`;
  form.Circ.value = `${circum.toFixed(2)}`;
});
