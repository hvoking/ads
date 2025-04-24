// React imports
import { useCallback } from 'react';

// App imports
import { Pin } from './pin';
import { Layers } from './layers';
import { Isochrone } from './iso';
import { HeatmapLayer } from './heatmap';

// Context imports
import { useGeo } from 'context/geo';
import { useIsochroneApi } from 'context/api/isochrone';

// Third-party imports
import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const MapContainer = () => {
	const { mapRef, currentBasemap, viewport, setMarker, setPlaceCoordinates } = useGeo();
	const { setInitialMarker } = useIsochroneApi();

	const onDblClick = useCallback((event: any) => {
		const lng = event.lngLat.lng;
		const lat = event.lngLat.lat;
		setInitialMarker(false);
		setPlaceCoordinates({ longitude: lng, latitude: lat });
		setMarker({ longitude: lng, latitude: lat });
	}, []);

	return (
		<Map
			ref={mapRef}
			initialViewState={viewport}
			mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
			mapStyle={currentBasemap}
			onDblClick={onDblClick}
			doubleClickZoom={false}
			antialias={true}
			preserveDrawingBuffer={true}
		>
			<Isochrone/>
			<HeatmapLayer/>
			<Layers/>
			<Pin/>
		</Map>
	)
}

MapContainer.displayName="MapContainer";