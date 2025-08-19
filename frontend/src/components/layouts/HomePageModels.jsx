import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCircleChevronRight } from "react-icons/fa6";

const HomePageModels = () => {
    const modelInfo = [
        {
            title: 'Chronic Kidney Disease Predictor',
            desc: 'Chronic Kidney Disease (CKD) is a long-term condition where the kidneys gradually lose their ability to filter waste and excess fluids from the blood.',
            accuracy: '97.2 %',
        },
        {
            title: 'Diabetes Predictor',
            desc: 'Diabetes is a long-term condition where the body either doesn’t produce enough insulin or can’t effectively use the insulin it makes, leading to high blood sugar levels',
            accuracy: '94.7 %',
        }
    ]
    const navigate = useNavigate();
    const handleOnClick = ()=>{
        navigate('/about')
    }
    return (
        <div className=''>
            <div className='my-20 mx-40  bg-dark-bg '>
                <p className='text-white p-10 text-4xl font-mono'>Avail our Services</p>

                <div>
                    {
                        modelInfo.map((model, key) => (
                            <div className='flex' key={key}>


                                <div  className='text-white font-mono mx-30 mb-20 '>
                                    <p className='uppercase text-2xl flex gap-4 items-center '><FaCircleChevronRight className='text-primary' />{model.title}</p>
                                    <p className='text-sm m-5'>{model.desc}</p>
                                    <p className='text-sm m-5'><span>Accuracy: </span><span className='text-primary'>
                                        {model.accuracy}   </span></p>

                                    <div className='flex justify-end'>
                                        <button className='w-20 rounded bg-image-bg text-black ' onClick={handleOnClick}>
                                            Check health
                                        </button>

                                    </div>
                                </div>

                            </div>


                        ))
                    }
                </div>


            </div>
        </div>
    )
}

export default HomePageModels
