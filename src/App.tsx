import { AuthProvider } from './context/AuthContext';
import Routes from './router/Router';

const App = () => {
	return (
		<AuthProvider>
			<Routes />
		</AuthProvider>
	);
};

export default App;