import * as React from 'react';
import {
  SimpleGrid,
} from '@chakra-ui/react';
import web2 from '../data/web2Portfolio';
import Work from '../components/work';

function Web2() {
  return (
    <SimpleGrid columns={[1, 1, 2]} spacing={5} mt={8}>
      {web2.map((project) => (
        <Work
          key={project.toString()}
          title={project.title}
          description={project.description}
          image={project.image}
          badges={project.badges}
        />
      ))}
    </SimpleGrid>
  );
}

export default Web2;
