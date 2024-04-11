// 1) Uma sorveteria possui um sistema de self-service de sorvetes no qual o cliente pode
// montar seu sorvete com até 3 bolas (sabores).
// Criar um programa que simule esse sistema:
// 1- Adicionar sabor
// 2- Remover sabor
// 3- Visualizar sorvete
// 4- Finalizar pedido

// == MENSAGENS e VALIDAÇÕES ==
// 1 -&gt; Sabor adicionado! OU Limite de sabores atingido, remova um sabor!
// 2 -&gt; Sabor removido! OU Não existem sabores adicionados!
// 3 -&gt; Camada 1 - Sabor X, Camada 2 - Sabor Y, etc. OU Seu sorvete não possui
// sabores!
// 4 -&gt; Pedido realizado! OU Adicione pelo menos um sabor!


let sabores = []
let opcaoUsuario;
while(opcaoUsuario != 4){
    opcaoUsuario = Number(prompt("========= MENU =========" + "\n" + "1 - Escolha os sabores"+ "\n" + "2- Remover um sabor" + "\n" + "3 - Visualizar processo" + "\n" + "4- Finalizar"))

    switch(opcaoUsuario){
        case 1:
            let saborEscolhido = prompt("escolha um sabor entre:" + "\n" + "-morango" + "\n" + "-chocolate" + "\n" + "-menta" + "\n" + "-baunilha") 
            if( sabores.length < 3){
            sabores.push(saborEscolhido)
            alert("Sabor adicionado!")
            }else{
                alert("Limite de sabores atingido, remova um sabor!")
            }
            break;
            
            
        case 2:
            let saborExcluir = prompt("Escolha um sabor do qual deseja remover" + "\n" + "suas escolhas são:" + "\n" + "\n" + sabores)
            if(sabores.includes(saborExcluir)){
                let posicao = sabores.indexOf(saborExcluir)
                sabores.splice(posicao)
            }
            break;
        
        case 3:
            if(sabores.length == 0){
            alert("Seu sorvete não possui sabores!")}
            else{
                let contador= 1
                for(i= 0; i < sabores.length; i++){
                    alert(`camada ${contador} = ${sabores[i]}`)
                    contador++
                }
            }

            break;

        case 4:
            if(sabores.length ==  0){
                alert("Adicione ao menos um sabor")
                opcaoUsuario = 1
                break;
            }else{
                alert("Pedido realizado")
            }
            break;

        case 0:
            break;
        default:
            alert("O número digitado não é um valor do menu, digite novamente")
        break;
    }
}