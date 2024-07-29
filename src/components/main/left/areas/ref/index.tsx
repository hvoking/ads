// React imports
import { useCallback, useRef } from 'react';

// Context imports
import { useAreas } from '../../../../context/filters/areas';

// Third-party imports
import * as d3 from 'd3';


export const Ref = ({ xScale, areasMax, areasMin, innerWidth, innerHeight }: any) => {
	const currentDragRef = useRef<any>(null);
	const { 
	    leftPosition, setLeftPosition, 
	    rightPosition, setRightPosition, 
	    setAreaMin, setAreaMax 
	} = useAreas();

	const onDragStart = (event: any) => {
	    const x = xScale.invert(event.x);
	    
	    const activateRight = Math.abs(rightPosition - x);
	    const activateLeft = Math.abs(leftPosition - x);

	    if (activateRight < activateLeft) {
	        currentDragRef.current = 'right';
	    } else {
	        currentDragRef.current = 'left';
	    }
	}

	const onDrag = (event: any) => {
	    const x = xScale.invert(event.x);

	    const boundedLeft = 
	        x < areasMin ? areasMin : 
	        x > rightPosition ? rightPosition : 
	        x;

	    const boundedRight = 
	        x > areasMax ? areasMax : 
	        x < leftPosition ? leftPosition : 
	        x;

	    if (currentDragRef.current === 'left') {
	        setLeftPosition(parseInt(boundedLeft));
	        setAreaMin(parseInt(boundedLeft));    
	    } else {
	        setRightPosition(parseInt(boundedRight));
	        setAreaMax(parseInt(boundedRight));
	    }
	}
	const barsRef = useCallback((node: any) => {
	    const drag = d3.drag()
	        .on('start', onDragStart)
	        .on('drag', onDrag)
	    d3.select(node).call(drag);
	}, [ rightPosition, leftPosition ]);

	return (
		<rect
		    x={0}
		    y={0}
		    width={innerWidth}
		    height={innerHeight}
		    fill="transparent"
		    ref={barsRef}
		    style={{cursor: "ew-resize"}}
		/>
	)
}

Ref.displayName="Ref";