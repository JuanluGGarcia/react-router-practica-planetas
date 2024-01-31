import { Link } from "react-router-dom";
import { PLANETS_MENU } from "../../constants/planetsMenu";
import { StyledHeaderContainer, StyledLogo, StyledNav, StyledUl } from "./style";

const Header = () => {
    return (
        
            <header>
                <StyledHeaderContainer>
                    <StyledLogo>THE PLANETS</StyledLogo>
                    <StyledNav>
                        <StyledUl>
                            {PLANETS_MENU.map(menu => {
                                return (
                                    <li key={menu.id}>
                                        <Link to={menu.path}>{menu.name}</Link>
                                    </li>
                                );
                            })}
                        </StyledUl>
                    </StyledNav>
                </StyledHeaderContainer>
            </header>
    );
};


export default Header;