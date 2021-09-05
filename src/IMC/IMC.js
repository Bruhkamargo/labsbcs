import React, { useState } from 'react';
import './IMC.css';

function IMC(params) {

  const [Sex, setSex] = useState(true)
  const [Hei, setHei] = useState()
  const [Wei, setWei] = useState()

  const check_imc_calc = () => {
    if (Hei === 0 || Hei === undefined || Wei === 0 || Wei === undefined) {
      alert('Preencha todos os Dados')
    } else {
      imc_calc()
    }
  }

  const imc_calc = () => {
    document.getElementById('ID-Menu-tit').innerText = 'Resultado';
    document.getElementById('ID-IMC').style.display = 'none'
    document.getElementById('ID-IMC_R').style.display = 'Flex'

    let imc = Wei / ((Hei / 100) **2)

    if (Sex === true) {
      if (imc < 20.69) {
        document.getElementById('ID-sla3').innerText = 'IMC Abaixo do Normal'        
      } else if (imc <= 26.40) {
        document.getElementById('ID-sla3').innerText = 'IMC Normal'        
      } else if (imc <= 27.80) {
        document.getElementById('ID-sla3').innerText = 'IMC Acima do Peso'        
      } else if (imc < 32.30) {
        document.getElementById('ID-sla3').innerText = 'IMC Obesidade'        
      } else {        
        document.getElementById('ID-sla3').innerText = 'IMC Obesidade Morbida'
      }    
    } else if (Sex === false) {
      if (imc < 19.09) {
        document.getElementById('ID-sla3').innerText = 'IMC Abaixo do Normal'        
      } else if (imc <= 25.80) {
        document.getElementById('ID-sla3').innerText = 'IMC Normal'        
      } else if (imc <= 27.30) {
        document.getElementById('ID-sla3').innerText = 'IMC Acima do Peso'        
      } else if (imc < 32.30) {
        document.getElementById('ID-sla3').innerText = 'IMC Obesidade'        
      } else {        
        document.getElementById('ID-sla3').innerText = 'IMC Obesidade Morbida'
      } 
    }

    document.getElementById('ID-sla').innerText = `${imc.toFixed(2)}`

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
      <button className='imc-input-bt' onClick={check_imc_calc}>Calcular</button>

    </div>
  )
}

export default IMC