// App imports
import { PdfRoomsSizesProvider } from './rooms';
import { PdfDsvSizesProvider } from './dsv';
import { PdfAreasSizesProvider } from './areas';
import { PdfPricesSizesProvider } from './prices';

export const PdfSizesProvider = ({ children }: any) => {
	return (
		<PdfDsvSizesProvider>
		<PdfAreasSizesProvider>
		<PdfRoomsSizesProvider>
		<PdfPricesSizesProvider>
			{children}			
		</PdfPricesSizesProvider>
		</PdfRoomsSizesProvider>
		</PdfAreasSizesProvider>
		</PdfDsvSizesProvider>
	)
}

PdfSizesProvider.displayName="PdfSizesProvider";

export * from './rooms';
export * from './dsv';
export * from './areas';
export * from './prices';