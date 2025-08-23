import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center px-6 py-12">
      {/* Title Section */}
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold text-navbar-bg mb-4">
          About HealthSense
        </h1>
        <p className="text-lg text-gray-600">
          Empowering individuals with AI-driven insights for better healthcare
          decisions.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mt-12 max-w-5xl grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-navbar-bg mb-3">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            HealthSense is designed to make healthcare more accessible and
            proactive. By integrating cutting-edge{" "}
            <span className="font-medium">Machine Learning models</span>, we
            help users predict potential health risks like{" "}
            <span className="font-medium">Chronic Kidney Disease</span> and{" "}
            <span className="font-medium">Diabetes</span> within seconds.
          </p>
        </div>
        <img
          src="imageTwo.jpg"
          alt="Healthcare AI"
          className="rounded-2xl shadow-lg"
        />
      </div>

      {/* Features Section */}
      <div className="mt-16 max-w-5xl">
        <h2 className="text-3xl font-semibold text-navbar-bg mb-6 text-center">
          Why Choose HealthSense?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">AI-Powered Predictions</h3>
            <p className="text-gray-600">
              Get quick and reliable predictions for health risks using trained
              ML models.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">User-Friendly</h3>
            <p className="text-gray-600">
              Simple and clean interface that makes health insights easy to
              understand.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">Accessible Anywhere</h3>
            <p className="text-gray-600">
              Use HealthSense anytime, anywhere, without the need for complex
              setups.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Quote */}
      <div className="mt-16 max-w-3xl text-center">
        <p className="text-xl italic text-gray-700">
          “Prevention is better than cure — let technology guide you towards a
          healthier tomorrow.”
        </p>
      </div>
    </div>
  );
};

export default About;
