import React, { useState } from 'react';
import './App.css';

function App () {
  
  const [Sex, setSex] = useState(true)

  const bt_1 = () => {
    document.getElementById('ID-menu').style.display = 'none';
    document.getElementById('ID-imc').style.display = 'flex';
  }
  const retornar = () => {
    document.getElementById('ID-menu').style.display = 'flex';
    document.getElementById('ID-imc').style.display = 'none';
  }

  return (
    <div className='Body-Div'>
      <div id='ID-menu' className='div-menu'>     
        <div className='Header-menu'>
          <h1 className='menu-tit'>Menu:</h1>
        </div>
        <button
          className='Button-menu'
          title='Índice de Massa Corporal'
          onClick={bt_1}>IMC</button>
        <button className='Button-menu' title='Uma Repetição Máxima'>1 - RM</button>
        <button className='Button-menu'>Bt_2</button>
        <div className='Footer-menu'>
          <a target="_black" rel="noreferrer noopener" href="https://www.instagram.com/k1bruno/">Instagram </a>
          <a target="_black" rel="noreferrer noopener" href="https://github.com/Bruhkamargo">GitHub </a>          
          <a target="_black" rel="noreferrer noopener" href="https://api.whatsapp.com/send?phone=5549998193608">WhatsApp </a>          
        </div>
      </div>
      <div id='ID-imc' className='div-imc'> 
        <div className='Header-menu'>
          <h1 className='menu-tit'>IMC:</h1>
        </div>
        <label>Sexo:
          <label> Masc. 
            <input type='Radio' value='sex_1' checked={Sex?true:false} onChange={() => {Sex?setSex(false):setSex(true)}}/>
          </label>
          <label> Fem. 
            <input type='Radio' value='sex_2' checked={Sex?false:true} onChange={() => {Sex?setSex(false):setSex(true)}}/>
          </label>
        </label>
        <label>Peso:          
          <input type='number'></input>
        </label>
        <label>Altura:          
          <input type='number'></input>
        </label>
        <div>
          <h2>Resultados:</h2>
        </div>
        <div className='Footer-menu'>
          <button className='Footer-menu-bt' onClick={retornar}>Voltar</button>
        </div>

      </div>
    </div>
  );
}

export default App;