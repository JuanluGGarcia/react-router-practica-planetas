import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/global-styles';
import Router from './router/Router';
import Menu from './components/menu/Menu';

const App = () => {

	return (
		
		<BrowserRouter>
			<GlobalStyles />

			<Menu />
			<Router />
		</BrowserRouter>
	);
};

export default App;
