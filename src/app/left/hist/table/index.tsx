// App imports
import { Header } from './header';
import { Mean } from './mean';
import './styles.scss';

// Utils imports
import { priceFormat } from 'utils/constants';

// Context imports
import { useEquipment } from 'context/filters/equipment';

// Third party imports
import * as d3 from 'd3';

export const Table = ({ histData }: any) => {
	const { rooms, setRooms, setSuites, setGarages } = useEquipment();

	const onClick = (item: any) => {
		const newItem = item.split(",")
		setRooms(newItem[0])
		setSuites(newItem[1])
		setGarages(newItem[2])
	}
	
	const combinedCounts = {};

	if (histData) {
		for (const key in histData) {
		  if (histData.hasOwnProperty(key)) {
		    const dataset = histData[key];
		    if (dataset.counts) {
		      Object.assign(combinedCounts, dataset.counts);
		    }
		  }
		}
	}

	const histCount = rooms ? histData[`d${rooms}`].counts : combinedCounts;
	
	const histValues = Object.values(histCount);
	const histKeys = Object.keys(histCount);

	const counts: any = histValues.reduce((total: any, item: any) => {
		total.push(item.count)
		return total
	}, []);

	const sumOfCounts = histCount && d3.sum(counts);

	const currentDsvCount = histCount &&  histKeys.sort((a, b) => histCount[b].count - histCount[a].count)
		
	return (
		<div className="right-images-wrapper">
			<table>
				<Header/>
				{sumOfCounts && currentDsvCount && currentDsvCount.map((item: any, index: number) => {
					const currentPercent = (histCount[item].count / sumOfCounts) * 100;
					return (
						<>{currentPercent > 1 && 
							<tr key={index} onClick={() => onClick(item)}>
								<td>
									<div className="table-item">
										{index + 1}
									</div>
								</td>
								<td>
									<div className="table-item">
										{item}
									</div>
								</td>
								<td>
									<div className="table-item">
										{Math.round(currentPercent)}%
									</div>
								</td>
								<td>
									<div className="table-item">
										{priceFormat(histCount[item].mean_price)}
									</div>
								</td>
								<td>
									<div className="table-item">
										{Math.round(histCount[item].mean_area)}
									</div>
								</td>
								<td>
									<div className="table-item">
										{Math.round(histCount[item].count)}
									</div>
								</td>
								<td style={{width: "30px"}}>
									<div style={{width: "30px"}}>
										<Mean data={histCount[item].monthly_views}/>
									</div>
								</td>
							</tr>
						}</>
					)
				})}
			</table>
		</div>
	)
}

Table.displayName="Table";