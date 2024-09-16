// SubMenu.js
import React from 'react';
import { Box, HStack, Text, Link as ChakraLink } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

const SubMenu = () => {
    const menuItems = [
        { name: 'About Us', route: '/about' },
        { name: 'Blog', route: '/blog' },
        { name: 'Careers', route: '/careers' },
        { name: 'Support', route: '/support' },
    ];

    return (
        <Box bg='cyan.200' py='2'>
            <HStack spacing='8' justifyContent='center'>
                {menuItems.map((item) => (
                    <ChakraLink
                        key={item.route}
                        as={ReactLink}
                        to={item.route}
                        px='2'
                        py='1'
                        rounded='md'
                        _hover={{ bg: 'cyan.300', textDecoration: 'none' }}
                    >
                        <Text fontWeight='medium'>{item.name}</Text>
                    </ChakraLink>
                ))}
            </HStack>
        </Box>
    );
};

export default SubMenu;
