// React imports
import { useContext, createContext } from 'react';

// Context imports
import { useLinesApi } from '../../api/imoveis/lines';
import { usePrices } from '../../filters/prices';
 
const LinesLimitsContext: React.Context<any> = createContext(null)

export const useLinesLimits = () => {
	return (
		useContext(LinesLimitsContext)
	)
}

export const LinesLimitsProvider = ({children}: any) => {
	const { linesData } = useLinesApi();
	const { unitPrice } = usePrices();

	const bottomLimit = linesData && (
		unitPrice === "price" ? 
		linesData.bottom_limit_price : 
		linesData.bottom_limit_unit_price
	);
  	
  	const topLimit = linesData && (
		unitPrice === "price" ? 
		linesData.top_limit_price : 
		linesData.top_limit_unit_price
	);

	const minLine = linesData && (
		unitPrice === "price" ? 
		linesData.min_line_price : 
		linesData.min_line_unit_price
	);
	
	const meanLine = linesData && ( 
		unitPrice === "price" ? 
		linesData.mean_line_price : 
		linesData.mean_line_unit_price
	);
	
	const maxLine = linesData && ( 
		unitPrice === "price" ? 
		linesData.max_line_price : 
		linesData.max_line_unit_price
	);

	return (
		<LinesLimitsContext.Provider value={{
			bottomLimit, topLimit,
			minLine, meanLine, maxLine
		}}>
			{children}
		</LinesLimitsContext.Provider>
	)
}

LinesLimitsContext.displayName = "LinesLimitsContext";