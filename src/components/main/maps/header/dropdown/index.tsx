// App imports
import { IsoDropdown } from './iso';
import { FiltersDropdown } from './type';
import './styles.scss';

// Context imports
import { useIsoPolygonApi } from '../../../../context/api/isoPolygon';
import { usePropertyType } from '../../../../context/filters/property';
import { useCategory } from '../../../../context/filters/category';

export const Dropdown = () => {
	const { 
		routingProfile, setRoutingProfile, 
		contoursMinutes, setContoursMinutes 
	} = useIsoPolygonApi();

	const { 
		propertyName, businessName, 
		setPropertyTypeId, setBusinessTypeId, 
		propertyDict, businessDict 
	} = usePropertyType();

	const { categoryDict, currentView, setCategoryId } = useCategory();

	const transportListOfValues: any = {
		"walking": "static/main/maps/header/walking-active.svg",
		"driving": "static/main/maps/header/driving-active.svg"
	}

	const minutesDict: any = {
		"5": "5 min",
		"10": "10 min",
		"15": "15 min",
		"30": "30 min",
		"60": "60 min",
	}

	return (
		<div className="map-header">
			<IsoDropdown
				listOfValues = {transportListOfValues}
				currentState={routingProfile}
				setState={setRoutingProfile}
			/>
			<FiltersDropdown
				imoveisDict={minutesDict}
				propertyName={`${contoursMinutes} min`}
				setPropertyTypeId={setContoursMinutes}
			/>
			<FiltersDropdown
				imoveisDict={propertyDict}
				propertyName={propertyName}
				setPropertyTypeId={setPropertyTypeId}
			/>
			<FiltersDropdown
				imoveisDict = {businessDict}
				propertyName={businessName}
				setPropertyTypeId={setBusinessTypeId}
			/>
			<FiltersDropdown
				imoveisDict = {categoryDict}
				propertyName={currentView}
				setPropertyTypeId={setCategoryId}
			/>
		</div>
	)
}

Dropdown.displayName="Dropdown";