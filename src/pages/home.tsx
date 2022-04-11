import * as React from 'react';
import { useState } from 'react';
import {
  HStack,
  Button,
  Badge,
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
      <VStack spacing={6}>
        <Section full={false}>
          <Header
            underlineColor="gray.300"
            mt={0}
            color="gray.700"
          >
            Hey! 👋
          </Header>
          <Text>
            I&apos;m William, a 20 year old dev without a mouse that loves to
            {' '}
            <Badge bg="teal.50" variant="outline">
              Learn
            </Badge>
            ,
            {' '}
            <Badge bg="teal.50" variant="outline">
              Build
            </Badge>
            , and
            {' '}
            <Badge bg="teal.50" variant="outline">
              Experiment
            </Badge>
          </Text>
        </Section>
        <Section full={false}>
          Follow my progress into becoming a fullstack Web3 developer
          <HStack
            spacing="6"
            justifyContent="center"
          >
            <Button
              colorScheme="teal"
              variant="solid"
            >
              Web3 Projects
            </Button>
            <Button
              colorScheme="teal"
              variant="solid"
            >
              Web2 Projects
            </Button>
          </HStack>
        </Section>
        <Section full={false}>
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
              tools and technologies that I use on a
              regular basis when creating Web3 solutions
            </Text>
          </VStack>
        </Section>
        <Section full={false}>
          <MotionBox
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={8}>
              {techstackList.map((tool: Skill) => (
                <SkillCard
                  key={tool.toString()}
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
