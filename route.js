var peliculacontroler = require('./peliculacontroler.js');
module.exports = function(app){
	var clasepelicula = new peliculacontroler();
	app.post('/api/nuevapelicula', clasepelicula.Guardar);
	app.post('/api/modificapelicula', clasepelicula.Modificar);
	app.post('/api/eliminapelicula', clasepelicula.Eliminar);
	app.post('/api/seleccionartodos', clasepelicula.Seleccionartodos);
	app.post('/api/seleccionarporfecha', clasepelicula.Seleccionarporfecha);
	app.post('/api/seleccionarporid', clasepelicula.Seleccionarporid);
	app.post('/api/seleccionarpornombre', clasepelicula.Seleccionarpornombre);

	app.get('*', function(req,re) {//localhost:8080

		res.sendfile('./login.html'); //carga única de la vista
	});
};