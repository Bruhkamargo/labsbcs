import React from 'react';
import './App.css';

function App () {
  return (
    <div className='Body-Div'>
      <div className='div-menu'>     
        <div className='Header-menu'>
          <h1 className='menu-tit'>Menu:</h1>
        </div>
        <button className='Button-menu' title='Índice de Massa Corporal'>IMC</button>
        <button className='Button-menu' title='Uma Repetição Máxima'>1 - RM</button>
        <button className='Button-menu'>Bt_2</button>
        <div className='Footer-menu'>
          <a to={'https://github.com/Bruhkamargo'}></a>
        </div>
      </div>
    </div>
  );
}

export default App;