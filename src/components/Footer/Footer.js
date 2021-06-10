import React from 'react';
import { social } from '../Data';

function Footer() {
  return (
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
}

export default Footer;
