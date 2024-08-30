import { Box, Text, Flex, Link, IconButton, HStack } from '@chakra-ui/react';
import { FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';

const Footer = () => {
	return (
		<Box
			as='footer'
			bg='gray.50'
			py={4}
			px={6}
			borderTop='1px solid'
			borderColor='gray.200'
			position='fixed'
			bottom='0'
			w='100%'
			zIndex='2'
		>
			<Flex justify='space-between'>
				<Flex>
					<Text mt={2} fontSize='xs' color='gray.500'>
						© 2024 Shōden Ltd. All Rights Reserved.
					</Text>
				</Flex>
				<Flex>
					<HStack align='center' spacing={4}>
						<Link href='#' fontSize='xs' color='gray.500'>
							Terms & Conditions
						</Link>
						<Link href='#' fontSize='xs' color='gray.500'>
							Privacy Policy
						</Link>
						<Link href='#' fontSize='xs' color='gray.500'>
							Content Policy
						</Link>
					</HStack>
				</Flex>

				<HStack spacing={3}>
					<IconButton
						as={Link}
						href='#'
						aria-label='Instagram'
						icon={<FiInstagram />}
						size='sm'
						variant='ghost'
						color='gray.500'
						_hover={{ color: 'blue.500' }}
					/>
					<IconButton
						as={Link}
						href='#'
						aria-label='LinkedIn'
						icon={<FiLinkedin />}
						size='sm'
						variant='ghost'
						color='gray.500'
						_hover={{ color: 'blue.500' }}
					/>
					<IconButton
						as={Link}
						href='#'
						aria-label='GitHub'
						icon={<FiGithub />}
						size='sm'
						variant='ghost'
						color='gray.500'
						_hover={{ color: 'blue.500' }}
					/>
				</HStack>
			</Flex>
		</Box>
	);
};

export default Footer;
