export const Text = ({ innerWidth, innerHeight, currentPercent, currentDsv }: any) => {
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
				{currentDsv[0] === "n" ? "total" : currentDsv[2] === "n" ? currentDsv[0] : currentDsv.replaceAll(",", "-")}
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
				{currentPercent ? `${Math.round(currentPercent)} %` : "100%"}
			</text>
		</>
	)
}

Text.displayName="Text";