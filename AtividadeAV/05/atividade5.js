let array = [259,25925959,9858,474,5,63,1,69,963,258,3,99999999999,2,3,5]
let maiorNumero= 0


for(let i = 0; i < array.length; i ++){
    if(array[i] > maiorNumero){
        maiorNumero =array[i]
    }
}
console.log(maiorNumero)