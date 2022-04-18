import NftSummary from '../assets/work/web3/nftsummary.png';
import IcoSniperV1 from '../assets/work/web3/icosniperv1.png';
import IcoSniperV2 from '../assets/work/web3/icosniperv2.png';
import MassMinting from '../assets/work/web3/massminting.png';
import FlashBotsRecovery from '../assets/work/web3/flashbotsrecovery.png';
import BadgeDescription,
{
  typescript,
  flashbots,
  ganache,
  hardhat,
  ethersjs,
  javascript,
  solidity,
  react,
} from './badges';

interface Web3Project {
  title: string,
  description: string,
  badges: BadgeDescription[],
  status?: BadgeDescription,
  image: string,
}

const web3: Web3Project[] = [
  {
    title: 'Recovering $44k with FlashBots',
    description: 'Beating a wallet draining bot to recover $44k of unclaimed vested ICO tokens',
    badges: [flashbots, javascript, ethersjs],
    image: FlashBotsRecovery,
  },
  {
    title: 'Mass Minting NFTs',
    description: 'Custom smart contract to Mass Mint NFTs in a single transaction',
    badges: [hardhat, ethersjs, ganache, typescript, solidity],
    image: MassMinting,
  },
  {
    title: 'ICO Sniping Bot v1',
    description: 'Monitoring and buying a token as soon as liquidity is added on a DEX',
    badges: [ethersjs, ganache, javascript],
    image: IcoSniperV1,
  },
  {
    title: 'ICO Sniping Bot v2',
    description: 'Implementing 1Inch\'s Router to v1 bot so now it works on all chains+exchanges',
    badges: [ethersjs, ganache, javascript, flashbots],
    image: IcoSniperV2,
  },
  {
    title: 'NFT summary creator',
    description: 'WebApp that produces clean reports of a user\'s NFT based on it\'s metadata',
    badges: [react, typescript, ethersjs],
    image: NftSummary,
  },
];

export default web3;
