import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeaderContainer = styled.div`
    width: 100%;
    padding-inline: 5%;
    height: 3rem;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #838391;
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

export { StyledHeaderContainer, StyledLogo, StyledNav, StyledUl, StyledLink };