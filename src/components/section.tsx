import React from 'react';
import { Center } from '@chakra-ui/react';
import Container from './container';

type SectionProps = {
  full: boolean,
  children: any,
};

function Section({
  full,
  children,
  ...rest
}: SectionProps) {
  return (
    <Center as="section" {...rest} w="100%">
      {full ? children : <Container>{children}</Container>}
    </Center>
  );
}

export default Section;
