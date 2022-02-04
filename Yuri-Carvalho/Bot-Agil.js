/*
Q: Explique em poquíssimas palavras o que é cada um dos itens abaixo:
1- Planning:
2- Sprint:
3- Retro:

R: Baseando-se em Scrum:
1- Planning: Uma reunião feita antes de cada "sprint" para se fazer o planejamento do que será feito neste ciclo.
2- Sprint: Um ciclo de tempo onde atividades específicas deverão ser concluídas.
3- Retro: Retrospectiva. Reunião feita ao final de cada sprint, para discutir or que deu certo ou não e como não enfrentar os mesmos obstáculos na próxima sprint.
*/

console.log(`Olá! Selecione uma opção abaixo, que deseja saber informações do que significa na metodologia ágil:`)
console.log(``)    
console.log(`1 - Planning`)
console.log(`2 - Sprint`)
console.log(`3 - Retro`)
console.log(`X - Encerrar`)
console.log(``)

function pergunta(num) {
    if(num == 1) {
        console.log(`1 - Planning é uma reunião feita antes de cada "sprint" para se fazer o planejamento do que será feito neste ciclo.`)
    }
    if(num == 2) {
        console.log(`2 - Sprint é um ciclo de tempo onde atividades específicas deverão ser concluídas.`)
    }
    if(num == 3) {
        console.log(`3 - Retrospectiva. Reunião feita ao final de cada sprint, para discutir or que deu certo ou não e como não enfrentar os mesmos obstáculos na próxima sprint.`)
    }
    if(num == `X`) {
        console.log(`Tenha um ótimo dia!`)
        return            
    }
}

pergunta(1)
