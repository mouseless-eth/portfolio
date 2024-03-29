import { useEffect, useState } from 'react';
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Box,
  Link,
  Image,
  Skeleton,
} from '@chakra-ui/react';
import { getColors } from 'react-native-image-colors';
import { MotionBox } from './motion';
import { item } from './page-transitions';

type SkillCardProps = {
  name: string,
  image: string,
  link: string,
  description: string,
};

function SkillCard({
  name,
  image,
  link,
  description,
}: SkillCardProps) {
  const [colors, setColors] = useState<string>('#ffffff');

  useEffect(() => {
    getColors(image).then((color) => {
      const selectedColor = color.platform === 'android' || color.platform === 'web' ? color.lightVibrant : color.primary;
      setColors(selectedColor);
    });
  }, []);

  return (
    <MotionBox variants={item}>
      <MotionBox whileHover={{ y: -5 }}>
        <Link href={link} isExternal>
          <HStack
            p={4}
            bg={useColorModeValue('white', 'gray.800')}
            rounded="xl"
            borderWidth="1px"
            borderColor={useColorModeValue('gray.100', 'gray.700')}
            w="100%"
            textAlign="left"
            align="start"
            spacing={4}
            _hover={{ shadow: 'md' }}
          >
            <Box
              rounded="lg"
              p={2}
              position="relative"
              overflow="hidden"
              lineHeight={0}
              boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
            >
              <Box
                bg={colors}
                position="absolute"
                top={0}
                bottom={0}
                left={0}
                right={0}
                opacity={0.25}
              >
                {' '}
              </Box>
              {colors === '#ffffff' ? (
                <Skeleton height={26} width={26} rounded="md" />
              ) : (
                <Image
                  src={image}
                  height={26}
                  width={26}
                  rounded="md"
                />
              )}
            </Box>
            <VStack
              align="start"
              justify="flex-start"
              spacing={1}
              maxW="lg"
              h="100%"
            >
              <VStack spacing={0} align="start">
                <Text fontWeight="bold" fontSize="md" noOfLines={2}>
                  {name}
                </Text>
                <Text
                  fontSize="sm"
                  color={useColorModeValue('gray.500', 'gray.200')}
                >
                  {description}
                </Text>
              </VStack>
            </VStack>
          </HStack>
        </Link>
      </MotionBox>
    </MotionBox>
  );
}

export default SkillCard;
