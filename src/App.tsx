import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './style/theme';
import Layout from './layouts/layout';

function App(): React.ReactNode {
  return (
    <ChakraProvider theme={theme}>
      <Layout />
    </ChakraProvider>
  );
}

export default App;
