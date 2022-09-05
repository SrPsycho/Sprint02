let dificultad=0;
var palabraOculta= '';
let palabrasFaciles=["OGRO","GATO","PERA","TORO","FOCA","PERRO","BOCA"];
let palabrasMedias=["JUEVES","JIRAFA","ZEBRA","BANANA","PRISA","ZORRO","CAMION"];
let palabrasDificiles=["CORAZON","ESCOPETA","CABALLO","HOSPITAL","PANDEMIA","HABLANDO"];

function selectorDif(dif){
    switch(dif){
        case 1:
            //Aca iria el array de palabras faciles
            alert("Dificultad elegida: Facil");
            dificultad++;
            console.log(dificultad)
            break;
        case 2:
            //Aca iria el array de palabras medias
            alert("Dificultad elegida: Media");
            dificultad+=2;
            console.log(dificultad)
            break;
        case 3:
            //Aca iria el array de palabras dificiles
            alert("Dificultad elegida: Dificil");
            dificultad+=3;
            console.log(dificultad)
            break;
    }
}
function eleccionPalabra(){
    if (dificultad==1){
        let palabraOculta=palabrasFaciles[Math.floor(Math.random() * palabrasFaciles.length)]
    } else if (dificultad==2){
        let palabraOculta=palabrasMedias[Math.floor(Math.random() * palabrasMedias.length)]
    } else{
        let palabraOculta=palabrasDificiles[Math.floor(Math.random() * palabrasDificiles.length)]
    }
}



  




//Add words works with a push function, it will be good for the enviroment xd
//If the word that you going to add have 4 or 5 letters it going to push into "palabras faciles", 5or 6 "Palabras medias", and 7 to 8 "Palabras dificiles"


function agregarPalabra(palabra){

    if (palabra.length<=8){
        palabrasDificiles.push(palabra)
    }else if (palabra.length<7){
        palabrasMedias.push(palabra)
    }else{
        palabrasFaciles.push(palabra)
    }
}