import React, { useState } from "react";
import axios from "axios";
import { IoMdClose } from "react-icons/io";
import Loader from "./Loader";

const ServiceForm = ({ model, fieldLabels, ckdMapValues,ckdNormalValues }) => {
  const initialState = Object.keys(fieldLabels).reduce((acc, key) => {
    acc[key] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState("");
  const [showForm, setShowForm] = useState(true);
  // const showForm = false;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  


  const mapFunctions = {
    ckd: ckdMapValues,
    // heart: heartMapValues,
    // diabetes: diabetesMapValues,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('started...');

    try {
      const token = localStorage.getItem("HealthSense_token");

      // Convert formData into the expected "data" object
      const mapFn = mapFunctions[model];

      const formattedData = Object.keys(formData).reduce((acc, key) => {
        acc[key] = mapFn ? mapFn(key, formData[key]) : formData[key];
        return acc;
      }, {});

      const requestBody = {
        model_name: model,
        data: formattedData,
      };

      console.log(requestBody)
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/getPrediction/${model}`,
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsLoading(false);
      setPrediction(response.data.prediction);
      setShowForm(false)
      console.log('finished...');
      console.log(prediction);
    } catch (error) {
      console.error("Error while getting prediction:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : showForm ? (
        <>
          <div className='bg-gray-200 p-8 m-8 '>
            <p className='text-3xl font-semibold ml-16 uppercase font-mono'>Fill and Verify Details</p>
          </div>



          {/* // show form until prediction happens */}
          <form onSubmit={handleSubmit} className="p-4 grid grid-cols-3 gap-x-10 ml-10 bg-white rounded shadow">
            {Object.entries(fieldLabels).map(([key, { title, type, options }]) => (
              <div key={key} className="flex flex-col my-3">
                <label htmlFor={key} className="font-semibold mb-2">
                  {title}
                </label>
                {type === "select" ? (
                  <select
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="p-2 border rounded"
                  >
                    <option value="">Select {title}</option>
                    {options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={type}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="p-2 border rounded"
                    placeholder={`Enter ${title}`}
                  />
                )}
              </div>
            ))}

            <div className="col-span-3 flex justify-center mt-6">
              <button
                type="submit"
                className="w-full bg-navbar-bg text-white rounded hover:bg-zinc-300 font-medium py-4 text-2xl hover:text-black"
              >
                Submit and get Predictions
              </button>
            </div>
          </form>
        </>
      ) : (
        // Show prediction + comparison table
        <div className="mt-6">
          <div className="flex justify-end">
            <button className="p-2 mr-10 rounded bg-gray-200 hover:bg-gray-800 hover:text-white" 
            onClick={()=> {
              setShowForm(true);
              setFormData(initialState);
            }}
            >
              {/* <IoMdClose /> */}
              Get Another Prediction
            </button>
          </div>


          <h3 className="text-2xl  text-center mb-6 underline font-bold">Prediction Result</h3>
          <p className="text-xl text-center mb-6 font-bold text-blue-700 ">{prediction}</p>

          <h4 className="text-3xl font-semibold mb-4 p-10">Comparison of Values</h4>
          <div className="flex justify-center mb-10 ">
            <div className="w-1/2">

              <table className="w-full border-collapse border border-gray-300 text-center  ">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border-2 border-gray-300 px-4 py-2">Parameter</th>
                    <th className="border-2 border-gray-300 px-4 py-2">Normal Range/Value</th>
                    <th className="border-2 border-gray-300 px-4 py-2">Your Input</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(fieldLabels).map(([key, { title }]) => (
                    <tr key={key}>
                      <td className="border-2 border-gray-300 px-4 py-2">{title}</td>
                      <td className="border-2 border-gray-300 px-4 py-2">{ckdNormalValues[key] || "N/A"}</td>
                      <td
                        className={`border-2 border-gray-300 px-4 py-2 `}
                      >
                        {formData[key] || "Not Provided"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}
    </div>
  );

};

export default ServiceForm;
