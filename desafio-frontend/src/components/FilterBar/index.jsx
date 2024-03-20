import React from "react";
import styled from "styled-components";
import FilterByType from "./filter-by-type";

const FilterBar = () => {

    const FilterContainer = styled.div
    `
        display: flex;
        width: 100%;
        align-items: center;
    `

    return(
        <FilterContainer>
            <FilterByType />
        </FilterContainer>

    )
}


export default FilterBar;