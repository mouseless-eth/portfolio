import {
  FaGithub,
  FaTwitter,
} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} 0xMouseLess. All Rights Reserved.`,
  author: {
    name: '0xmouseless',
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
        url: 'mailto:0xmouseless@gmail.com',
        label: 'Email',
        type: 'gray',
        icon: <FiMail />,
      },
    ],
  },
};

export const twitterHandle = '0xmouseless';
export const githubHandle = 'mouseless-eth';

export default siteConfig;
