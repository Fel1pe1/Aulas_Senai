let preços = [10.9, 50.6, 110, 45, 120] 
let produtos= ["p1", "p2", "p3", "p4", "p5"] 
let abaixode50 = 0
let acimade100emenosde50 = ""
let soma = 0
let qtdmaior100 = 0
let media = 0

// for(let i = 0; i < 5; i++ ){
    //     produtos[i] = prompt("digite o produto")
    //     preços[i] = Number(prompt("digite o preço"))
    // }
    for(let i = 0; i< preços.length; i++){
        if(preços[i] < 50.0){
            abaixode50++
        }if (preços[i] > 50 && preços[i] < 100){
            acimade100emenosde50 += ' '+ produtos[i]
        }if(preços[i] >100){
            soma += preços[i]
            qtdmaior100++
        }
        media = soma / qtdmaior100
    }
    console.log(abaixode50)
    console.log(acimade100emenosde50)
    console.log(media)