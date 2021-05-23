import {createStore} from 'redux';

const initialState = {
    jugadores: [{
        id: 1,
        nombre: 'Ansu Fati',
        foto: 'https://s1.eestatic.com/2020/10/29/deportes/futbol/futbol_531957926_163795036_1280x1706.jpg',
    },    
    {
        id: 2,
        nombre: 'Lionel Messi',
        foto: 'https://s1.eestatic.com/2020/10/29/deportes/futbol/futbol_531957930_163795148_1280x1706.jpg',
    },  
    { 
        id: 3,
        nombre: 'Antoine Greizmann',
        foto: 'https://s1.eestatic.com/2020/10/29/deportes/futbol/futbol_531957933_163795232_1280x1706.jpg',
}, 
    {
        id: 4,
        nombre: 'Trincao',
        foto: 'https://s1.eestatic.com/2020/10/29/deportes/futbol/futbol_531957927_163795064_1280x1706.jpg'},

    {
        id: 5,
        nombre: 'Ousmane Dembélé',
        foto: 'https://s1.eestatic.com/2020/10/29/deportes/futbol/futbol_531957929_163795120_1280x1706.jpg',
    },  
    { 
        id: 6,
        nombre: 'Martin Braithwaite',
        foto: 'https://s1.eestatic.com/2020/10/29/deportes/futbol/futbol_531957931_163795176_1280x1706.jpg'},
    {
        id: 7,
        nombre: 'Frenkie De Jong',
        foto: 'https://s1.eestatic.com/2020/10/29/deportes/futbol/futbol_531957934_163795260_1280x1706.jpg',
    },
    {
        id: 8,
        nombre: 'Matheus Fernandes',
        foto: 'https://s1.eestatic.com/2020/10/29/deportes/futbol/futbol_531957935_163795288_1280x1706.jpg',
    },    
    {
        id: 9,
        nombre: 'Pedri',
        foto: 'https://s1.eestatic.com/2020/10/29/deportes/futbol/futbol_531957937_163795344_1280x1706.jpg'
    },  
    {
        id: 10,
        nombre: 'Philippe Coutinho',
        foto: 'https://s1.eestatic.com/2020/10/29/deportes/futbol/futbol_531957938_163795372_1280x1706.jpg',
    },  
    {
        id: 11,
        nombre: 'Riqui Puig',
        foto: 'https://s1.eestatic.com/2020/10/29/deportes/futbol/futbol_531957939_163795400_1280x1706.jpg',
    },  
    {
        id: 12,
        nombre: 'Miralem Pjanic',
        foto: 'https://s1.eestatic.com/2020/10/29/deportes/futbol/futbol_531957941_163795456_1280x1706.jpg',
    },  
    {
        id: 13,
        nombre: 'Carles Aleña',
        foto: 'https://s1.eestatic.com/2020/10/29/deportes/futbol/futbol_531957942_163795484_1280x1706.jpg',
    },  
    {
        id: 14,
        nombre: 'Sergi Busquets',
        foto: 'https://s1.eestatic.com/2020/10/29/deportes/futbol/futbol_531957943_163795512_1280x1706.jpg',
}],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {
    
    switch(action.type){
        case 'AGREGAR_TITULAR':
            return{
                ...state,
                titulares: state.titulares.concat(action.jugador),
                jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
            }
        case 'AGREGAR_SUPLENTE':
            return{
                ...state,
                suplentes: state.suplentes.concat(action.jugador),
                jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
            }
           
        case 'REMOVER_TITULAR':
            return{
                ...state,
                titulares: state.titulares.filter(j => j.id !== action.jugador.id),
                jugadores: state.jugadores.concat(action.jugador)

            }
        case 'REMOVER_SUPLENTE':
            return{
                ...state,
                suplentes: state.suplentes.filter( j=> j.id !== action.jugador.id),
                jugadores: state.jugadores.concat(action.jugador)
            }
        default: return state;       
    } 
}
        
    



export default createStore(reducerEntrenador)