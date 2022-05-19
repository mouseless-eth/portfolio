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
];
