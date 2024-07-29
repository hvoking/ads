// App  imports
import { AxisText } from './text';
import { Lines } from './lines';
import { StrongLines } from './lines/StrongLines';

export const AxisBottom = ({ xScale, innerWidth, innerHeight }: any) => {
	const minX = xScale.ticks()[0];
	const maxX = xScale.ticks().at(-1);

	const currentLength = (maxX - minX) / 10;

	return (
		<>
			<Lines 
				xScale={xScale}
				innerWidth={innerWidth}
				innerHeight={innerHeight}
				legendArray={xScale.ticks(currentLength)}
				strokeWidth="1"
			/>
			<StrongLines 
				xScale={xScale}
				innerWidth={innerWidth}
				innerHeight={innerHeight}
				legendArray={xScale.ticks(5)}
				strokeWidth="1"
			/>
			<AxisText
				xScale={xScale}
				innerWidth={innerWidth}
				innerHeight={innerHeight}
				legendArray={xScale.ticks(5)}
			/>
    	</>
	)
}

AxisBottom.displayName="AxisBottom";