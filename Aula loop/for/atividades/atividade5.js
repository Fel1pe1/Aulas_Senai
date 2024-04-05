let num1, num2, teste, resu
num1 = Number(prompt("escolha um numero"))
num2 = Number(prompt("escolha um numero"))
teste = Number(prompt("1- adição" + "\n"+ "2- sub" + "\n"+ "3- mult" + "\n"+ "4- divi" + "\n"))
switch(teste){
    case 1:
        resu = num1+num2
        alert(resu)
    break;
    case 2:
        resu = num1-num2
        alert(resu)
    break;
    case 3:
        resu = num1*num2
        alert(resu)
    break;
    case 4:
        resu = num1/num2
        alert(resu)
    break;

}
