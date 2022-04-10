import { Box, BoxProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import UnderlinedText from './underline-text';

interface Props extends BoxProps {
  underlineColor?: string;
  emoji?: string;
}

function Header({
  children,
  underlineColor = '',
  emoji,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <Box as="h1" mt={10} mb={6} fontSize="3xl" lineHeight="shorter" fontWeight="bold" {...props} textAlign="left">
      <UnderlinedText color={underlineColor}>{children}</UnderlinedText>
      {emoji ? ` ${emoji}` : ''}
    </Box>
  );
}
export default Header;
