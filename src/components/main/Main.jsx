// import { useState } from 'react';
import {
	StyledInformation,
	StyledInformationText,
	StyledInformationTitle,
	StyledPlanet,
	// StyledImagePlanet,
	StyledPlanetInformation,
	StyledPlanetNumbers,
	StyledWrapper
} from './style';
// import Button from '../button/Button';
// import { BUTTONS } from '../../constants/buttons';
import { PLANETS } from '../../constants/planetsInfo';

const Main = ({ planetName }) => {
	const currentPlanet = PLANETS[planetName];
	console.log(currentPlanet)

	return (
		<main>
			<StyledWrapper>
				<StyledPlanetInformation>
					<StyledPlanet>
						{/* <StyledImagePlanet src={PLANETS.MERCURY.images[0]} alt=''  /> */}
						{/* <StyledImagePlanet src={currentPlanet} alt='MERCURY'  /> */}
						{/* <img src={PLANETS[planetName].images[0]} alt={planetName} />  */}
					</StyledPlanet>
					<StyledInformation>
						<StyledInformationTitle></StyledInformationTitle>
						<StyledInformationText></StyledInformationText>
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

export default Main;
