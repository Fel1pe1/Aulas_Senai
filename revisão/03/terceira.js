let numero= document.getElementById('ee')
let resultado = document.getElementById('resultado')
function tabu(){
    let n= Number(numero.value)
    resultado.innerHTML = ''
    for(i= 1; i <= 10; i++){
        let resu =n * i
        resultado.innerHTML += i +"x"+  n + "="+ resu + "<br>"
    }
    
}