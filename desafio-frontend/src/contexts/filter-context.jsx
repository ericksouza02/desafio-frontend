import { createContext, useState } from "react";
import {FilterTypes} from '../types/filter-type';

export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterTypes.ALL,
    setSearch: () => {},
    setPage: () => {},
    setType: () => {},
})



const FilterContextProvider = ({children}) => {

    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterTypes.ALL)

    return(
        <FilterContext.Provider value={{search, page, type, setSearch, setType, setPage}}>
            {children}
        </FilterContext.Provider>
    )
};


export default FilterContextProvider;