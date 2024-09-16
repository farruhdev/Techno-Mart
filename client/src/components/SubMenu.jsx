// SubMenu.jsx
import React from 'react';
import { Box, Stack, Text, Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

const SubMenu = () => {
	return (
		<Stack spacing='4'>
			<Text fontSize='lg' fontWeight='bold'>SubMenu Title</Text>
			<Box>
				<Link as={ReactLink} to='/extra-link-1'>
					<Text>Extra Link 1</Text>
				</Link>
				<Link as={ReactLink} to='/extra-link-2'>
					<Text>Extra Link 2</Text>
				</Link>
				<Link as={ReactLink} to='/extra-link-3'>
					<Text>Extra Link 3</Text>
				</Link>
			</Box>
		</Stack>
	);
};

export default SubMenu;
