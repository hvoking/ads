// App imports
import './styles.scss';

export const Symbols = ({ item }: any) => {
	const imagePath = process.env.PUBLIC_URL + "/static/symbols/";

	return (
		<div className="pdf-pictures-symbols">
			{item.status === 1 && 
				<img 
					src={imagePath + "statusActive.svg"} 
					alt="status-active"
					style={{height: "10px"}}
				/>
			}
			{item.new === 1 && 
				<img 
					src={imagePath + "newActive.svg"} 
					alt="new-active"
					style={{height: "10px"}}
				/>
			}
			{item.pool === 1 && 
				<img 
					src={imagePath + "poolActive.svg"} 
					alt="pool-active"
					style={{height: "10px"}}
				/>
			}
			{item.furnished === 1 && 
				<img 
					src={imagePath + "furnitureActive.svg"} 
					alt="furnished-active"
					style={{height: "10px"}}
				/>
			}
		</div>
	)
}

Symbols.displayName="Symbols";