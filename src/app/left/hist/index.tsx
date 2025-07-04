// App imports
import { Table } from './table';

// Utils imports
import { LoadingImage } from 'utils/loading'

// Context imports
import { useHistApi } from 'context/api/imoveis/hist';

export const Hist = () => {
	const { histData } = useHistApi();
	
	return (
		<div className="sidebar-item-wrapper">
			<div className="sidebar-sub-title">
				Dormitórios-Suítes-Vagas (DSV)
			</div>
			{histData ? <Table histData={histData}/> : <LoadingImage/>}
		</div>
	)
} 

Hist.displayName="Hist";