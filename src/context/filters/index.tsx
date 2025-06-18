// App imports
import { PropertyTypeProvider } from './property';
import { EquipmentProvider } from './equipment';
import { DatesProvider } from './dates';
import { PricesProvider } from './prices';
import { AreasProvider } from './areas';
import { CategoryProvider } from './category';

export const FiltersProvider = ({children}: any) => {
  return (
    <PropertyTypeProvider>
    <EquipmentProvider>
    <DatesProvider>
    <PricesProvider>
    <AreasProvider>
    <CategoryProvider>
      {children}
    </CategoryProvider>
    </AreasProvider>
    </PricesProvider>
    </DatesProvider>
    </EquipmentProvider>
    </PropertyTypeProvider>
  )
}

FiltersProvider.displayName="FiltersProvider";