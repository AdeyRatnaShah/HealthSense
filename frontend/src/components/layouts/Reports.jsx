import React from 'react'

const Reports = () => {
  return (
    <>
        <h1 className='text-4xl mt-7 font-semibold'>Reports</h1>
          <div className="flex flex-col md:flex-row mt-5 ">
            <div className="flex flex-col items-center bg-gray-200 rounded-2xl mb-5 mr-5 p-6 shadow-md">
              <img src="../../Home3.jpg" className="h-30 m-10" alt="Home" />
              <p className="mb-5 text-lg font-semibold text-center">Blood Report</p>
              <div>
                <input
                  type="file"
                  id="myFile"
                  name="filename"
                  className="block text-sm text-gray-500
                 file:mr-4 file:py-2 file:px-4
                 file:rounded-full file:border-0
                 file:text-sm file:font-semibold
                 file:bg-amber-600 file:text-white
                 hover:file:bg-amber-900"
                />
              </div>
            </div>
            <div className="flex flex-col items-center bg-gray-200 rounded-2xl mb-5 mr-5 p-6 shadow-md">
              <img src="../../Home3.jpg" className="h-30 m-10" alt="Home" />
              <p className="mb-5 text-lg font-semibold text-center">Urine Analysis</p>
              <div>
                <input
                  type="file"
                  id="myFile"
                  name="filename"
                  className="block text-sm text-gray-500
                 file:mr-4 file:py-2 file:px-4
                 file:rounded-full file:border-0
                 file:text-sm file:font-semibold
                 file:bg-amber-600 file:text-white
                 hover:file:bg-amber-900"
                />
              </div>
            </div>
            <div className="flex flex-col items-center bg-gray-200 rounded-2xl mb-5 mr-5 p-6 shadow-md">
              <img src="../../Home3.jpg" className="h-30 m-10" alt="Home" />
              <p className="mb-5 text-lg font-semibold text-center">Bio Chemical</p>

              <div>
                <input
                  type="file"
                  id="myFile"
                  name="filename"
                  className="block text-sm text-gray-500
                 file:mr-4 file:py-2 file:px-4
                 file:rounded-full file:border-0
                 file:text-sm file:font-semibold
                 file:bg-amber-600 file:text-white
                 hover:file:bg-amber-900"
                />
              </div>
              
            </div>
            <div className="flex flex-col items-center bg-gray-200 rounded-2xl mb-5 mr-5 p-6 shadow-md">
              <img src="../../Home3.jpg" className="h-30 m-10" alt="Home" />
              <p className="mb-5 text-lg font-semibold text-center">Kidney/Renal Function Test</p>

              <div>
                <input
                  type="file"
                  id="myFile"
                  name="filename"
                  className="block text-sm text-gray-500
                 file:mr-4 file:py-2 file:px-4
                 file:rounded-full file:border-0
                 file:text-sm file:font-semibold
                 file:bg-amber-600 file:text-white
                 hover:file:bg-amber-900"
                />
              </div>
              
            </div>
          


          </div>
    </>
  )
}

export default Reports
