import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../hooks/useSidebarDrawer";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

const Header = () => {
	const isWideVerson = useBreakpointValue({ base: false, lg: true });
	const { onOpen } = useSidebarDrawer();

	return (
		<Flex
			as="header"
			w="100%"
			maxWidth={1480}
			h="20"
			mx="auto"
			mt="4"
			px="6"
			align="center"
		>
			{!isWideVerson && (
				<IconButton
					aria-label="Open navigation"
					icon={<Icon as={RiMenuLine} />}
					fontSize="24"
					variant="unstyled"
					onClick={onOpen}
					mr="2"
				/>
			)}

			<Logo />

			{isWideVerson && <SearchBox />}
			<Flex align="center" ml="auto">
				<NotificationsNav />

				<Profile showProfileData={isWideVerson} />
			</Flex>
		</Flex>
	);
};

export { Header };
