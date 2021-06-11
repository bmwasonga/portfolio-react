import React from 'react';
import { GrLocation } from 'react-icons/gr';
import emoji from 'react-easy-emoji';

import SocialMedia from '../../SocialMedia';
import ben from '../../assets/me.png';

function Footer() {
  return (
    <div id="contact" className="bg-indigo-900 ">
      <div className="flex flex-row flex-wrap lg:flex-row xl:flex-row md:flex-col sm:flex-col items-center justify-center ">
        <div className="xl:pl-20 lg:pl-20 md:pl-10 w-2/3 sm:w-full ">
          <h1 className="text-gray-100 lg:text3xl md:text-2xl sm:text-2xl mt-5 mb-5">
            Reach out to me
          </h1>
          <p className="text-gray-100 lg:text3xl md:text-2xl sm:text-2xl mt-5 mb-5">
            Discuss a project or just want to say hi? My Inbox is open for all.
          </p>

          <p className="text-gray-500 lg:text3xl md:text-2xl sm:text-2xl mt-5 mb-5">
            <GrLocation className="inline-block text-gray-200" />
            Nairobi, Kenya
          </p>
        </div>
        <div className=" bg-gray-600 flex justify-end border-4 border-white rounded-full overflow-hidden mt-10">
          <img className="h-60 w-60" src={ben} alt="Ben Wasonga" />
        </div>
      </div>

      <SocialMedia />

      <p className="text-sm text-blue-50 text-center">
        Made with love {''}
        <span className="inline-block">{emoji(' ❤️ ')}</span>
        {''}
        ,tailwindcss and react
      </p>
    </div>
  );
}

export default Footer;
