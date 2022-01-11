function pergunta(valor_calcular){
    console.log('Olá! Selecione uma opção abaixo, que deseja saber informações do que significa na metodologia ágil:');

    if(valor_calcular == 1){
        return "Planning";
    }else if(valor_calcular == 2){
        return "Sprint";
    }else if(valor_calcular == 3){
        return "Retro";
    }else if(valor_calcular == 'X'){
        return "Encerrar";
    }

}
const valor = 1
let resultado = pergunta(valor);
console.log(resultado);
