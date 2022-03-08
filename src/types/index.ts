export type SignInData = {
	email: string;
	password: string;
};

export type CreateUserData = {
	name: string;
	email: string;
	password: string;
	password_confirmation: string;
};

export type User = {
	id: number;
	name: string;
	email: string;
	createdAt: string;
};
