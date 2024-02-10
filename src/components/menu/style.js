import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeaderContainer = styled.div`
    width: 90%;
    height: 6rem;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;


`;

const StyledLogo = styled.h2`

`;

const StyledNav = styled.nav`

`;

const StyledUl = styled.ul`
    display: flex;
    gap: 1rem;

`;

const StyledLink = styled(Link)`
	color: ${({ $color }) => $color};
`;


// export { StyledHeaderContainer, StyledUl, StyledLink };
export { StyledHeaderContainer, StyledLogo, StyledNav, StyledUl, StyledLink };