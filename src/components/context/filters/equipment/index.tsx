// React imports
import { useState, useContext, createContext } from 'react';

const EquipmentContext: React.Context<any> = createContext(null)

export const useEquipment = () => {
	return (
		useContext(EquipmentContext)
	)
}

export const EquipmentProvider = ({children}: any) => {
	const [ rooms, setRooms ] = useState<number | null>(null);
	const [ suites, setSuites ] = useState<number | null>(null);
	const [ garages, setGarages ] = useState<number | null>(null);
	const [ status, setStatus ] = useState<number | null>(null);
	const [ newProperty, setNewProperty ] = useState<number | null>(null);
	const [ pool, setPool ] = useState<number | null>(null);
	const [ furnished, setFurnished ] = useState<number | null>(null);
	
	return (
		<EquipmentContext.Provider value={{
			rooms, setRooms, 
			suites, setSuites, 
			garages, setGarages,
			status, setStatus,
			newProperty, setNewProperty,
			pool, setPool,
			furnished, setFurnished,
		}}>
			{children}
		</EquipmentContext.Provider>
	)
}

EquipmentContext.displayName = "EquipmentContext";