import {
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	HStack,
	SimpleGrid,
	VStack,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar.tsx';
import { CreateUserData } from '../../types';

const createUserSchemma = yup.object().shape({
	name: yup.string().required('Nome obrigatório'),
	email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
	password: yup
		.string()
		.required('Senha obrigatório')
		.min(6, 'No mínimo 6 caracteres'),
	password_confirmation: yup
		.string()
		.oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
});

const CreateUser = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<CreateUserData>({ resolver: yupResolver(createUserSchemma) });

	const handleCreateUser: SubmitHandler<CreateUserData> = (values) => {};

	return (
		<Box>
			<Header />

			<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<Sidebar />

				<Box
					as="form"
					flex="1"
					rounded={8}
					bg="gray.800"
					p={['6', '8']}
					onSubmit={handleSubmit(handleCreateUser)}
				>
					<Heading size="lg" fontWeight="normal">
						Criar Usuário
					</Heading>

					<Divider my="6" borderColor="gray.700" />

					<VStack spacing="8">
						<SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
							<Input
								type="text"
								label="Nome completo"
								{...register('name')}
								error={errors.name}
							/>

							<Input
								type="email"
								label="E-mail"
								{...register('email')}
								error={errors.email}
							/>
						</SimpleGrid>

						<SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
							<Input
								type="password"
								label="Senha"
								{...register('password')}
								error={errors.password}
							/>

							<Input
								type="password"
								label="Confirmação de senha"
								{...register('password_confirmation')}
								error={errors.password_confirmation}
							/>
						</SimpleGrid>
					</VStack>

					<Flex mt="8" justify="flex-end">
						<HStack spacing="4">
							<Link href="/users" passHref>
								<Button as="a" colorScheme="whiteAlpha">
									Cancelar
								</Button>
							</Link>
							<Button type="submit" colorScheme="pink" isLoading={isSubmitting}>
								Salvar
							</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
};

export default CreateUser;
