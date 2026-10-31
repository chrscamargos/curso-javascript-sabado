// switch

let dia = 7
let cor = "verde"

switch(dia){
    case 1:
        console.log("domingo");
        break
    case 2:
        console.log("segunda");
        break
    case 3:
        console.log("terça");
        break
    case 4:
        console.log("quarta");
        break
    case 5: 
        console.log("quinta");
        break
    case 6:
        console.log("sexta");
    case 7:
        console.log("sabado");
        break
    default:
        console.log("opção inválida=");
}

switch(cor){
    case "vermelha":
        console.log("pare!");
        break
    case "verde":
        console.log("avançe");
        break
    case "amarelo":
        console.log("atenção");
        break
    default:
        console.log("isso não é uma cor de semáforo");
        
}