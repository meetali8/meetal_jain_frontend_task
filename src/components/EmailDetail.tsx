import {
	Box,
	Text,
	VStack,
	Flex,
	Avatar,
	IconButton,
	HStack,
	Spacer,
	Circle,
	Divider,
	Icon,
} from '@chakra-ui/react';
import { BiReply } from 'react-icons/bi';
import { MdArrowForward } from 'react-icons/md';
import { ChevronRightIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'; // Chevron icons
import { useState } from 'react';

type EmailDetailProps = {
	email: {
		sender: string;
		email: string;
		subject: string;
		body: string;
		timestamp: string;
		avatar?: string;
	};
};

const EmailDetail = ({ email }: EmailDetailProps) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<Box flex='1' p={8} bg='white' borderRadius='xl' boxShadow='lg' overflowY={'auto'}>
			<VStack align='start' spacing={6} w='100%'>
				{/* Email Header */}
				<Flex w='100%' mb={4} align='center'>
					<Avatar size='xs' name={email.sender} src={email.avatar || ''} /> {/* Set size to xs */}
					<Box ml={3}>
						<Text fontWeight='bold' fontSize='md'>
							{email.sender} | Sales Campaign
						</Text>
						<Text color='gray.500' fontSize='sm' bg='gray.50' p={1} borderRadius='md'>
							{email.email}
						</Text>
					</Box>
					<Spacer />
					<Text color='gray.400' fontSize='sm'>
						{email.timestamp}
					</Text>
				</Flex>

				<Divider />

				<VStack align='stretch' position='relative' spacing={8}>
					<Box
						position='absolute'
						top='10px'
						bottom='0'
						left='25px'
						borderLeft='2px dotted gray'
						zIndex={0}
					/>

					<HStack alignItems='flex-start' spacing={4} position='relative'>
						<Circle
							size='16px'
							bg='white'
							border='2px solid gray'
							position='absolute'
							left='15px'
							top='2px'
							zIndex={1}
						/>

						<Box flex='1' ml='40px'>
							<Text fontSize='sm' fontWeight='semibold' color='gray.600' mb={2}>
								Lead Replied on May 3, 2024, 5:41 PM
							</Text>

							<Box w='100%' borderRadius='lg' overflow='hidden' boxShadow='md'>
								<Box bg='gray.50' p={4}>
									<Flex justify='space-between' align='center'>
										<Text fontSize='md' fontWeight='bold' color='gray.700'>
											Lorem ipsum dolor sit amet consectetur.
										</Text>
										<HStack spacing={8}>
											<HStack>
												<BiReply fontSize='lg' color='gray.600' />
												<Text fontSize='md' color='gray.600'>
													Reply
												</Text>
											</HStack>

											<HStack>
												<MdArrowForward fontSize='lg' color='gray.600' />
												<Text fontSize='md' color='gray.600'>
													Forward
												</Text>
											</HStack>
										</HStack>
									</Flex>

									<HStack align='center' spacing={2} mt={2}>
										<Avatar size='xs' name='Kristin Watson' src='https://bit.ly/broken-link' />
										<Box>
											<Text fontWeight='bold' fontSize='sm'>
												Kristin Watson from General Electric
											</Text>

											<HStack spacing={2} alignItems='center'>
												<Circle size='16px' bg='gray.700' color='white'>
													<ChevronRightIcon fontSize='sm' />
												</Circle>
												<Text fontSize='xs' color='gray.500'>
													To: marvinmcKinney@gmail.com
												</Text>
											</HStack>
										</Box>
									</HStack>
								</Box>

								<Box bg='white' p={4} border='1px solid' borderColor='gray.200'>
									<Text fontSize='sm' color='gray.600' noOfLines={isExpanded ? undefined : 3}>
										Lorem ipsum dolor sit amet consectetur. Habitasse enim gravida magna varius odio
										risus. Amet sem odio tempus quam. Ullamcorper volutpat orci pellentesque augue
										amet vulputate vitae. Nunc id pellentesque morbi iaculis vitae odio egestas
										consectetur. Libero odio amet ut aliquet scelerisque ullamcorper mattis.
										Vulputate id tellus scelerisque ultrices mauris rhoncus amet faucibus elementum.
									</Text>
									<Divider my={4} />
									<Flex justify='center'>
										<IconButton
											aria-label={isExpanded ? 'Collapse' : 'Expand'}
											icon={isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
											variant='ghost'
											onClick={toggleExpand}
										/>
									</Flex>
								</Box>
							</Box>
						</Box>
					</HStack>

					<HStack alignItems='flex-start' spacing={4} position='relative'>
						<Circle
							size='16px'
							bg='white'
							border='2px solid gray'
							position='absolute'
							left='15px'
							top='2px'
							zIndex={1}
						/>
						<Box flex='1' ml='40px'>
							<Text fontSize='sm' fontWeight='semibold' color='gray.600' mb={2}>
								You Replied on May 3, 2024, 6:00 PM
							</Text>

							<Box w='100%' borderRadius='lg' overflow='hidden' boxShadow='md'>
								<Box bg='gray.50' p={4}>
									<Flex justify='space-between' align='center'>
										<Text fontSize='md' fontWeight='bold' color='gray.700'>
											Lorem ipsum dolor sit amet consectetur.
										</Text>
										<HStack spacing={8}>
											<HStack>
												<BiReply fontSize='lg' color='gray.600' />
												<Text fontSize='md' color='gray.600'>
													Reply
												</Text>
											</HStack>

											<HStack>
												<MdArrowForward fontSize='lg' color='gray.600' />
												<Text fontSize='md' color='gray.600'>
													Forward
												</Text>
											</HStack>
										</HStack>
									</Flex>

									<HStack align='center' spacing={2} mt={2}>
										<Avatar size='xs' name='Kristin Watson' src='https://bit.ly/broken-link' />
										<Box>
											<Text fontWeight='bold' fontSize='sm'>
												Kristin Watson from General Electric
											</Text>

											<HStack spacing={2} alignItems='center'>
												<Circle size='16px' bg='gray.700' color='white'>
													<ChevronRightIcon fontSize='sm' />
												</Circle>
												<Text fontSize='xs' color='gray.500'>
													To: marvinmcKinney@gmail.com
												</Text>
											</HStack>
										</Box>
									</HStack>
								</Box>

								<Box bg='white' p={4} border='1px solid' borderColor='gray.200'>
									<Text fontSize='sm' color='gray.600' noOfLines={isExpanded ? undefined : 3}>
										Lorem ipsum dolor sit amet consectetur. Habitasse enim gravida magna varius odio
										risus. Amet sem odio tempus quam. Ullamcorper volutpat orci pellentesque augue
										amet vulputate vitae. Nunc id pellentesque morbi iaculis vitae odio egestas
										consectetur. Libero odio amet ut aliquet scelerisque ullamcorper mattis.
										Vulputate id tellus scelerisque ultrices mauris rhoncus amet faucibus elementum.
									</Text>
									<Divider my={4} />
									<Flex justify='center'>
										<IconButton
											aria-label={isExpanded ? 'Collapse' : 'Expand'}
											icon={isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
											variant='ghost'
											onClick={toggleExpand}
										/>
									</Flex>
								</Box>
							</Box>
						</Box>
					</HStack>
				</VStack>
			</VStack>
		</Box>
	);
};

export default EmailDetail;
