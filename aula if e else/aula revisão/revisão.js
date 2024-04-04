let nome

function pular(){
    nome= document.getElementById("nome")
    
    if( nome.value == "admin" ){
       location.replace("http://127.0.0.1:5500/aulas%20em%20java/aula%20revis%C3%A3o/revisao2.html")
    }else{
       alert("Login errado")
    }
    nome.value= ''
    nome.focud()
}
