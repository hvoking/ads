// React imports
import { useEffect, useCallback } from 'react';

// Context imports
import { useAreas } from '../../../../context/filters/areas';

// Third-party imports
import * as d3 from 'd3';

export const Marker = ({ xScale, innerHeight }: any) => {
  const { leftPosition, setLeftPosition, rightPosition, setRightPosition, setAreaMin, setAreaMax } = useAreas();

  const minX = xScale.ticks()[0];
  const maxX = xScale.ticks().at(-1);

  const circleRadius = 12;

  const onDragLeft = (event: any) => {
      const x = xScale.invert(event.x);
      const boundedX = x > rightPosition ? rightPosition : x < minX ? minX : x;
      setLeftPosition(parseInt(boundedX));
      setAreaMin(parseInt(boundedX));
  }

  const onDragRight = (event: any) => {
      const x = xScale.invert(event.x);
      const boundedX = x > maxX ? maxX : x < leftPosition ? leftPosition : x;
      setRightPosition(parseInt(boundedX));
      setAreaMax(parseInt(boundedX));
  }

  const circleLeft = useCallback((node: any) => {
      const drag = d3.drag()
          .on('drag', onDragLeft)
      d3.select(node).call(drag);
  }, [ rightPosition ]);

  const circleRight = useCallback((node: any) => {
    const drag = d3.drag()
        .on('drag', onDragRight)
    d3.select(node).call(drag);
  }, [ leftPosition ]);

  useEffect(() => {
    setRightPosition(maxX);
    setAreaMax(maxX);
    setLeftPosition(minX);
    setAreaMin(minX);
  }, [ minX, maxX ]);

  return (
      <g>
        <line 
          x1={xScale(leftPosition)} 
          y1={innerHeight} 
          x2={xScale(rightPosition)} 
          y2={innerHeight} 
          stroke="rgba(126, 126, 132, 1)"
          strokeWidth={2}
        />
        <circle 
          ref={circleLeft}
          cx={xScale(leftPosition)} 
          cy={`${innerHeight}`} 
          r={circleRadius} 
          fill="rgba(23, 23, 32, 0.8)"
          stroke="rgba(126, 126, 132, 1)"
          strokeWidth={2}
          style={{cursor: "ew-resize"}}
        />
        <circle 
          ref={circleRight}
          cx={xScale(rightPosition)} 
          cy={`${innerHeight}`} 
          r={circleRadius} 
          fill="rgba(23, 23, 32, 0.8)"
          stroke="rgba(126, 126, 132, 1)"
          strokeWidth={2}
          style={{cursor: "ew-resize"}}
        />
      </g>
    )
}

Marker.displayName="Marker";