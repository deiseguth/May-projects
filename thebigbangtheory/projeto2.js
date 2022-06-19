const prompt = require("prompt-sync")();
console.log(`As regras de Pedra-papel-tesoura-lagarto-Spock são:`);
console.log(`
Tesoura corta papel
Papel cobre pedra
Pedra esmaga lagarto
Lagarto envenena Spock
Spock esmaga (ou derrete) tesoura`);
const enter2 = prompt(`\nPressione a tecla "enter" para continuar.\n`);
console.log(`Tesoura decapita lagarto
Lagarto come papel
Papel refuta Spock
Spock vaporiza pedra
Pedra amassa tesoura`);
const enter = prompt(`\nPressione a tecla "enter" para continuar.\n`);
while (true) {
    let pontoscomputer = 0;
    let pontosusuario = 0
  const usuario = prompt(`Quem és tu? `);
  const numeroderodadas = +prompt(`Quantas rodadas desejas jogar ${usuario}? `);

  for (let i = 0; i != numeroderodadas; i++) {
    console.log(`  
      1 - Tesoura
      2 - Papel
      3 - Pedra
      4 - Lagarto
      5 - Spock`);

    let lista = [`tesoura`, `papel`, `pedra`, `lagarto`, `spock`];
    let opcaousuario = +prompt(`Escolha uma opção: `);
    let usuarioescolheu 
    if        (opcaousuario == 1) {(usuarioescolheu = 1), (opcaousuario = lista[0]);
    } else if (opcaousuario == 2) {(usuarioescolheu = 2), (opcaousuario = lista[1]);
    } else if (opcaousuario == 3) {(usuarioescolheu = 3), (opcaousuario = lista[2]);
    } else if (opcaousuario == 4) {(usuarioescolheu = 4), (opcaousuario = lista[3]);
    } else if (opcaousuario == 5) {(usuarioescolheu = 5), (opcaousuario = lista[4]);
    }
    while (i != numeroderodadas) {
      let computerescolheu
      let opcaocomputer = Math.floor(Math.random() * 5 + 1);
      if        (opcaocomputer == 1) {(computerescolheu = 1), (opcaocomputer = lista[0]);
      } else if (opcaocomputer == 2) {(computerescolheu = 2), (opcaocomputer = lista[1]);
      } else if (opcaocomputer == 3) {(computerescolheu = 3), (opcaocomputer = lista[2]);
      } else if (opcaocomputer == 4) {(computerescolheu = 4), (opcaocomputer = lista[3]);
      } else if (opcaocomputer == 5) {(computerescolheu = 5), (opcaocomputer = lista[4]);
      }
      console.log(`\n${usuario}: ${opcaousuario} vs ${opcaocomputer} :Computer`);
    
      if (usuarioescolheu == 1 && computerescolheu == 2) {pontosusuario++;
      } else if (usuarioescolheu == 2 && computerescolheu == 1) {pontoscomputer++;
      }if (usuarioescolheu == 2 && computerescolheu == 3) { pontosusuario++;
      }if (usuarioescolheu == 2 && computerescolheu == 4) { pontoscomputer++;
      }else if (usuarioescolheu == 3 && computerescolheu == 2) {pontoscomputer++;
      } if (usuarioescolheu == 3 && computerescolheu == 4) {pontosusuario++;
      } else if (usuarioescolheu == 4 && computerescolheu == 3) {pontoscomputer++;
      }if (usuarioescolheu == 4 && computerescolheu == 5) {pontosusuario++;
      } else if (usuarioescolheu == 5 && computerescolheu == 4) {pontoscomputer++;
      }if (usuarioescolheu == 5 && computerescolheu == 1) {pontosusuario++;
      } else if (usuarioescolheu == 1 && computerescolheu == 5) {pontoscomputer++;
      }if (usuarioescolheu == 1 && computerescolheu == 4) {pontosusuario++;
      }else if (usuarioescolheu == 4 && computerescolheu == 1) {pontoscomputer++;
      }if (usuarioescolheu == 2 && computerescolheu == 5) {pontosusuario++;
      } else if (usuarioescolheu == 5 && computerescolheu == 2) {pontoscomputer++;
      }if (usuarioescolheu == 5 && computerescolheu == 3) {pontosusuario++;
      } else if (usuarioescolheu == 3 && computerescolheu == 5) {pontoscomputer++;
      }if (usuarioescolheu == 3 && computerescolheu == 1) {pontosusuario++;
      } else if (usuarioescolheu == 1 && computerescolheu == 3) {pontoscomputer++;
      }else {0}
      console.log(`Total do ${usuario} = ${pontosusuario}`);
      console.log(`Total do Computer = ${pontoscomputer}`);
      break;
    }
  }
  if (pontosusuario > pontoscomputer) {console.log(` 
  Esperto? Eu teria que perder 60 pontos de QI para ser considerado esperto.
  ${usuario} obteve ${pontosusuario} e VENCEU!\n`);
  } else if (pontosusuario < pontoscomputer) {console.log(`
  Mais errado? Errado é um sujeito absoluto e não sujeito a níveis. ${usuario} PERDEU!
  Computer obteve ${pontoscomputer}\n`);
  } else {console.log(`
  Não há chá de camomila no mundo que diminua o ódio no meu coração. EMPATE!\n`);
  }
  let sheldoncooper = prompt(`A necessidade de encontrar outro ser humano para compartilhar a vida sempre me intrigou. Deseja jogar novamente com o computer? `)
  if (sheldoncooper == `sim` || sheldoncooper == `Sim`) {
    continue;
  } else { 
    break;
  }
}
