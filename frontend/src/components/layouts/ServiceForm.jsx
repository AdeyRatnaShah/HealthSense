import React, { useState } from "react";


const ServiceForm = ({ onSubmit, loading, fieldLabels  }) => {
  const initialState = Object.keys(fieldLabels).reduce((acc, key) => {
    acc[key] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  loading  = false;

  const handleSubmit = (e) => {
    e.preventDefault();
    // onSubmit(formData);
    console.log(formData)
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="p-4 grid grid-cols-3 gap-x-10 ml-10 bg-white rounded shadow"
      >
        {Object.entries(fieldLabels).map(([key, { title, type, options }]) => (
          <div key={key} className="flex flex-col  my-3">
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
            // disabled={loading}
          >
            {loading ? "Submitting..." : "Submit and get Predictions"}
            {/* {loading ? "Submitting..." : "Get Results"} */}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceForm;
