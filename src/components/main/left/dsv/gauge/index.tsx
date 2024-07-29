// App imports
import { SVGWrapper } from './svg';
import { Circle } from './circle';
import { Text } from './text';

// Context imports
import { useEquipment } from '../../../../context/filters/equipment';
import { useGaugeSizes } from '../../../../context/sizes/dsv/gauge';

// Third party imports
import * as d3 from 'd3';

export const Gauge = ({ roomsData, dsvData }: any) => {
	const { rooms, suites, garages, setRooms, setSuites, setGarages } = useEquipment();
	const { innerWidth, innerHeight } = useGaugeSizes();

	const currentDsv = `${rooms},${suites},${garages}`;

	let totalCircumference = 0;

	const onClick = (item: any) => {
		const newItem = item.split(",")

		setRooms(newItem[0])
		setSuites(newItem[1])
		setGarages(newItem[2])
	}

	const radius = d3.min([innerWidth, innerHeight]) / 2;
	const strokeWidth = radius * 0.3;
	const innerRadius = radius - ( strokeWidth / 2 );

	const circumference = innerRadius * 2 * Math.PI;

	const combinedCounts: any = {};
	const combinedColors: any = {};

	if (dsvData) {
		for (const key in dsvData) {
		  if (dsvData.hasOwnProperty(key)) {
		    const dataset = dsvData[key];
		    if (dataset.counts && dataset.colors) {
		      Object.assign(combinedCounts, dataset.counts);
		      Object.assign(combinedColors, dataset.colors);
		    }
		  }
		}
	}

	const sumOfCounts = combinedCounts && d3.sum(Object.values(combinedCounts));

	const sortedDsvCount: any = combinedCounts &&  Object.keys(combinedCounts).sort((a, b) => combinedCounts[b] - combinedCounts[a]);

	sortedDsvCount && sortedDsvCount.sort((a: any, b: any) => {
	    let [a1, a2, a3] = a.split(',').map(Number);
	    let [b1, b2, b3] = b.split(',').map(Number);

	    if (a1 !== b1) {
	        return a1 - b1;
	    } else if (a2 !== b2) {
	        return a2 - b2;
	    } else {
	        return a3 - b3;
	    }
	});

	return (
		<SVGWrapper>
			<Text 
				innerWidth={innerWidth}
				innerHeight={innerHeight}
				currentDsv={currentDsv}
				currentPercent={(combinedCounts[currentDsv] / sumOfCounts) * 100}
			/>
			{sortedDsvCount.map((item: any) => {
				const currentPercent = (combinedCounts[item] / sumOfCounts) * 100;
				const currentCircumference = Math.round(circumference * currentPercent / 100);

				if (currentCircumference) {totalCircumference += currentCircumference}

				return (
					<g key={item} onClick={() => onClick(item)}>
						{currentCircumference && combinedColors[item] &&
							<Circle
								innerWidth={innerWidth}
								innerHeight={innerHeight}
								innerRadius={innerRadius}
								currentDsv={currentDsv}
								item={item}
								combinedColors={combinedColors}
								strokeWidth={strokeWidth}
								currentCircumference={currentCircumference}
								circumference={circumference}
								totalCircumference={totalCircumference}
								rooms={rooms}
								suites={suites}
							/>
						}
					</g>
				)
			})}
		</SVGWrapper>
	)
}

Gauge.displayName="Gauge";