import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Flex, Box } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import Footer from '@/components/Footer';
import LeadList from '@/components/LeadList';

const inter = Inter({ subsets: ['latin'] });

const Mails = () => {
	return (
		<>
			<Head>
				<title>Leads List</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Flex h='100vh' overflow='hidden'>
				<Sidebar />
				<Box
					ml='250px'
					pb='60px'
					flex='1'
					p={5}
					overflowY='auto'
					bg='gray.50'
					position='relative'
					zIndex='1'
				>
					<Box flex='1' overflowY='auto' position='relative' zIndex='1' pb='70px'>
						<h1>Functionality yet to be implemented</h1>
					</Box>
				</Box>
			</Flex>
			<Footer />
		</>
	);
};

export default Mails;
