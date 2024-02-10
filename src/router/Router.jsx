import { Route, Routes } from 'react-router-dom';
import { PLANETS_MENU } from '../constants/planetsMenu';
import Planet from '../pages/Planet';


const Router = () => {
	return (
		<Routes>
			{PLANETS_MENU.map(menuPlanet => {

				return (
					<Route
						key={menuPlanet.id}
						path={menuPlanet.path}
						element={<Planet planet={menuPlanet.planetName} />}
					/>
				);
			})}
		</Routes>
	);
};

export default Router;
