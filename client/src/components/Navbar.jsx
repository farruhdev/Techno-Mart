import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Divider,
  Flex,
  Image,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { TbShoppingCart } from 'react-icons/tb';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Link as ReactLink } from 'react-router-dom';
import ColorModeToggle from './ColorModeToggle';
import { toggleFavorites } from '../redux/actions/productActions';
import { MdOutlineAdminPanelSettings, MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import { ChevronDownIcon, CloseIcon } from '@chakra-ui/icons';
import { BiLogInCircle, BiUserCheck } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';
import { googleLogout } from '@react-oauth/google';
import { logout } from '../redux/actions/userActions';
import logo from './favicon.png';

function Navbar() {
  const { cartItems } = useSelector((state) => state.cart);
  const { favoritesToggled } = useSelector((state) => state.product);
  const { userInfo } = useSelector((state) => state.user);
  const [showBanner, setShowBanner] = useState(userInfo ? !userInfo.active : false);
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    if (userInfo && !userInfo.active) {
      setShowBanner(true);
    }
  }, [favoritesToggled, dispatch, userInfo]);

  const logoutHandler = () => {
    googleLogout();
    dispatch(logout());
    toast({
      description: 'You have been logged out.',
      status: 'success',
      isClosable: 'true',
    });
  };

  const Links = [
    {
      name: 'All Products',
      route: '/products',
    },
    { name: 'Smartphone', route: '/smartphones' },
    { name: 'Laptops', route: '/laptops' },
    { name: 'Living Appliances', route: '/living-appliance' },
    { name: 'Cameras', route: '/cameras' },
    { name: 'Kitchen digitals', route: '/home-digitals' },
    // { name: 'Hot Deals', route: '/hot-deals' },
    { name: 'Contact', route: '/contact' },
    { name: 'Services', route: '/services' },
  ];
  return (
    <nav
      className='navbar navbar-expand-lg navbar-light text-white '
      arial-label='navigation bar '
    >
      <div className='container'>
        <Link
          className='navbar-brand text-white'
          to={'/'}
        >
          <img
            src={logo}
            alt='Logo'
            style={{ width: '40px', height: '40px' }}
          />
          Techno Mart<span>.</span>
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarsFurni'
          aria-controls='navbarsFurni'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div
          className='collapse navbar-collapse'
          id='navbarsFurni'
        >
          <ul className='custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0'>
            {Links.map((link) => (
              <li
                className='nav-item active'
                key={link.name}
              >
                <Link
                  className='nav-link text-white font-semibold'
                  to={link.route}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <Box>
            <IconButton
              color={'#fff'}
              icon={<TbShoppingCart size='20px' />}
              as={ReactLink}
              to='/cart'
              variant='ghost'
            />
            {cartItems.length > 0 && (
              <Text
                fontWeight='bold'
                fontStyle='italic'
                position='absolute'
                ml='26px'
                mt='-6'
                fontSize='sm'
              >
                {cartItems.length}
              </Text>
            )}
          </Box>

          <ColorModeToggle />
          {favoritesToggled ? (
            <IconButton
              color={'white'}
              onClick={() => dispatch(toggleFavorites(false))}
              icon={<MdOutlineFavorite size='20px' />}
              variant='ghost'
            />
          ) : (
            <IconButton
              color={'white'}
              onClick={() => dispatch(toggleFavorites(true))}
              icon={<MdOutlineFavoriteBorder size='20px' />}
              variant='ghost'
            />
          )}

          <Flex alignItems='center'>
            {userInfo ? (
              <Menu>
                <MenuButton
                  rounded='full'
                  variant='link'
                  cursor='pointer'
                  minW='0'
                >
                  <HStack>
                    {userInfo.googleImage ? (
                      <Image
                        borderRadius='full'
                        boxSize='40px'
                        src={userInfo.googleImage}
                        referrerPolicy='no-referrer'
                      />
                    ) : (
                      <BiUserCheck size='30' />
                    )}
                    <ChevronDownIcon />
                  </HStack>
                </MenuButton>
                <MenuList>
                  <HStack>
                    <Text
                      pl='3'
                      as='i'
                    >
                      {userInfo.email}
                    </Text>
                    {userInfo.googleId && <FcGoogle />}
                  </HStack>
                  <Divider py='1' />
                  <MenuItem
                    as={ReactLink}
                    to='/order-history'
                  >
                    Order History
                  </MenuItem>
                  <MenuItem
                    as={ReactLink}
                    to='/profile'
                  >
                    Profile
                  </MenuItem>
                  {userInfo.isAdmin && (
                    <>
                      <MenuDivider />
                      <MenuItem
                        as={ReactLink}
                        to='/admin-console'
                      >
                        <MdOutlineAdminPanelSettings />
                        <Text ml='2'>Admin Console</Text>
                      </MenuItem>
                    </>
                  )}
                  <MenuDivider />
                  <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Menu>
                <MenuButton
                  as={IconButton}
                  variant='ghost'
                  cursor='pointer'
                  icon={<BiLogInCircle size='25px' />}
                />
                <MenuList>
                  <MenuItem
                    as={ReactLink}
                    to='/login'
                    p='2'
                    fontWeight='400'
                    variant='link'
                  >
                    Sign in
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem
                    as={ReactLink}
                    to='/registration'
                    p='2'
                    fontWeight='400'
                    variant='link'
                  >
                    Sign up
                  </MenuItem>
                </MenuList>
              </Menu>
            )}
          </Flex>

          {userInfo && !userInfo.active && showBanner && (
            <Box>
              <Alert status='warning'>
                <AlertIcon />
                <AlertTitle>Email not verified!</AlertTitle>
                <AlertDescription>You must verify your email address.</AlertDescription>
                <Spacer />
                <CloseIcon
                  cursor={'pointer'}
                  onClick={() => setShowBanner(false)}
                />
              </Alert>
            </Box>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
