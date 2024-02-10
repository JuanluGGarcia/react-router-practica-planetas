import styled from 'styled-components';
import { FONTS } from '../styles/fonts';
import { COLORS } from '../styles/colors';

const StyledWrapper = styled.div`
	width: 70%;
	margin: 0 auto;
	margin-block: 1rem;
`;

const StyledImagePlanetContainer = styled.div`
	/* background-color: orange; */
	position: relative;
	/* margin-left: 100px; */
	width: 70%;
	max-width: 600px;
	max-height: 600px;
	/* max-width: 400px; */
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledPlanetInformation = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: .5rem;
	align-items: center;
	/* background-color: lightblue; */
`;

const StyledPlanet = styled.div`
	/* margin-left: 100px; */
	width: 70%;
	max-width: 400px;
	max-height: 380px;
	/* max-width: 400px; */
	display: flex;
	justify-content: center;
	align-items: center;
	/* background-color: orange; */
`;

const StyledHiddenImage = styled.div`
	position: absolute;
	width: 90px;
	left: 50%;
	top: 75%;
	transform: translateX(-50%);
`;

// const StyledImagePlanet = styled.img``;

const StyledInformation = styled.div`
	width: 30%;
	display: flex;
	flex-direction: column;
	left: auto;
	/* background-color: lightgreen; */
`;

const StyledInformationTitle = styled.div`
	font-size: 4.375rem;
	font-family: ${FONTS.ffPrimary};
	margin-bottom: .5rem;
`;

const StyledInformationText = styled.div`
	font-size: .9375rem;
	margin-bottom: 1rem;
	opacity: .5;
`;

const StyledSpan = styled.span`
	color: ${COLORS.textColor};
	margin-bottom: .5rem;
`;

const StyledWikipedia = (styled.span)`
	color: ${COLORS.title};
	text-decoration: underline;
	cursor: pointer;
	font-family: ${FONTS.ffSecundary};
	
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: .5rem;
`;

const StyledButton = styled.button`
	
	border: none;
	color: ${COLORS.textColor};
	text-align: left;
	width: 100%;
	border: 1px solid ${COLORS.hover};
	padding: 10px 15px;
	font-family: ${FONTS.ffPrimary};
	font-weight: 100;
	font-size: 1.1.rem;
	background-color: transparent;
	letter-spacing: 0.2rem;
	cursor: pointer;
	background-color: ${({ $active, $color }) =>
		$active ? $color : 'transparent'};

	&:hover {
		background-color: ${({ $active, $color }) =>
			!$active ? `${COLORS.hover}` : $color};
	}
`;

const StyledPlanetNumbers = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	gap: 1rem;
	/* background-color: lightblue; */
`;
const StyledPlanetStatsContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 5px 20px;
	justify-content: center;
	border: 1px solid grey;
	width: 250px;
`;

const StyledPlanetTitleStats = styled.h4`
	color: ${COLORS.textColorTitle};
	font-size: 1rem;
	font-family: ${FONTS.ffPrimary};
	margin: 0;
`;

const StyledPlanetInfoStats = styled.h4`
	color: ${COLORS.textColor};
	font-size: 2rem;
	font-family: ${FONTS.ffPrimary};
	margin: 0;
`;

export {
	StyledWrapper,
	StyledImagePlanetContainer,
	StyledPlanetInformation,
	StyledPlanet,
	StyledHiddenImage,
	// StyledImagePlanet,
	StyledInformation,
	StyledInformationTitle,
	StyledInformationText,
	StyledSpan,
	StyledWikipedia,
	StyledButtonsContainer,
	StyledButton,
	StyledPlanetNumbers,
	StyledPlanetStatsContainer,
	StyledPlanetTitleStats,
	StyledPlanetInfoStats
};