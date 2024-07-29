// App imports
import { GaugeSizesProvider } from './gauge';
import { BarsSizesProvider } from './bars';

export const RoomsSizesProvider = ({ children }: any) => {
	return (
		<BarsSizesProvider>
		<GaugeSizesProvider>
			{children}
		</GaugeSizesProvider>
		</BarsSizesProvider>
	)
}

RoomsSizesProvider.displayName="RoomsSizesProvider";