import React from 'react';
import { social } from './Data';

export default function SocialMedia() {
  return (
    <div>
      <div>
        <ul className="footer">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url} target="blank">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      );
    </div>
  );
}
