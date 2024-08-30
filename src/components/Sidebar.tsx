import { Box, VStack, Text, Link, Flex, Icon } from '@chakra-ui/react';
import { FiMail, FiSettings } from 'react-icons/fi';
import { MdPeople } from 'react-icons/md';
import { CgNotes } from 'react-icons/cg';
import { FaRegPaperPlane } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Sidebar = () => {
	const router = useRouter();
	const routers = [
		{ name: 'Chat With Nezumi', path: '/chat', icon: CgNotes },
		{ name: 'Campaign', path: '/campaign', icon: FaRegPaperPlane },
		{ name: 'Mail', path: '/mail', icon: FiMail },
		{ name: 'Leads', path: '/', icon: MdPeople },
		{ name: 'Settings', path: '/settings', icon: FiSettings },
	];
	return (
		<Box
			as='nav'
			w='250px'
			bg='white'
			h='100vh'
			borderRight='1px solid'
			borderColor='gray.200'
			p={5}
			display='flex'
			flexDirection='column'
			justifyContent='space-between'
			position='fixed'
			left='0'
			top='0'
			boxShadow='md'
			zIndex='1'
		>
			<VStack spacing={6} align='stretch'>
				<Text
					fontSize='xl'
					borderBottom='1px solid'
					borderColor={'gray.200'}
					fontWeight='bold'
					color='purple.600'
					mb={8}
				>
					SHŌDEN
				</Text>
				<VStack spacing={8} align='stretch'>
					{routers.map((item) => (
						<Link
							key={item.path}
							href={item.path}
							_hover={{ textDecoration: 'none' }}
							onClick={() => router.push(item.path)}
						>
							<Flex
								align='center'
								bg={router.pathname === item.path ? 'purple.50' : 'transparent'}
								color={router.pathname === item.path ? 'purple.600' : 'gray.600'}
								borderRadius='md'
								px={3}
								py={2}
							>
								<Icon as={item.icon} mr={3} />
								<Text fontWeight={router.pathname === item.path ? 'bold' : 'normal'}>
									{item.name}
								</Text>
							</Flex>
						</Link>
					))}
				</VStack>
			</VStack>

			<Flex mt='auto' align='center'>
				<Box w='40px' h='40px' borderRadius='full' bg='gray.300' mr={3} />
				<Text>John Doe</Text>
			</Flex>
		</Box>
	);
};

export default Sidebar;
