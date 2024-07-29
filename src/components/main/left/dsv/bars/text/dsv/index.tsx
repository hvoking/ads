export const DsvText = ({ item,	totalHeight, currentHeight,	currentType, onClick, suites }: any) => {
	return (
		<text
			key={item}
			x={0}
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
			onClick={() => onClick(item)}
			style={{cursor: "pointer", letterSpacing: "3px"}}
		>
			{item.split(",").join("-")}
		</text>
	)
}

DsvText.displayName="DsvText";