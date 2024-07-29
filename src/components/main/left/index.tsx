// App imports
import { Rooms } from './rooms';
import { Dsv } from './dsv';
import { Areas } from './areas';
import { Search } from './search';
import { Hist } from './hist';
import { Location } from './location';
import './styles.scss';

// Context imports
import { useIsoPolygonApi } from '../../context/api/isoPolygon';
import { useCategory } from '../../context/filters/category';
import { UserMessage } from './message';

export const Left = () => {
	const { initialMarker } = useIsoPolygonApi();
	const { currentView } = useCategory();

	return (
		<div className="left">
			<div className="user-message-wrapper">
				<Search/>
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