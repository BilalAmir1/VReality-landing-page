import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl md:text-6xl mb-6">
        VReality build tools <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">for</span>
        <br />
        <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">
          developers
        </span>
      </h1>
      <p className="text-xl text-gray-300 mb-8">
        Empower your virtual reality projects with our cutting-edge developer tools
      </p>
      <a
        href="#"
        className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-700 text-white rounded-full text-lg font-semibold hover:from-orange-600 hover:to-orange-800 transition-colors mb-16"
      >
        Get Started
      </a>
      <div className="flex flex-col md:flex-row justify-center mt-10">
        <video autoPlay muted loop className="rounded-lg w-full md:w-1/2 border border-orange-700 shadow-orange-500 mx-2 my-4">
          <source src={video1} type="video/mp4" />
          Your Browser does not support the video tag.
        </video>
        <video autoPlay muted loop className="rounded-lg w-full md:w-1/2 border border-orange-700 shadow-orange-500 mx-2 my-4">
          <source src={video2} type="video/mp4" />
          Your Browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default HeroSection