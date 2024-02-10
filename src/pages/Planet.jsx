// import Header from '../components/header/Header';
// import Main from '../components/main/Main';

import { PLANETS_INFO } from "../constants/planetsInfo";
import { StyledInformation, StyledInformationText, StyledInformationTitle, StyledPlanet, StyledPlanetInformation, StyledPlanetNumbers, StyledWrapper } from "./style";

const Planet = ({ planet }) => {
    // console.log(planet)
	return (
		<main>
			<StyledWrapper>
				<StyledPlanetInformation>
					<StyledPlanet>
						<img src={PLANETS_INFO[planet].images[0]} alt="" />
					</StyledPlanet>
					<StyledInformation>
						<StyledInformationTitle>{PLANETS_INFO[planet].planetName}</StyledInformationTitle>
						<StyledInformationText>{PLANETS_INFO[planet].texts[0]}</StyledInformationText>
						<button>boton 1</button>
						<button>boton 2</button>
						<button>boton 3</button>
						{/* <Button
							backgroundColor={PLANETS[planetName].color}
							activeButton={activeButton}
							setActiveButton={setActiveButton}
						/> */}
					</StyledInformation>
				</StyledPlanetInformation>

				<StyledPlanetNumbers></StyledPlanetNumbers>
			</StyledWrapper>
		</main>
	);
	
};

export default Planet;
