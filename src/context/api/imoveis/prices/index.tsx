// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// App imports
import { datesFormat } from 'components/utils/constants';

// Context imports
import { usePolygonApi } from 'context/api/polygon';
import { usePropertyType } from 'context/filters/property';
import { useEquipment } from 'context/filters/equipment';
import { useDates } from 'context/filters/dates';

const PricesApiContext: React.Context<any> = createContext(null)

export const usePricesApi = () => {
	return (
		useContext(PricesApiContext)
	)
}

export const PricesApiProvider = ({children}: any) => {
	const { polygonData } = usePolygonApi();
	const { businessTypeId, propertyTypeId } = usePropertyType();
	const { rooms, suites, garages } = useEquipment();
	const { dates } = useDates();

	const [ pricesData, setPricesData ] = useState<any>(null);

	useEffect(() => {
		const fetchData = async () => {
		  	const tempUrl = `
		    	${process.env.REACT_APP_API_URL}/
		    	prices_api
				?business_type_id=${businessTypeId}
		    	&property_type_id=${propertyTypeId}
		    	&rooms=${rooms}
		    	&suites=${suites}
		    	&garages=${garages}
		    	&start_date=${datesFormat(dates[0])}
	    		&final_date=${datesFormat(dates[1])}
		    `
		    const url = tempUrl.replace(/\s/g, '');
		    const res = await fetch(url);
		  	const receivedData = await res.json();
		  	setPricesData(receivedData[0]);
		}
		polygonData && fetchData();
	}, [
		polygonData,
		businessTypeId, propertyTypeId, 
		rooms, suites, garages
	]);

	return (
		<PricesApiContext.Provider value={{ pricesData }}>
			{children}
		</PricesApiContext.Provider>
	)
}

PricesApiContext.displayName = "PricesApiContext";