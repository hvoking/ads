// App imports
import { SVGWrapper } from './svg';
import { Bars } from './bars';
import { Ref } from './ref';
import { AxisBottom } from './bottom';
import { Marker } from './marker';
import { Legend } from './legend';
import { LoadingImage } from '../../utils/loading';
import { priceFormat } from '../../utils/constants';

// Context imports
import { useAreasApi } from '../../../context/api/imoveis/areas';
import { useAreasSizes } from '../../../context/sizes/areas';
import { useAreas } from '../../../context/filters/areas';

// Third party imports
import * as d3 from 'd3';

export const Areas = () => {
	const { areasData } = useAreasApi();
	const { margin, innerWidth, innerHeight } = useAreasSizes();
	const { leftPosition, rightPosition } = useAreas();


	const areasColor = areasData && areasData.areas_color;
	const areasPercentage = areasData && areasData.areas_percentage;
	const maxPercentage: any = areasData && d3.max(Object.values(areasPercentage));

	const filteredAreasArray = 
		areasData && 
		Object.keys(areasColor).filter((item: string) => item !== "null");

	const areasMin: any = areasData && filteredAreasArray[0];
	const areasMax: any = areasData && filteredAreasArray.at(-1);

	const xScale: any = areasData && d3.scaleLinear()
		.domain([areasMin, areasMax])
		.range([0, innerWidth]);

	const yScale: any = areasData && d3.scaleLinear()
		.domain([0, maxPercentage])
		.range([0, innerHeight - 25]);

	return (
		<div className="right-item-wrapper">
			<div className="sidebar-title-wrapper">
				Área útil m²
			</div>
			{areasData ? 
				<>
					<SVGWrapper>
						<AxisBottom
							xScale={xScale}
							innerWidth={innerWidth}
							innerHeight={innerHeight}
						/>
						<Legend 
							innerHeight={innerHeight} 
							xScale={xScale}
							currentPosition={leftPosition}
							priceFormat={priceFormat}
						/>
						<Legend 
							innerHeight={innerHeight} 
							xScale={xScale}
							currentPosition={rightPosition}
							priceFormat={priceFormat}
						/>
						<Bars
							areasPercentage={areasPercentage}
							areasColor={areasColor}
							xScale={xScale}
							yScale={yScale}
							margin={margin}
							innerWidth={innerWidth}
							innerHeight={innerHeight}
							areasMin={areasMin}
							areasMax={areasMax}
						/>
						<Marker 
							xScale={xScale} 
							innerHeight={innerHeight}
							filteredAreasArray={filteredAreasArray}
						/>
						<Ref
							xScale={xScale}
							innerWidth={innerWidth}
							innerHeight={innerHeight}
							areasMin={areasMin}
							areasMax={areasMax}
						/>
				  	</SVGWrapper> 
		  		</> : 
		  		<LoadingImage/>
		  	}
	  </div>
	)
}

Areas.displayName="Areas";