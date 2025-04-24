// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { usePolygonApi } from '../../polygon';
import { usePropertyType } from '../../../filters/property';
import { useDates } from '../../../filters/dates';

const RoomsApiContext: React.Context<any> = createContext(null)

export const useRoomsApi = () => {
	return (
		useContext(RoomsApiContext)
	)
}

export const RoomsApiProvider = ({children}: any) => {
	const { polygonData } = usePolygonApi();
	const { businessTypeId, propertyTypeId } = usePropertyType();
	const { startDate, finalDate } = useDates();
	
	const [ roomsData, setRoomsData ] = useState<any>(null);
	
	useEffect(() => {
	  const fetchData = async () => {
	  	const tempUrl = `
	    	${process.env.REACT_APP_API_URL}/
	    	rooms_api
			?business_type_id=${businessTypeId}
			&property_type_id=${propertyTypeId}
	    	&start_date=${startDate}
	    	&final_date=${finalDate}
	    `
	  	const url = tempUrl.replace(/\s/g, '');
	    const res = await fetch(url);
	    const receivedData = await res.json();
	    setRoomsData(receivedData);
	  }
	  polygonData && fetchData();
	}, [ polygonData, businessTypeId, propertyTypeId ]);

	return (
		<RoomsApiContext.Provider value={{ roomsData }}>
			{children}
		</RoomsApiContext.Provider>
	)
}

RoomsApiContext.displayName = "RoomsApiContext";