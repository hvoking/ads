// React imports
import { useState, useRef, useEffect, useContext, createContext } from 'react';

// App imports
import * as Locations from './locations';

const GeoContext: React.Context<any> = createContext(null)

export const useGeo = () => {
	return (
		useContext(GeoContext)
	)
}

export const GeoProvider = ({children}: any) => {
	const mapRef = useRef<any>();

	const [ cityId, setCityId ] = useState<any>(37);
	const [ placeId, setPlaceId ] = useState<any>(null);
	
	const [ viewport, setViewport ] = useState(Locations.blumenau);

	const [ geocodingLongitude, setGeocodingLongitude ] = useState<any>(null);
	const [ geocodingLatitude, setGeocodingLatitude ] = useState<any>(null);
	const [ currentBasemap, setCurrentBasemap ] = useState("mapbox://styles/hvoking/cmbzyje2c000f01s15h8fer9p");

	useEffect(() => {
	  mapRef.current?.flyTo({
	    center: [ viewport.longitude, viewport.latitude ],
	    zoom: viewport.zoom,
	    duration: 3000, 
	    essential: true,
	  });

	}, [ viewport ]);

	useEffect(() => {
		setGeocodingLatitude(viewport.latitude) 
		setGeocodingLongitude(viewport.longitude)
	}, [ viewport ])

	return (
		<GeoContext.Provider value={{
			cityId, setCityId, 
			placeId, setPlaceId, 
			viewport, setViewport,
			geocodingLongitude, setGeocodingLongitude,
			geocodingLatitude, setGeocodingLatitude,
			Locations, mapRef,
      		currentBasemap, setCurrentBasemap,
		}}>
			{children}
		</GeoContext.Provider>
	)
}

GeoContext.displayName = "GeoContext";