import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar.tsx";

// Renderizar algo dinâmicamente, podendo optar por rodar ou não no lado do SSR
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options = {
	chart: {
		toolbar: {
			show: false,
		},
		zoom: {
			enabled: false,
		},
		foreColor: theme.colors.gray[500],
	},
	grid: {
		show: false,
	},
	dataLabels: {
		enabled: false,
	},
	tooltip: {
		enabled: false,
	},
	xaxis: {
		type: "datetime" as "datetime",
		axisBorder: {
			color: theme.colors.gray[600],
		},
		axisTicks: {
			color: theme.colors.gray[600],
		},
		categories: [
			"2022-02-10T00:00:00.000Z",
			"2022-02-11T00:00:00.000Z",
			"2022-02-12T00:00:00.000Z",
			"2022-02-13T00:00:00.000Z",
			"2022-02-14T00:00:00.000Z",
			"2022-02-15T00:00:00.000Z",
		],
	},
	fill: {
		colors: [theme.colors.pink[500], theme.colors.pink[100]],
		opacity: 0.3,
		type: "gradient",
		gradient: {
			shade: "dark",
			opacityFrom: 0.7,
			opacityTo: 0.3,
		},
	},
	stroke: {
		colors: [theme.colors.pink[500]],
	},
};

const series = [{ name: "series1", data: [123, 212, 12, 34, 543, 12] }];

const Dashboard = () => {
	return (
		<Flex direction="column" h="100vh">
			<Header />

			<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<Sidebar />

				<SimpleGrid
					flex="1"
					gap="4"
					minChildWidth="320px"
					alignItems="flex-start"
				>
					<Box h="100%" p="8" bg="gray.800" rounded={8} pb="4">
						<Text fontSize="lg" mb="4">
							Inscritos da semana
						</Text>
						<Chart options={options} series={series} type="area" height={160} />
					</Box>

					<Box h="100%" p="8" bg="gray.800" rounded={8} pb="4">
						<Text fontSize="lg" mb="4">
							Taxa de abertura
						</Text>
					</Box>
				</SimpleGrid>
			</Flex>
		</Flex>
	);
};

export default Dashboard;
