import * as React from 'react';
import {
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import Section from '../components/section';
import Header from '../components/header';
import Web2Project, { web2 } from '../data/web2Portfolio';
import Web2Work from '../components/web2work';

function Web2() {
  const web2Projects = web2 as Web2Project[];
  return (
    <Section full={false}>
      <Header
        underlineColor="gray.300"
        mt={0}
        color="blackAlpha.800"
      >
        Web2 Projects
      </Header>
      <Text
        fontSize="md"
        textAlign="left"
        color="gray.700"
      >
        A selection of Web2 projects and solutions that I have worked on
      </Text>
      <SimpleGrid columns={[1, 1, 2]} spacing={5} mt={8}>
        {web2Projects.map((project) => (
          <Web2Work
            key={project.toString()}
            project={project}
          />
        ))}
      </SimpleGrid>
    </Section>
  );
}

export default Web2;
