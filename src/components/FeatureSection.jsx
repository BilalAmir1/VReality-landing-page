import { features } from "../constants";

const FeatureSection = () => {
  return (
    <section id="Features" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-4">
          <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">Features</span>
        </h2>
        <p className="text-xl text-center text-gray-300 mb-12">
          Easily build and deploy your <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">VR experiences</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
  <div key={index} className="bg-neutral-800 bg-opacity-80 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm">
    <div className="flex items-center mb-2">
      <div className="text-4xl mr-4 text-orange-500">{feature.icon}</div>
      <h3 className="text-xl font-semibold">{feature.text}</h3>
    </div>
    <p className="text-gray-300">{feature.description}</p>
  </div>
))}

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;