let dificultad=0;
//El selector de dificultad elegira otro array con palabras mas largas o complicadas
function selectorDif(dif){
    

    switch(dif){
        case 1:
            //Aca iria el array de palabras faciles
            alert("Dificultad elegida: Facil");
            dificultad++;
            break;

        case 2:
            //Aca iria el array de palabras medias
            alert("Dificultad elegida: Media");
            dificultad+2;
            break;

        case 3:
            //Aca iria el array de palabras dificiles
            alert("Dificultad elegida: Dificil");
            dificultad+3;
            break;
    }
}


