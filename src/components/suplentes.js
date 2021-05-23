import React from 'react';
import {connect} from 'react-redux';
import '../components/jugadores.css'; 

function Suplentes({suplentes, removeSuplente}){
    return(
        <section>
            <h2 className='titulo'>Suplentes</h2>
            <div className='cancha'>
                {
                    suplentes.map(j => (
                        <article   className='suplente' key={j.id}>
                            <div className='contenedor-Jugadores'>
                                <img src={j.foto} className='imagen-jugador'/>
                                <h4 className='nombreJugador'>{j.nombre}</h4>
                                <button onClick={()=> removeSuplente(j)} className='btnX'>Quitar</button>
                                
                            </div>
                           
                        </article>
                    ))
                }
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    suplentes: state.suplentes
})

const mapDispatchToProps = dispatch => ({
    removeSuplente(jugador){
        dispatch({
            type: 'REMOVER_SUPLENTE',
            jugador
        })

    }

})

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);