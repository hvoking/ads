// App imports
import { FiltersProvider } from './filters';
import { MapsProvider } from './maps';
import { ApiProvider } from './api';
import { SizesProvider } from './sizes';
import { LimitsProvider } from './limits';
import { GeoProvider } from './geo';

export const MainProvider = ({children}: any) => {
  return (
    <GeoProvider>
    <FiltersProvider>
    <ApiProvider>
    <LimitsProvider>
    <SizesProvider>
    <MapsProvider>
      {children}
    </MapsProvider>
    </SizesProvider>
    </LimitsProvider>
    </ApiProvider>
    </FiltersProvider>
    </GeoProvider>
  )
}

MainProvider.displayName="MainProvider";