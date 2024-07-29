// App imports
import { Prices } from './prices';
import { Timeseries } from './timeseries';
import { Pictures } from './pictures';
import { Values } from './values';
import './styles.scss';

// Context imports
import { usePricesApi } from '../../context/api/imoveis/prices';

export const Right = () => {
	const { pricesData } = usePricesApi();

	if (!pricesData) return <></>

	return (
		<div className="right">
			<div className="right-wrapper">
				<Values/>
				<Prices 
					pricesData={pricesData}
				/>
				<Timeseries/>
				<Pictures/>
			</div>
		</div>
	)
}

Right.displayName="Right";