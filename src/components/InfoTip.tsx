import { TooltipProps } from '@/contants/commonInterface';
import { Tooltip } from '@chakra-ui/react';

const InfoTip = (TooltipProps: TooltipProps) => {
	return (
		<Tooltip hasArrow label={TooltipProps.label} fontSize='sm' placement='top' mr={4} p={TooltipProps.p}>
			{TooltipProps.children}
		</Tooltip>
	);
};

export default InfoTip;