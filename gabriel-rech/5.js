//5. Explique em poquíssimas palavras o que é cada um dos itens abaixo:
//1- Planning: Planejamento de estudos durante uma sprint.
//2- Sprint: Período de 2 semanas onde temos uma avaliação no final dela.
//3- Retro: 
function pergunta(){
    console.log('Olá! Selecione uma opção abaixo, que deseja saber informações do que significa na metodologia ágil: ');
    console.log('1 - Planning');
    console.log('2 - Sprint');
    console.log('3 - Retro');
    console.log('X - Encerrar');
    var x = prompt;
    if(x==1)
    {
        console.log('1 = Planning: Planejamento de estudos durante uma sprint.');
    }
    if(x==2)
    {
        console.log('2 = Sprint: Período de 2 semanas onde temos uma avaliação no final dela.');
    }     
    if(x==3)
    {
        console.log('3 = Retro: São reuniões realizada periodicamente pela equipe para identificar aquilo que está funcionando, o que está faltando e aquilo que precisa melhorar no trabalho.');
    }
    if(x==X)
    {
        break;
    }
}
