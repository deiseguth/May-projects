//console.log("just kidding")
const prompt = require("prompt-sync")();

// O programa deve fazer 5 perguntas ao usuário com respostas de sim ou não.
// Caso o usuário responda sim, a 4 perguntas ou mais, devemos retornar que ele é culpado.
// Caso o usuário responda sim, a 3 perguntas, devemos retornar que ele é suspeito.
// Caso o usuário responda sim, a 2 perguntas ou menos, devemos retornar que ele é inocente.
// Critérios de aceitação:
// Precisa retornar resposta para todas as possibilidades de culpado, suspeito ou inocente.
// Precisa ter condicionais

console.log(`Answer with "yes" or "no"\n`); 
  
let question1 = prompt("Are you ok? ");  
if (question1 === "yes") {question1 = 1 
} else if (question1 === "no"){question1 = 0 
 } else {console.log("\nAnswer only with yes or no")}  
  
let question2 = prompt("Are you being able to bounce back from hard times? ");  
if (question2 === "yes") {question2 =1 
}else if (question2 === "no"){question2 = 0  
 } else {console.log("\n Answer only with yes or no")}  
  
let question3 = prompt("Does your family and friends support you? ");  
if (question3 === "yes") {question3 = 1 
}else if (question3 === "no"){question3 = 0  
 } else {console.log("\n Answer only with yes or no")}  
  
let question4 = prompt("Are you taking care of your health? ");  
if (question4 === "yes") {question4 =1 
}else if (question4 === "no"){question4 = 0  
 } else {console.log("\n Answer only with yes or no")}  
  
 let question5 = prompt("Are you taking care of your mental health? ");  
 if (question5 === "yes") {question5 =1 
 }else if (question5 === "no"){question5 = 0  
  } else {console.log("\n Answer only with yes or no")} 
 
 
if (question1 + question2 + question3 + question4 + question5 >= 4) {  
  console.log("\nWow. You're to BLAME for being awesome!");  
 }  
else if (question1 + question2 + question3 + question4 + question5 === 3) {  
  console.log("\nYou are SUSPECTED of becoming a success\nKeep going!");  
 }  
else if (question1 + question2 + question3 + question4 + question5 <= 2) { 
console.log("\nYou are INNOCENT for having gone through hard times\nLife will get better don't give up trying!") 
}