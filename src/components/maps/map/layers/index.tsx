// Layers imports
import { useArcLayer } from '../../../../context/maps/layers/arc';
import { useAdvertiserLayer } from '../../../../context/maps/layers/advertiser';

// Third-party imports
import { useControl } from 'react-map-gl';
import { MapboxOverlay } from '@deck.gl/mapbox/typed';
import type { DeckProps } from '@deck.gl/core/typed';

const DeckGLOverlay = (props: DeckProps) => {
  const deck = useControl<any>(() => new MapboxOverlay(props));
  deck.setProps(props);
  return null;
}

export const Layers = () => {
	const { arcLayer } = useArcLayer();
	const { advertiserLayer } = useAdvertiserLayer();

	const layers: any = [ arcLayer, advertiserLayer ];

	return (
		<DeckGLOverlay 
			layers={layers} 
			glOptions={{preserveDrawingBuffer: true}}
		/>
	)
}