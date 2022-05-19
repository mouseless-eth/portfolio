import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { MotionBox } from './motion';
import WrittenWork from '../data/writtenWork';

function Post({
  title,
  description,
  link,
}: WrittenWork) {
  return (
    <MotionBox
      width="100%"
    >
      <MotionBox whileHover={{ y: -5 }}>
        <Link href={link} isExternal>
          <HStack
            p={4}
            bg={useColorModeValue('teal.50', 'teal.500')}
            rounded="md"
            borderWidth="1px"
            borderColor={useColorModeValue('gray.100', 'gray.700')}
            w="100%"
            textAlign="left"
            align="start"
            spacing={4}
            _hover={{ shadow: 'md' }}
          >
            <VStack
              align="start"
              justify="flex-start"
              spacing={1}
              maxW="lg"
              h="100%"
            >
              <VStack spacing={0} align="start">
                <Text color="blackAlpha.800" fontWeight="bold" fontSize="md" noOfLines={2}>
                  {title}
                </Text>
                <Text
                  fontSize="sm"
                  color={useColorModeValue('gray.700', 'gray.200')}
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

export default Post;
