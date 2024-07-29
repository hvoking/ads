// React imports
import { useContext, createContext } from 'react';

// Context imports
import { usePricesApi } from '../../api/imoveis/prices';
import { useAreas } from '../../filters/areas';
import { usePrices } from '../../filters/prices';
import { useDates } from '../../filters/dates';
import { usePropertyType } from '../../filters/property';
 
const PricesLimitsContext: React.Context<any> = createContext(null)

export const usePricesLimits = () => {
    return (
        useContext(PricesLimitsContext)
    )
}

export const PricesLimitsProvider = ({children}: any) => {
    const { pricesData } = usePricesApi();
    const { areaMin, areaMax } = useAreas();
    const { unitPrice, leftPosition, rightPosition } = usePrices();
    const { formatedStartDate, formatedFinalDate } = useDates();
    const { activeEquipment } = usePropertyType();

    const currentPriceString = 
        unitPrice === "price" ? 
        "price" : 
        "unit_price";

    const filterByPrices = pricesData?.filter((d: any) =>
        leftPosition < d[currentPriceString] &&
        d[currentPriceString] < rightPosition
    );    

    const filteredByAreas = filterByPrices?.filter((d: any) =>
        areaMin < d.processed_area &&
        d.processed_area < areaMax
    );
        
    const filteredByDates = filteredByAreas?.filter((d: any) =>
        formatedStartDate < new Date(d.start_date) &&
        new Date(d.start_date) < formatedFinalDate
    );
    
    const activePoints = filteredByDates?.filter((item: any) => {
        return item[activeEquipment] === 1;
    });

    const filterPrices = 
        activeEquipment === "furnished" || 
        activeEquipment === "pool" || 
        activeEquipment === "new" || 
        activeEquipment === "status"?
        activePoints :
        filteredByDates;

    return (
        <PricesLimitsContext.Provider value={{filterPrices}}>
            {children}
        </PricesLimitsContext.Provider>
    )
}

PricesLimitsContext.displayName = "PricesLimitsContext";