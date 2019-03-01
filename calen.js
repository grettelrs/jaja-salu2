
function agregaimgdepeliculaaldiv(imgenbase64,iddeldiv,iddelapelicula)  //  Primero llega a la funcion de abajo cargarpeliculasdelmesyanno

    {
        document.getElementById(iddeldiv).innerHTML += "<img src='"+imgenbase64+"' height='45' width='40' id= "+iddelapelicula+" onclick='cargataquilla(\""+iddelapelicula+"\")'>"; //  El fec dentro del getElementById es porque solo reconoce los numeros y hay que concatenar el fec
    }

   function cargataquilla(id){


             let clasepeliculainstanciada = new _Pelicula(id);
               clasepeliculainstanciada.Seleccionarporid().then(function(response) {

               localStorage.setItem("peliculaseleccionada",JSON.stringify(response));
                   location.href="taquilla.html"
                 },
                    function(error) {
                      console.log(error);
                    });
 }


           function cargarpeliculasdelmesyanno()
    {
        let clasepeliculainstanciada = new _Pelicula();
               clasepeliculainstanciada.peliculapormesyanno(document.getElementById("mesactual").innerHTML,document.getElementById("annoactual").innerHTML).then(function(response) {
 for(var elemento in response)
     {
      //variable que lamacena la fecha.
      var fecha = new Date(response[elemento].FECHA);
         agregaimgdepeliculaaldiv(response[elemento].IMAGEN,fecha.getDate() + 1);
         
     }
                   
                   
                   
                   
}, function(error) {
 console.log(error);
});
        
        
    }

        function peliculaspormesyanno(mes,anno){             
         var objetoaenviar = this;
         var vectordepeliculasfiltradas = [];
  // Return a new promise.
  return new Promise(function(resolve, reject) {
  // Do the usual XHR stuff
       
      try {
           
     var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/api/seleccionartodos');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
    if (xhr.status === 200) {
        var peliculas =JSON.parse(xhr.responseText);
       
        for(var elemento in peliculas)
            {
                var fechadelapelicula = new Date(peliculas[elemento].FECHA);
                if((fechadelapelicula.getMonth()+1 == mes) && (fechadelapelicula.getFullYear() == anno))
                    {
                        vectordepeliculasfiltradas.push(peliculas[elemento]);
                    }
                    
            }
        
         resolve(vectordepeliculasfiltradas);
        
    }
    else
        {
           reject(xhr); 
        }
    };
    xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
    }
    catch(err) {
         reject(err.message);
        }
    });
}

 function cargardatosdelapelicula(){
  var pelicula = JSON.parse(localStorage.getItem('peliculaseleccionada'));
  document.getElementById("titulodelapelicula").innerHTML += pelicula[0].NOMBRE+"<hr><p>Tanda:"+pelicula[0].FECHA+ "Inicia:"+pelicula[0].HORAINICIO+":"+MINUTOINICIO+"</p>";
 }
 function cargardatodelabutaca(){
  
 }