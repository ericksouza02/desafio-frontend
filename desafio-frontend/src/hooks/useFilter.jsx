import { useContext } from "react"
import { FilterContext } from "../contexts/filter-context"

const useFilter = () => {

    return useContext(FilterContext);
}

export default useFilter;