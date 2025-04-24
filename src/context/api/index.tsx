// App imports
import { PolygonApiProvider } from './polygon';
import { GoogleApiProvider } from './google';
import { ImoveisApiProvider } from './imoveis';
import { IsochroneApiProvider } from './isochrone';

export const ApiProvider = ({children}: any) => {
  return (
    <IsochroneApiProvider>
    <PolygonApiProvider>
    <GoogleApiProvider>
    <ImoveisApiProvider>
      {children}
    </ImoveisApiProvider>
    </GoogleApiProvider>
    </PolygonApiProvider>
    </IsochroneApiProvider>
  )
}

ApiProvider.displayName="ApiProvider";