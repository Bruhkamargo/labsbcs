import React, { useState } from 'react';
import './App.css';

function App () {
  
  const [Sex, setSex] = useState(true)
  const [Hei, setHei] = useState(0)
  const [Wei, setWei] = useState(0)

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
  }

  return (
    <div className='Body-Div'>
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

      {/* IMC */}

      <div id='ID-IMC' className='IMC'>
        <div className='imc-sex'>
          <label>Sexo</label>
          <label>Masculino
            <input type='Radio' value='sex_1' checked={Sex?true:false} onChange={() => {Sex?setSex(false):setSex(true)}}/></label>
          <label>Feminino
            <input type='Radio' value='sex_1' checked={Sex?false:true} onChange={() => {Sex?setSex(false):setSex(true)}}/></label>
        </div>
        <div className='imc-input'>
          <label>Peso: </label>
          <input type='Number' value={Wei} onChange={(e)=>setWei(e.target.value)}></input>
        </div>
        <div className='imc-input'>
          <label>Altura: </label>
          <input type='Number' value={Hei} onChange={(e)=>setHei(e.target.value)}></input>
        </div>       
        <button className='imc-input-bt'>Calcular</button>
      </div>  
      
      <button id='ID-bt-return' className='bt-return' onClick={bt_return}>⮪</button>

      <div className='Footer'>
        <a target="_black" rel="noreferrer noopener" href="https://www.instagram.com/k1bruno/">Instagram </a>
        <a target="_black" rel="noreferrer noopener" href="https://github.com/Bruhkamargo">GitHub </a>          
        <a target="_black" rel="noreferrer noopener" href="https://api.whatsapp.com/send?phone=5549998193608">WhatsApp </a>          
      </div>
    </div>
  );
}

export default App;