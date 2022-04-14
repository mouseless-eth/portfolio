import * as React from 'react';
import {
  Box,
  Text,
  Image,
  Badge,
  Wrap,
} from '@chakra-ui/react';
import BadgeDescription from '../data/badges';

type WorkProps = {
  title: string,
  description: string,
  image: string,
  badges: BadgeDescription[],
};

function work({
  title,
  description,
  image,
  badges,
}: WorkProps) {
  return (
    <Box p="5" rounded="lg" bg="whiteAlpha.300">
      <Box maxW="sm">
        <Image
          src={image}
          objectFit="cover"
          rounded="lg"
        />
      </Box>
      <Box p="5">
        <Text
          fontSize="2xl"
          fontWeight="bold"
        >
          {title}
        </Text>
        <Text
          fontSize="sm"
          align="center"
        >
          {description}
        </Text>
        <Wrap
          mt={3}
          shouldWrapChildren
        >
          {
            badges.map((badge: BadgeDescription) => (
              <Badge fontSize="12px" colorScheme={badge.colorScheme}>
                {badge.name}
              </Badge>
            ))
          }
        </Wrap>
      </Box>
    </Box>
  );
}

export default work;
