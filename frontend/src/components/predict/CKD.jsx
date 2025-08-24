import React from 'react'
import ServiceForm from '../layouts/ServiceForm'
import ModelHero from '../layouts/ModelHero';

const CKD = () => {

  const userInfo = localStorage.getItem('HealthSense_user_name');
  const disease = 'Chronic Kidney Disease';
  const info = {
    name: userInfo,
    disease,
  }

  const fieldLabels = {
    age: {
      title: "Age (years)",
      type: "number"
    },
    bp: {
      title: "Blood Pressure (mmHg)",
      type: "number"
    },
    sg: {
      title: "Specific Gravity",
      type: "number"
    },
    al: {
      title: "Albumin (g/dL)",
      type: "number"
    },
    su: {
      title: "Sugar (mg/dL)",
      type: "number"
    },
    rbc: {
      title: "Red Blood Cells (millions/µL)",
      type: "number"
    },
    pc: {
      title: "Pus Cell",
      type: "select",
      options: ["normal", "abnormal"]
    },
    pcc: {
      title: "Pus Cell Clumps",
      type: "select",
      options: ["present", "absent"]
    },
    ba: {
      title: "Bacteria",
      type: "select",
      options: ["present", "absent"]
    },
    bgr: {
      title: "Blood Glucose Random (mg/dL)",
      type: "number"
    },
    bu: {
      title: "Blood Urea (mg/dL)",
      type: "number"
    },
    sc: {
      title: "Serum Creatinine (mg/dL)",
      type: "number"
    },
    sod: {
      title: "Sodium (mEq/L)",
      type: "number"
    },
    pot: {
      title: "Potassium (mEq/L)",
      type: "number"
    },
    hemo: {
      title: "Hemoglobin (g/dL)",
      type: "number"
    },
    pcv: {
      title: "Packed Cell Volume (%)",
      type: "number"
    },
    wbcc: {
      title: "White Blood Cell Count (cells/µL)",
      type: "number"
    },
    rbcc: {
      title: "Red Blood Cell Count (millions/µL)",
      type: "number"
    },
    htn: {
      title: "Hypertension",
      type: "select",
      options: ["yes", "no"]
    },
    dm: {
      title: "Diabetes Mellitus",
      type: "select",
      options: ["yes", "no"]
    },
    cad: {
      title: "Coronary Artery Disease",
      type: "select",
      options: ["yes", "no"]
    },
    appet: {
      title: "Appetite",
      type: "select",
      options: ["good", "poor"]
    },
    pe: {
      title: "Pedal Edema",
      type: "select",
      options: ["yes", "no"]
    },
    ane: {
      title: "Anemia",
      type: "select",
      options: ["yes", "no"]
    }
  };


  const ckdMapValues = (key, value) => {
    if (typeof value === "string" && value.trim() === "") return null;

    switch (key) {
      case "pc":
      case "pcc":
      case "ba":
        return value === "present" ? 1 : 0;

      case "htn":
      case "dm":
      case "cad":
      case "pe":
      case "ane":
        return value === "yes" ? 1 : 0;

      case "appet":
        return value === "good" ? 1 : 0;

      case "rbc":
        return parseFloat(value) || 0; // keep numeric

      default:
        return isNaN(value) ? value : parseFloat(value);
    }
  };
  const ckdNormalValues = {
    age: "18-60 years",
    bp: "90-120 mmHg",
    sg: "1.005 - 1.030",
    al: "0 - 8 g/dL",
    su: "70 - 140 mg/dL",
    rbc: "4.2 - 5.9 million/µL",
    pc: "normal",
    pcc: "absent",
    ba: "absent",
    bgr: "70 - 140 mg/dL",
    bu: "7 - 20 mg/dL",
    sc: "0.6 - 1.3 mg/dL",
    sod: "135 - 145 mEq/L",
    pot: "3.5 - 5.0 mEq/L",
    hemo: "13.5 - 17.5 g/dL",
    pcv: "38 - 50%",
    wbcc: "4500 - 11000 cells/µL",
    rbcc: "4.2 - 5.9 million/µL",
    htn: "no",
    dm: "no",
    cad: "no",
    appet: "good",
    pe: "no",
    ane: "no"
  };

  const model = 'ckd';
  return (
    <div className="w-full">

      <ModelHero info={info} />

      <ServiceForm fieldLabels={fieldLabels} model={model} ckdMapValues={ckdMapValues} ckdNormalValues={ckdNormalValues} />

    </div>

  )
}

export default CKD
