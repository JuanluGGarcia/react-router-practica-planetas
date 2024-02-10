import { Route, Routes } from "react-router-dom";
import { PLANETS_MENU } from "../constants/menu";
import Planet from "../pages/Planet";


const Router = () => {
	return (
		<Routes>
			{PLANETS_MENU.map(planet => {
				return (
					<Route
						key={planet.id}
						path={planet.path}
						element={<Planet planet={planet.planetName} />} 
					/>
				);
			})}
		</Routes>
	);
};

export default Router;
