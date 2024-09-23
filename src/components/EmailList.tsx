import { useState } from 'react';
import {
	Box,
	Text,
	Flex,
	VStack,
	Avatar,
	IconButton,
	InputGroup,
	InputLeftElement,
	Input,
} from '@chakra-ui/react';
import { SearchIcon, DeleteIcon } from '@chakra-ui/icons';
import { EmailListProps } from '@/contants/commonInterface';



const EmailList = ({ emails, onSelectEmail, onDeleteEmail }: EmailListProps) => {
	const [searchQuery, setSearchQuery] = useState('');

	const filteredEmails = emails.filter(
		(email) =>
			email.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
			email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
			email.preview.toLowerCase().includes(searchQuery.toLowerCase()) ||
			email.email.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<Box bg='white' p={2} borderRadius='md' boxShadow='sm' minH='100vh'>
			<InputGroup mb={4}>
				<InputLeftElement pointerEvents='none'>
					<SearchIcon color='gray.400' />
				</InputLeftElement>
				<Input
					type='text'
					placeholder='Search'
					borderRadius='full'
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
				/>
			</InputGroup>

			<Text fontSize='sm' color='gray.500' mb={2} fontWeight='bold' px={3}>
				TODAY
			</Text>

			<VStack spacing={2} align='stretch'>
				{filteredEmails.map((email) => (
					<Box
						key={email.id}
						p={3}
						cursor='pointer'
						_hover={{ bg: 'gray.50' }}
						onClick={() => onSelectEmail(email)}
						position='relative'
					>
						<Flex justify='space-between'>
							<Flex align='center'>
								<Avatar
									src={email.avatar || 'https://bit.ly/broken-link'}
									name={email.sender}
									size='sm'
									mr={4}
								/>
								<Box>
									<Text fontWeight='bold' fontSize='md'>
										{email.sender}
									</Text>
									<Text color='gray.500' fontSize='sm'>
										{email.email}
									</Text>
								</Box>
							</Flex>
							<Text fontSize='xs' color='gray.400' alignSelf='center' whiteSpace='nowrap'>
								{email.timestamp}
							</Text>
						</Flex>

						<Text mt={1} fontSize='sm' color='gray.600' noOfLines={2}>
							{email.preview}
						</Text>

						<IconButton
							icon={<DeleteIcon />}
							variant='ghost'
							colorScheme='red'
							position='absolute'
							right='10px'
							top='50%'
							transform='translateY(-50%)'
							_hover={{ bg: 'none' }}
							aria-label='Delete email'
							size='sm'
							onClick={(e) => {
								e.stopPropagation();
								onDeleteEmail(email.id);
							}}
						/>
					</Box>
				))}

				{filteredEmails.length === 0 && (
					<Text fontSize='sm' color='gray.500' textAlign='center'>
						No emails found
					</Text>
				)}
			</VStack>
		</Box>
	);
};

export default EmailList;
