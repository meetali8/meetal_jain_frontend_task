import {
	Box,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	Button,
	Switch,
	Flex,
	Text,
	IconButton,
	Icon,
	Badge,
} from '@chakra-ui/react';
import { FiAlertCircle } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { FaUsers } from 'react-icons/fa6';
import { IoIosCloseCircleOutline, IoIosInformationCircleOutline } from 'react-icons/io';
import LeadsHeader from './LeadsHeader';
import StepsProgressBar from './StepsProgressBar';
import InfoTip from './InfoTip';
import { Constants, ERROR } from '@/contants/commonContants';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firbaseConfig';
import { LeadListProps } from '@/contants/commonInterface';
import { useRouter } from 'next/router';
import Toast from './Toast';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { fetchLeads } from '../../store/actions/leadsActions';

const LeadList = () => {
	const dispatch = useDispatch<any>();
	const [showInvalid, setShowInvalid] = useState(false);
	const router = useRouter();
	const { addToast } = Toast();

	const leads = useSelector((state: RootState) => state.leads.leads);
	const leadsStatus = useSelector((state: RootState) => state.leads.status);
	const error = useSelector((state: RootState) => state.leads.error);


	useEffect(() => {
		if (leadsStatus === 'idle') {
			dispatch(fetchLeads());
		}
	}, [leadsStatus, dispatch]);

	useEffect(() => {
		if (error) {
			addToast('error', 'Error occurred while fetching the details.');
		}
	}, [error, addToast]);

	const filteredData = showInvalid
		? leads?.filter((row: LeadListProps) => row.invalidFields && row.invalidFields.length > 0)
		: leads;

	return (
		<>
			<LeadsHeader title='Sample Data' />
			<StepsProgressBar
				color1='purple.600'
				color2='purple.600'
				color3='purple.600'
				text='Steps 3/5'
			/>
			<Box border='1px solid' borderColor='gray.200' rounded='md' p={6}>
				<Flex justifyContent='space-between' alignItems='center' mb={4}>
					<Box>
						<Text fontSize='lg' fontWeight='bold'>
							Edit Values
						</Text>
						<Text fontSize='xs'>Edit contacts and correct any invalid values.</Text>
					</Box>
					<Flex alignItems='center'>
						<Switch id='show-invalid' onChange={(e) => setShowInvalid(e.target.checked)} mr={2} />
						<Text fontSize={'small'} mr={6}>
							Only show leads with invalid values.
						</Text>
						<Badge
							px={3}
							py={1}
							mr={3}
							borderRadius='full'
							fontSize='xs'
							color='red.600'
							bg='red.100'
						>
							<Icon as={IoIosCloseCircleOutline} w={6} h={3} />
							26 Invalid Values
						</Badge>

						<Button variant='outline' fontSize={12} px={8} colorScheme='gray' borderRadius={25}>
							<Icon as={FaUsers} w={6} h={3} />
							{leads?.length} Leads Found
						</Button>
					</Flex>
				</Flex>

				<Box overflowX='auto'>
					<Table
						sx={{
							'th, td': {
								border: '1px solid',
								borderColor: 'gray.200',
								ml: 2,
							},
							borderRadius: '10px',
						}}
						variant='simple'
					>
						<Thead bgColor={'gray.100'}>
							<Tr fontSize={12} fontWeight={'bold'}>
								<Th>#</Th>
								<Th>NAME</Th>
								<Th>
									<Flex align='center' justifyContent='space-between'>
										<Box>LAST NAME</Box>
										<Badge
											px={2}
											py={1}
											ml={3}
											borderRadius='full'
											fontSize='xs'
											color='red.600'
											bg='red.100'
										>
											<Icon as={IoIosCloseCircleOutline} w={4} h={3} />
											13
										</Badge>
									</Flex>
								</Th>
								<Th>
									<Flex align='center' justifyContent='space-between'>
										<Box>COMPANY DOMAIN</Box>
										<InfoTip label={Constants.companyDomainText} p={4}>
											<Badge
												px={2}
												py={1}
												ml={3}
												borderRadius='full'
												fontSize='xs'
												color='red.600'
												bg='red.100'
											>
												<Icon as={IoIosCloseCircleOutline} w={4} h={3} />
												13
											</Badge>
										</InfoTip>
									</Flex>
								</Th>
								<Th>
									<Flex align='center' justifyContent='space-between'>
										<Box>LINKEDIN PROFILE URL</Box>
										<InfoTip label={<Box whiteSpace='pre-line'>{Constants.linkedinUrlText}</Box>}>
											<Badge
												px={2}
												py={1}
												ml={3}
												borderRadius='full'
												fontSize='xs'
												color='gray.600'
												bg='gray.300'
											>
												<Icon as={IoIosInformationCircleOutline} w={4} h={3} />
												13
											</Badge>
										</InfoTip>
									</Flex>
								</Th>
							</Tr>
						</Thead>
						<Tbody>
							{filteredData?.map((row: LeadListProps, index: any) => (
								<Tr padding={2} fontSize={12} key={row.id}>
									<Td bgColor={'gray.100'} textAlign='center'>
										{index + 1}
									</Td>
									<Td
										bg={
											row.invalidFields && row.invalidFields.includes('firstName')
												? 'red.100'
												: 'transparent'
										}
										textAlign='center'
									>
										{row.firstName}
									</Td>
									<Td
										bg={
											row.invalidFields && row.invalidFields.includes('lastName')
												? 'red.100'
												: 'transparent'
										}
										textAlign='center'
									>
										<Flex ml={2} align='center' justifyContent='space-between'>
											<Box>{row.lastName}</Box>
											{row.invalidFields && row.invalidFields.includes('lastName') && (
												<InfoTip
													label={<Box whiteSpace='pre-line'>{Constants.lastNameRowText}</Box>}
												>
													<IconButton
														p={0}
														icon={<FiAlertCircle />}
														variant='unstyled'
														color='red.500'
														aria-label='Invalid last name'
													/>
												</InfoTip>
											)}
										</Flex>
									</Td>
									<Td
										bg={
											row.invalidFields && row.invalidFields.includes('companyDomain')
												? 'red.100'
												: 'transparent'
										}
										textAlign='center'
									>
										<Flex ml={2} align='center' justifyContent='space-between'>
											<Box>{row.companyDomain}</Box>
											{row.invalidFields && row.invalidFields.includes('companyDomain') && (
												<InfoTip
													label={
														<Box whiteSpace='pre-line'>{Constants.compantNameDomainRowText}</Box>
													}
												>
													<IconButton
														icon={<FiAlertCircle />}
														variant='unstyled'
														color='red.500'
														aria-label='Invalid company name'
														ml={2}
													/>
												</InfoTip>
											)}
										</Flex>
									</Td>
									<Td
										bg={
											row.invalidFields && row.invalidFields.includes('linkedinUrl')
												? 'red.100'
												: 'transparent'
										}
										textAlign='center'
									>
										{row.linkedinUrl}
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</Box>
			</Box>

			<Flex p={0} borderTop='1px solid' borderColor='gray.200' justify='space-between' mt={8}>
				<Button
					colorScheme='gray'
					border='1px solid'
					borderColor='gray.300'
					borderRadius={25}
					px={16}
					fontSize={'small'}
					mt={4}
					onClick={() => router.push('/')}
				>
					Previous
				</Button>
				<Button
					colorScheme='purple'
					bgGradient='linear(to-l, purple.500, blue.500)'
					_hover={{ bgGradient: 'linear(to-l, purple.500, blue.500)' }}
					borderRadius={25}
					px={18}
					fontSize={'small'}
					mt={4}
				>
					Verify Email - and ignore 2 leads with errors
				</Button>
			</Flex>
		</>
	);
};

export default LeadList;
