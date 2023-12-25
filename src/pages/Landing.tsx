import { Image, Container, Button, Group, Text, Center, Flex } from '@mantine/core';
import { useContext, useState } from 'react';
// import { AccountContext } from '../provider/AccountProvider';
import { Header } from './Header';

import image from '../assets/logo.png';
import styles from '../styles/Landing.module.css';

function Hero() {
	return (
		<Container size="md">
			<Flex align="center" justify="center">
				<div className={styles.inner}>
					<div className={styles.content}>
						<Text className={styles.title}>Find plants near you.</Text>

						<Text c="dimmed" mt="sm" maw={400}>
							The best place to connect with local sellers and discover a vibrant marketplace
							for all your gardening needs!
						</Text>

						<Group mt={30}>
							<Button
								radius="xl"
								size="md"
								className={styles.control}
								onClick={() => Google.login()}>
								Get Started
							</Button>
							<Button
								variant="default"
								radius="xl"
								size="md"
								className={styles.control}
								onClick={() => Google.logout()}>
								Read More
							</Button>
						</Group>
					</div>
					<Image src={image} className={styles.image} />
				</div>
			</Flex>
		</Container>
	);
}

export default function Landing() {
	// const { Google } = useContext(AccountContext);

	return (
		<>
			<Header />
			<Hero />
		</>
	);
}
