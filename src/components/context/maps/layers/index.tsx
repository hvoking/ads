// App imports
import { PointsLayerProvider } from './points';
import { IconLayerProvider } from './icon';
import { AdvertiserLayerProvider } from './advertiser';
import { ArcLayerProvider } from './arc';

export const LayersProvider = ({children}: any) => {
  return (
    <PointsLayerProvider>
    <IconLayerProvider>
    <AdvertiserLayerProvider>
    <ArcLayerProvider>
      {children}
    </ArcLayerProvider>
    </AdvertiserLayerProvider>
    </IconLayerProvider>
    </PointsLayerProvider>
  )
}

LayersProvider.displayName="LayersProvider";