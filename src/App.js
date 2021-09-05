import React from 'react';
import './App.css';

import IMC from './IMC/IMC';
import IMC_RESULT from './IMC/IMC_RESULT';

function App () {

  const bt_1 = () => {
    document.getElementById('ID-Menu-tit').innerText = 'IMC:';
    document.getElementById('ID-menu').style.display = 'none';
    document.getElementById('ID-bt-return').style.display = 'block';
    document.getElementById('ID-IMC').style.display = 'flex';
  }
  
  const bt_return = () => {
    document.getElementById('ID-Menu-tit').innerText = 'Menu:';
    document.getElementById('ID-menu').style.display = 'flex';
    document.getElementById('ID-bt-return').style.display = 'none';
    document.getElementById('ID-IMC').style.display = 'none';
    document.getElementById('ID-IMC_R').style.display = 'none';
  }

  return (
    <div className='Body-Div'>
      <div className='bt-return-latesq'>      
        <button id='ID-bt-return' className='bt-return' onClick={bt_return}>⮪</button>
      </div>

      <h1 id='ID-Menu-tit' className='Menu-tit'>Menu:</h1>
      {/* Menu */}
      <div id='ID-menu' className='Menu'>        
        <button
          className='Button-menu'
          title='Índice de Massa Corporal'
          onClick={bt_1}>IMC</button>
        <button className='Button-menu' title='Uma Repetição Máxima'>1 - RM</button>
        <button className='Button-menu'>Bt_2</button>
      </div>  

      <IMC></IMC>

      <IMC_RESULT></IMC_RESULT>

      <div className='Footer'>
        <a target="_black" rel="noreferrer noopener" href="https://www.instagram.com/k1bruno/">Instagram </a>
        <a target="_black" rel="noreferrer noopener" href="https://github.com/Bruhkamargo">GitHub </a>          
        <a target="_black" rel="noreferrer noopener" href="https://api.whatsapp.com/send?phone=5549998193608">WhatsApp </a>          
      </div>
    </div>
  );
}

export default App;