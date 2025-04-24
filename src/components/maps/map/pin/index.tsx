// React imports
import { useCallback } from 'react';

// App imports
import './styles.scss';

// Context imports
import { useGeo } from 'context/geo';
import { useIsochroneApi } from 'context/api/isochrone';

// Third-party imports
import { Marker } from 'react-map-gl';

export const Pin = () => {
	const { initialMarker, setInitialMarker } = useIsochroneApi();
	const { viewport, setViewport } = useGeo();

	const onMarkerDragEnd = useCallback((event: any) => {
		setInitialMarker(false);
		setViewport((prev: any) => ({
			...prev,
			longitude: event.lngLat.lng,
			latitude: event.lngLat.lat
		}));
	}, []);
	  
	return (
		<>
			<Marker
		      longitude={viewport.longitude}
		      latitude={viewport.latitude}
		      anchor="bottom"
		      draggable
		      onDragEnd={onMarkerDragEnd}
		    >
		      <img 
			      style={{width: "25px"}} 
			      src={process.env.PUBLIC_URL + "/static/icons/pin.svg"} 
			      alt="marker"
		     />
		    </Marker>
		    {initialMarker && 
				<div className="initial-marker-text">
					Arraste o marcador ou pesquise um lugar
				</div>
			}
		</>
	)
}

Pin.displayName="Pin";