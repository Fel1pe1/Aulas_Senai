let menu
let nomes = []
while(menu != 0 ){
    menu = prompt("========= MENU =========" + "\n" + "1 - Cadastrar Nome"+ "\n" + "2- Excluir um nome" + "\n" + "3 - Pesquisar se um nome está cadastrado" + "\n" + "4- Listar todos os nomes cadastrados em ordem alfabetica" + "\n" + "0 - Sair" )

    switch(menu){
        case '1':
            nomes.push(prompt("cadestre um nome: "))
        break

        case '2':
            nomes.pop(prompt("Excluca um numero: "))
        break

        case '3':
            nomes.includes(prompt("nome existe?"))
        break
        case '4': 
            alert(nomes.sort())
        break
    }
}