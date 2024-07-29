// App imports
import { ReCenter } from './reCenter';

// Context imports
import { useGeo } from '../../../../context/filters/geo';
import { useIsoPolygonApi } from '../../../../context/api/isoPolygon';

// Third party imports
import { NavigationControl, GeolocateControl } from 'react-map-gl';

export const Controllers = () => {
	const { viewport, setViewport, placeCoordinates, setPlaceCoordinates } = useGeo();
	const { setInitialMarker } = useIsoPolygonApi();

	return (
		<>
			<NavigationControl/>
			<GeolocateControl
				showAccuracyCircle={false} 
				showUserLocation={false}
				positionOptions= {{enableHighAccuracy: true}}
				onGeolocate={(e: any) => {
					setPlaceCoordinates({
						longitude: e.coords.longitude, 
						latitude: e.coords.latitude
					})
					setInitialMarker(false);
				}}
			/>
			<ReCenter
				setViewport={setViewport} 
				viewport={viewport} 
				placeCoordinates={placeCoordinates}
			/>
		</>
	)
}

Controllers.displayName="Controllers";