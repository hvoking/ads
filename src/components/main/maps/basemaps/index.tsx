// App imports
import './styles.scss';

// Context imports
import { useMapbox } from '../../../context/maps/mapbox';

export const BasemapsSelectors = () => {
	const { currentBasemap, setCurrentBasemap } = useMapbox();

	return (
		<div className="basemaps-parent-wrapper">
			<img 
				className="basemaps-image"
				src="static/main/maps/globe.svg"
				alt="dark"
				onClick={() => {
					currentBasemap === "mapbox://styles/generativa/clhqor7c101lh01pe52myfwik" ?
					setCurrentBasemap("mapbox://styles/mapbox/satellite-v9") :
					setCurrentBasemap("mapbox://styles/generativa/clhqor7c101lh01pe52myfwik")
				}}
			/>
		</div>
	)
}

BasemapsSelectors.displayName="BasemapsSelectors";