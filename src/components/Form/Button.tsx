import {
	Button as ChakraButton,
	ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

interface ButtonProps extends ChakraButtonProps {
	innerText: string;
	color: string;
}

const Button = ({ innerText, color, ...rest }: ButtonProps) => {
	return (
		<ChakraButton mt="6" colorScheme={color} size="lg" {...rest}>
			{innerText}
		</ChakraButton>
	);
};

export { Button };
