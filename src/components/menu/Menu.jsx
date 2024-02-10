import { PLANETS_MENU } from '../../constants/menu';
import {
	StyledHeaderContainer,
	StyledLink,
	StyledLogo,
	StyledNav,
	StyledUl
} from './style';
import { COLORS } from '../../styles/colors';

const Menu = () => {
	return (
		<header>
			<StyledHeaderContainer>
				<StyledLogo>THE PLANETS</StyledLogo>
				<StyledNav>
					<StyledUl>
						{PLANETS_MENU.map(menu => {
							return (
								<li key={menu.id}>
									<StyledLink 
										to={menu.path}
										$color={COLORS[menu.planetName]}
									>
										{menu.planetName}
									</StyledLink>
								</li>
							);
						})}
					</StyledUl>
				</StyledNav>
			</StyledHeaderContainer>
		</header>
	);
};

export default Menu;