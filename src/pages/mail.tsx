import {
	Flex,
	Box,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Text,
	Select,
	Icon,
	Badge,
} from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import { FiMail, FiSend } from 'react-icons/fi';
import { BiTimeFive, BiEdit, BiCalendar } from 'react-icons/bi';
import { Email } from '@/contants/commonInterface';
import { initialEmails } from '@/contants/commonData';
import EmailList from '@/components/EmailList';
import EmailDetail from '@/components/EmailDetail';

const MailPage = () => {
	const [emails, setEmails] = useState<Email[]>(initialEmails);
	const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

	const handleSelectEmail = (email: Email) => {
		setSelectedEmail(email);
	};

	const handleDeleteEmail = (emailId: string) => {
		const updatedEmails = emails.filter((email) => email.id !== emailId);
		setEmails(updatedEmails);

		if (selectedEmail && selectedEmail.id === emailId) {
			setSelectedEmail(null);
		}
	};

	return (
		<Flex h='100vh'>
			<Sidebar />
			<Box ml='250px' flex='1' p={5} bg='gray.50'>
				<Text fontSize='2xl' fontWeight='bold' mb={2}>
					Inbox
				</Text>

				<Tabs variant='line' colorScheme='purple'>
					<TabList mb='1em'>
						<Tab
							_selected={{
								color: 'purple.500',
								fontWeight: 'bold',
								borderBottom: '2px solid purple',
							}}
							display='flex'
							alignItems='center'
						>
							<Icon as={FiMail} boxSize={4} mr={2} />
							<Text>Inbox</Text>
							<Badge ml={2} colorScheme='purple' borderRadius='md'>
								16
							</Badge>
						</Tab>
						<Tab
							_selected={{
								color: 'purple.500',
								fontWeight: 'bold',
								borderBottom: '2px solid purple',
							}}
							display='flex'
							alignItems='center'
						>
							<Icon as={FiSend} boxSize={4} mr={2} />
							<Text>Sent</Text>
							<Badge ml={2} colorScheme='gray' borderRadius='md'>
								8
							</Badge>
						</Tab>
						<Tab
							_selected={{
								color: 'purple.500',
								fontWeight: 'bold',
								borderBottom: '2px solid purple',
							}}
							display='flex'
							alignItems='center'
						>
							<Icon as={BiTimeFive} boxSize={4} mr={2} />
							<Text>Pending Your Response</Text>
							<Badge ml={2} colorScheme='gray' borderRadius='md'>
								2
							</Badge>
						</Tab>
						<Tab
							_selected={{
								color: 'purple.500',
								fontWeight: 'bold',
								borderBottom: '2px solid purple',
							}}
							display='flex'
							alignItems='center'
						>
							<Icon as={BiEdit} boxSize={4} mr={2} />
							<Text>Draft</Text>
							<Badge ml={2} colorScheme='gray' borderRadius='md'>
								2
							</Badge>
						</Tab>
						<Tab
							_selected={{
								color: 'purple.500',
								fontWeight: 'bold',
								borderBottom: '2px solid purple',
							}}
							display='flex'
							alignItems='center'
						>
							<Icon as={BiCalendar} boxSize={4} mr={2} />
							<Text>Scheduled</Text>
							<Badge ml={2} colorScheme='gray' borderRadius='md'>
								2
							</Badge>
						</Tab>

						<Select
							placeholder='All Campaign'
							size='md'
							width='150px'
							borderRadius='full'
							bg='white'
							borderColor='gray.300'
							ml='auto'
						>
							<option value='campaign1'>Campaign 1</option>
							<option value='campaign2'>Campaign 2</option>
						</Select>
					</TabList>
					<TabPanels>
						<TabPanel>
							<Flex h='calc(100vh - 160px)'>
								<Box
									h='100%'
									w='400px'
									overflowY='auto'
									bg='white'
									p='5'
									borderRadius='md'
									boxShadow='md'
									sx={{
										'&::-webkit-scrollbar': {
											display: 'none',
										},
										'&': {
											scrollbarWidth: 'none', // Firefox
										},
									}}
								>
									<EmailList
										emails={emails}
										onSelectEmail={handleSelectEmail}
										onDeleteEmail={handleDeleteEmail}
									/>
								</Box>

								<Box
									flex='1'
									ml='8'
									h='100%'
									overflowY='auto'
									bg='white'
									p='5'
									borderRadius='md'
									boxShadow='md'
									sx={{
										'&::-webkit-scrollbar': {
											display: 'none',
										},
										'&': {
											scrollbarWidth: 'none', // Firefox
										},
									}}
								>
									{selectedEmail ? (
										<EmailDetail email={selectedEmail} />
									) : (
										<Text>Select an email to view its details</Text>
									)}
								</Box>
							</Flex>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		</Flex>
	);
};

export default MailPage;
