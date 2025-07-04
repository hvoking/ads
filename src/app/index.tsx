// App imports
import { Wrapper } from './wrapper';
import { Left } from './left';
import { Right } from './right';
import { Maps } from './maps';
import './styles.scss';

// Context imports
import { ContextProvider } from 'context';

export const App = () => {
	return (
		<ContextProvider>
			<Wrapper>
				<div className="App">
					<Left/>
					<Maps/>
					<Right/>
				</div>
			</Wrapper>
		</ContextProvider>
	)
}

App.displayName="App";