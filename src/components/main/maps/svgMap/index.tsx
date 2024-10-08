// React imports
import { useRef } from 'react';

// App imports
import { SVGWrapper } from './svg';
import './styles.scss';

// Context imports
import { usePolygonApi } from '../../../context/api/polygon';
import { useIsochroneApi } from '../../../context/api/isochrone';
import { useSvgMapSizes } from '../../../context/sizes/svgMap';
import { useGeo } from '../../../context/filters/geo';

// Third-party imports
import * as d3 from 'd3';

export const SvgMap = () => {
	const svgContainerRef = useRef<any>(null);

	const { polygonData } = usePolygonApi();
	const { isochroneData } = useIsochroneApi();
	const { innerWidth, innerHeight } = useSvgMapSizes();
	const { setViewport } = useGeo();

	if (!isochroneData || !polygonData || !polygonData[0] || !polygonData[0].city_geom) return (<></>)

	const city = polygonData[0].city_geom[0];
	const polygon = isochroneData.features[0].geometry;

	const projection = d3.geoIdentity()
		.reflectY(true)
		.fitSize([ innerWidth, innerHeight ], city)

	const path = d3.geoPath(projection);

	const onClick = (e: any) => {
		const rect = svgContainerRef.current.getBoundingClientRect();
		const adjustedCoordinates: any = [e.clientX - rect.left, e.clientY - rect.top];
	    const [lng, lat]: any = projection.invert(adjustedCoordinates);
	    setViewport((prev: any) => ({...prev, latitude: lat, longitude: lng }));
	}

	return (
		<div className="svgmap-wrapper">
			<div ref={svgContainerRef}>
				<SVGWrapper>
					<g>
						<path
							onClick={onClick}
							fill="rgba(126, 126, 132, 0.4)"
							stroke="rgba(255, 255, 255, 1)" 
							strokeWidth={0.5}
							className="feature" 
							d={`${path(city)}`}
						/>
						<path
							fill="rgba(222, 112, 112, 0.8)"
							stroke="rgba(255, 0, 0, 1)"
							strokeWidth={0.3}
							className="feature" 
							d={`${path(polygon)}`}
						/>
					</g>
				</SVGWrapper>
			</div>
		</div>
	)
}

SvgMap.displayName="SvgMap";