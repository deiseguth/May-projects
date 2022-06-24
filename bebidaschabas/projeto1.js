const prompt = require("prompt-sync")();
// 0 respostas Sim: Você falha miseravelmente.
// 1 ou 2 respostas Sim: Você falha, mas ainda consegue fugir da situação.
// 3 respostas Sim: Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.
// 4 respostas Sim: Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.
// 5 respostas Sim: Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.
// O programa deve contar a história inicial (background), fazer as perguntas, e ao final, exibir
// o resultado de acordo com as situações acima.

console.log("Brooklyn\n1982\nQuando eu tinha 13 anos muita coisa que eu fazia virou coisa de criança,\ntipo o dia das bruxas.")
console.log("Eu nunca tinha ido a uma festa de verdade\ne eu só sabia que não queria sair por aí pedindo doces")
const proenter = prompt(`Pressione a tecla "enter" para continuar.`)
console.log()
console.log("\nResponda as perguntas agora somente com sim ou nao\n");

console.log("Seu irmão Drew foi convidaddo para uma festa por Kisha e Elisa.\nEle não vai e passou o convite para você") 
  
let question1 = prompt("Você vai à festa? ");  
if (question1 === "sim") {question1 = 1 
} else if (question1 === "nao"){question1 = 0 
 } else {console.log("\nResponda somente com sim ou nao")}  
  
let question2 = prompt("Você gosta da Kisha? ");  
if (question2 === "sim") {question2 =1 
}else if (question2 === "nao"){question2 = 0  
 } else {console.log("\nResponda somente com sim ou nao")}  
  
let question3 = prompt("Você levou uma chuva de ovos podres e perdeu o endereço da festa, vai mentir o endereço? ");  
if (question3 === "sim") {question3 = 1 
}else if (question3 === "nao"){question3 = 0  
 } else {console.log("\nResponda somente com sim ou nao")}  
  
let question4 = prompt("Sua mãe Rochelle ligou para Bebidas Chabás? ");  
if (question4 === "sim") {question4 =1 
}else if (question4 === "nao"){question4 = 0  
 } else {console.log("\nResponda somente com sim ou nao")}  
  
 let question5 = prompt("Você se divertiu na festa e está preparado para apanhar em casa? ");  
 if (question5 === "sim") {question5 =1 
 }else if (question5 === "nao"){question5 = 0  
  } else {console.log("\nResponda somente com sim ou nao")} 
 
if (question1 + question2 + question3 + question4 + question5 ===5) {  
    console.log("\nEverybody hates Chris")
    console.log("Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.");
   }  
else if (question1 + question2 + question3 + question4 + question5 === 4) {  
    console.log("\nEverybody hates Chris")
    console.log("Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.");  
   }  
else if (question1 + question2 + question3 + question4 + question5 === 3) {  
    console.log("\nEverybody hates Chris")
    console.log("Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.");  
   }  
else if (question1 + question2 + question3 + question4 + question5 >=1<=2) { 
  console.log("\nVocê falha, mas ainda consegue fugir da situação.") 
  }
else if (question1 + question2 + question3 + question4 + question5 === 0) {  
    console.log("\nVocê falha miseravelmente.");  
   }  