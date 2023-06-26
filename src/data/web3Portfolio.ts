import RustySando from '../assets/work/web3/rustysando.png';
import Ctf from '../assets/work/web3/ctf.png';
import IcoSniperV1 from '../assets/work/web3/icosniperv1.png';
// import IcoSniperV2 from '../assets/work/web3/icosniperv2.png';
import MassMinting from '../assets/work/web3/massminting.png';
import FlashBotsRecovery from '../assets/work/web3/flashbotsrecovery.png';
import FlashClaim from '../assets/work/web3/flashclaim.png';
import BuidlGuild from '../assets/work/web3/buidlguild.png';
import BadgeDescription,
{
  typescript,
  flashbots,
  javascript,
  hardhat,
  solidity,
  react,
  foundry,
  huff,
  rust,
} from './badges';
import StatusDescription,
{
  privaterepo,
  opensource,
  writeup,
} from './status';

export default interface Web3Project {
  title: string,
  description: string,
  badges: BadgeDescription[],
  statuses: StatusDescription[],
  repoLink?: string,
  image: string,
}

export const web3: Web3Project[] = [
  {
    title: 'Rusty Sando',
    description: 'Competitive V2/V3 and multi-meat mev sandwich bot',
    badges: [rust, flashbots, huff, solidity, foundry],
    statuses: [opensource],
    repoLink: 'https://github.com/mouseless-eth/rusty-sando/tree/master/bot',
    image: RustySando,
  },
  {
    title: 'NFT Flash Claim',
    description: 'Long tail MEV strategy to claim airdrops by flash claiming NFT pools',
    badges: [flashbots, solidity, foundry, javascript],
    statuses: [privaterepo, writeup],
    repoLink: 'https://mirror.xyz/0x0000000000098341a924BD53454654A0dBBc4e43/KaJH_F5cZ76Yspi_oPhn0qP9WAcEm0ouZLxPjSJbEy4',
    image: FlashClaim,
  },
  {
    title: 'Flashbots Rescue',
    description: 'Beating a wallet sweeping bot to recover $44k of unclaimed vested ICO tokens',
    badges: [flashbots, javascript],
    statuses: [opensource],
    repoLink: 'https://github.com/mouseless-eth/Flashbots-Recovery',
    image: FlashBotsRecovery,
  },
  {
    title: 'Mass Minting NFTs',
    description: 'Custom smart contract to Mass Mint NFTs in a single transaction',
    badges: [foundry, solidity],
    statuses: [opensource],
    repoLink: 'https://github.com/mouseless-eth/NFT-Mass-Minting',
    image: MassMinting,
  },
  {
    title: 'ICO Sniping Bot',
    description: 'Monitoring and buying a token as soon as liquidity is added on a DEX',
    badges: [javascript],
    statuses: [opensource],
    repoLink: 'https://github.com/mouseless-eth/Listing-Sniping-Bot',
    image: IcoSniperV1,
  },
  {
    title: 'Builder in BuidlGuild',
    description: "Community of buidlers creating projects using scaffold-eth's dev stack",
    badges: [react, hardhat],
    statuses: [opensource],
    repoLink: 'https://buidlguidl.com/builders/0x0000000000098341a924BD53454654A0dBBc4e43',
    image: BuidlGuild,
  },
  {
    title: 'Ethernaut Writeup',
    description: 'Speed Running OpenZeppelin\'s Etherenaut CTF using only Foundry',
    badges: [foundry, solidity, typescript],
    statuses: [opensource, writeup],
    repoLink: 'https://mouseless-eth.gitbook.io/speed-running-ethernaut-with-foundry/',
    image: Ctf,
  },
];
