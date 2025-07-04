export const Nearest = ({ nearest, setNearest }: any) => {
	const onChange = (e: any, setState: any) => {
		const currentValue = e.currentTarget.value;
		currentValue >= 0 && currentValue < 101 && setState(e.currentTarget.value);
	}

	const onChangeMin = (e: any) => {
		const currentValue = nearest - 1;
		currentValue >= 0 && setNearest(currentValue);
	}
	
	const onChangeMax = (e: any) => {
		const currentValue = nearest + 1;
		currentValue < 101 && setNearest(currentValue);
	}

	return (
		<div className="samples-item-wrapper">
			<div 
				className="samples-minus-sign" 
				onClick={onChangeMin}
			>
				-
			</div>
			<input 
				type="text" 
				className="samples-number" 
				value={nearest}
				onChange={(e: any) => onChange(e, setNearest)}
				min={1} 
				max={100}
				style={{fontSize: "0.6em"}}
			/>
			<div 
				className="samples-plus-sign" 
				onClick={onChangeMax}
			>
				+
			</div>
		</div>
	)
}

Nearest.displayName="Nearest";