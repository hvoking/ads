export const PercentText = ({ item,	totalHeight, currentHeight,	currentType, onClick, currentPercent, suites }: any) => {
	return (
		<text
			key={item}
			x={80}
			y={totalHeight - currentHeight + currentHeight/2}
			fill={
				suites === null ?
				"rgba(255, 255, 255, 1)" : 
				currentType === item ? 
				"rgba(255, 255, 255, 1)" : 
				"rgba(255, 255, 255, 0.6)"
			}
			textAnchor="start"
			alignmentBaseline="middle"
			fontSize="0.8em"
			fontWeight="500"
			onClick={() => onClick(item)}
			style={{cursor: "pointer"}}
		>
			{Math.round(currentPercent)}%
		</text>
	)
}

PercentText.displayName="PercentText";