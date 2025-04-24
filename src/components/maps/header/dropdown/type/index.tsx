// React imports
import { useState } from 'react';

// App imports
import { Arrow } from './arrow';
import { Suggestions } from './suggestions';

export const FiltersDropdown = ( { imoveisDict, propertyName, setPropertyTypeId }: any) => {
	const [ suggestionsActive, setSuggestionsActive ] = useState(false);
	
	const onClick = (e: any) => {
		const currentValue = e.target.innerText;	

		const key: any = 
			Object.keys(imoveisDict)
			.find(k => imoveisDict[k] === currentValue);

		setPropertyTypeId(parseInt(key))
	}

	return (
		<div 
			className="dropdown-wrapper" 
			onClick={() => setSuggestionsActive((prev: boolean) => !prev)}
		>
			<div className="dropdown-header">
				<div>{propertyName}</div>
				<Arrow/>
			</div>
			{suggestionsActive && 
				<Suggestions 
					suggestions={Object.values(imoveisDict)} 
					onClick={onClick}
				/>
			}
		</div>
	)
}

FiltersDropdown.displayName="FiltersDropdown";