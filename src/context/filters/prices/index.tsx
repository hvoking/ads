import { useState, useContext, createContext } from 'react';

const PricesContext: React.Context<any> = createContext(null)

export const usePrices = () => {
	return (
		useContext(PricesContext)
	)
}

export const PricesProvider = ({children}: any) => {
	const [ unitPrice, setUnitPrice ] = useState("unit_price");
	
	const [ detachment, setDetachment ] = useState(15);
	const [ discount, setDiscount ] = useState(-5);
	const [ samplesPrices, setSamplesPrices ] = useState<any>(null);

	const [ sampleUrl, setSampleUrl ] = useState<any>(null);
	const [ submitUrl, setSubmitUrl ] = useState(false);

	const [ priceMin, setPriceMin ] = useState(null);
	const [ priceMax, setPriceMax ] = useState(null);
	
	const [ leftPosition, setLeftPosition ] = useState(400);
	const [ rightPosition, setRightPosition ] = useState(4500);

	return (
		<PricesContext.Provider value={{
			priceMin, setPriceMin, 
			priceMax, setPriceMax,
			unitPrice, setUnitPrice,
			detachment, setDetachment,
			discount, setDiscount,
			samplesPrices, setSamplesPrices,
			leftPosition, setLeftPosition,
			rightPosition, setRightPosition,
			sampleUrl, setSampleUrl,
			submitUrl, setSubmitUrl,
		}}>
			{children}
		</PricesContext.Provider>
	)
}

PricesContext.displayName = "PricesContext";