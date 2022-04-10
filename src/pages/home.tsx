import * as React from 'react';
import { useState } from 'react';
import {
  VStack,
  Text,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react';
import techstack, { Skill } from '../data/techstack';
import SkillCard from '../components/skill-card';
import Section from '../components/section';
import { PageSlideFade, container } from '../components/page-transitions';
import Header from '../components/header';
import { MotionBox } from '../components/motion';

function Home() {
  const [techstackList, setSkillsList] = useState<Skill[] | []>([]);

  React.useEffect(() => {
    setSkillsList(techstack);
  }, []);

  return (
    <PageSlideFade>
      <VStack spacing={8}>
        <Section>
          <VStack>
            <Header mt={0} mb={1}>
              My Web3 Techstack & Tools
            </Header>
            <Text
              fontSize="xl"
              color={useColorModeValue('gray.500', 'gray.200')}
              maxW="lg"
              textAlign="center"
            >
              A list of tools and technologies that I use on a
              regular basis when creating Web3 solutions.
            </Text>
          </VStack>
        </Section>
        <Section>
          <MotionBox
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={8}>
              {techstackList.map((tool: Skill) => (
                <SkillCard
                  key={tool}
                  name={tool.name}
                  description={tool.description}
                  image={tool.image}
                  link={tool.link}
                />
              ))}
            </SimpleGrid>
          </MotionBox>
        </Section>
      </VStack>
    </PageSlideFade>
  );
}

export default Home;
