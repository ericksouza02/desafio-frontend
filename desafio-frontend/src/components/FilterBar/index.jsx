import React from "react";
import styled from "styled-components";
import FilterByType from "./filter-by-type";
import FilterPriority from "../FilterPriority";
    
const FilterBar = () => {

    const FilterContainer = styled.div
    `        
        display: flex;
        width: 100%;
        align-items: start;
        justify-content: space-between;
    `

    return(
        <FilterContainer>
            <FilterByType />
            <FilterPriority/>
        </FilterContainer>

    )
}


export default FilterBar;