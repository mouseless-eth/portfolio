// import HardHat from '../assets/techstack/hardhat.png';
import React from '../assets/techstack/react.png';
import TypeScript from '../assets/techstack/typescript.png';
// import JavaScript from '../assets/techstack/javascript.png';
// import Ganache from '../assets/techstack/ganache.png';
// import Ethersjs from '../assets/techstack/ethersjs.png';
import FlashBots from '../assets/techstack/flashbots.png';
import Solidity from '../assets/techstack/solidity.png';
import Chakra from '../assets/techstack/chakraui.png';
import Linux from '../assets/techstack/linux.png';
import NeoVim from '../assets/techstack/neovim.png';
import Foundry from '../assets/techstack/foundry.png';
import Rust from '../assets/techstack/rust.png';
import Huff from '../assets/techstack/huff.png';

export interface Skill {
  name: string,
  description: string,
  link: string,
  image: string,
}

const techstack: Skill[] = [
  {
    name: 'Foundry',
    description: 'Smart contract dev tools',
    link: 'https://book.getfoundry.sh/index.html',
    image: Foundry,
  },
  // {
  //   name: 'HardHat',
  //   description: 'EVM dev environment',
  //   link: 'https://hardhat.org/',
  //   image: HardHat,
  // },
  {
    name: 'Rust',
    description: 'Blazingly fast scripting',
    link: 'https://www.rust-lang.org/',
    image: Rust,
  },
  {
    name: 'Solidity',
    description: 'Smart contract scripting',
    link: 'https://docs.soliditylang.org/en/v0.8.13/',
    image: Solidity,
  },
  // {
  //   name: 'Ethersjs',
  //   description: 'Blockchain interaction',
  //   link: 'https://docs.ethers.io/v5/',
  //   image: Ethersjs,
  // },
  {
    name: 'TypeScript',
    description: 'Web dev scripting',
    link: 'https://www.typescriptlang.org/',
    image: TypeScript,
  },
  {
    name: 'Huff',
    description: 'Low level EVM scripting',
    link: 'https://huff.sh/',
    image: Huff,
  },
  {
    name: 'FlashBots',
    description: 'Democratized MEV',
    link: 'https://docs.flashbots.net/',
    image: FlashBots,
  },
  // {
  //   name: 'Ganache',
  //   description: 'Local blockchain for testing',
  //   link: 'https://trufflesuite.com/docs/ganache/',
  //   image: Ganache,
  // },
  {
    name: 'React',
    description: 'Frontend UI library',
    link: 'https://reactjs.org/',
    image: React,
  },
  // {
  //   name: 'JavaScript',
  //   description: 'Web dev scripting',
  //   link: 'https://www.javascript.com/',
  //   image: JavaScript,
  // },
  {
    name: 'Chakra UI',
    description: 'UI Component library',
    link: 'https://chakra-ui.com/',
    image: Chakra,
  },
  {
    name: 'Linux',
    description: 'Daily driver os',
    link: 'https://www.archlinux.org/',
    image: Linux,
  },
  {
    name: 'NeoVim',
    description: 'Code editor of choice',
    link: 'https://neovim.io/',
    image: NeoVim,
  },
];

export default techstack;