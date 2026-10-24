// Uma loja deseja criar um programa para calcular o desconto 
// de seus clientes de acordo com o valor total da compra.

// O programa deve receber o valor da compra e aplicar as seguintes regras:
// Se a compra for maior ou igual a 200, calcular um desconto de 20%
// Se a compra for maior ou igual a 100, calcular um desconto de 10%
// Se a compra for menor que 100, não haverá desconto

let valor = 250
let desconto

if (valor >= 200) {
    desconto = 20
    desconto = desconto / 100 
    valor = valor * desconto
    console.log("você teve um desconto de: R$" + valor);
    
} else if(valor >= 100){
    desconto = 10
    desconto = desconto / 100 
    valor = valor * desconto
    console.log("você teve um desconto de: R$" + valor);
    
} else {
    console.log("sem desconto");
    
}