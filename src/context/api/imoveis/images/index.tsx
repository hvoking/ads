// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { usePropertyType } from '../../../filters/property';

const ImagesApiContext: React.Context<any> = createContext(null)

export const useImagesApi = () => {
	return (
		useContext(ImagesApiContext)
	)
}

export const ImagesApiProvider = ({children}: any) => {
	const { currentPropertyId } = usePropertyType();
	const [ imagesData, setImagesData ] = useState<any>(null);
	
	useEffect(() => {
	  const fetchData = async () => {
	  	const tempUrl = `
	    	${process.env.REACT_APP_API_URL}/
	    	images_api
			?property_id=${currentPropertyId}
	    `
	  	const url = tempUrl.replace(/\s/g, '');
	    const res = await fetch(url);
	    const receivedData = await res.json();
	    setImagesData(receivedData);
	  }
	  currentPropertyId && fetchData();
	}, [ currentPropertyId	]);

	return (
		<ImagesApiContext.Provider value={{ imagesData, setImagesData }}>
			{children}
		</ImagesApiContext.Provider>
	)
}

ImagesApiContext.displayName = "ImagesApiContext";