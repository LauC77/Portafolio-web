
var textArea= document.querySelector(".area-texto");
const mensaje= document.querySelector(".mensaje");


function ButtEncriptar(){
    const textEncriptado= encriptar(textArea.value);
    mensaje.value=textEncriptado;
    mensaje.style.backgroundImage="none";
}

function encriptar(stringEncrip){
    let matrizCod= [["a","enter"]["e","enter"]["i","imes"]["o","ober"]["u","ufat"]];
    stringEncrip=stringEncrip.toLoweCase()

for (let i=0; i<matrizCod.lenght;i++){
   if(stringEncrip.includes(matrizCod[i][0])){
   stringEncrip=stringEncrip.replaceAll(matrizCod([i][0],matrizCod[i][1]))

    }
   }

   return stringEncrip
}
function ButtDesencrip(){
    const textEncriptado= Desencriptar(textArea.value);
    mensaje.value=textEncriptado;
}

function desencriptar(stringDesencrip){
        let matrizCod= [["a","enter"]["e","enter"]["i","imes"]["o","ober"]["u","ufat"]];
        stringDesencrip=stringDesencrip.toLoweCase()
    
    for (let i=0; i<matrizCod.lenght;i++){
       if(stringEncrip.includes(matrizCod[i][1])){
       stringDesencrip=stringDesencrip.replaceAll(matrizCod[i][1], matrizCod([i][0]))
        } 
    }
    
    return stringDesencrip
       
}