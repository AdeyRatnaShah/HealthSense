import React from 'react'
import ServiceForm from '../layouts/ServiceForm'
import ModelHero from '../layouts/ModelHero';

const CKD = () => {
  const info = {
    name: 'Adey Ratna Shah',
    disease: 'Chronic Kidney Disease',
    image: '' || '',
  }


  const fieldLabels = {
    
  };


  return (
    <div className="w-full">

      <ModelHero info={info} />

      <ServiceForm fieldLabels={fieldLabels}/>

    </div>

  )
}

export default CKD
