const jogadas = ["Pedra", "Papel", "Tesoura"];
let partida = true;
let point = 0;

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

async function game() {
  await new Promise((r) => setTimeout(r, 1000));
  while (partida) {
    console.log("Escolha sua jogada:");
    console.log(" 1 - Pedra");
    console.log(" 2 - Papel");
    console.log(" 3 - Tesoura");
    await new Promise((r) => setTimeout(r, 1000));
    let player = parseInt(prompt("Insira a jogada aqui"));
    let computer = getRandomInt(1, 4);
    console.log(`Computador jogou ${jogadas[computer - 1]}`);

    if (player === computer) {
      console.log("Empate");
      continue;
    }
    if (player === 1 && computer === 3) {
      console.log("Você ganhou");
      point++;
      continue;
    }
    if (player === 2 && computer === 1) {
      console.log("Você ganhou");
      point++;
      continue;
    }
    if (player === 3 && computer === 2) {
      console.log("Você ganhou");
      point++;
      continue;
    }

    console.log(`Você perdeu! A sua pontuação foi de ${point}`);
    partida = false;
  }
}

game();
