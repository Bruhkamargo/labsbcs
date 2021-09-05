import React, { useState } from 'react';
import './IMC.css';

function IMC(params) {

  const [Sex, setSex] = useState(true)
  const [Hei, setHei] = useState()
  const [Wei, setWei] = useState()

  const imc_calc = () => {
    document.getElementById('ID-IMC').style.display = 'none'
    document.getElementById('ID-IMC_R').style.display = 'Flex'
  }

  return (
    <div id='ID-IMC' className='IMC'>
      <div className='imc-sex'>
        <label>Sexo</label>
        <label>Masculino
          <input type='Radio' value='sex_1' checked={Sex ? true : false} onChange={() => { Sex ? setSex(false) : setSex(true) }} /></label>
        <label>Feminino
          <input type='Radio' value='sex_1' checked={Sex ? false : true} onChange={() => { Sex ? setSex(false) : setSex(true) }} /></label>
      </div>
      <div className='imc-input'>
        <label>Peso: </label>
        <input
          type='Number'
          placeholder={'Insira o peso em Quilogramas'}
          min={0}
          value={Wei}
          title={'Peso em Kg'}
          onChange={(e) => setWei(e.target.value)}></input>
      </div>
      <div className='imc-input'>
        <label>Altura: </label>
        <input type='Number'
          placeholder={'Insira a altura em centimetros'}
          min={0} value={Hei}
          title={'Altura em cm'}
          onChange={(e) => setHei(e.target.value)}></input>
      </div>
      <button className='imc-input-bt' onClick={imc_calc}>Calcular</button>

    </div>
  )
}

export default IMC