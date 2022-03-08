import {
	Box,
	Button,
	Checkbox,
	Flex,
	Heading,
	Icon,
	Spinner,
	Stack,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { RiAddLine, RiErrorWarningLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar.tsx';
import { useUsers } from '../../hooks/useUsers';

const UserList = () => {
	const { isLoading, error, data, isFetching } = useUsers();

	const isWideVersion = useBreakpointValue({ base: false, lg: true });

	return (
		<Box>
			<Header />

			<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<Sidebar />

				<Box flex="1" rounded={8} bg="gray.800" p="8">
					<Flex mb="8" justify="space-between" align="center">
						<Heading size="lg" fontWeight="normal">
							Usuários
							{!isLoading && isFetching && <Spinner size="sm" ml="4" />}
						</Heading>

						<Link href="/users/create" passHref>
							<Button
								as="a"
								size="sm"
								fontSize="sm"
								colorScheme="pink"
								leftIcon={<Icon fontSize="20" as={RiAddLine} />}
							>
								Criar novo
							</Button>
						</Link>
					</Flex>

					{isLoading ? (
						<Flex justify="center" align="center">
							<Spinner />
						</Flex>
					) : error ? (
						<Stack
							justify="center"
							align="center"
							direction="column"
							color="red.400"
						>
							<Icon as={RiErrorWarningLine} w="10" h="10" />
							<Text>Erro ao listar usuários</Text>
						</Stack>
					) : (
						<>
							<Table colorScheme="whiteAlpha">
								<Thead>
									<Tr>
										<Th px={['0', '0', '8']} color="gray.300" width="8">
											<Checkbox colorScheme="pink" />
										</Th>
										<Th>Usuário</Th>
										{isWideVersion && <Th>Data de cadastro</Th>}
										{isWideVersion && <Th w="8"></Th>}
									</Tr>
								</Thead>
								<Tbody>
									{data!.map((user) => (
										<Tr key={user.id}>
											<Td px={['0', '0', '8']}>
												<Checkbox colorScheme="pink" />
											</Td>
											<Td>
												<Box>
													<Text fontWeight="bold">{user.name}</Text>
													<Text fontSize="sm" color="gray.400">
														{user.email}
													</Text>
												</Box>
											</Td>
											{isWideVersion && <Td>{user.createdAt}</Td>}
											{isWideVersion && (
												<Td>
													<Button
														as="a"
														size="sm"
														fontSize="sm"
														colorScheme="purple"
														leftIcon={<Icon fontSize="16" as={RiPencilLine} />}
													>
														Editar
													</Button>
												</Td>
											)}
										</Tr>
									))}
								</Tbody>
							</Table>

							<Pagination />
						</>
					)}
				</Box>
			</Flex>
		</Box>
	);
};

export default UserList;
