import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-16 bg-neutral-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul>
              {resourcesLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.href} className="text-gray-400 hover:text-white">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4">
            <h3 className="text-xl font-semibold mb-4">Platform</h3>
            <ul>
              {platformLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.href} className="text-gray-400 hover:text-white">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4">
            <h3 className="text-xl font-semibold mb-4">Community</h3>
            <ul>
              {communityLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.href} className="text-gray-400 hover:text-white">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-400 mt-8">
          Copyright 2023 VReality. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;