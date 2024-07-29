// App imports
import './styles.scss';

// Context imports
import { useReverseGeocodingApi } from '../../../context/api/google/reverse';

export const Location = () => {
	const { currentAddress } = useReverseGeocodingApi();

	if (!currentAddress) return <div className="location-wrapper">
		* Exclusivamente para municipios de SC, Brasil
	</div>

	const addressNumber = currentAddress[0].long_name;
	const addressStreet = currentAddress[1].long_name;
	const addressName = addressStreet + ", " + addressNumber;

	return (
		<div className="location-wrapper">
				<img 
					style={{width: "12px", height: "17px"}} 
					src="static/main/maps/marker.svg" 
					alt="pin-location"
			     />
				<div>{addressName}</div>
		</div>
	)
}

Location.displayName="Location";