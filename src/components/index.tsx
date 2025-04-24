// App imports
import { Wrapper } from './wrapper';
import { Left } from './left';
import { Right } from './right';
import { Maps } from './maps';
import './styles.scss';

export const Main = () => {
	return (
		<Wrapper>
			<div className="main">
				<Left/>
				<Maps/>
				<Right/>
			</div>
		</Wrapper>
	)
}

Main.displayName="Main";