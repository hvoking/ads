export const Text = ({ innerWidth, innerHeight, roomsData, rooms }: any) => {
	return (
		<>
			<text
				fill="rgba(255, 255, 255, 1)"
				textAnchor="middle"
				alignmentBaseline="after-edge"
				transform={`translate(
					${innerWidth/2}, 
					${innerHeight/2}
				)`}
			>
				{rooms ? `${rooms} dorm` : "dorm"}
			</text>
			<text
				fill="rgba(255, 255, 255, 1)"
				textAnchor="middle"
				alignmentBaseline="before-edge"
				fontSize="0.8em"
				transform={`translate(
					${innerWidth/2}, 
					${innerHeight/1.9}
				)`}
			>
				{rooms && roomsData[rooms] ? `${Math.round(roomsData[rooms])} %` : "100%"}
			</text>
		</>
	)
}

Text.displayName="Text";