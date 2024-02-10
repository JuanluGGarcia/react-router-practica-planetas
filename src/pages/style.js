import styled from 'styled-components';

const StyledWrapper = styled.div`
	width: 75%;
	margin: 0 auto;
`;

const StyledPlanetInformation = styled.div`
	width: 100%;
	display: flex;
`;

const StyledPlanet = styled.div`
	width: 74%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: lightcoral;
`;

// const StyledImagePlanet = styled.img``;

const StyledInformation = styled.div`
	width: 36%;
	display: flex;
	flex-direction: column;
	background-color: lightgreen;
`;

const StyledInformationTitle = styled.div`
	font-size: 5rem;
`;

const StyledInformationText = styled.div``;

const StyledPlanetNumbers = styled.div``;

export {
	StyledWrapper,
	StyledPlanetInformation,
	StyledPlanet,
	// StyledImagePlanet,
	StyledInformation,
	StyledInformationTitle,
	StyledInformationText,
	StyledPlanetNumbers
};