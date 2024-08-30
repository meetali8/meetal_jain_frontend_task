import { Box, Text, VStack, Flex, Icon, Input, Link, Button, useToast } from '@chakra-ui/react';
import { FaRegCheckCircle } from 'react-icons/fa';
import { FaCloudUploadAlt } from 'react-icons/fa';
import LeadsHeader from './LeadsHeader';
import StepsProgressBar from './StepsProgressBar';
import { useState } from 'react';
import Toast from './Toast';
import { ERROR } from '@/contants/commonContants';
import { FiFile } from 'react-icons/fi';
import { useRouter } from 'next/router';

const LeadsUpload = () => {
	const [isFileUploaded, setIsFileUploaded] = useState(false);
	const [file, setFile] = useState<File | null>(null);
	const { addToast } = Toast();
    const router = useRouter();

	const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const validFileType = file.type === 'text/csv' || file.name.endsWith('.csv');
			if (validFileType) {
				setFile(file);
				setIsFileUploaded(true);
			} else {
				setIsFileUploaded(false);
				addToast(ERROR, 'Please upload a valid CSV file.');
			}
		} else {
			setIsFileUploaded(false);
		}
	};

	const handleReupload = () => {
		setFile(null);
        setIsFileUploaded(false);
	};

	const handleDelete = () => {
		setFile(null);
        setIsFileUploaded(false);
	};

	return (
		<>
			<LeadsHeader title='Upload Leads' />
			<StepsProgressBar color1='purple.600' color2='gray.400' color3='gray.400' text='Steps 1/5' />
			<Box border='1px solid' borderColor='gray.200' p={6} rounded='md'>
				<Text fontSize='lg' fontWeight='semibold' my={4}>
					Upload lead list
				</Text>
				<Text color='gray.500' mb={4}>
					Lorem ipsum dolor sit amet consectetur. Amet suscipit vulputate tristique sagittis.
					Facilisis id ut morbi aliquet duis sed.
				</Text>
				{file ? (
					<Flex
						align='center'
						justify='space-between'
						border='1px solid'
						borderColor='purple.200'
						bg='purple.50'
						rounded='md'
						p={4}
					>
						<Flex align='center'>
							<Icon as={FiFile} w={6} h={6} color='purple.500' mr={4} />
							<VStack align='start' spacing={0}>
								<Text fontWeight='bold' color='gray.700'>
									{file.name}
								</Text>
								<Text fontSize='sm' color='gray.500'>
									{`${(file.size / 1024).toFixed(2)}kb | 246 leads found`}
								</Text>
							</VStack>
						</Flex>
						<Flex align='center'>
							<Link color='purple.500' fontWeight='bold' mr={4} onClick={handleReupload}>
								<Text bgGradient='linear(to-l, purple.500, blue.500)' bgClip='text'>
									Re-upload
								</Text>
							</Link>
							<Link color='red.500' fontWeight='bold' onClick={handleDelete}>
								Delete
							</Link>
						</Flex>
					</Flex>
				) : (
					<Box
						as='label'
						htmlFor='upload'
						display='block'
						border='2px dashed'
						borderColor='gray.200'
						rounded='md'
						p={10}
						textAlign='center'
						cursor='pointer'
						_hover={{ borderColor: 'gray.400' }}
						bg='gray.50'
					>
						<Icon as={FaCloudUploadAlt} w={10} h={10} color='blue.400' />
						<Text color='gray.500'>
							<Link textDecoration={'underline'} mt={2} color='blue.600' fontWeight='bold'>
								Click to upload
							</Link>{' '}
							or drag and drop
						</Text>
						<Text mt={2} color='gray.400'>
							only .csv files are accepted – Maximum 10,000 leads
						</Text>
						<Input type='file' id='upload' display='none' onChange={handleFileUpload} />
					</Box>
				)}

				<Flex mt={8} justify='space-between' align='flex-start'>
					<Text fontSize='lg' fontWeight='bold' mb={4}>
						Fields Formatting
					</Text>
					<Link fontWeight='bold' href='#'>
						<Text bgGradient='linear(to-l, purple.500, blue.500)' bgClip='text'>
							Download/View sample
						</Text>
					</Link>
				</Flex>
				<Flex justify='space-between' align='flex-start'>
					<Box flex='1'>
						<VStack align='start' spacing={4}>
							<Box>
								<Text fontWeight='bold'>Company name</Text>
								<Flex mt={2}>
									<Icon as={FaRegCheckCircle} w={8} h={4} mt={1} color='green.500' />
									<Text>google</Text>
								</Flex>
								<Text color='gray.400' my={1}>
									-------- or --------
								</Text>
							</Box>
							<Box>
								<Text fontWeight='bold'>Company domain</Text>
								<Flex mt={2}>
									<Icon as={FaRegCheckCircle} w={8} h={4} mt={1} color='green.500' />
									<Text>google.com</Text>
								</Flex>
								<Flex mt={2}>
									<Icon as={FaRegCheckCircle} w={8} h={4} mt={1} color='green.500' />
									<Text>https://www.google.com</Text>
								</Flex>
							</Box>
						</VStack>
					</Box>

					<Box flex='1'>
						<Text fontSize='lg' fontWeight='bold' mb={4}>
							LinkedIn Profile URL
						</Text>
						<VStack align='start' spacing={4}>
							<Box>
								<Text fontWeight='bold'>Allowed: Regular LinkedIn URL</Text>
								<Flex mt={2}>
									<Icon as={FaRegCheckCircle} w={8} h={4} mt={1} color='green.500' />
									<Text>https://linkedin.com/in/marcbenioff</Text>
								</Flex>
								<Flex mt={2}>
									<Icon as={FaRegCheckCircle} w={8} h={4} mt={1} color='green.500' />
									<Text>https://www.google.com</Text>
								</Flex>
							</Box>
							<Box>
								<Text fontWeight='bold'>Not Allowed: Sales Navigator URL</Text>
								<Flex mt={2}>
									<Icon as={FaRegCheckCircle} w={8} h={4} mt={1} color='green.500' />
									<Text>https://linkedin.com/in/marcbenioff</Text>
								</Flex>
								<Flex mt={2}>
									<Icon as={FaRegCheckCircle} w={8} h={4} mt={1} color='green.500' />
									<Text>https://www.linkedin.com/sales/people/ACoAAAAPwEB4dd</Text>
								</Flex>
							</Box>
						</VStack>
					</Box>
				</Flex>
			</Box>
			<Flex p={0} borderTop='1px solid' borderColor='gray.200' justify='right' mt={8}>
				<Button
					colorScheme='purple'
                    bgGradient='linear(to-l, purple.500, blue.500)'
                    _hover={{bgGradient: 'linear(to-l, purple.500, blue.500)'}}
					borderRadius={25}
					px={20}
					fontSize={'small'}
					mt={4}
					isDisabled={!isFileUploaded}
                    onClick={() => router.push('/leadsList')}
				>
					Continue
				</Button>
			</Flex>
		</>
	);
};

export default LeadsUpload;
