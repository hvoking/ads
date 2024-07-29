// App imports
import { priceFormat } from '../../../utils/constants';

// Context imports
import { usePrices } from '../../../../context/filters/prices';

export const Header = () => {
  const { samplesPrices } = usePrices();

  const mean = (arr: any) => {
      if (arr.length === 0) return 0;
      const filteredArr = arr.filter(Number.isFinite); // Remove non-numeric values
      if (filteredArr.length === 0) return 0; // Handle case where all values are non-numeric
      const sum = filteredArr.reduce((acc: any, val: any) => acc + val, 0);
      return sum / filteredArr.length;
  };

  return (
    <div className="sidebar-header">
      <div className="sidebar-sub-title">Faixas de valores</div>
      <div></div>
      <div style={{display: "flex", gap: "5px", paddingTop: '5px', alignItems: "center"}}>
        <div style={{color: "rgba(255, 255, 255, 0.6)"}}>Méd.</div>
        <div className="airbnb-property-prices-number">
          {samplesPrices && priceFormat(Math.round(mean(samplesPrices)))}
        </div>
      </div>
    </div>
  )
}