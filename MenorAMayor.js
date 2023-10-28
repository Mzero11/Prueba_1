OrdenarNumeros();

function OrdenarNumeros(){
    const arrayNum = [];
    for ( let i = 0 ; i < 5 ; i ++) {
        inNumero(arrayNum);
    }
 mostrar(arrayNum);
     
}

function inNumero(arrayNum){
    var num = prompt("Ingrese un numero"); 
    while ( isNaN(num) || num==""){ 
        num = prompt("No ha ingresado un numero"); 
    }
    arrayNum.push(Number(num));
}

function mostrar(arrayNum){
    for (var  j = 0; j < arrayNum.length -1 ; j++){
        for (var i = 0 ; i < arrayNum.length -1; i++ ){
            if ( arrayNum[i] > arrayNum[i+1] ){
                cambio = arrayNum[i+1];
                arrayNum[i+1] =  arrayNum[i];
                arrayNum[i] = cambio;
            }
        }
    }
    alert(arrayNum);
}

