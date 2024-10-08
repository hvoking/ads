// App imports
import './styles.scss';

export const UserMessage = () => {
	return (
		<div className="sidebar-item-wrapper">
			<div className="sidebar-sub-title">
				Arraste o marcador ou pesquise um lugar
			</div>
			<img 
				className="m2b-starting-gif" 
				src={process.env.PUBLIC_URL + "/static/message/marker_move.gif"} 
				alt="marker_move"
			/>
		</div>
	)
}

UserMessage.displayName="UserMessage";