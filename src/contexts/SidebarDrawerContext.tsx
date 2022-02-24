/* eslint-disable react-hooks/exhaustive-deps */
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect } from "react";

type SidebarDrawerContextProps = {
	children: ReactNode;
};

type SidebarDrawerContextData = UseDisclosureReturn;

export const SidebarDrawerContext = createContext(
	{} as SidebarDrawerContextData
);

const SidebarDrawerProvider = ({ children }: SidebarDrawerContextProps) => {
	const disclosure = useDisclosure();
	const router = useRouter();

	useEffect(() => {
		disclosure.onClose();
	}, [router.asPath]);

	return (
		<SidebarDrawerContext.Provider value={disclosure}>
			{children}
		</SidebarDrawerContext.Provider>
	);
};

export { SidebarDrawerProvider };
