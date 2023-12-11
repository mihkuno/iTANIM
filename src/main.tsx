import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import Home from './pages/Home';
import { theme } from './theme';
import '@mantine/core/styles.css';

function App() {
	return (
		<MantineProvider theme={theme}>
			<Home />
		</MantineProvider>
	);
}

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(<App />);
