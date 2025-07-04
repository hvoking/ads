// React imports
import { useCallback, Children, cloneElement } from 'react';

// Context imports
import { useBarsSizes } from '../../../../../context/sizes/dsv/bars';

export const SVGWrapper = ({ children }: any) => {
	const { width, height, setWidth, setHeight, margin } = useBarsSizes();

	const parentRef = useCallback((node: any) => {
		if (node) {
			setWidth(node.getBoundingClientRect().width);
			setHeight(node.getBoundingClientRect().height);
		}
	}, []);

	return (
		<div ref={parentRef} style={{width: "100%", height: "auto"}}>
			{width &&
				<svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
					<g transform={`translate(${margin.left}, ${margin.top})`}>
						{
				          Children.map(children, (child, index) => {
				            return cloneElement(child, {width: "100%"});
				          })
				        }
			        </g>
			</svg>}
		</div>
	)
}

SVGWrapper.displayName="SVGWrapper";