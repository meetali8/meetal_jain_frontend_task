import { StepProgressBarProps } from '@/contants/commonInterface';
import { Box, Flex, Text } from "@chakra-ui/react";

const StepsProgressBar = (props: StepProgressBarProps) => {
  return (
    <Flex align="center" w="100%" p={4} gap={2} borderRadius="md">
      <Box flex="1" h="4px" bg={props.color1} borderRadius="full"></Box>
      <Box flex="1" h="4px" bg={props.color2} borderRadius="full"></Box>
      <Box flex="1" h="4px" bg={props.color3} borderRadius="full"></Box>
      <Box flex="1" h="4px" bg="gray.400" borderRadius="full"></Box>
      <Box flex="1" h="4px" bg="gray.400" borderRadius="full"></Box>
      <Text fontSize={'sm'}>{props.text}</Text>
    </Flex>
  );
};

export default StepsProgressBar;
