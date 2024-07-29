// App imports
import { Selectors } from './selectors';

export const Header = () => {
  return (
    <div className="sidebar-header">
      <div className="sidebar-sub-title">
        Data do anúncio
      </div>
      <div></div>
      <Selectors/>
    </div>
  )
}