// React imports
import { useContext, createContext } from 'react';

// Context imports
import { useAdvertiserApi } from '../../../api/imoveis/advertiser';
import { useAreas } from '../../../filters/areas';
import { usePrices } from '../../../filters/prices';

// Third-party imports
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import { ArcLayer } from 'deck.gl';

const ArcLayerContext: React.Context<any> = createContext(null)

export const useArcLayer = () => {
	return (
		useContext(ArcLayerContext)
	)
}

export const ArcLayerProvider = ({children}: any) => {
	const { advertiserData } = useAdvertiserApi();
	const { areaMin, areaMax } = useAreas();
	const { unitPrice, leftPosition , rightPosition } = usePrices();

	const currentPriceString = 
  		unitPrice === "price" ? 
  		"price" : 
  		"unit_price";

	const filterByAreas = advertiserData && advertiserData.filter((d: any) => {
		return (areaMin < d.processed_area && d.processed_area < areaMax)
	})

	const filterByPrices = filterByAreas && filterByAreas.filter((d: any) => {
		return (leftPosition < d[currentPriceString] && d[currentPriceString] < rightPosition)
	})

	let arcLayer = advertiserData && 
		new ArcLayer({
		  id: "advertisers-arc",
		  data: filterByPrices,
		  getSourcePosition: (d: any) => d.advertiser_geometry,
		  getTargetPosition: (d: any) => d.property_geometry,
		  getSourceColor: [0, 128, 200],
		  getTargetColor: [200, 0, 80],
		  getWidth: 0.5,
		});
	
	return (
		<ArcLayerContext.Provider value={{ arcLayer }}>
			{children}
		</ArcLayerContext.Provider>
	)

}

ArcLayerContext.displayName = "ArcLayerContext";