// App imports
import { MapHeader } from './header';
import { SvgMap } from './svgMap';
import { BasemapsSelectors } from './basemaps';
import { MapContainer } from './map';
import './styles.scss';

export const Maps = () => {
	return (
		<div className="map-wrapper">
			<MapHeader/>
			<SvgMap/>
			<MapContainer/>
			<BasemapsSelectors/>
		</div>
	)
}

Maps.displayName="Maps";