import * as React from 'react';
import {
  Box,
  Text,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
  Icon,
} from '@chakra-ui/react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  FaGithub,
  FaTwitter,
  FaEthereum,
} from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { MdWeb } from 'react-icons/md';
import ColorModeSwitcher from './ColorModeSwitcher';
import UserIcon from '../assets/images/user_icon.png';

const webLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
];

const mobileLinks = [
  { name: 'Web3 Projects', path: '/web3' },
  { name: 'Web2 Projects', path: '/web2' },
  { name: 'About', path: '/about' },
  { name: 'Home', path: '/' },
];

interface NavLinkProps {
  index?: string;
  name: string;
  path: string;
  onClose: () => void;
}

function NavLink({
  index, // eslint-disable-line @typescript-eslint/no-unused-vars
  name,
  path,
  onClose,
}: NavLinkProps) {
  return (
    <Link
      as={RouterNavLink}
      px={2}
      py={1}
      rounded="md"
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.900'),
      }}
      _activeLink={{
        color: useColorModeValue('blue.500', 'blue.200'),
      }}
      onClick={() => onClose()}
      to={path}
    >
      {name}
    </Link>
  );
}

function TopNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const menuProps = {
    bg: useColorModeValue('gray.200', 'gray.900'),
    color: useColorModeValue('teal.800', 'teal.500'),
  };

  return (
    <Box bg={useColorModeValue('white', 'gray.700')} px={4} boxShadow="lg">
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        w={['90%', '85%', '80%']}
        maxW={800}
        mx="auto"
      >
        <HStack spacing={8} alignItems="center">
          <IconButton
            size="md"
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label="Open Menu"
            display={['inherit', 'inherit', 'none']}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box>
            <Avatar
              as={Link}
              size="sm"
              href="/"
              src={UserIcon}
            />
          </Box>
          <Text
            color="gray.500"
            display={['inherit', 'inherit', 'none']}
          >
            MouseLess.eth
          </Text>
          <HStack
            as="nav"
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
          >
            {webLinks.map((link) => (
              <NavLink
                key={link.toString()}
                name={link.name}
                path={link.path}
                onClose={onClose}
              />
            ))}
            <Menu isLazy>
              <MenuButton
                as={Button}
                variant="ghost"
                size="sm"
                px={2}
                py={1.5}
                fontSize="1em"
                height="auto"
                _hover={menuProps}
                _expanded={menuProps}
                _focus={{ boxShadow: 'outline' }}
                rightIcon={<BiChevronDown size={18} />}
              >
                Projects
              </MenuButton>
              <MenuList zIndex={5}>
                <Link as={RouterNavLink} to="/web3">
                  <MenuItem>
                    <HStack>
                      <Icon
                        as={FaEthereum}
                        size={15}
                        color={useColorModeValue('blue.500', 'blue.200')}
                      />
                      <Text>Web 3</Text>
                    </HStack>
                  </MenuItem>
                </Link>
                <Link as={RouterNavLink} to="/web2">
                  <MenuItem>
                    <HStack>
                      <Icon
                        as={MdWeb}
                        size={15}
                        color={useColorModeValue('blue.500', 'blue.200')}
                      />
                      <Text>Web 2</Text>
                    </HStack>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <IconButton
            as={Link}
            href="https://twitter.com/0xMouseLessDev"
            size="md"
            icon={<FaTwitter />}
            aria-label="Twitter account"
            bg={useColorModeValue('white', 'gray.700')}
            _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('gray.200', 'gray.900'),
            }}
            target="_blank"
          />
          <IconButton
            as={Link}
            href="https://github.com/0xMouseLess"
            size="md"
            icon={<FaGithub />}
            aria-label="Github account"
            bg={useColorModeValue('white', 'gray.700')}
            _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('gray.200', 'gray.900'),
            }}
            target="_blank"
          />
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
      </Flex>
      {isOpen ? (
        <Box
          pb={4}
          w={['100%', '100%', '80%']}
          maxW={800}
          display={['inherit', 'inherit', 'none']}
        >
          <Stack as="nav" spacing={4}>
            {mobileLinks.map((link) => (
              <NavLink
                index={link.toString()}
                name={link.name}
                path={link.path}
                onClose={onClose}
              />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

export default TopNav;
