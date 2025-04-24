// App imports
import { Rooms } from './rooms';
import { Dsv } from './dsv';
import { Areas } from './areas';
import { Hist } from './hist';
import { Location } from './location';
import './styles.scss';

// Context imports
import { useIsochroneApi } from '../../context/api/isochrone';
import { useCategory } from '../../context/filters/category';
import { UserMessage } from './message';

export const Left = () => {
	const { initialMarker } = useIsochroneApi();
	const { currentView } = useCategory();

	return (
		<div className="left">
			<div className="user-message-wrapper">
				<Location/>
				{!initialMarker ? 
					<div className={currentView === "oferta" ? "sidebar-items" : "sidebar-hist"}>
						<Rooms/>
						{currentView === "oferta" ? <Dsv/> : <Hist/>}
						{currentView === "oferta" ? <Areas/> : <></>}
					</div> : 
					<UserMessage/>
				}
			</div>
		</div>
	)
}

Left.displayName="Left";