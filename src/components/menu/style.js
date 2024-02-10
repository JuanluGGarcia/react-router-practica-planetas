import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeaderContainer = styled.div`
    width: 90%;
    height: 3rem;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    

`;

const StyledLogo = styled.h2`
    font-size: 1.75rem;
    /* margin: 0; */
`;

const StyledNav = styled.nav`

`;

const StyledUl = styled.ul`
    display: flex;
    gap: 1rem;

`;

const StyledLink = styled(Link)`
	border-top: 5px solid transparent;
    padding-top: .5rem;
    &:hover {
        /* border-top-width: 2px; */
        border-top-color: ${({ $color }) => $color};
    }
`;


// export { StyledHeaderContainer, StyledUl, StyledLink };
export { StyledHeaderContainer, StyledLogo, StyledNav, StyledUl, StyledLink };