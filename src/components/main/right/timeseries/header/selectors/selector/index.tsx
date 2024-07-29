// App imports
import './styles.scss';

export const Selector = ({
	activeEquipment, 
	setActiveEquipment, 
	currentTooltip, 
	setCurrentTooltip,
	selectorText,
	image,
	imageActive,
	tooltipText
}: any) => {
	return (
		<div style={{position: "relative"}}>
		        <img 
	                src={
	                	activeEquipment === selectorText ? 
	                	imageActive : 
	                	image
	                } 
	                alt={`${selectorText}-selector`}
	                onClick={() => 
	                	activeEquipment === selectorText ? 
	                	setActiveEquipment(null) : 
	                	setActiveEquipment(selectorText)
	                }
	                onMouseEnter={() => setCurrentTooltip(selectorText)}
	                onMouseLeave={() => setCurrentTooltip(null)}
		        />
		        {
		        	currentTooltip === selectorText && 
		        	<span className="prices-tooltip">{tooltipText}</span>
		        }
		</div>
	)
}

Selector.displayName="Selector";