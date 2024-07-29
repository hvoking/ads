// React imports
import { useState, useEffect, useContext, createContext } from 'react';

const PropertyTypeContext: React.Context<any> = createContext(null)

export const usePropertyType = () => {
	return (
		useContext(PropertyTypeContext)
	)
}

export const PropertyTypeProvider = ({children}: any) => {
	const [ propertyName, setPropertyName ] = useState("apto");
	const [ businessName, setBusinessName ] = useState("venda");

	const [ businessTypeId, setBusinessTypeId ] = useState(1);
	const [ propertyTypeId, setPropertyTypeId ] = useState(1);
	const [ nearest, setNearest ] = useState(8);
	const [ activeEquipment, setActiveEquipment ] = useState("");

	const [ samplesIds, setSamplesIds ] = useState<any>([]);
	const [ rejectedIds, setRejectedIds ] = useState<any>([]);
	const [ currentPropertyId, setCurrentPropertyId ] = useState<any>(null);

	const propertyDict: any = {
		1: "apto",
		2: "casa",
	}

	const businessDict: any = {
		1: "venda",
		2: "locação",
	}

	useEffect(() => {
		setPropertyName(propertyDict[propertyTypeId]);
	}, [ propertyTypeId ]);

	useEffect(() => {
		setBusinessName(businessDict[businessTypeId]);
	}, [ businessTypeId ]);
	
	return (
		<PropertyTypeContext.Provider value={{
			nearest, setNearest,
			propertyTypeId, setPropertyTypeId,
			propertyName, setPropertyName,
			businessTypeId, setBusinessTypeId, 
			businessName, setBusinessName,
			propertyDict, businessDict,
			samplesIds, setSamplesIds,
			rejectedIds, setRejectedIds,
			currentPropertyId, setCurrentPropertyId,
			activeEquipment, setActiveEquipment,
		}}>
			{children}
		</PropertyTypeContext.Provider>
	)
}

PropertyTypeContext.displayName = "PropertyTypeContext";