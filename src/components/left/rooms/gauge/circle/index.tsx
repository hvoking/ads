export const Circle = ({
	innerWidth,
	innerHeight,
	innerRadius,
	rooms,
	item,
	roomsCounter,
	strokeWidth,
	currentCircunference,
	circumference,
	totalCircunference,
	onClick,
}: any) => {
	return (
		<circle
			cx={innerWidth/2}
			cy={innerHeight/2}
			fill="none"
			r={innerRadius}
			stroke={
				String(rooms) === item ? 
				roomsCounter[item] : 
				rooms === null ?
				roomsCounter[item] :
				roomsCounter[item].replace('1)', '0.4)')
			}
			strokeWidth= {strokeWidth}
			strokeDasharray={`${currentCircunference} ${circumference - currentCircunference}`}
			strokeDashoffset={-(totalCircunference - currentCircunference)}
			onClick={() => onClick(item)}
			style={{cursor: "pointer"}}
		/>
	)
}

Circle.displayName="Circle";