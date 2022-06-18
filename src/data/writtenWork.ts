export default interface WrittenWork {
  title: string,
  description: string,
  link: string,
}

export const posts: WrittenWork[] = [
  {
    title: 'Speed Running Ethernaut Using Only Foundry',
    description: `Full level write ups to OpenZeppelin's Ethernaut CTF levels 
                  using only the foundry toolchain consiting of the tools Cast and Forge.`,
    link: 'https://mouseless-eth.gitbook.io/speed-running-ethernaut-with-foundry/',
  },
  {
    title: 'How To Flash Claim NFTX Vaults To Redeem Airdrops',
    description: `Breakdown of a long tail MEV strategy where Flash 
                  Loans are utilized to redeem nfts from nftx vaults so that they can be used to redeem airdrops`,
    link: 'https://mirror.xyz/dashboard/edit/KaJH_F5cZ76Yspi_oPhn0qP9WAcEm0ouZLxPjSJbEy4',
  },
];
