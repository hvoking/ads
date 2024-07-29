export const Legend = ({ innerHeight, xScale, currentPosition, priceFormat }: any) => {
	const legendWidth = 18;

	return (
		<>
		<polygon 
			points={`
				${xScale(currentPosition)} ${innerHeight + 13}, 
				${xScale(currentPosition) - 6} ${innerHeight + 13 + 5}, 
				${xScale(currentPosition) + 6} ${innerHeight + 13 + 5}
			`}
			fill="rgba(126, 126, 132, 1)"
		/>
		<rect
			x={xScale(currentPosition) - legendWidth}
			y={innerHeight + 13 + 5}
			rx={2}
			ry={2}
			width={legendWidth * 2}
			height={20}
			fill="rgba(23, 23, 32, 1)"
			strokeWidth={2}
			stroke="rgba(126, 126, 132, 1)"
		>
		</rect>
		<text 
			x={xScale(currentPosition)} 
			y={innerHeight + 13 + 16} 
			fill="rgba(255, 255, 255, 0.8)" 
			textAnchor="middle"
			dominantBaseline="middle"
			fontSize="0.8em"
		>
			{priceFormat(currentPosition)}
		</text>
		</>
	)
}

Legend.displayName="Legend";