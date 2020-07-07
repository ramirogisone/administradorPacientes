import React, {Fragment, useState} from 'react';
import {v4 as uuid} from "uuid";

const Formulario = ({crearCita}) => {
    // crear state de citas
    const [cita, actualizarCita] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        fecha: '',
        hora: '',
        observaciones: ''
    });

    const [error, actualizaError] = useState(false);

    const actualizarState = ev => {
        actualizarCita({
            ...cita, //crea una copia del objeto cita
            [ev.target.name]: ev.target.value,
        })
    }

    // destructuring para extraer los valores de cita
    const {nombre, apellido, telefono, fecha, hora, observaciones } = cita;

    const submitCita = ev => {
        ev.preventDefault();
        // validar el formulario
        if(nombre.trim() === '' || apellido.trim() === '' || telefono.trim() === '' || fecha.trim() === '' || hora.trim() === '' || observaciones.trim() === ''){
            actualizaError(true);
            return;
        }
        actualizaError(false);
        // asignar un id
        cita.id = uuid();
        // crear cita
        crearCita(cita);
        // reiniciar formulario
        actualizarCita({
            nombre: '',
            apellido: '',
            telefono: '',
            fecha: '',
            hora: '',
            observaciones: ''
        })
    }

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            { error ? <p className='alerta-error'>Todos los campos son obligatorios</p> : null }

            <form 
                onSubmit={submitCita}
            >
                
                <label>Nombre Paciente</label>
                <input 
                    type='text'
                    name='nombre'
                    className='u-full-width'
                    placeholder='Nombre paciente'
                    onChange={actualizarState}
                    value={nombre}
                />
                <label>Apellido Paciente</label>
                <input 
                    type='text'
                    name='apellido'
                    className='u-full-width'
                    placeholder='Apellido paciente'
                    onChange={actualizarState}
                    value={apellido}
                />
                <label>Teléfono</label>
                <input 
                    type='text'
                    name='telefono'
                    className='u-full-width'
                    placeholder='Número de telefono'
                    onChange={actualizarState}
                    value={telefono}
                />
                <label>Fecha Cita</label>
                <input 
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora Cita</label>
                <input 
                    type='time'
                    name='hora'
                    className='u-full-width'
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Observaciones</label>
                <textarea
                    className='u-full-width'
                    name='observaciones'
                    onChange={actualizarState}
                    value={observaciones}
                ></textarea>
                <button 
                    type='submit'
                    className='u-full-width button-primary'
                    >Agregar Cita</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;