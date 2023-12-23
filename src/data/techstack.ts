// import HardHat from '../assets/techstack/hardhat.png';
import React from '../assets/techstack/react.png';
import TypeScript from '../assets/techstack/typescript.png';
// import JavaScript from '../assets/techstack/javascript.png';
// import Ganache from '../assets/techstack/ganache.png';
// import Ethersjs from '../assets/techstack/ethersjs.png';
import FlashBots from '../assets/techstack/flashbots.png';
import Solidity from '../assets/techstack/solidity.png';
import Chakra from '../assets/techstack/chakraui.png';
import NixOS from '../assets/techstack/nixos.png';
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
    description: 'evm tool suite',
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
    description: 'blazingly fast scripting',
    link: 'https://www.rust-lang.org/',
    image: Rust,
  },
  {
    name: 'Solidity',
    description: 'smart contract scripting',
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
    description: 'web scripting',
    link: 'https://www.typescriptlang.org/',
    image: TypeScript,
  },
  {
    name: 'Huff',
    description: 'low level evm scripting',
    link: 'https://huff.sh/',
    image: Huff,
  },
  {
    name: 'Flashbots',
    description: 'democratized mev',
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
    description: 'frontend ui library',
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
    description: 'gui library',
    link: 'https://chakra-ui.com/',
    image: Chakra,
  },
  {
    name: 'Nixos',
    description: 'favourite linux flavor',
    link: 'https://nixos.org/',
    image: NixOS,
  },
  {
    name: 'Neovim',
    description: 'go-to code editor',
    link: 'https://github.com/neovim/neovim',
    image: NeoVim,
  },
];

export default techstack;
