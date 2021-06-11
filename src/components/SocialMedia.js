import React from 'react';
import { social } from './Data';

export default function SocialMedia() {
  return (
    <div>
      <div className="flex justify-center">
        <ul className="flex flex-row  justify-between p-6">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li
                key={id}
                className="text-gray-400 hover:text-gray-700 xl:text-5xl lg:text-5xl md:text-4xl sm:text-4xl pl-10"
              >
                <a href={url} target="blank">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
