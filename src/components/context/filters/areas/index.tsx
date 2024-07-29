// React imports
import { useState, useContext, createContext } from 'react';

const AreasContext: React.Context<any> = createContext(null)

export const useAreas = () => {
	return (
		useContext(AreasContext)
	)
}

export const AreasProvider = ({children}: any) => {
	const [ areaMin, setAreaMin ] = useState(30);
	const [ areaMax, setAreaMax ] = useState(300);
	const [ leftPosition, setLeftPosition ] = useState(30);
	const [ rightPosition, setRightPosition ] = useState(300);

	return (
		<AreasContext.Provider value= {{ 
			areaMin, setAreaMin, 
			areaMax, setAreaMax,
			leftPosition, setLeftPosition, 
			rightPosition, setRightPosition,
		}}>
			{children}
		</AreasContext.Provider>
	)
}

AreasContext.displayName = "AreasContext";