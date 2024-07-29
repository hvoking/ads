// React imports
import { useEffect } from 'react';

// App imports
import { Header } from './header';
import { Description } from './description';
import './styles.scss';

// Context imports
import { usePropertyType } from '../../../context/filters/property';
import { useAreas } from '../../../context/filters/areas';
import { usePrices } from '../../../context/filters/prices';
import { useDates } from '../../../context/filters/dates';
import { useTooltip } from '../../../context/maps/tooltip';
import { usePricesLimits } from '../../../context/limits/prices';
import { useLinesLimits } from '../../../context/limits/lines';

export const Pictures = () => {
	const { rejectedIds, setRejectedIds, currentPropertyId, nearest, setNearest, activeEquipment, setCurrentPropertyId, setSamplesIds } = usePropertyType();
	const { setSamplesPrices, leftPosition, rightPosition, unitPrice } = usePrices();
	const { areaMin, areaMax } = useAreas();
	const { formatedStartDate, formatedFinalDate } = useDates();
	const { setPropertyInfo, setActivePropertyInfo } = useTooltip();
	const { bottomLimit, topLimit } = useLinesLimits();
	const { filterPrices } = usePricesLimits();
	
	const filterById = filterPrices.filter((item: any) => !rejectedIds.includes(item.property_id));

	filterById.sort((a: any, b: any) => a["distance"] - b["distance"]);

	const currentPriceString = 
		unitPrice === "price" ? 
		"price" : 
		"unit_price";

	useEffect(() => {
		setSamplesPrices(filterById.slice(0, nearest).map((item: any) => item[currentPriceString]));
		setSamplesIds(filterById.slice(0, nearest).map((item: any) => item['property_id']))
	}, [ 
		rejectedIds, activeEquipment, unitPrice, 
		leftPosition, rightPosition, 
		areaMin, areaMax,
		formatedStartDate, formatedFinalDate,
	]);

	const iscUrl = "https://media.imoveis-sc.com.br/media/thumb-55-45/";

	return (
			<div className="right-item-wrapper">
				<Header nearest={nearest} setNearest={setNearest}/>
				<div className="right-images-wrapper">
					<div className="right-pictures">
						{filterById.slice(0, nearest).map((item: any, index: any) => {
							const currentImage = item.image_src && item.image_src;
							return (
								<div
									key={index} 
									className="pictures-box"
									style={{ 
										border: 
											currentPropertyId && currentPropertyId === item.property_id ? 
											"2px solid rgba(255, 255, 0, 1)" :
											"2px solid rgba(23, 23, 32, 1)",
										backgroundColor: 
											item[currentPriceString] < bottomLimit ? 
											"rgba(68, 27, 30, 1)" :
											item[currentPriceString] > topLimit ? 
											"rgba(42, 43, 96, 1)" :
											"rgba(21, 59, 39, 1)"
									}}
								>
									<div style={{
										backgroundColor: 
											item[currentPriceString] < bottomLimit ? 
											"rgba(255, 0, 0, 1)" :
											item[currentPriceString] > topLimit ? 
											"rgba(166, 166, 244, 1)" :
											"rgba(67, 181, 64, 1)"
									}}></div>
								<div
									className="right-pictures-item"
									onClick={() => {
										setPropertyInfo(item);
										setActivePropertyInfo(true);
									}}
								>
									<img 
										className="pdf-pictures-img"
										src={iscUrl + currentImage}
										alt="property"
										width="55"
										height="45"
										loading="lazy"
									/>
									<Description 
										item={item} 
										setRejectedIds={setRejectedIds} 
										setCurrentPropertyId={setCurrentPropertyId}
									/>
								</div>
							</div>
							)}
						)}
					</div>
				</div>
			</div>
	)
}

Pictures.displayName="Pictures";