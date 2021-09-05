import React from 'react';
import './IMC_RESULT.css';

function IMC_RESULT(params) {
  return (
    <div id='ID-IMC_R' className='IMC_R'>
      <div className='IMC-div-top'>
        <label>Pontos de IMC: <span id='ID-sla'></span></label>
        <label>Classificação do IMC: <span id='ID-sla3'></span></label>
      </div>
    </div>
  )
}

export default IMC_RESULT