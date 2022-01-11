const show = str => console.log(str)

show(`Olá! Selecione uma opção abaixo, que deseja saber informações do que significa na metodologia ágil:
	1 - Planning
	2 - Sprint
	3 - Retro
	X - Encerrar`)

function pergunta(num) {
    switch (num) {
        case 1:
            show("Planning: reunião onde acontece o planejamento de uma Sprint.")
            break;
        case 2:
            show("Sprint: um ciclo de desenvolvimento.")
            break;
        case 3:
            show("Retro: evento que fecha a Sprint.")
            break;
        case "X":
            break;
        default:
            break;
    }
}
pergunta(1)
pergunta(2)
pergunta(3)
pergunta("X")