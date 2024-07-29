// Third party imports
import { Layer } from 'react-map-gl';

export const Buildings = () => {
	const paintLayer: any = {
		'fill-extrusion-color': '#aaa',
    'fill-extrusion-height': 1,
		'fill-extrusion-opacity': 0.6,
	};

	return (
        <Layer
          id="3d-buildings"
          source="composite"
          source-layer="building"
          filter={['==', 'extrude', 'true']}
          type="fill-extrusion"
          paint={paintLayer}
      />
	)
}

Buildings.displayName="Buildings";