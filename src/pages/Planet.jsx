import { useState } from 'react';
import { PLANETS_INFO } from '../constants/planetsInfo';
import {
	StyledButton,
	StyledButtonsContainer,
	StyledImagePlanetContainer,
	StyledHiddenImage,
	StyledInformation,
	StyledInformationText,
	StyledInformationTitle,
	StyledPlanet,
	StyledPlanetInfoStats,
	StyledPlanetInformation,
	StyledPlanetNumbers,
	StyledPlanetStatsContainer,
	StyledPlanetTitleStats,
	StyledSpan,
	StyledWikipedia,
	StyledWrapper
} from './style';
import { BUTTONS } from '../constants/buttons';
import { COLORS } from '../styles/colors';

const Planet = ({ planet }) => {
	const [info, setInfo] = useState(0);

	return (
		<main>
			<StyledWrapper>
				<StyledPlanetInformation>	
					{/* Imagen planeta */}
					<StyledImagePlanetContainer>
						<StyledPlanet>
							<img src={PLANETS_INFO[planet].images[info]} alt='' />
						</StyledPlanet>
						<StyledHiddenImage>
							{info === 2 && (
								<img src={PLANETS_INFO[planet].images[3]} alt='' />
							)}
						</StyledHiddenImage>
					</StyledImagePlanetContainer>
					{/* Cabecera información planeta */}
					<StyledInformation>
						<StyledInformationTitle>
							{PLANETS_INFO[planet].planetName}
						</StyledInformationTitle>
						<StyledInformationText>
							{PLANETS_INFO[planet].texts[info]}
						</StyledInformationText>

						<StyledSpan>
							Source: <StyledWikipedia>Wikipedia <img src="assets/images/icon-source.svg" alt="icon-source" /></StyledWikipedia>
						</StyledSpan>
						{/* Botones */}
						<StyledButtonsContainer>
							{BUTTONS.map((button, index) => {
								return (
									<StyledButton
										key={button.id}
										onClick={() => changeInfo(setInfo, index)}
										$active={index === info}
										$color={COLORS[planet]}
									>
										{button.name}
									</StyledButton>
								);
							})}
						</StyledButtonsContainer>
					</StyledInformation>
				</StyledPlanetInformation>

				{/* Estadisticas de los planetas */}
				<StyledPlanetNumbers>
					{PLANETS_INFO[planet].stats.map(item => {

						return (

						<StyledPlanetStatsContainer key={item.name}>
							<StyledPlanetTitleStats>{item.name}</StyledPlanetTitleStats>
							<StyledPlanetInfoStats>{item.value}</StyledPlanetInfoStats>
						</StyledPlanetStatsContainer>
							
						);
					})}
				</StyledPlanetNumbers>
			</StyledWrapper>
		</main>
	);
};

const changeInfo = (setInfo, index) => {
	setInfo(index);
};

export default Planet;
