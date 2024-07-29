// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { usePolygonApi } from '../../polygon';
import { usePropertyType } from '../../../filters/property';
import { useEquipment } from '../../../filters/equipment';
import { useDates } from '../../../filters/dates';

const AreasApiContext: React.Context<any> = createContext(null)

export const useAreasApi = () => {
	return (
		useContext(AreasApiContext)
	)
}

export const AreasApiProvider = ({children}: any) => {
	const [ areasData, setAreasData ] = useState<any>(null);
	const { startDate, finalDate } = useDates();

	const { polygonData } = usePolygonApi();
	const { propertyTypeId, businessTypeId } = usePropertyType();
	const { rooms, suites, garages } = useEquipment();
	
	useEffect(() => {
	  const fetchData = async () => {
	  	const tempUrl = `
	    	${process.env.REACT_APP_API_URL}/
	    	areas_api
			?business_type_id=${businessTypeId}
	        &property_type_id=${propertyTypeId}
	        &rooms=${rooms}
	        &suites=${suites}
	        &garages=${garages}
	        &start_date=${startDate}
	        &final_date=${finalDate}
	    `
	  	const url = tempUrl.replace(/\s/g, '');
	    const res = await fetch(url);
	    const receivedData = await res.json();
	    setAreasData(receivedData);
	  }
	  polygonData && fetchData();
	}, [ 
		polygonData,
		businessTypeId, propertyTypeId, 
		rooms, suites, garages,
	]);

	return (
		<AreasApiContext.Provider value={{ areasData }}>
			{children}
		</AreasApiContext.Provider>
	)
}

AreasApiContext.displayName = "AreasApiContext";