// App imports
import { RoomsSizesProvider } from './rooms';
import { DsvSizesProvider } from './dsv';
import { PricesSizesProvider } from './prices';
import { TimeseriesSizesProvider } from './timeseries';

export const BottomSizesProvider = ({ children }: any) => {
	return (
		<DsvSizesProvider>
		<RoomsSizesProvider>
		<PricesSizesProvider>
		<TimeseriesSizesProvider>
			{children}			
		</TimeseriesSizesProvider>
		</PricesSizesProvider>
		</RoomsSizesProvider>
		</DsvSizesProvider>
	)
}

BottomSizesProvider.displayName="BottomSizesProvider"