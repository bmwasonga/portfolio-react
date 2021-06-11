import React from 'react';
import { GrLocation } from 'react-icons/gr';
import SocialMedia from '../../SocialMedia';
import ben from '../../assets/me.png';

function Footer() {
  return (
    <div className="bg-indigo-900  ">
      <div className="flex flex-row">
        <div className="pl-20 w-2/3">
          <h1 className="">Reach out to me</h1>
          <p>
            Discuss a project or just want to say hi? My Inbox is open for all.
          </p>

          <p className="">
            <GrLocation className="inline-block text-gray-200" />
            Nairobi, Kenya
          </p>
        </div>
        <div className=" bg-gray-600 flex justify-end border-4 border-white rounded-full overflow-hidden">
          <img className="h-60 w-60" src={ben} alt="Ben Wasonga" />
        </div>
      </div>

      <SocialMedia />
    </div>
  );
}

export default Footer;
