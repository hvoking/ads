// React imports
import { useContext, createContext } from 'react';

// Context imports
import { useTooltip } from '../../../maps/tooltip';
import { usePrices } from '../../../filters/prices';
import { usePropertyType } from '../../../filters/property';
import { usePricesLimits } from '../../../limits/prices';

// Third party imports
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import { IconLayer } from 'deck.gl';

const IconLayerContext: React.Context<any> = createContext(null)

export const useIconLayer = () => {
	return (
		useContext(IconLayerContext)
	)
}

export const IconLayerProvider = ({children}: any) => {
	const { unitPrice } = usePrices();
	const { setPropertyInfo, setActivePropertyInfo } = useTooltip();
	const { currentPropertyId, setCurrentPropertyId } = usePropertyType();
	const { filterPrices } = usePricesLimits();

  	const onClick = (info: any) => {
  		setActivePropertyInfo(true);
  		info.object && setPropertyInfo(info.object);
  	};

  	const onHover = (info: any) => {
  		info.object && setCurrentPropertyId(info.object.property_id);
  		!info.object && setCurrentPropertyId(null);
  	}

	const iconMapping = 'static/main/pdf/maps/location-icon-mapping.json';
	const iconAtlas = 'static/main/pdf/maps/location-icon-atlas.png';

	const iconLayer = filterPrices &&
		new IconLayer({
			id: 'price-icon',
			data: filterPrices,
			pickable: true,
			getPosition: (d: any) => d.geometry.coordinates,
			iconAtlas,
			iconMapping,
			getIcon: (d: any) => 
				currentPropertyId && currentPropertyId === d.property_id ?
				"marker-yellow" :
				d.rooms === 1 ?
				"marker-1" :
				d.rooms === 2 ?
				"marker-2" :
				d.rooms === 3 ?
				"marker-3" : 
				"marker-4"
				,
			getSize: (d: any) => unitPrice === "price" ? d.price / 200000 : d.unit_price / 2000,
			sizeUnits: 'meters',
			sizeScale: 12,
			sizeMinPixels: 6,
			onHover,
			onClick: (info: any) => onClick(info)
		});
	return (
		<IconLayerContext.Provider value={{ iconLayer }}>
			{children}
		</IconLayerContext.Provider>
	)
}

IconLayerContext.displayName = "IconLayerContext";