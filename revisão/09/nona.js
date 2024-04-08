for(i =0; i<= 100; i++){
    if( i % 3 == 0 && i % 5 !== 0 ){
        console.log("buzz")
    }
    else if(i % 3 !== 0 && i %5 == 0){
        console.log("Fizz")
    }else if(i % 3 == 0 && i %5 == 0){
        console.log("buzzFizz")
    }else{
        console.log(i)
    }

}