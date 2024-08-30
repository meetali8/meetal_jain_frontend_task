import { useToast, UseToastOptions } from '@chakra-ui/react';

const Toast = () => {
	const toast = useToast();
	const addToast = (status: UseToastOptions['status'], message: string) => {
			toast({
				title: message,
				status: status,
				position: 'top-right',
				isClosable: true,
				duration: 6000,
			});
	};

	return { addToast };
};

export default Toast;