// App imports
import { GaugeSizesProvider } from './gauge';
import { BarsSizesProvider } from './bars';

export const PdfDsvSizesProvider = ({ children }: any) => {
	return (
		<BarsSizesProvider>
		<GaugeSizesProvider>
			{children}
		</GaugeSizesProvider>
		</BarsSizesProvider>
	)
}

PdfDsvSizesProvider.displayName="PdfDsvSizesProvider";

export * from './gauge';
export * from './bars';