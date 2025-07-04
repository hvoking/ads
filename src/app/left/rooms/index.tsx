// App imports
import { Header } from './header';
import { Gauge } from './gauge';
import { Legend } from './legend';
import './styles.scss';

// Utils imports
import { LoadingImage } from 'utils/loading';

// Context imports
import { useRoomsApi } from 'context/api/imoveis/rooms';
import { useDsvApi } from 'context/api/imoveis/dsv';

export const Rooms = () => {
	const { roomsData } = useRoomsApi();
	const { dsvData } = useDsvApi();

	return (
		<div className="sidebar-item-wrapper">
			<Header/>
			{
				!dsvData || !roomsData ? 
				<LoadingImage/> :
				<div className="rooms-wrapper">
					<Legend roomsData={roomsData} dsvData={dsvData}/>
					<Gauge roomsData={roomsData} dsvData={dsvData}/>
				</div>
			}
		</div>
	)
} 

Rooms.displayName="Rooms";