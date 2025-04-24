// App imports
import { Bars } from './bars';
import { Gauge } from './gauge';
import { LoadingImage } from '../../utils/loading'

// Context imports
import { useDsvApi } from '../../../context/api/imoveis/dsv';
import { useRoomsApi } from '../../../context/api/imoveis/rooms';

export const Dsv = () => {
	const { dsvData } = useDsvApi();
	const { roomsData } = useRoomsApi();
	
	return (
		<div className="sidebar-item-wrapper">
			<div className="sidebar-sub-title">
				Dormitórios-Suítes-Vagas (DSV)
			</div>
			{dsvData && roomsData ? 
				<div className="rooms-wrapper">
					<Bars dsvData={dsvData}/> 
					<Gauge roomsData={roomsData} dsvData={dsvData}/>
				</div>
				: <LoadingImage/>
			}
		</div>
	)
} 

Dsv.displayName="Dsv";