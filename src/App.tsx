import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { theme } from './style/theme';
import Layout from './layouts/layout';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>0xMouseLess</title>
        <meta name="description" content="Developer portfolio using react and chakra-ui" />
      </Helmet>
      <Layout />
    </ChakraProvider>
  );
}

export default App;
