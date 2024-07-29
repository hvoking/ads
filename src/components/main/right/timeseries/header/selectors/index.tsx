// React imports
import { useState } from 'react';

// App imports
import { Selector } from './selector';

// Context imports
import { usePropertyType } from '../../../../../context/filters/property';

// App imports
import './styles.scss';

export const Selectors = () => {
        const [ currentTooltip, setCurrentTooltip ] = useState<any>(null);
        const { activeEquipment, setActiveEquipment } = usePropertyType();

        const imagePath = "static/main/prices/header/";

        return (
                <div className="right-selector-wrapper">
                        <Selector
                                activeEquipment={activeEquipment} 
                                setActiveEquipment={setActiveEquipment} 
                                currentTooltip={currentTooltip} 
                                setCurrentTooltip={setCurrentTooltip}
                                selectorText="status"
                                image={ imagePath + "status.svg"}
                                imageActive={ imagePath + "statusActive.svg"}
                                tooltipText="ativos"
                        />
                        <Selector
                                activeEquipment={activeEquipment} 
                                setActiveEquipment={setActiveEquipment} 
                                currentTooltip={currentTooltip} 
                                setCurrentTooltip={setCurrentTooltip}
                                selectorText="new"
                                image={ imagePath + "new.svg"}
                                imageActive={ imagePath + "newActive.svg"}
                                tooltipText="novos"
                        />
                        <Selector
                                activeEquipment={activeEquipment} 
                                setActiveEquipment={setActiveEquipment} 
                                currentTooltip={currentTooltip} 
                                setCurrentTooltip={setCurrentTooltip}
                                selectorText="furnished"
                                image={imagePath + "furniture.svg"}
                                imageActive={imagePath + "furnitureActive.svg"}
                                tooltipText="mobiliados"
                        />
                        <Selector
                                activeEquipment={activeEquipment} 
                                setActiveEquipment={setActiveEquipment} 
                                currentTooltip={currentTooltip} 
                                setCurrentTooltip={setCurrentTooltip}
                                selectorText="pool"
                                image={ imagePath + "pool.svg"}
                                imageActive={ imagePath + "poolActive.svg"}
                                tooltipText="piscina"
                        />
                </div>
        )
}

Selectors.displayName="Selectors";