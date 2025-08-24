import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCircleChevronRight } from "react-icons/fa6";

const HomePageModels = () => {
  const modelInfo = [
    {
      title: 'Chronic Kidney Disease Predictor',
      desc: 'Chronic Kidney Disease (CKD) is a long-term condition where the kidneys gradually lose their ability to filter waste and excess fluids from the blood.',
      accuracy: '97.2 %',
      modelName: 'ckd',
    },
    {
      title: 'Diabetes Predictor',
      desc: 'Diabetes is a long-term condition where the body either doesn’t produce enough insulin or can’t effectively use the insulin it makes, leading to high blood sugar levels',
      accuracy: '94.7 %',
      modelName: 'diab',
    }
  ]

  const navigate = useNavigate();
  const handleOnClick = (model) => {
    if (model === 'ckd') {
      navigate('/predict/ckd');
    } else if (model === 'diab') {
      navigate('/predict/diabetes');
    }
  };

  return (
    <div className="my-10 md:my-20 px-4 md:px-10 lg:px-20 bg-dark-bg ">
      <p className="text-white py-6 text-2xl md:text-4xl font-mono">
        Avail our Services
      </p>

      <div className="flex flex-col gap-12">
        {modelInfo.map((model, key) => (
          <div
            key={key}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-zinc-900 p-6 rounded-lg shadow-lg my-10"
          >
            {/* Text Section */}
            <div className="text-white font-mono max-w-xl">
              <p className="uppercase text-xl md:text-2xl flex gap-3 items-center mb-4">
                <FaCircleChevronRight className="text-primary" />
                {model.title}
              </p>
              <p className="text-sm md:text-base mb-4">{model.desc}</p>
              <p className="text-sm md:text-base mb-4">
                <span>Accuracy: </span>
                <span className="text-primary">{model.accuracy}</span>
              </p>
            </div>

            {/* Button */}
            <div className="self-end md:self-center">
              <button
                className="px-4 py-2 rounded bg-image-bg text-black font-semibold cursor-pointer hover:opacity-90 transition"
                onClick={() => handleOnClick(model.modelName)}
              >
                Check Health
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePageModels
