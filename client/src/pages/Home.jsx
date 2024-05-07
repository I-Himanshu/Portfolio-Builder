import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 shadow-lg">
      <div className="flex flex-col md:flex-row md:w-full">
        {/* Hero section */}
        <div className="md:w-1/2 bg-gradient-to-r from-sky-400 to-indigo-500 text-white flex flex-col justify-center items-center p-8 md:min-h-full">
          <h1 className="text-4xl font-bold mb-4">Welcome to Portfolio Designer</h1>
          <p className="text-lg mb-8 text-gray-200">
            Create a stunning online portfolio in minutes with our easy-to-use tool.
          </p>
          <a
            href="/create"
            className="bg-white hover:bg-gray-100 text-indigo-600 px-6 py-3 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Get Started
          </a>
        </div>

        {/* Feature sections */}
        <div className="md:w-1/2 flex flex-col justify-between p-8 space-y-8">
          <FeatureItem
            icon="fas fa-user-circle"
            title="Personalize Your Portfolio"
            description="Showcase your skills, experience, and personality with our customizable templates."
            color="indigo"
          />
          <FeatureItem
            icon="fas fa-chart-line"
            title="Track Your Progress"
            description="Monitor your portfolio's performance and engagement with our analytics dashboard."
            color="teal"
          />
          <FeatureItem
            icon="fas fa-lightbulb"
            title="Get Inspired"
            description="Explore a gallery of stunning portfolios created by our users for inspiration."
            color="orange"
          />
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ icon, title, description, color }) => {
  const colorClass = `text-${color}-600`; // Dynamic color class based on prop

  return (
    <div className="flex flex-col items-center space-y-4">
      <i className={`${icon} ${colorClass} text-4xl mb-4`}></i>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Home;
