import { Flex, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Button } from "../components/Form/Button";
import { Input } from "../components/Form/Input";

const Home: NextPage = () => {
	return (
		<Flex w="100vw" h="100vh" align="center" justify="center">
			<Flex
				as="form"
				width="100%"
				maxWidth={360}
				rounded={8}
				bg="gray.800"
				p="8"
				flexDir="column"
			>
				<Stack spacing="4">
					<Input type="email" name="email" label="E-mail" />
					<Input type="password" name="password" label="Senha" />
				</Stack>

				<Button innerText="Entrar" color="pink" />
			</Flex>
		</Flex>
	);
};

export default Home;
