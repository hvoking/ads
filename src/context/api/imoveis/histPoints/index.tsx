// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { usePolygonApi } from '../../polygon';
import { usePropertyType } from '../../../filters/property';
import { useEquipment } from '../../../filters/equipment';
import { useCategory } from '../../../filters/category';

const HistPointsApiContext: React.Context<any> = createContext(null)

export const useHistPointsApi = () => {
	return (
		useContext(HistPointsApiContext)
	)
}

export const HistPointsApiProvider = ({children}: any) => {
	const { polygonData } = usePolygonApi();
	const { propertyTypeId, businessTypeId } = usePropertyType();
	const { rooms, suites, garages } = useEquipment();
	const { categoryId } = useCategory();
	
	const [ histPointsData, setHistPointsData ] = useState<any>(null);
	
	useEffect(() => {
	  const fetchData = async () => {
	  	const tempUrl = `
	    	${process.env.REACT_APP_API_URL}/
	    	hist_points_api
			?business_type_id=${businessTypeId}
	    	&property_type_id=${propertyTypeId}
	    	&rooms=${rooms}
	    	&suites=${suites}
	    	&garages=${garages}
	    `
	  	const url = tempUrl.replace(/\s/g, '');
	    const res = await fetch(url);
	    const receivedData = await res.json();
	    setHistPointsData(receivedData[0]);
	  }
	  polygonData && categoryId === 2 && fetchData();
	}, [ 
		polygonData,
		categoryId,
		businessTypeId, propertyTypeId, 
		rooms, suites, garages
	]);

	return (
		<HistPointsApiContext.Provider value={{ histPointsData }}>
			{children}
		</HistPointsApiContext.Provider>
	)
}

HistPointsApiContext.displayName = "HistPointsApiContext";