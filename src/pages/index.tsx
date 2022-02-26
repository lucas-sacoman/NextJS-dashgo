import { Flex, Stack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import type { NextPage } from "next";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { Button } from "../components/Form/Button";
import { Input } from "../components/Form/Input";
import { SignInData } from "../types";

const signInSchema = yup.object().shape({
	email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
	password: yup.string().required("Senha obrigatório"),
});

const Home: NextPage = () => {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<SignInData>({ resolver: yupResolver(signInSchema) });

	const handleSignIn: SubmitHandler<SignInData> = async (values) => {
		await new Promise((resolve) => setTimeout(resolve, 1000 * 2));

		console.log(values);
	};

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
				onSubmit={handleSubmit(handleSignIn)}
			>
				<Stack spacing="4">
					<Input
						type="email"
						label="E-mail"
						error={errors.email}
						{...register("email")}
					/>

					<Input
						type="password"
						label="Senha"
						error={errors.password}
						{...register("password")}
					/>
				</Stack>

				<Button
					type="submit"
					innerText="Entrar"
					color="pink"
					isLoading={isSubmitting}
				/>
			</Flex>
		</Flex>
	);
};

export default Home;
