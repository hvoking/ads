// Context imports
import { useAreas } from '../../../../../context/filters/areas';

// Third party imports
import * as d3 from 'd3';

export const Lines = ({ xScale, innerWidth, innerHeight, legendArray, strokeWidth }: any) => {
    const { areaMin, areaMax } = useAreas();
    
    const xScaleBand: any = d3.scaleBand()
      .domain(legendArray)
      .range([0, innerWidth])

  return (
    <>
    {xScaleBand.domain().map((currentValue: number) => (
      <g 
        key={currentValue} 
        className="bar-tick"
        transform={`translate(${xScale(currentValue)}, ${innerHeight})`}
      >
        <line
          x1={0}
          x2={0}
          y1={0}
          y2={6}
          stroke={
            currentValue <= areaMax && currentValue >= areaMin ? 
            "rgba(126, 126, 132, 1)" : 
            "rgba(77, 77, 77, 1)"
          }
          strokeWidth={strokeWidth}
        />
      </g>
      ))}
    </>
  )}