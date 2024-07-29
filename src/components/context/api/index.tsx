// App imports
import { PolygonApiProvider } from './polygon';
import { GoogleApiProvider } from './google';
import { ImoveisApiProvider } from './imoveis';
import { IsoPolygonApiProvider } from './isoPolygon';

export const ApiProvider = ({children}: any) => {
  return (
    <IsoPolygonApiProvider>
    <PolygonApiProvider>
    <GoogleApiProvider>
    <ImoveisApiProvider>
      {children}
    </ImoveisApiProvider>
    </GoogleApiProvider>
    </PolygonApiProvider>
    </IsoPolygonApiProvider>
  )
}

ApiProvider.displayName="ApiProvider";