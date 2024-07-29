// App imports
import { Header } from './header';
import './styles.scss';

// Context imports
import { MainProvider } from '../../context';

export const Wrapper = ({children}: any) => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	window.addEventListener('resize', () => {
	  let vh = window.innerHeight * 0.01;
	  document.documentElement.style.setProperty('--vh', `${vh}px`);
	});
	
	return (
		<MainProvider>
			<div className="wrapper">
				<Header/>
				{children}
			</div>
		</MainProvider>
	)
}

Wrapper.displayName="Wrapper";