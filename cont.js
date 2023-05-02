let contador =0;

function mais(){
    contador ++;
    document.getElementById('cont').innerText= contador
}

function menos(){
    if(contador > 0){
        contador --;
        document.getElementById('cont').innerText= contador
    }
}

function zerar(){
    if(contador>0){
        contador=0
    document.getElementById('cont').innerText = contador
}
}