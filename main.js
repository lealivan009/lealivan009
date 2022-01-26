/*
windows.onload = () => {}   metiendo todo el codigo adentro de las llaves me aseguro que no va a fallar en la ejecucion el script por no encontrar cargada la pagina
*/


var buttonE=document.getElementById("encriptar");
var buttonD=document.getElementById("desencriptar");
var buttonC=document.getElementById("copiar");
buttonE.onclick = function (){
    let texto= document.getElementById("texEncriptar").value;
    let textoencriptado='';
    
    for(let i=0;i<texto.length; i++){
        if(texto[i]=='a'){
            textoencriptado=textoencriptado+'ai';
        }
        else if(texto[i]=='e'){
            textoencriptado=textoencriptado+'enter';
        }
        else if(texto[i]=='i'){
            textoencriptado=textoencriptado+'imes';
        }
        else if(texto[i]=='o'){
            textoencriptado=textoencriptado+'ober';
        }
        else if(texto[i]=='u'){
            textoencriptado=textoencriptado+'ufat';
        }
        else{
            textoencriptado=textoencriptado+texto[i];
        }
    }
    document.getElementById("texEncriptado").value=textoencriptado;
    
}

buttonD.onclick = function (){
    let texto= document.getElementById("texEncriptar").value;
    let textoencriptado='';

    for(let i=0;i<texto.length; i++){
        if(texto[i]=='a' && texto[i+1]=='i'){
            textoencriptado=textoencriptado + 'a';
            i++;
        }
        else if(texto[i]=='e' && texto[i+1]=='n' &&texto[i+2]=='t' && texto[i+3]=='e' && texto[i+4]=='r' ){
            textoencriptado=textoencriptado + 'e';
            i+=4;
        }
        else if(texto[i]=='i' && texto[i+1]=='m' &&texto[i+2]=='e' && texto[i+3]=='s'  ){
            textoencriptado=textoencriptado + 'i';
            i+=3;
        }
        else if(texto[i]=='o' && texto[i+1]=='b' &&texto[i+2]=='e' && texto[i+3]=='r'  ){
            textoencriptado=textoencriptado + 'o';
            i+=3;
        }
        else if(texto[i]=='u' && texto[i+1]=='f' &&texto[i+2]=='a' && texto[i+3]=='t'  ){
            textoencriptado=textoencriptado + 'u';
            i+=3;
        }
        else{
            textoencriptado=textoencriptado+texto[i];
        }

    }
    document.getElementById("texEncriptado").value=textoencriptado;
}

buttonC.onclick = function (){
    let textoCopiado =document.querySelector('#texEncriptado');
    textoCopiado.select();
    document.execCommand("copy");
    alert ('texto copiado exitosamente');
}