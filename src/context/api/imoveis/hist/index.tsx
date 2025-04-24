// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { usePolygonApi } from '../../polygon';
import { usePropertyType } from '../../../filters/property';
import { useCategory } from '../../../filters/category';

const HistApiContext: React.Context<any> = createContext(null)

export const useHistApi = () => {
	return (
		useContext(HistApiContext)
	)
}

export const HistApiProvider = ({children}: any) => {
	const { polygonData } = usePolygonApi();
	const { businessTypeId, propertyTypeId } = usePropertyType();
	const { categoryId } = useCategory();
	
	const [ histData, setHistData ] = useState<any>(null);
	
	useEffect(() => {
	  const fetchData = async () => {
	  	const tempUrl = `
	    	${process.env.REACT_APP_API_URL}/
	    	hist_api
			?business_type_id=${businessTypeId}
			&property_type_id=${propertyTypeId}
	    `
	  	const url = tempUrl.replace(/\s/g, '');
	    const res = await fetch(url);
	    const receivedData = await res.json();
	    setHistData(receivedData);
	  }
	  polygonData && categoryId === 2 && fetchData();
	}, [ polygonData, categoryId, businessTypeId, propertyTypeId ]);

	return (
		<HistApiContext.Provider value={{ histData }}>
			{children}
		</HistApiContext.Provider>
	)
}

HistApiContext.displayName = "HistApiContext";