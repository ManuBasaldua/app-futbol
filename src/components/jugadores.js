import React from 'react';
import {connect} from 'react-redux';
// import '../components/jugadores.css'; 

function Jugadores({jugadores, agregarTitular, agregarSuplente}){
    return(
    <section>
        <h2 className='titulo'>Jugadores</h2>
        <div className='cont-jugadores-gral'>
           {
               jugadores.map(j => (
                <article className='contenedor-Jugadores' key={j.id}>
                    <img className='imagen-jugador' src={j.foto}/>
                    <h3 className='nombreJugador'>{j.nombre}</h3>
                    <div className='cont-btn'>
                        <button onClick = {() => agregarTitular(j)} className='btnTitular'>Titular</button>
                        <button onClick = {() => agregarSuplente(j)} className='btnSuplente'>Suplente</button>
                    </div>
            </article>
               ))
           }
        </div>
    </section>
)}

const mapStateToProps = state => ({
    jugadores: state.jugadores
})

const mapDispatchToProps = dispatch => ({
    agregarTitular(jugador){
        dispatch({
            type: 'AGREGAR_TITULAR',
            jugador
        })
    },
    agregarSuplente(jugador){
        dispatch({
            type: 'AGREGAR_SUPLENTE',
            jugador
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores);