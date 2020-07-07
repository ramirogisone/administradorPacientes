import React from 'react';

const Cita = ({cita, eliminarCita}) => (
	<div className='cita'>
		<p>Nombre: <span>{cita.nombre}</span></p>
		<p>Apellido: <span>{cita.apellido}</span></p>
		<p>Teléfono: <span>{cita.telefono}</span></p>
		<p>Fecha: <span>{cita.fecha}</span></p>
		<p>Hora: <span>{cita.hora}</span></p>
		<p>Observaciones: <span>{cita.observaciones}</span></p>
		<button 
			className='button eliminar u-full-width'
			onClick={ () => eliminarCita(cita.id) }
			>Eliminar Cita &times;
		</button>
	</div>
);
 
export default Cita;