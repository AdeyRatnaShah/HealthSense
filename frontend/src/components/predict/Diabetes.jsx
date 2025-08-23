import React from 'react'
import ModelHero from '../layouts/ModelHero';
import ServiceForm from '../layouts/ServiceForm'

const Diabetes = () => {
  const info = {
    name: 'Adey Ratna Shah',
    disease: 'Chronic Kidney Disease',
    image: '' || '',
  }

  const fieldLabels = {
    pregnancies: { title: "Pregnancies", type: "number" },
    glucose: { title: "Glucose (mg/dL)", type: "number" },
    bloodPressure: { title: "Blood Pressure (mmHg)", type: "number" },
    skinThickness: { title: "Skin Thickness (mm)", type: "number" },
    insulin: { title: "Insulin (mu U/ml)", type: "number" },
    bmi: { title: "Body Mass Index (kg/m²)", type: "number" },
    diabetesPedigreeFunction: { title: "Diabetes Pedigree Function", type: "number" },
    age: { title: "Age (years)", type: "number" },
  };

  return (
    <div>
      <ModelHero info={info}/>

      <ServiceForm fieldLabels={fieldLabels} />
    </div>
  )
}

export default Diabetes
