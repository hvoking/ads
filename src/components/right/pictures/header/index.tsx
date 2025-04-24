// App imports
import { Nearest } from './nearest';
import './styles.scss';

export const Header = ({ nearest, setNearest }: any) => {
	return (
		<div className="samples-header">
			<div className="sidebar-sub-title">Anúncios</div>
			<div></div>
			<Nearest 
				nearest={nearest}
				setNearest={setNearest}
			/>
		</div>
	)
}

Header.displayName="Header";