import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaHtml5,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { SiJavascript, SiMaterialUi } from 'react-icons/si';

export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://github.com/bmwasonga',
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com/ItsWasonga',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/benwasonga/',
    icon: <FaLinkedin />,
  },
];

export const packs = [
  {
    id: 1,
    icon: <FaHtml5 />,
  },
  {
    id: 2,
    icon: <IoLogoCss3 />,
  },
  {
    id: 3,
    icon: <SiJavascript />,
  },
  {
    id: 3,
    icon: <FaReact />,
  },
  {
    id: 3,
    icon: <SiMaterialUi />,
  },
  {
    id: 3,
    icon: <FaNodeJs />,
  },
];
