// App imports
import { priceFormat } from '../../../utils/constants';

export const ValueItem = ({ background, border, currentValue, label }: any) => {
  return (
    <div>
      <div
        className="calculator-item"
        style={{
          backgroundColor: background,
          border: border,
        }}
      >
        {priceFormat(currentValue)}
      </div>
      <div className="calculator-text">{label}</div>
    </div>
  )
}