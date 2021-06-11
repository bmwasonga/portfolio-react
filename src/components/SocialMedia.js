import React from 'react';
import { social } from './Data';

export default function SocialMedia() {
  return (
    <div>
      <div className="flex justify-center">
        <ul className="flex flex-row  w-3/12 justify-between p-6">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li
                key={id}
                className="text-gray-400 hover:text-gray-700 text-5xl"
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
