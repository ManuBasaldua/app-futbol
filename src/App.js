import React from 'react';
import {Provider} from 'react-redux';
import store from './store.js';
import Jugadores from './components/jugadores';
import EquipoSeleccionado from './components/EquipoSeleccionado';
import './components/jugadores.css';


function App() {
  return (
    <Provider store={store}>
      <main>
        <h1 className='tituloP'>EDmanager</h1>
        <Jugadores />
        <EquipoSeleccionado />
        
      </main>
      
    </Provider>

   
  );
}

export default App;
