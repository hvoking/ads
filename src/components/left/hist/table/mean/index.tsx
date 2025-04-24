// Third party imports
import * as d3 from 'd3';

export const Mean = ({ data }: any) => {

    const xScale = d3.scaleTime()
      .domain([Date.parse("2022-08-01"), Date.parse("2023-10-01")])
      .range([0, 30]);

    const minValue: any = d3.min(Object.values(data));
    const maxValue: any = d3.max(Object.values(data));

    const yScale = d3.scaleLinear()
      .domain([maxValue, minValue])
      .range([5, 25]);

    const entries: any = Object.entries(data);

    return (
        <svg viewBox={`0 0 ${30} ${30}`} preserveAspectRatio="none">
            <path
                stroke="rgba(255, 255, 255, 1)"
                strokeWidth={1}
                fill={"none"}
                d={
                    `${
                        d3.line()
                            .x((d: any) => xScale(Date.parse(d[0])))
                            .y((d: any) => yScale(d[1]))
                            .curve(d3.curveNatural)(entries)
                    }`
                } 
            />
        </svg>
    )
}

Mean.displayName="Mean"