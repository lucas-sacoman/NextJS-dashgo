import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

const Profile = () => {
	return (
		<Flex align="center">
			<Box mr="4" textAlign="right">
				<Text>Lucas Sacoman</Text>
				<Text color="gray.300" fontSize="small">
					lucas.sacoman1999@gmail.com
				</Text>
			</Box>

			<Avatar
				size="md"
				name="Lucas Sacoman"
				src="https://github.com/lucas-sacoman.png"
			/>
		</Flex>
	);
};

export { Profile };
