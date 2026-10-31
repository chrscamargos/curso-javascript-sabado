// função simples

// function nomeDaFuncao(){
//     console.log("dia");
//     console.log("tarde");
//     console.log("noite");
//     console.log("--------");

// }

//-------------------------------------

// function bemVindo() {
//     console.log("bem-vindo!!!");
// }

// bemVindo()

//-------------------------------------

// function Ola(){
//     console.log("ola ola ola");

// }

//-------------------------------------

// function mostrarCurso(){
//     console.log("curso: Desenvolvimento Web com JavaScript");

// }

// mostrarCurso()

//-------------------------------------

// function fazerSuco(sabor){
//     console.log(`fazendo suco de ${sabor}`);

// }

// fazerSuco("uva")

//-------------------------------------

// function saudarPessoa(nome){
//     console.log(`Olá, ${nome}! Seja bem-vindo!`);

// }

// saudarPessoa("daniel")

//-------------------------------------

// function dobro(numero){
//     console.log(`o dobro de ${numero} é ${numero * 2}`);

// }

// dobro(5744342)

//-------------------------------------

// function quadrado(n){
//     return n * n
// }

// let result = quadrado(64)
// console.log(result);

//-------------------------------------

// function triplo(numero){
//     return numero * 3
// }

// let resTriplo = triplo(33)
// console.log(resTriplo);

//-------------------------------------

// function nomeCompleto(nome, sobrenome){
//     return `${nome} ${sobrenome}`
// }

// let nome = nomeCompleto("christian", "rodrigues")
// console.log(nome);

// //-------------------------------------

// function celsiusParaFahrenheit(celsius) {
//     return celsius * 1.8 + 32
// }

// let resultado = celsiusParaFahrenheit(200)
// console.log(`${resultado} graus Fahrenheit`);

//-------------- Arrow function ----------------------

// const saudacao = () => {
//     console.log("ola");
    
// }

// saudacao()


// const dobrar = (n) => n * 2

const multiplicar = (n1, n2) => {
    return n1 * n2
}
let resultado = multiplicar(7, 3)
console.log(resultado);
