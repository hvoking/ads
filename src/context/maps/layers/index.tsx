// App imports
import { PointsLayerProvider } from './points';
import { AdvertiserLayerProvider } from './advertiser';
import { ArcLayerProvider } from './arc';

export const LayersProvider = ({children}: any) => {
  return (
    <PointsLayerProvider>
    <AdvertiserLayerProvider>
    <ArcLayerProvider>
      {children}
    </ArcLayerProvider>
    </AdvertiserLayerProvider>
    </PointsLayerProvider>
  )
}

LayersProvider.displayName="LayersProvider";