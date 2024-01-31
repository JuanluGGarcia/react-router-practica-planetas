import { Link } from 'react-router-dom';
import { PLANETS_MENU } from '../../constants/planetsMenu';

const Menu = () => {
	return (
		<header>
			<div className='HeaderContainer'>
				<title>THE PLANETS</title>

				<nav>
					<ul>
						{PLANETS_MENU.map(menu => {
							return (
								<li key={menu.id}>
									<Link to={menu.path}>{menu.name}</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Menu;
