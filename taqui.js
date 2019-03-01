function cargardatosdelapelicula()
    
    {
        
        var pelicula = JSON.parse(localStorage.getItem('peliculaseleccionada'))
        
        document.getElementById("titulodelapelicula").innerHTML += pelicula[0].NOMBRE + "<hr><p>Tanda: "+pelicula[0].FECHA+ " Inicia: "+pelicula[0].HORAINICIA +": "+pelicula[0].MINUTOINICIA+"<p/>";
        
        
        
        
    }
    function cargadatosdelabutaca(iddelabutaca)
{
    //el id de la butaca se los pasa como parametro desde el modal al que presiono guardar
    var peliculaencache = JSON.parse(localStorage.getItem('peliculaseleccionada'))
       switch(iddelabutaca)
           {
               case "A1":
                   peliculaencache[0].ASIENTOS.A1.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.A1.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.A1.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;
               case "A2":
                    peliculaencache[0].ASIENTOS.A2.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.A2.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.A2.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;
                    case "A3":
                    peliculaencache[0].ASIENTOS.A3.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.A3.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.A3.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;
                    case "A4":
                    peliculaencache[0].ASIENTOS.A4.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.A4.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.A4.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;
                    case "A5":
                    peliculaencache[0].ASIENTOS.A5.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.A5.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.A5.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;
                  case "A6":
                    peliculaencache[0].ASIENTOS.A6.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.A6.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.A6.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;
                  case "B1":
                    peliculaencache[0].ASIENTOS.B1.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.B1.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.B1.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;
                  case "B2":
                    peliculaencache[0].ASIENTOS.B2.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.B2.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.B2.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;
                  case "B3":
                    peliculaencache[0].ASIENTOS.B3.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.B3.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.B3.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break; 
                   case "B4":
                    peliculaencache[0].ASIENTOS.B4.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.B4.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.B4.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;    
                   case "B5":
                    peliculaencache[0].ASIENTOS.B5.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.B5.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.B5.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;
                   case "B6":
                    peliculaencache[0].ASIENTOS.B6.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.B6.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.B6.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;  
                   case "C1":
                    peliculaencache[0].ASIENTOS.C1.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.C1.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.C1.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;
                  case "C2":
                    peliculaencache[0].ASIENTOS.C2.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.C2.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.C2.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;
                  case "C3":
                    peliculaencache[0].ASIENTOS.C3.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.C3.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.C3.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break; 
                   case "C4":
                    peliculaencache[0].ASIENTOS.C4.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.C4.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.C4.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;    
                   case "C5":
                    peliculaencache[0].ASIENTOS.C5.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.C5.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.C5.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;
                   case "C6":
                    peliculaencache[0].ASIENTOS.C6.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.C6.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.C6.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;
                   case "D1":
                    peliculaencache[0].ASIENTOS.D1.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.D1.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.D1.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;
                  case "D2":
                    peliculaencache[0].ASIENTOS.D2.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.D2.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.D2.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;
                  case "D3":
                    peliculaencache[0].ASIENTOS.D3.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.D3.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.D3.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break; 
                   case "D4":
                    peliculaencache[0].ASIENTOS.D4.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.D4.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.D4.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;    
                   case "D5":
                    peliculaencache[0].ASIENTOS.D5.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.D5.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.D5.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;
                  case "E1":
                    peliculaencache[0].ASIENTOS.E1.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.E1.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.E1.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;
                  case "E2":
                    peliculaencache[0].ASIENTOS.E2.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.E2.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.E2.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;
                  case "E3":
                    peliculaencache[0].ASIENTOS.E3.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.E3.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.E3.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break; 
                   case "E4":
                    peliculaencache[0].ASIENTOS.E4.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.E4.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.E4.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;
                   case "F1":
                    peliculaencache[0].ASIENTOS.F1.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.F1.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.F1.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;
                  case "F2":
                    peliculaencache[0].ASIENTOS.F2.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.F2.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.F2.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;
                  case "F3":
                    peliculaencache[0].ASIENTOS.F3.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.F3.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.F3.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break; 
                   case "F4":
                    peliculaencache[0].ASIENTOS.F4.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.F4.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.F4.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break; 
                   case "G1":
                    peliculaencache[0].ASIENTOS.G1.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.G1.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.G1.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;
                  case "G2":
                    peliculaencache[0].ASIENTOS.G2.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.G2.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.G2.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;
                  case "G3":
                    peliculaencache[0].ASIENTOS.G3.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.G3.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.G3.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break; 
                   case "G4":
                    peliculaencache[0].ASIENTOS.G4.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.G4.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.G4.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;
                   case "H1":
                    peliculaencache[0].ASIENTOS.H1.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.H1.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.H1.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;
                  case "H2":
                    peliculaencache[0].ASIENTOS.H2.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.H2.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.H2.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;
                  case "H3":
                    peliculaencache[0].ASIENTOS.H3.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.H3.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.H3.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break; 
                   case "H4":
                    peliculaencache[0].ASIENTOS.H4.NOMBREESTUADIANTE= document.getElementById("iddelinputnombredelmodal").value;
                    peliculaencache[0].ASIENTOS.H4.CARNET= document.getElementById("iddelinputCrnetdelmodal").value;
                    peliculaencache[0].ASIENTOS.H4.SECCION= document.getElementById("iddelinputsecciondelmodal").value;
                   break;           

           }
    
    
    //deben tener linkeado el js de peliculafrontend
    var peliculainstanciada = new _Pelicula(peliculaencache[0]._id,peliculaencache.NOMBRE,
    peliculaencache[0].DURACIONMINUTOS,
    peliculaencache[0].GENERO,
    peliculaencache[0].IDIOMAAUDIO,
    peliculaencache[0].IDIOMASUB,
    peliculaencache[0].SINOPSIS,
    peliculaencache[0].CLASIFICACION,
    peliculaencache[0].PRECIO,
    peliculaencache[0].HORAINICIO,
    peliculaencache[0].FECHA,
    peliculaencache[0].MINUTOINICIO,
    peliculaencache[0].ASIENTOS,
    peliculaencache[0].IMAGEN,
    peliculaencache[0].ESTADO

    )
    
    peliculainstanciada.Modificar().then(function(response) {
  console.log("Success!", response);
            alert("Butaca ha sido reservada campeón");
            
}, function(error) {
  console.error("Failed!", error);
             alert("Error " + error);
            
});
       
    
}