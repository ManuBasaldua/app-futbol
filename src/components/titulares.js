import React from 'react';
import {connect} from 'react-redux';
import '../components/jugadores.css'; 

function Titulares({titulares, removeTitular}){
    return(
        <section>
            <h2 className='titulo'>Titulares</h2>
            <div className='cancha'>
                {
                    titulares.map(j => (
                        <article className='titular' key={j.id}>
                            <div className='contenedor-Jugadores'>
                                <img src={j.foto} className='imagen-jugador'/>
                                <h4 className='nombreJugador'>{j.nombre}</h4> 
                                <button onClick={()=> removeTitular(j)} className='btnX'>Quitar</button>
                                                           
                            </div>
                            
                        </article>
                    ))
                }
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    titulares: state.titulares
})

const mapDispatchToProps = dispatch => ({
    removeTitular(jugador){
        dispatch({
            type: 'REMOVER_TITULAR',
            jugador
        })

    }

})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);