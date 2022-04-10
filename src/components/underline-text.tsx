import { PropsWithChildren } from 'react';
import { Box } from '@chakra-ui/react';

interface Props {
  color: string;
  h?: string;
  zIndex?: number;
}
function UnderlinedText({
  children,
  color, // eslint-disable-line @typescript-eslint/no-unused-vars
  h,
  zIndex, // eslint-disable-line @typescript-eslint/no-unused-vars
}: PropsWithChildren<Props>) {
  return (
    <Box as="span" display="inline-block" position="relative">
      {children}
      <Box as="span" display="block" position="absolute" bg="gray.200" w="100%" h={h || '1px'} bottom={-2} />
    </Box>
  );
}
export default UnderlinedText;
