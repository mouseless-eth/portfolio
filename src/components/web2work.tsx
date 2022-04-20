import * as React from 'react';
import {
  Box,
  Text,
  Image,
  Badge,
  Wrap,
} from '@chakra-ui/react';
import BadgeDescription from '../data/badges';
import Web2Project from '../data/web2Portfolio';

interface Props {
  project: Web2Project,
}

function Work({ project }: Props) {
  const {
    title,
    description,
    image,
    badges,
  } = project;
  return (
    <Box
      p="4"
      rounded="lg"
      bg="whiteAlpha.900"
      boxShadow="base"
      // @ts-expect-error
      align="center"
    >
      <Box maxW="sm">
        <Image
          src={image}
          objectFit="cover"
          rounded="lg"
        />
      </Box>
      <Box pt={4}>
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
    </Box>
  );
}

export default Work;
