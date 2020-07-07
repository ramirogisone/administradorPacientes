import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

	// guardar citas al local storage
	let citasIniciales = JSON.parse(localStorage.getItem('citas'));
	if(!citasIniciales) {
		citasIniciales = [];
	}

	// arreglo de citas
	const [citas, guardarCitas] = useState(citasIniciales ? citasIniciales : []);

	// useEffect para revisar cuando el estado de las citas cambie
	useEffect(() => {
		if(citasIniciales) {
			localStorage.setItem('citas', JSON.stringify(citas))
		}else{
			localStorage.setItem('citas', JSON.stringify([]))
		}
	}, [citas, citasIniciales]);
	
	// agrega la nueva cita a las actuales
	const crearCita = cita => {
		guardarCitas([
			...citas,
			cita	
		]);
	}

	// funcion para elminar citas por ID
	const eliminarCita = id => {
		const eliminarCitas = citas.filter(cita => cita.id !== id );
		guardarCitas(eliminarCitas);
	}
	
	const titulo = citas.length !== 0 ? 'Administra tus citas' : 'Aún no tienes citas'
	
	return (
		<Fragment>
			<h1>Administrador de pacientes</h1>
			<div className='container'>
				<div className='row'>
					<div className='one-half column'>
						<Formulario 
							crearCita={crearCita}
						/>
					</div>
					<div className='one-half column'>
						<h2>{titulo}</h2>
						
						{citas.map(cita => (
							<Cita 
								key={cita.id}
								cita={cita}
								eliminarCita={eliminarCita}
							/>
						))}
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
