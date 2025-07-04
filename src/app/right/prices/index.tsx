// React imports
import { useEffect } from 'react';

// App imports
import { SVGWrapper } from './svg';
import { Bars } from './bars';
import { Header } from './header';
import { Marker } from './marker';
import { Legend } from './legend';

// Utils imports
import { groupPrices } from 'utils/prices';
import { priceFormat } from 'utils/constants';

// Context imports
import { usePrices } from 'context/filters/prices';
import { useAreas } from 'context/filters/areas';
import { useDates } from 'context/filters/dates';
import { usePropertyType } from 'context/filters/property';
import { usePricesSizes } from 'context/sizes/prices';
import { useLinesLimits } from 'context/limits/lines';


// Third party imports
import * as d3 from 'd3';

export const Prices = ({ pricesData }: any) => {
	const { margin, innerWidth, innerHeight } = usePricesSizes();
	const { setPriceMin, setPriceMax, leftPosition, setLeftPosition, rightPosition, setRightPosition, unitPrice } = usePrices();
	const { areaMin, areaMax } = useAreas();
	const { formatedStartDate, formatedFinalDate } = useDates();
	const { activeEquipment } = usePropertyType();
	const { bottomLimit, topLimit, minLine, maxLine } = useLinesLimits();

    const currentPriceString = 
        unitPrice === "price" ? 
        "price" : 
        "unit_price";

	const filterByAreas = pricesData.filter((d: any) => {
	    return (areaMin < d.processed_area && d.processed_area < areaMax)
	});

	const filterByDates = filterByAreas.filter((d: any) => {  		
  		return formatedStartDate < new Date(d.start_date) && new Date(d.start_date) < formatedFinalDate
  	});

	const pricesArray = filterByDates.map((item: any) => {
		return item[currentPriceString]
	});

	const activePoints = filterByDates.map((item: any) => {
	    if (item.furnished === 1 && activeEquipment === "furnished") {
	        return item[currentPriceString]
	    }
	    else if (item.pool === 1 && activeEquipment === "pool") {
	        return item[currentPriceString]
	    }
	    else if (item.new === 1 && activeEquipment === "new") {
	        return item[currentPriceString]
	    }
	    else if (item.status === 1 && activeEquipment === "status") {
	        return item[currentPriceString]
	    }
	    return null
	});

	const filterPoints = 
	    activeEquipment === "furnished" || 
	    activeEquipment === "pool" || 
	    activeEquipment === "new" || 
	    activeEquipment === "status" ?
	    activePoints :
	    pricesArray;

	const minBound: any = d3.max([minLine - (maxLine + minLine) * 0.2, 0]); 
    const maxBound = maxLine + (maxLine + minLine) * 0.2;
    const divisions: number = 12;

    const arr = filterPoints.filter((item: any) => item > 0);
    const pricesCounts = groupPrices(arr, minBound, maxBound, divisions);

    const pricesValues: any = Object.values(pricesCounts);
    const minValue: any = d3.min(pricesValues);
    const maxValue: any = d3.max(pricesValues);
    
    const pricesKeys = Object.keys(pricesCounts);

	const yScale: any = d3.scaleLinear()
		.domain([ minValue, maxValue ])
		.range([0, innerHeight - 25]);

	const xPriceScale: any = d3.scaleLinear()
		.domain([minBound, maxBound])
		.range([0, innerWidth]);

	useEffect(() => {
		setLeftPosition(minBound);
		setPriceMin(minBound);
	}, [minBound]);

	useEffect(() => {
		setRightPosition(maxBound);
		setPriceMax(maxBound);
	}, [maxBound]);

	return (
		<div className="right-item-wrapper">
			<Header/>
			<SVGWrapper>
				<Legend 
					innerHeight={innerHeight} 
					xScale={xPriceScale}
					currentPosition={leftPosition}
					priceFormat={priceFormat}
				/>
				<Legend 
					innerHeight={innerHeight} 
					xScale={xPriceScale}
					currentPosition={rightPosition}
					priceFormat={priceFormat}
				/>
				<Bars
					xPriceScale={xPriceScale}
					yScale={yScale}
					pricesArray={pricesValues}
					pricesKeys={pricesKeys}
					margin={margin}
					innerWidth={innerWidth}
					innerHeight={innerHeight}
					setLeftPosition={setLeftPosition}
					setRightPosition={setRightPosition}
					leftPosition={leftPosition}
					rightPosition={rightPosition}
					minBound={minBound}
					maxBound={maxBound}
					bottomLimit={bottomLimit}
					topLimit={topLimit}
					divisions={divisions}
				/>
				<Marker 
					xScale={xPriceScale} 
					innerHeight={innerHeight}
					minBound={minBound}
					maxBound={maxBound}
				/>
			</SVGWrapper>
	  </div>
	)
}

Prices.displayName="Prices";