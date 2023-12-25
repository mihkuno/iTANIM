import { useState } from 'react';
import {
	HoverCard,
	Group,
	Button,
	UnstyledButton,
	Text,
	SimpleGrid,
	ThemeIcon,
	Anchor,
	Avatar,
	Divider,
	Center,
	Box,
	Burger,
	Drawer,
	Collapse,
	ScrollArea,
	rem,
	useMantineTheme,
	Container,
	Menu,
	Image,
} from '@mantine/core';
// import { MantineLogo } from '@mantinex/mantine-logo';
import image from '../assets/logo.png';
import { useDisclosure } from '@mantine/hooks';
import {
	IconNotification,
	IconCode,
	IconBook,
	IconChartPie3,
	IconFingerprint,
	IconCoin,
	IconChevronDown,
	IconLogout,
	IconHeart,
	IconStar,
	IconMessage,
	IconSettings,
	IconPlayerPause,
	IconTrash,
	IconSwitchHorizontal,
} from '@tabler/icons-react';

import classes from '../styles/Header.module.css';

const mockdata = [
	{
		icon: IconCode,
		title: 'Open source',
		description: 'This Pokémon’s cry is very loud and distracting',
	},
	{
		icon: IconCoin,
		title: 'Free for everyone',
		description: 'The fluid of Smeargle’s tail secretions changes',
	},
	{
		icon: IconBook,
		title: 'Documentation',
		description: 'Yanma is capable of seeing 360 degrees without',
	},
	{
		icon: IconFingerprint,
		title: 'Security',
		description: 'The shell’s rounded shape and the grooves on its.',
	},
	{
		icon: IconChartPie3,
		title: 'Analytics',
		description: 'This Pokémon uses its flying ability to quickly chase',
	},
	{
		icon: IconNotification,
		title: 'Notifications',
		description: 'Combusken battles with the intensely hot flames it spews',
	},
];
const user = {
	name: 'Jane Spoonfighter',
	email: 'janspoon@fighter.dev',
	image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
};

export function Header() {
	const theme = useMantineTheme();
	const [opened, { toggle }] = useDisclosure(false);
	const [userMenuOpened, setUserMenuOpened] = useState(false);

	return (
		<Box pb={120}>
			<header className={classes.header}>
				<Group justify="space-between" h="100%">
					<Group gap={8}>
						<Image src={image} w={30} />
						<Text fw={500}>iTanim</Text>
					</Group>

					<Group h="100%" visibleFrom="sm">
						<a href="#" className={classes.link}>
							Home
						</a>
						<HoverCard
							width={600}
							position="bottom"
							radius="md"
							shadow="md"
							withinPortal></HoverCard>
						<a href="#" className={classes.link}>
							Product
						</a>
						<a href="#" className={classes.link}>
							Contact Us
						</a>
						<a href="#" className={classes.link}>
							About Us
						</a>
					</Group>

					<Group justify="space-between">
						{/* <MantineLogo size={28} /> */}

						<Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />

						<Menu
							width={260}
							position="bottom-end"
							transitionProps={{ transition: 'pop-top-right' }}
							onClose={() => setUserMenuOpened(false)}
							onOpen={() => setUserMenuOpened(true)}
							withinPortal
							visibleFrom="sm">
							<Menu.Target>
								<UnstyledButton
								// className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
								>
									<Group gap={7}>
										<Avatar src={user.image} alt={user.name} radius="xl" size={30} />
										<Text fw={500} size="sm" lh={1} mr={3}>
											{user.name}
										</Text>
										<IconChevronDown
											style={{ width: rem(12), height: rem(12) }}
											stroke={1.5}
										/>
									</Group>
								</UnstyledButton>
							</Menu.Target>
							<Menu.Dropdown>
								<Menu.Item
									leftSection={
										<IconHeart
											style={{ width: rem(16), height: rem(16) }}
											color={theme.colors.red[6]}
											stroke={1.5}
										/>
									}>
									Liked posts
								</Menu.Item>
								<Menu.Item
									leftSection={
										<IconStar
											style={{ width: rem(16), height: rem(16) }}
											color={theme.colors.yellow[6]}
											stroke={1.5}
										/>
									}>
									Saved posts
								</Menu.Item>
								<Menu.Item
									leftSection={
										<IconMessage
											style={{ width: rem(16), height: rem(16) }}
											color={theme.colors.blue[6]}
											stroke={1.5}
										/>
									}>
									Your comments
								</Menu.Item>

								<Menu.Label>Settings</Menu.Label>
								<Menu.Item
									leftSection={
										<IconSettings
											style={{ width: rem(16), height: rem(16) }}
											stroke={1.5}
										/>
									}>
									Account settings
								</Menu.Item>
								<Menu.Item
									leftSection={
										<IconSwitchHorizontal
											style={{ width: rem(16), height: rem(16) }}
											stroke={1.5}
										/>
									}>
									Change account
								</Menu.Item>
								<Menu.Item
									leftSection={
										<IconLogout
											style={{ width: rem(16), height: rem(16) }}
											stroke={1.5}
										/>
									}>
									Logout
								</Menu.Item>

								<Menu.Divider />

								<Menu.Label>Danger zone</Menu.Label>
								<Menu.Item
									leftSection={
										<IconPlayerPause
											style={{ width: rem(16), height: rem(16) }}
											stroke={1.5}
										/>
									}>
									Pause subscription
								</Menu.Item>
								<Menu.Item
									color="red"
									leftSection={
										<IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
									}>
									Delete account
								</Menu.Item>
							</Menu.Dropdown>
						</Menu>
					</Group>

					{/* <Group visibleFrom="sm">
						<Button variant="default">Log in</Button>
						<Button>Sign up</Button>
					</Group> */}

					{/* <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" /> */}
				</Group>
			</header>

			{/* <Drawer
				opened={drawerOpened}
				onClose={closeDrawer}
				size="100%"
				padding="md"
				title="Navigation"
				hiddenFrom="sm"
				zIndex={1000000}>
				<ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
					<Divider my="sm" />

					<a href="#" className={classes.link}>
						Home
					</a>
					<UnstyledButton className={classes.link} onClick={toggleLinks}>
						<Center inline>
							<Box component="span" mr={5}>
								Features
							</Box>
							<IconChevronDown
								style={{ width: rem(16), height: rem(16) }}
								color={theme.colors.blue[6]}
							/>
						</Center>
					</UnstyledButton>
					<Collapse in={linksOpened}>{links}</Collapse>
					<a href="#" className={classes.link}>
						Learn
					</a>
					<a href="#" className={classes.link}>
						Academy
					</a>

					<Divider my="sm" />

					{/* <Group justify="center" grow pb="xl" px="md">
						<Button variant="default">Log in</Button>
						<Button>Sign up</Button>
					</Group> 
				</ScrollArea>
			</Drawer> */}
		</Box>
	);
}
