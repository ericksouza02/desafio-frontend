import { createContext, useState } from "react";
import {FilterTypes} from '../types/filter-type';
import {PriorityTypes} from '../types/priority-types';
export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterTypes.ALL,
    priority: PriorityTypes.NEWS,
    setPriority: () => {},
    setSearch: () => {},
    setPage: () => {},
    setType: () => {},
})



const FilterContextProvider = ({children}) => {

    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterTypes.ALL)
    const [priority, setPriority] = useState(PriorityTypes.NEWS)

    return(
        <FilterContext.Provider value={{
            search, 
            page, 
            type, 
            setSearch,
            setType, 
            setPage,
            priority,
            setPriority
            }}>
            {children}
        </FilterContext.Provider>
    )
};


export default FilterContextProvider;