import * as React from 'react';
import {
  Text,
  Heading,
  Center,
  VStack,
} from '@chakra-ui/react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { twitterHandle } from '../configs/site-config';
import Section from '../components/section';
// import Header from '../components/header';

/* eslint-disable react/jsx-no-constructed-context-values */
function About() {
  return (
    <Section full={false}>
      <VStack mt={5}>
        <Heading color="blue.500">
          Journey into Web3
        </Heading>
        <VStack spacing={5}>
          <Text fontSize="lg" align="left">
            Funnily enough, my web3 dev journey started when my NFT
            got stuck on an escrow contract because the
            devs forgot to add a UI withdraw button. I saved my NFT by running a
            sketchy ethersjs script off an anon I met on discord.
            I then realized that I could
            interact with the blockchain directly through code and wrote an NFT minting
            bot for a collection that dropped 100 NFTs weekly for ten weeks.
          </Text>
          <Text fontSize="lg" align="left">
            For ten weeks straight, I would optimize my bot during the week
            after school, run it on the weekend,
            and then repeat. During this period,
            I gained a deep respect and understanding of the EVM, as I had to
            self-learn from various docs/writeups & niche videos to optimize my bot further.
          </Text>
          <Text fontSize="lg" align="left">
            Before this I was a crypto native DeFi degen and would use my student support grants to
            ape into various protocols and Dapps. The support granted to students is not a huge
            sum, so all of my onchain activity was through interacting with forks
            of Ethereum projects hosted on BSC as I could not afford the ETH
            gas fees during the peak of defi summer
            given how often I would make transactions to experiment with trendy protocols.
          </Text>

          <Text fontSize="lg" align="left">
            After the 10 weeks of running my minting bot,
            I had accumilated enough capital to finally move all of
            my onchain activity onto the Ethereum mainnet.
            And since my move,
            <Text as="b" color="blue.500">
              {' '}
              I have extracted a little over 6 figures (USD)
              through capturing Long-Tail MEV strategies.
              {' '}
            </Text>
          </Text>
          <Text fontSize="lg" align="left">
            Implementing my long-tail bots directly exposed
            me to the full stack of EVM development as I had to work with understanding
            contracts down to their bytecode,
            how to ensure my transaction would end up in a specific block,
            and countless hours of writing tests in local forked mainnet instances.
          </Text>
          <Text fontSize="lg" align="left">
            Moving forward, I plan to move away from bot development,
            and I am currently working on transferring the
            knowledge and skills I gained and putting them toward Dapp development.
            I want to build software that people use.
          </Text>
          <Text fontSize="lg" align="left">
            I believe that society as a whole will benefit from a decentralized
            digital future and I want to be here BUIDLING when mass adoption hits.
          </Text>
        </VStack>
        <Heading mt={15}>
          Catch My Recent Tweets
        </Heading>
        <Center>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName={twitterHandle}
            options={{ width: '400' }}
          />
        </Center>
      </VStack>
    </Section>
  );
}

export default About;
