import React, { useState } from 'react';
import './App.css';

function App () {
  
  const [Sex, setSex] = useState(true)
  const [Hei, setHei] = useState(0)
  const [Wei, setWei] = useState(0)

  const bt_1 = () => {
    document.getElementById('ID-menu').style.display = 'none';
    document.getElementById('ID-IMC').style.display = 'flex';
  }

  return (
    <div className='Body-Div'>
      <h1>Menu:</h1>
      <div id='ID-menu' className='Menu'>        
        <button
          className='Button-menu'
          title='Índice de Massa Corporal'
          onClick={bt_1}>IMC</button>
        <button className='Button-menu' title='Uma Repetição Máxima'>1 - RM</button>
        <button className='Button-menu'>Bt_2</button>
      </div>  
      <div id='ID-IMC' className='IMC'>
        <span>
          <label>Sexo</label>
          <label>Masculino
            <input type='Radio' value='sex_1' checked={Sex?true:false} onChange={() => {Sex?setSex(false):setSex(true)}}/></label>
          <label>Feminino
            <input type='Radio' value='sex_1' checked={Sex?false:true} onChange={() => {Sex?setSex(false):setSex(true)}}/></label>
        </span>
        <span>
          <label>Peso: </label>
          <input type='Number' value={Wei} onChange={(e)=>setWei(e.target.value)}></input>
        </span>
        <span>
          <label>Altura: </label>
          <input type='Number' value={Hei} onChange={(e)=>setHei(e.target.value)}></input>
        </span>       
        <button>Calcular</button>
      </div>  
      <div className='Footer'>
        <a target="_black" rel="noreferrer noopener" href="https://www.instagram.com/k1bruno/">Instagram </a>
        <a target="_black" rel="noreferrer noopener" href="https://github.com/Bruhkamargo">GitHub </a>          
        <a target="_black" rel="noreferrer noopener" href="https://api.whatsapp.com/send?phone=5549998193608">WhatsApp </a>          
      </div>
    </div>
  );
}

export default App;