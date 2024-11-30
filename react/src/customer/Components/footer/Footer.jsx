import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          
          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="mt-4 text-sm text-gray-400">
              CDAC Bengaluru is a premier R&D organization in IT, Electronics, and associated areas. We specialize in providing innovative solutions in IOT and more.
            </p>
          </div>
          
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="mt-4 text-sm text-gray-400">
              Email: actsb@cdac.in<br />
              Phone: +91-80-28523300 / +91-80-25093400/<br />
              Fax: +91-80-28522590

            </p>
          </div>
          
          {/* Address Section */}
          <div>
            <h3 className="text-lg font-semibold">Address</h3>
            <p className="mt-4 text-sm text-gray-400">
              C-DAC Bengaluru<br />
              No. 68, 4th Cross, Electronic City Phase 1, Hosur Road, Opp.BSNL Telephone Exchange<br />
              Bengaluru - 560038, Karnataka, India
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          © 2024 CDAC Bengaluru. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;