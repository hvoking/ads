// App imports
import { SVGWrapper } from './svg';
import { Circle } from './circle';
import { Text } from './text';

// Context imports
import { useEquipment } from '../../../../context/filters/equipment';
import { useRoomsGaugeSizes } from '../../../../context/sizes/rooms';

// Third party imports
import * as d3 from 'd3';

const roomsCounter: any = {
	5: 'rgba(254, 0, 23, 1)',
	4: 'rgba(254, 162, 90, 1)',
	3: 'rgba(65, 145, 198, 1)',
	2: 'rgba(84, 181, 103, 1)',
	1: 'rgba(109, 86, 166, 1)',
}

export const Gauge = ({ roomsData, dsvData }: any) => {
	const { rooms, setRooms, setSuites, setGarages } = useEquipment();
	const { innerWidth, innerHeight } = useRoomsGaugeSizes();

	let totalCircunference = 0;

	const radius = d3.min([innerWidth, innerHeight]) / 2;
	const strokeWidth = radius * 0.3;
	const innerRadius = radius - ( strokeWidth / 2 );

	const circumference = innerRadius * 2 * Math.PI;

	const onClick = (item: any) => {
		setRooms(item);
		setSuites(null)
		setGarages(null)
	}
		
	return (
		<SVGWrapper>
			<Text 
				innerWidth={innerWidth}
				innerHeight={innerHeight}
				rooms={rooms}
				roomsData={roomsData}
			/>
			{Object.keys(roomsData).map((item: any) => {
				const currentPercent = roomsData[item] ? roomsData[item] : 0
				const currentCircunference = Math.round(circumference * currentPercent / 100)

				if (currentCircunference) {
					totalCircunference += currentCircunference;
				}

				return (
					<g key={item}>
						{currentCircunference && roomsCounter[item] &&
							<Circle
								innerWidth={innerWidth}
								innerHeight={innerHeight}
								innerRadius={innerRadius}
								rooms={rooms}
								item={item}
								roomsCounter={roomsCounter}
								strokeWidth={strokeWidth}
								currentCircunference={currentCircunference}
								circumference={circumference}
								totalCircunference={totalCircunference}
								onClick={onClick}
							/>
						 }
					</g>
				)
			})}
		</SVGWrapper>
	)
}

Gauge.displayName="Gauge";