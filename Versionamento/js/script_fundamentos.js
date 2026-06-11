// comentário de uma linha
/* 
comentário de multiplas linhas
*/

//comando de saída
console.log ("Hello World!")

//declaracao de variaveis
let num = 10
var num2 = 20
const num3 = 30

console.log (num)
console.log (num2)
console.log (num3)

if (true){
    let num4 = 250
    console.log (num4)

    var num5 = 300
}

console.log (num5)

num = 1802

console.log(num)

num2 = 90

console.log (num2)

num3 = 902

console.log (num3)

console.log ('Valor da variável num3 é' + num3)
console.log ("Valor da variável num3 é" + num3)
console.log (`valor da variavel num3 é  ${num3}`)

console.log('A soma dos números é: ', 12 + 8)
console.log('A subtração entre variáveis: ', num3 - num3)
console.log('A multiplicação dos números: ', num3 / num2)
console.log(`O resto da divisão entre 10 e 2 é: ${10 % 2}`)

let idade = 50

if(idade >= 18){
    console.log("Maior de idade")
}else{
    console.log("Menor de idade")
}

idade >= 18 ? console. log("Maior de idade") : console.log("Menor de idade")

if(idade <18){
    console.log(`COM ${idade}, NÃO É PERMITIDO POUSSIR CNH ` )
}else if(idade < 50){
    console.log(`COM ${idade}, O TEMPO PARA RENOVAÇÃO É DE 10 ANOS ` )
}else if(idade < 70){
    console.log(`COM ${idade}, O TEMPO PARA RENOVAÇÃO É DE 5 ANOS ` )
}else{
    console.log(`COM ${idade}, O TEMPO PARA RENOVAÇÃO É 3 ANOS ` )
}

let valor = 1500

if (idade >= 18 && valor >= 1000){
    console.log("AUTORIZADO O ACESSO")
}else{
    console.log("ACESSO NEGADO")
}