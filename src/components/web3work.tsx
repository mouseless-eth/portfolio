import {
  Link,
  Box,
  Text,
  Image,
  Badge,
  Wrap,
  Stack,
} from '@chakra-ui/react';
import BadgeDescription from '../data/badges';
import Web3Project from '../data/web3Portfolio';
import StatusDescription from '../data/status';
import { MotionBox } from './motion';

interface Props {
  project: Web3Project,
}

function Frame({ project }: Props) {
  const {
    title,
    description,
    image,
    badges,
    statuses,
  } = project;
  return (
    <MotionBox
      pl="4"
      pr="4"
      pb="4"
      pt="4"
      rounded="lg"
      bg="whiteAlpha.900"
      boxShadow="base"
      _hover={{ shadow: 'md' }}
      align="center"
      whileHover={{ y: -5 }}
    >
      <Box maxW="sm">
        <Image
          src={image}
          objectFit="cover"
          rounded="lg"
        />
      </Box>
      <Stack
        justify="center"
        direction="row"
      >
        {statuses.map((status: StatusDescription) => (
          <Text
            fontSize="10px"
            color="gray.500"
            variant="solid"
          >
            {status.name}
          </Text>
        ))}
      </Stack>
      <Box pt={1}>
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="blackAlpha.900"
        >
          {title}
        </Text>
        <Text
          fontSize="sm"
          align="center"
          color="blackAlpha.800"
        >
          {description}
        </Text>
        <Wrap
          mt={3}
          justify="center"
          shouldWrapChildren
        >
          {
            badges.map((badge: BadgeDescription) => (
              <Badge
                fontSize="12px"
                colorScheme={badge.colorScheme}
                color="blackAlpha.700"
              >
                {badge.name}
              </Badge>
            ))
          }
        </Wrap>
      </Box>
    </MotionBox>
  );
}

function Work({ project }: Props) {
  const { repoLink } = project;
  console.log(project);
  return (
    repoLink
      ? (
        <Link
          href={repoLink}
          target="_blank"
        >
          <Frame project={project} />
        </Link>
      )
      : (
        <Frame project={project} />
      )
  );
}

export default Work;
