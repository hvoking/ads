// App imports
import { GaugeSizesProvider } from './gauge';
import { BarsSizesProvider } from './bars';

export const DsvSizesProvider = ({ children }: any) => {
	return (
		<BarsSizesProvider>
		<GaugeSizesProvider>
			{children}
		</GaugeSizesProvider>
		</BarsSizesProvider>
	)
}

DsvSizesProvider.displayName="DsvSizesProvider";