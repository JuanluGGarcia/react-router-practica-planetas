import { BrowserRouter, Router } from "react-router-dom";
import Menu from "./components/menu/Menu";

const App = () => {
	return (
		<BrowserRouter>
			<Menu />
			
			<Router />
		</BrowserRouter>
	);
};

export default App;
