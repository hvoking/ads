// App imports
import './styles.scss';

export const Logo = () => {
	return (
		<img 
			className="logo"
			src={process.env.PUBLIC_URL + "/static/logos/logo.svg"} 
			alt="ugeom-logo"
		/>
	)
}

Logo.displayName="Logo";