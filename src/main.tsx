import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import '@mantine/core/styles.css';
import Home from './pages/Home';
import Landing from './pages/Landing';

function App() {
	return (
		<MantineProvider theme={theme}>
			<Landing />
		</MantineProvider>
	);
}

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(<App />);
