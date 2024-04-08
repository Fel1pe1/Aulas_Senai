let par = 0
let impar = 0
for(i= 1; i <= 100; i++){
    if(i % 2 == 0){
        par += 1
    }
    else{
        impar +=1
    }
}
console.log( "pares=" +par + " " +"impares=" + impar )