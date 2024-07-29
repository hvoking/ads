export const Circle = ({
	innerWidth,
	innerHeight,
	innerRadius,
	currentDsv,
	item,
	combinedColors,
	strokeWidth,
	currentCircumference,
	circumference,
	totalCircumference,
	rooms,
	suites
}: any) => {

	return (
		<circle
			cx={innerWidth/2}
			cy={innerHeight/2}
			fill="none"
			r={innerRadius}
			stroke={
				rooms === null ?
				String(combinedColors[item]) :
				currentDsv === item ?
				String(combinedColors[item]) :
				currentDsv[0] !== item[0] ?
				String(combinedColors[item]).replace('1)', '0.4)') :
				suites === null ?
				String(combinedColors[item]) :
				String(combinedColors[item]).replace('1)', '0.4)')
			}
			strokeWidth= {strokeWidth}
			strokeDasharray={`${currentCircumference} ${circumference - currentCircumference}`}
			strokeDashoffset={-(totalCircumference - currentCircumference)}
			style={{cursor: "pointer"}}
		/>
	)
}

Circle.displayName="Circle";