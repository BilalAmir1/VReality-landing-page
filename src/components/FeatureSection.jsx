const FeatureSection = () => {
  const features = [
    {
      title: "Intuitive Development",
      description: "Build VR experiences with ease using our user-friendly tools.",
      icon: "🛠️"
    },
    {
      title: "Cross-Platform Support",
      description: "Deploy your VR applications across multiple platforms seamlessly.",
      icon: "🌐"
    },
    {
      title: "Real-time Collaboration",
      description: "Work together with your team in real-time on VR projects.",
      icon: "👥"
    },
    {
      title: "Advanced Graphics",
      description: "Create stunning visuals with our advanced graphics capabilities.",
      icon: "🎨"
    }
  ];

  return (
    <section className="py-16 bg-neutral-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-12">
          Our <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">Features</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-neutral-800 p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;