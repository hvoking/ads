// App imports
import { Header } from './header';
import { ValueItem } from './item';
import './styles.scss';

// Context imports
import { useLinesLimits } from '../../../context/limits/lines';

export const Values = () => {    
  const { minLine, meanLine, maxLine } = useLinesLimits();

  return (
    <div className="calculator-wrapper">
    <Header/>
    <div className="calculator-item-wrapper">
      <ValueItem
        background="rgba(68, 27, 30, 1)"
        border="1px solid rgba(255, 0, 0, 1)"
        currentValue={minLine}
        label="Mínimo"
      />
      <ValueItem
        background="rgba(21, 59, 39, 1)"
        border="1px solid rgba(57, 181, 74, 1)"
        currentValue={meanLine}
        label="Sugerido"
      />
      <ValueItem
        background="rgba(42, 43, 96, 1)"
        border="1px solid rgba(166, 166, 244, 1)"
        currentValue={maxLine}
        label="Máximo"
      />
    </div>
    </div>
  )
}

Values.displayName="Values";