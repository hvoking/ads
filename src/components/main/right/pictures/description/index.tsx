// App imports
import { Symbols } from './symbols';

// Context imports
import { usePrices } from '../../../../context/filters/prices';

// Third-party imports
import * as d3 from 'd3';

const siFormat = d3.format(",");

export const Description = ({ item, setRejectedIds, setCurrentPropertyId }: any) => {
	const { unitPrice } = usePrices();
	const addId = (e: any, item: any) => {
		e.stopPropagation();
		const currentValue = item.property_id;
		setRejectedIds((prev: any) => [...prev, currentValue]);
	}
	const onMouseOver = (e: any, item: any) => {
		setCurrentPropertyId(item.property_id);
	}

	return (
		<div
			className="pdf-pictures-description-wrapper"
			onMouseOver={(e: any) => onMouseOver(e, item)}
			onMouseOut={() => setCurrentPropertyId(null)}
		>
			<div className="pdf-pictures-description">
				{
					unitPrice === "price" ? 
					<div>R$ {siFormat(item.price).replaceAll(",", ".")}</div> :
					<div>R$ {siFormat(Math.round(item.unit_price)).replaceAll(",", ".")} / m²</div>
				}
				<div>{item.processed_area} m²</div>
				<Symbols item={item}/>
			</div>
			<img
				className="pdf-cancel-cross"
				src="static/logos/cancel_search.svg" 
				alt="search-icon"
				onClick={(e: any) => addId(e, item)}
			/>
		</div>
	)
}

Description.displayName="Description";