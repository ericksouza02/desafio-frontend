import React from "react";
import styled, {css} from "styled-components";
import useFilter from "../../hooks/useFilter";
import { FilterTypes } from "../../types/filter-type";

const FilterByType = () => {

    const {type, setType} = useFilter()


    const FilterList = styled.ul
    `
        display: flex;
        align-items: center;
        justify-conter: center;
        gap: 40px;
        padding: 20px 160px;
    `
    const FilterItem = styled.li 
    `
        cursor: pointer;
        font-family: inherit;
        font-weight: ${props => props.selected ? '600': '400'};
        line-height: 22px;
        text-align: items;
        text-style: none;
        list-style: none;
        text-transform: uppercase;
        color: var(--text-dark);
        border-bottom: ${props => props.selected ? '4px solid var(--orange-low)': ''};
    `
    const handleChangeType = (value) => {

        setType(value)
    }

    return(
        <FilterList>    
            <FilterItem 
                selected={type == FilterTypes.ALL} 
                onClick={() => handleChangeType(FilterTypes.ALL)}>
                    Todos os Produtos
            </FilterItem>
            <FilterItem 
                selected={type == FilterTypes.SHIRT} 
                onClick={() => handleChangeType(FilterTypes.SHIRT)}>
                    Camisetas
            </FilterItem>
            <FilterItem 
                selected={type == FilterTypes.MUG} 
                onClick={() => handleChangeType(FilterTypes.MUG)}>
                    Canecas
            </FilterItem>
        </FilterList>
    )
}

export default FilterByType;