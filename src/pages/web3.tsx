import * as React from 'react';
import {
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import Section from '../components/section';
import Header from '../components/header';
import web3 from '../data/web3Portfolio';
import Work from '../components/work';

function Web3() {
  return (
    <Section full={false}>
      <Header
        underlineColor="gray.300"
        mt={0}
        color="blackAlpha.800"
      >
        Web3 Projects
      </Header>
      <Text
        fontSize="md"
        textAlign="left"
        color="gray.700"
      >
        A selection of Web3 projects and solutions that I have worked on
      </Text>
      <SimpleGrid columns={[1, 1, 2]} spacing={5} mt={8}>
        {web3.map((project) => (
          <Work
            key={project.toString()}
            title={project.title}
            description={project.description}
            image={project.image}
            badges={project.badges}
          />
        ))}
      </SimpleGrid>
    </Section>
  );
}

export default Web3;
