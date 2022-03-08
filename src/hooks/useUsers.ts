import { useQuery } from 'react-query';
import { api } from '../services/api';
import { User } from '../types';

export const getUsers = async (): Promise<User[]> => {
	const { data } = await api.get('users');

	const users = data.users.map((user: User) => {
		return {
			id: user.id,
			name: user.name,
			email: user.email,
			createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
				day: '2-digit',
				month: 'long',
				year: 'numeric',
			}),
		};
	});

	return users;
};

const useUsers = () => {
	return useQuery('users', getUsers, {
		staleTime: 1000 * 5, // 5 seconds
	});
};

export { useUsers };
