// App imports
import { MapHeader } from './header';
import { SvgMap } from './svgMap';
import { MapContainer } from './map';
import './styles.scss';

export const Maps = () => {
	return (
		<div className="map-wrapper">
			<MapHeader/>
			<SvgMap/>
			<MapContainer/>
		</div>
	)
}

Maps.displayName="Maps";