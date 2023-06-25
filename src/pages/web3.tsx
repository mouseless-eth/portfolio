import {
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import Section from '../components/section';
import Header from '../components/header';
import Web3Project, { web3 } from '../data/web3Portfolio';
import Web3Work from '../components/web3work';

function Web3() {
  const web3Projects = web3 as Web3Project[];

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
        A selection of Web3 projects and solutions that I have worked on.
      </Text>
      <SimpleGrid columns={[1, 1, 2]} spacing={5} mt={8}>
        {web3Projects.map((project) => (
          <Web3Work
            key={project.toString()}
            project={project}
          />
        ))}
      </SimpleGrid>
    </Section>
  );
}

export default Web3;
