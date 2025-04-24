// App imports
import { SvgMapSizesProvider } from './svgMap';
import { RoomsGaugeSizesProvider } from './rooms';
import { DsvSizesProvider } from './dsv';
import { PricesSizesProvider } from './prices';
import { AreasSizesProvider } from './areas';
import { PdfSizesProvider } from './pdf';
import { BottomSizesProvider } from './bottom';
import { TimeseriesSizesProvider } from './timeseries';

export const SizesProvider = ({children}: any) => {
  return (
   
    <AreasSizesProvider>
    <SvgMapSizesProvider>
    <RoomsGaugeSizesProvider>
    <DsvSizesProvider>
    <PricesSizesProvider>
    <PdfSizesProvider>
    <BottomSizesProvider>
    <TimeseriesSizesProvider>
      {children}
    </TimeseriesSizesProvider>
    </BottomSizesProvider>
    </PdfSizesProvider>
    </PricesSizesProvider>
    </DsvSizesProvider>
    </RoomsGaugeSizesProvider>
    </SvgMapSizesProvider>
    </AreasSizesProvider>
   
  )
}

SizesProvider.displayName="SizesProvider";