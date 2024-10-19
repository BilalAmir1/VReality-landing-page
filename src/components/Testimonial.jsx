import { testimonials } from "../constants";

const Testimonial = () => {
  return (
    <section id="Testimonials" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-4">
          <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">What Our Clients Say</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-neutral-800 bg-opacity-80 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm">
              <img src={testimonial.image} alt={`testimonial ${index + 1}`} className="w-16 h-16 rounded-full mb-4" />
              <p className="text-gray-300 mb-4">{testimonial.text}</p>
              <h3 className="text-xl font-semibold">{testimonial.user}</h3>
              <p className="text-gray-300">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;