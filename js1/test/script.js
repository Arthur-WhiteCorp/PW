const tabela = {
  number: 1,
  get titulo() {
    return `Produtos de ${this.number}`;
  },
  get header() {
    return `<h1> ${this.titulo} </h1>`;
  },
  get results() {
    const results = [];
    for (let i = 1; i <= 10; i++) {
      results.push({
        resultado: this.number * i,
        expressao: `${this.number} x ${i}`,
      });
    }
    return results;
  },
};

for (let i = 1; i <= 10; i++) {
  tabela.number = i;
  let results = tabela.results;
  document.write("<div class='tabuada'>");
  document.write(tabela.header);
  document.write("<div class='corpo'>");

  for (let j = 1; j <= 10; j++) {
    document.write("<div class='linha'>");
    document.write(`<p class='expression'> ${results[j - 1].expressao} </p>`);
    document.write(`<p class='result'> ${results[j - 1].resultado} </p>`);
    document.write("</div>");
  }

  document.write("</div>");
  document.write("</div>");
}
