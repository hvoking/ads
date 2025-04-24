// App imports
import { PropertyTypeProvider } from './property';
import { EquipmentProvider } from './equipment';
import { DatesProvider } from './dates';
import { PricesProvider } from './prices';
import { AreasProvider } from './areas';
import { PdfProvider } from './pdf';
import { CategoryProvider } from './category';

export const FiltersProvider = ({children}: any) => {
  return (
    <PropertyTypeProvider>
    <EquipmentProvider>
    <DatesProvider>
    <PricesProvider>
    <AreasProvider>
    <PdfProvider>
    <CategoryProvider>
      {children}
    </CategoryProvider>
    </PdfProvider>
    </AreasProvider>
    </PricesProvider>
    </DatesProvider>
    </EquipmentProvider>
    </PropertyTypeProvider>
  )
}

FiltersProvider.displayName="FiltersProvider";