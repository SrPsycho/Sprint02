var dificultad=1;
var palabraSecreta= '';
var fallo=0;
var acierto=0;
const salida= document.getElementById('oculto');
var palabrasFaciles=["OGRO","GATO","PERA","TORO","FOCA","PERRO","BOCA"];
var palabrasMedias=["JUEVES","JIRAFA","ZEBRA","BANANA","PRISA","ZORRO","CAMION"];
var palabrasDificiles=["CORAZON","ESCOPETA","CABALLO","HOSPITAL","PANDEMIA","HABLANDO"];
var letrasAbecedario=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const letrasErradas=[];


function iniciar(){
    document.getElementById("main").style.display = "block";
    document.getElementById("btnInicio").style.display = "none";
    
}

function mostrarPopUp(pop){
    switch(pop){
        case 1:
            document.getElementById("selectorDificultad").style.display = "block";
            break;
        case 2:
            document.getElementById("agregarPalabras").style.display = "block";
            break;
    }
}

function cerrarVentana(ventana){
    switch(ventana){
        case 1:
            document.getElementById("selectorDificultad").style.display = "none";
            break;
        case 2:
            document.getElementById("agregarPalabras").style.display = "none";
            break;
    }
}

function selectorDif(dif){
    switch(dif){
        case 1:
            //Aca iria el array de palabras faciles
            alert("Dificultad elegida: Facil");
            console.log(dificultad);
            console.log(palabrasFaciles);
            break;
        case 2:
            //Aca iria el array de palabras medias
            alert("Dificultad elegida: Media");
            dificultad++;
            console.log(dificultad);
            console.log(palabrasMedias);
            break;
        case 3:
            //Aca iria el array de palabras dificiles
            alert("Dificultad elegida: Dificil");
            dificultad+=2;
            console.log(dificultad);
            console.log(palabrasDificiles);
            break;
    }
}

function agregarPalabra(){
    const palabraSecreta = (document.getElementById("espacio_Palabra").value).toUpperCase();
    console.log(palabraSecreta);
    
    if (palabraSecreta.length>=3 && palabraSecreta.length<6){
        palabrasFaciles.push(palabraSecreta);
        console.log(palabrasFaciles);
    }else if (palabraSecreta.length>=6 && palabraSecreta.length<7){
        palabrasMedias.push(palabraSecreta);
        console.log(palabrasMedias);
    }else if (palabraSecreta.length>=7){
        palabrasDificiles.push(palabraSecreta);
        console.log(palabrasDificiles);
    }else{
        alert("La palabra es invalida");
    }
}

function mostrarPalabra(){
      
      if (dificultad==1){
        alert("Las palabras actuales son: " + palabrasFaciles); 
        console.log(palabrasFaciles);
    } else if (dificultad==2){
        alert("Las palabras actuales son: " + palabrasMedias);
        console.log(palabrasMedias);
    } else{
        alert("Las palabras actuales son: " + palabrasDificiles); 
        console.log(palabrasDificiles);
    } 
}

function eleccionPalabra(){
    if (dificultad==1){
        let palabraOculta=palabrasFaciles[Math.floor(Math.random() * palabrasFaciles.length)];
        palabraSecreta=palabraOculta;//.split('');
        console.log(palabraSecreta);
    } else if (dificultad==2){
        let palabraOculta=palabrasMedias[Math.floor(Math.random() * palabrasMedias.length)];
        palabraSecreta=palabraOculta;//.split('');
        console.log(palabraSecreta);
    } else{
        let palabraOculta=palabrasDificiles[Math.floor(Math.random() * palabrasDificiles.length)];
        palabraSecreta=palabraOculta;//.split('');
        console.log(palabraSecreta);
    }
    
    document.getElementById("horca1").style.display = "block";
    document.getElementById("popUp").style.display = "none";
    document.getElementById("nuevoJuego").style.display = "none";
    document.getElementById("zonaLetras").style.display = "block";
    document.getElementById("letra").focus();
    
    mostrarGuiones(palabraSecreta)
}

function ingresoLetra(){
    document.getElementById("letra").focus();
    var ingreso=(document.getElementById("letra").value).toUpperCase();
    console.log(ingreso);
    var esta = false;
    //This line belows its a small fix for the bug that show undefined when you start a new game
    if(ingreso==undefined){
        salida.innerHTML='';
        return ' ';
    }

    if(letrasAbecedario.includes(ingreso)){
        for(var i = 0; i < palabraSecreta.length; i++) {
            if(ingreso == palabraSecreta[i]) {
                letraCorrecta(ingreso, i + 1);
                acierto++;
                esta=true;
                reset();
            }
            if(acierto==palabraSecreta.length){
                cartelFinal(1);
            }
        }
        if(!esta){
            if(letrasErradas.includes(ingreso)){
                //This is a blank space xd
            }else{
                fallo++;
                cambiarHorca(fallo);
                letrasErradas.push(ingreso);
                document.getElementById("zonaLetrasIncorrectas").style.display="block"
                document.getElementById("incorrectos").disabled = true;
                document.getElementById("incorrectos").value = letrasErradas;
                reset();
            }
        }
    }else{
        return '';
    }
    
}

function reset(){
   var paraBorrar= document.getElementById("letra");
   paraBorrar.value='';
   return paraBorrar;
}

function letraCorrecta(letra, position) {
    var letras = document.querySelector(".letra-" + position);
    letras.textContent = letra;
}

function mostrarGuiones(palabra) {

    for(var i = 1; i <= palabra.length; i++) {
        document.querySelector(".linea-" + i).style.display = "";

        var letras = document.createElement("span");
        letras.classList.add("letra");
        letras.classList.add("letra-" + i);
        document.querySelector(".letras").appendChild(letras);
    }
}

function cambiarHorca(fallo){
    switch(fallo){
        case 1:
            document.getElementById("horca1").src="/images/horca/2.png";
            break;
        case 2:
            document.getElementById("horca1").src="/images/horca/3.png";
            break;
        case 3:
            document.getElementById("horca1").src="/images/horca/4.png";
            break;
        case 4:
            document.getElementById("horca1").src="/images/horca/5.png";
            break;
        case 5:
            document.getElementById("horca1").src="/images/horca/6.png";
            break;
        case 6:
            document.getElementById("horca1").src="/images/horca/7.png";
            cartelFinal(2);
            break;
    }
}

function cartelFinal(opc){
    switch(opc){
        case 1:
            document.getElementById("overlay").style.display = "block";
            document.getElementById("victoria").style.display="block";
            break;
        case 2:
            document.getElementById("overlay").style.display = "block";
            document.getElementById("derrota").style.display="block";
            break;
    }
}



