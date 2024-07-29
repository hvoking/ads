// React imports
import { useContext, createContext } from 'react';

// Context imports
import { useAdvertiserApi } from '../../../api/imoveis/advertiser';
import { usePrices } from '../../../filters/prices';
import { useAreas } from '../../../filters/areas';

// Third party imports
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import { IconLayer } from 'deck.gl';
import * as d3 from 'd3';

const AdvertiserLayerContext: React.Context<any> = createContext(null)

export const useAdvertiserLayer = () => {
	return (
		useContext(AdvertiserLayerContext)
	)
}

export const AdvertiserLayerProvider = ({children}: any) => {
	const { advertiserData } = useAdvertiserApi();
	const { areaMin, areaMax } = useAreas();
	const { unitPrice, leftPosition , rightPosition } = usePrices();

	const currentPriceString = 
  		unitPrice === "price" ? 
  		"price" : 
  		"unit_price";

  	const advertiserCount = advertiserData && advertiserData.reduce((total: any, item: any) => {
  		const currentAdvertiserId = item.advertiser_id;
  		if (total[currentAdvertiserId]) {
  			total[currentAdvertiserId] += 1;
  		}
  		else {
  			total[currentAdvertiserId] = 1;
  		}
  		return total
  	}, {});

	const filterByAreas = advertiserData && advertiserData.filter((d: any) => {
		return (areaMin < d.processed_area && d.processed_area < areaMax)
	});

	const filterByPrices = filterByAreas && filterByAreas.filter((d: any) => {
		return (leftPosition < d[currentPriceString] && d[currentPriceString] < rightPosition)
	});

	const iconMapping = 'static/main/advertiser/location-icon-mapping.json';
	const iconAtlas = 'static/main/advertiser/location-icon-atlas.png';

	const maxCount: any = advertiserCount && d3.max(Object.values(advertiserCount))

	const advertiserMap = maxCount &&
		d3.scaleLinear()
			.range([3, 12])
			.domain([1, maxCount])
	
	const defaultImage = "static/main/advertiser/on_error.webp";
	const defaultPath = window.location.origin +  defaultImage;

	const advertiserLayer = advertiserData &&
		[	
			new IconLayer({
				id: 'advertiser-marker',
				data: filterByPrices,
				pickable: true,
				getPosition: (d: any) => d.advertiser_geometry,
				iconAtlas,
				iconMapping,
				getIcon: (d: any) => "marker-yellow",
				getSize: (d: any) => advertiserMap(advertiserCount[d.advertiser_id]),
				sizeUnits: 'meters',
				sizeScale: 20,
				sizeMinPixels: 6,
			}),
			new IconLayer({
				id: 'advertiser-icon',
				data: filterByPrices,
				pickable: true,
				getPosition: (d: any) => d.advertiser_geometry,
				getSize: (d: any) => advertiserMap(advertiserCount[d.advertiser_id]),
				sizeUnits: 'meters',
				sizeScale: 16,
				sizeMinPixels: 6,
				getIcon: (d: any) => ({
				    url: `https://wsrv.nl/?url=${d.logo}&q=20&l=9&default=${defaultPath}`,
				    width: 128,
				    height: 128,
				    anchorY: 148
				  }),
			}),
		]
	return (
		<AdvertiserLayerContext.Provider value={{ advertiserLayer }}>
			{children}
		</AdvertiserLayerContext.Provider>
	)
}

AdvertiserLayerContext.displayName = "AdvertiserLayerContext";