// App imports
import { GaugeSizesProvider } from './gauge';
import { BarsSizesProvider } from './bars';

export const PdfRoomsSizesProvider = ({ children }: any) => {
	return (
		<BarsSizesProvider>
		<GaugeSizesProvider>
			{children}
		</GaugeSizesProvider>
		</BarsSizesProvider>
	)
}

PdfRoomsSizesProvider.displayName="PdfRoomsSizesProvider";