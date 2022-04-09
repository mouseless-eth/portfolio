import React from 'react';
import { Box } from '@chakra-ui/react';

function Container(props) {
  return (
    <Box
      textAlign="center"
      fontSize="xl"
      w={['90%', '85%', '80%']}
      maxW={800}
      mx="auto"
      {...props}
    />
  );
}

export default Container;
