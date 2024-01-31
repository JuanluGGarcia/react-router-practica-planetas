import { Route, Routes } from "react-router-dom";
import { PLANETS_MENU } from "../constants/planetsMenu";
import Planet from "../pages/planet";

const Router = () => {
    // console.log(PLANETS_MENU)
    return (
        <Routes>
            
            {PLANETS_MENU.map(menuPlanet => {
                return (
                    <Route
                        key={menuPlanet.id}
                        path={menuPlanet.path}
                        element={<Planet planet={menuPlanet.name} />}
                    />
                )
            })}
        </Routes>
    );
};

export default Router;