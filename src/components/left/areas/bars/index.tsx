export const Bars = ({ 
    xScale, yScale, 
    areasMin, areasMax, 
    innerWidth, innerHeight,
    areasColor, areasPercentage 
}: any) => {
    
    const firstCharacter = 
        areasMin < 100 ? 
        parseInt(areasMin[0]) : areasMin ? 
        parseInt(areasMin.slice(0, 2)) : 0;
    
    const currentLength = (areasMax - areasMin) / 10
    const areasArray: any = 
        Array.from({length: currentLength}, (_, i) => (i + firstCharacter) * 10);

	return (
        <g>
            {
                areasArray.map((item: any, index: number) => {
                    const currentHeight = yScale(areasPercentage[item]);
                    return (
                        <rect
                            key={index}
                            x={xScale(item) + 1}
                            y={
                                areasPercentage[item] ?
                                innerHeight - currentHeight - 20 :
                                innerHeight - 20
                            }
                            width={innerWidth/(areasArray.length) - 1}
                            height={
                                areasPercentage[item] ?
                                currentHeight + 20 :
                                20
                            }
                            style={{
                                fill: areasColor[item] ?
                                areasColor[item] :
                                areasColor["null"]
                            }}
                        />
                    )
                })
            }
            
        </g>
	)
}

Bars.displayName="Bars"