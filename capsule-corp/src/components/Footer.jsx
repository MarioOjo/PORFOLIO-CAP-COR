import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-capsule-yellow to-saiyan-orange rounded-full flex items-center justify-center">
                <i className="fa-solid fa-capsules text-saiyan-blue text-lg"></i>
              </div>
              <h5 className="font-saiyan font-bold text-lg">CAPSULE CORP.</h5>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Founded by Dr. Brief, Capsule Corp. has been Earth’s leading technology company since Age 712.
              We specialize in capsule technology, spacecraft, and battle equipment.
            </p>
          </div>
          <div>
            <h6 className="font-bold text-lg mb-6">Quick Links</h6>
            <ul className="space-y-3 text-gray-400">
              <li><button className="hover:text-white cursor-pointer transition-colors">About Us</button></li>
              <li><button className="hover:text-white cursor-pointer transition-colors">Products</button></li>
              <li><button className="hover:text-white cursor-pointer transition-colors">Training Center</button></li>
              <li><button className="hover:text-white cursor-pointer transition-colors">Support</button></li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-lg mb-6">Categories</h6>
            <ul className="space-y-3 text-gray-400">
              <li><button className="hover:text-white cursor-pointer transition-colors">Battle Armor</button></li>
              <li><button className="hover:text-white cursor-pointer transition-colors">Training Equipment</button></li>
              <li><button className="hover:text-white cursor-pointer transition-colors">Capsule Technology</button></li>
              <li><button className="hover:text-white cursor-pointer transition-colors">Accessories</button></li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-lg mb-6">Connect</h6>
            <div className="flex space-x-4 mb-6">
              <i className="fa-brands fa-facebook text-2xl hover:text-saiyan-blue cursor-pointer transition-colors"></i>
              <i className="fa-brands fa-twitter text-2xl hover:text-saiyan-blue cursor-pointer transition-colors"></i>
              <i className="fa-brands fa-instagram text-2xl hover:text-saiyan-orange cursor-pointer transition-colors"></i>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Follow us for the latest updates from Earth’s greatest scientists!
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          © Age 762 Capsule Corporation. All rights reserved. No Saiyans were harmed in the making of this website.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
