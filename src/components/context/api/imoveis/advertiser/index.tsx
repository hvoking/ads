// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { usePolygonApi } from '../../polygon';
import { usePropertyType } from '../../../filters/property';
import { useEquipment } from '../../../filters/equipment';

const AdvertiserApiContext: React.Context<any> = createContext(null)

export const useAdvertiserApi = () => {
	return (
		useContext(AdvertiserApiContext)
	)
}

export const AdvertiserApiProvider = ({children}: any) => {
	const [ advertiserData, setAdvertiserData ] = useState<any>(null);
	const { businessTypeId, propertyTypeId } = usePropertyType();
	const { polygonData } = usePolygonApi();
	const { rooms, suites, garages } = useEquipment();

	useEffect(() => {
	    const fetchData = async () => {
			const tempUrl = `
				${process.env.REACT_APP_API_URL}/
				advertiser_api
				?business_type_id=${businessTypeId}
				&property_type_id=${propertyTypeId}
				&rooms=${rooms}
		        &suites=${suites}
		        &garages=${garages}
			`;
			const url = tempUrl.replace(/\s/g, '');
	      	const res = await fetch(url);
	      	const data = await res.json();
	      	setAdvertiserData(data);
	    }
	    polygonData && fetchData();
	}, [ 
		polygonData,
		businessTypeId, propertyTypeId, 
		rooms, suites, garages
	])

	return (
		<AdvertiserApiContext.Provider value={{ advertiserData }}>
			{children}
		</AdvertiserApiContext.Provider>
	)
}

AdvertiserApiContext.displayName = "AdvertiserApiContext";