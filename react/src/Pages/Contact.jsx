import React from 'react';

const Contact = () => {
  return (
  <div>
      <div className=" flex p-4 bg-gray-100 justify-center rounded-t-lg ">
        <strong className="text-xl">Bengaluru</strong>
      </div>
      
       <div class="flex flex-row justify-center shadow-xl p-10 m-4 pb-8">
          <div className="ps-2 px-10">
            <h6 className="font-semibold text-lg mb-2">
            Centre for Development of Advanced Computing, Knowledge Park
            </h6>
           <p className="text-gray-700">
            Opp. HAL Aeroengine Division
            <br />
            Old Madras Road, Byappanahalli,
            <br />
            Bengaluru - 560 038
            <br />
            Karnataka (India)
            <br />
            Phone: +91-80-25093400
            </p>
            <div className="mt-4 ">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7211244736413!2d77.65014305049604!3d12.989680390799073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1139aafb10e7%3A0xd773e57a228d116f!2sC-DAC!5e0!3m2!1sen!2sin!4v1663576597783!5m2!1sen!2sin"
              className="w-full border-0 rounded shadow"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ height: '200px' }}
              ></iframe>
            </div>
          </div>



          <div className="ps-10 px-2">

            <div className="">
                <h6 className="font-semibold text-lg mb-2">
                  Centre for Development of Advanced Computing, Electronics City
                </h6>
                <p className="text-gray-700">
                  68, Electronics City
                  <br />
                  Bengaluru - 561229
                  <br />
                  Karnataka (India)
                  <br />
                  Phone: +91-80-2852-3300
                  <br />
                  Fax: +91-80-28522590
                </p>
                <div className="mt-4 px-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2313.015406931886!2d77.66138454820005!3d12.842453867081133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c85b85ff9c3%3A0x701fbde6d60c4040!2sCenter%20for%20Development%20of%20Advanced%20Computing!5e0!3m2!1sen!2sin!4v1665553645373!5m2!1sen!2sin"
                    className="w-full border-0 rounded shadow"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ height: '200px' }}
                  ></iframe>
                </div>
            </div>
          </div>

        </div>
  </div>
  );
};

export default Contact;