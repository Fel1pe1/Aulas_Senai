// let matriz = [
//     [],
//     [],
//     []


// ];

// matriz [0][0] = "mario"
// matriz [0][1] = "fabio"
// matriz [1][0] = "henrique"
// matriz [1][1] = "felipe"

// // forma 1
// for(let i = 0; i < matriz.length; i++ ){
//     for(let j = 0; j < matriz[i].length; j++){
//     console.log(matriz[i][j])
//     }
// }

// // forma IN
// for(let i in matriz){
//     console.log(matriz[i].toString())
// }

// // forma OF
// for(let i of matriz){
//     console.log(i.toString())
// }
// -------------------------------------------------------------------------------------------------------------------------------------- 
// -------------------------------------------------------------------------------------------------------------------------------------- 
// -------------------------------------------------------------------------------------------------------------------------------------- 

let alunos = new Array(3)
for(i = 0; i < alunos.length;i++){
    alunos[i] = new Array(2)
}

for(let i = 0; i < alunos.length; i++ ){
    for(let j = 0; j < alunos[i].length; j++){
    alunos[i][j] = prompt ("escreva o nome dos aluno:")
    }
}
alert(alunos)