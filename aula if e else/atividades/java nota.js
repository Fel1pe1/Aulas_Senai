let n1,n2,n3, media
n1= Number(prompt("Digite a primeira nota"))
n2= Number(prompt("Digite a segunda nota"))
n3= Number(prompt("Digite a Terceira nota"))
media = (n1 + n2 + n3)/3
if(media >= 7){
    alert(`${media.toFixed(1)} - tu é o cara`)
}else if(media < 7 && media > 3){
    alert(`${media.toFixed(1)} - ta paia`)
}
else{
     alert(`${media.toFixed(1)} - BURRO`)
}
