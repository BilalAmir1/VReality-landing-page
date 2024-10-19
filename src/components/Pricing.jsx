import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <section id="Pricing" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-4">
          <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">Pricing</span>
        </h2>
        <p className="text-xl text-center text-gray-300 mb-12">
          Choose the plan that best suits your needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingOptions.map((option, index) => (
            <div key={index} className="bg-neutral-800 bg-opacity-80 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm">
              <h3 className="text-xl font-semibold">{option.title}</h3>
              <p className="text-gray-300">
                {option.features.map((feature, featureIndex) => (
                  <span key={featureIndex} className="block">{feature}</span>
                ))}
              </p>
              <p className="text-2xl font-bold text-orange-500">{option.price}</p>
              <a href="#get-started" className="px-6 py-3 bg-neutral-800 bg-opacity-70 border border-orange-500 text-white rounded-md text-base hover:bg-gray-700 transition-colors mt-4 block text-center">
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
