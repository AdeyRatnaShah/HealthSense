import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center px-4 sm:px-6 md:px-12 py-12">
      {/* Title Section */}
      <div className="max-w-4xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navbar-bg mb-4">
          About HealthSense
        </h1>
        <p className="text-base sm:text-lg text-gray-600 px-2">
          Empowering individuals with AI-driven insights for better healthcare
          decisions.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mt-12 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-navbar-bg mb-3">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            HealthSense is designed to make healthcare more accessible and
            proactive. By integrating cutting-edge{" "}
            <span className="font-medium">Machine Learning models</span>, we
            help users predict potential health risks like{" "}
            <span className="font-medium">Chronic Kidney Disease</span> and{" "}
            <span className="font-medium">Diabetes</span> within seconds.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="imageTwo.jpg"
            alt="Healthcare AI"
            className="rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg md:max-w-full object-cover"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 max-w-6xl px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-navbar-bg mb-6 text-center">
          Why Choose HealthSense?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">
              AI-Powered Predictions
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Get quick and reliable predictions for health risks using trained
              ML models.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">User-Friendly</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Simple and clean interface that makes health insights easy to
              understand.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">Accessible Anywhere</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Use HealthSense anytime, anywhere, without the need for complex
              setups.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Quote */}
      <div className="mt-16 max-w-3xl text-center px-2">
        <p className="text-lg sm:text-xl italic text-gray-700">
          “Prevention is better than cure — let technology guide you towards a
          healthier tomorrow.”
        </p>
      </div>
    </div>
  );
};

export default About;
