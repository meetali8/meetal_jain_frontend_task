// components/LeadsHeader.tsx

import { Header } from '@/contants/commonInterface';
import { Badge, Button, Flex, Icon, Text } from '@chakra-ui/react';
import { FiArrowLeft } from 'react-icons/fi';

const LeadsHeader = (headerProps: Header) => {
	return (
		<Flex
			justify='space-between'
			align='center'
			mb={6}
			borderBottom='1px solid'
			borderColor='gray.200'
			pb={4}
		>
			<Flex align='center'>
				<Icon as={FiArrowLeft} boxSize={5} mr={4} cursor='pointer' />
				<Text fontSize='xl' fontWeight='bold'>
					{headerProps.title}
				</Text>
				<Badge
					px={3}
					py={1}
					ml={4}
					borderRadius='full'
					fontSize='xs'
					bg='orange.100'
					color='orange.600'
				>
					In Progress
				</Badge>
			</Flex>
			<Flex align='center'>
				<Button variant='outline' fontSize={14} px={10} colorScheme='blue' borderRadius={25} mr={3}>
					Rename Lead List
				</Button>
				<Button variant='outline' colorScheme='red' px={10} fontSize={14} borderRadius={25}>
					Delete Leads List
				</Button>
			</Flex>
		</Flex>
	);
};

export default LeadsHeader;
