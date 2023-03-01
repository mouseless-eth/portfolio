import React from 'react';
import {
  FaGithub,
  FaTwitter,
} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} MouseLess. All Rights Reserved.`,
  author: {
    name: '0xMouseLess',
    accounts: [
      {
        url: 'https://github.com/mouseless-eth',
        label: 'Github Account',
        type: 'gray',
        icon: <FaGithub />,
      },
      {
        url: 'https://twitter.com/0xmouseless',
        label: 'Twitter Account',
        type: 'twitter',
        icon: <FaTwitter />,
      },
      {
        url: 'mailto:maximus.holm@gmail.com',
        label: 'Email',
        type: 'gray',
        icon: <FiMail />,
      },
    ],
  },
};

export const twitterHandle = '0xmouseless';
export const githubHandle = 'MouseLess-eth';

export default siteConfig;
