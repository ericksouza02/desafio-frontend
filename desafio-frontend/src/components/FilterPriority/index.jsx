import React, { useState } from "react";
import styled from "styled-components";
import ArrowIcon from "./arrow-icon";
import useFilter from "../../hooks/useFilter";
import { PriorityTypes } from "../../types/priority-types";

const FilterPriority = () => {

    const  [open, setOpen] = useState(false) 
    const {setPriority} = useFilter();

    const FilterContainer = styled.div`
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 160px;
        
        button {    
            border: none;
            font-family: inherit;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            width: 176px;
            background: transparent;
            cursor: pointer;

            display: flex;
            align-items: center;
            color: var(--text-dark);
            justify-content: end;

            svg {
                margin-left: 16px;
            }
        }
    `
    

    const PriorityFilter = styled.ul`
        position: absolute;
        width: 276px;
        height: 132px;

        background: #FFFFFF;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        padding: 12px 16px;

        list-style: none;
        top: 100%;

        li {
            color: var(--text-dark);
            font-size: 14px;
            line-height: 22px;
            cursor: pointer;
        }

        li + li {
            margin-top: 4px;
        }

    `

    const handleClick = () => setOpen(prev => !prev)

    const handleUpdatePriority = (value) => {
        setPriority(value)
        setOpen(false)
    }
    
    return(
        <FilterContainer>
            <button onClick={handleClick}>
                Organizar Por: 
                <ArrowIcon/>
            </button>
            {open && 
            <PriorityFilter id="">
                <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
                <li onClick={() => handleUpdatePriority(PriorityTypes.BIG_PRICE)}>Preço: Maior Menor</li>
                <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor Maior</li>
                <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais Vendidos</li>
            </PriorityFilter>
            }
        </FilterContainer>
    )
}


export default FilterPriority;

