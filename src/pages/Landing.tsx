import { Image, Container, Button, Group, Text, Center, Flex } from '@mantine/core';
import { useContext, useState } from 'react';
// import { AccountContext } from '../provider/AccountProvider';

import image from '../assets/logo.jpg';
import styles from '../styles/Landing.module.css';

function Hero() {
	return (
		<Container size="lg">
			<Flex align="center" justify="center" style={{ minHeight: '90vh', width: '100%' }}>
				<div className={styles.inner}>
					<div className={styles.content}>
						<Text className={styles.title}>iTanim</Text>

						<Text size="md" mt="md">
							Discover plants to shop and sell near you!
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
			<Hero />
		</>
	);
}
