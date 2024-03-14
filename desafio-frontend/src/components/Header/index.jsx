import React from "react";
import styled from 'styled-components';

import PrimaryInputWSearchIcon from "./primary-input";
import CartControl from "./cart-control";

const Header = () => {
    
const Header = styled.header `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;
    
    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }
`

const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
    font-family: "Saira Stencil One", sans-serif;
    font-style: normal;
`

return(
        <Header>
            <Logo>
                caputteeno
            </Logo>

            <div>
                <PrimaryInputWSearchIcon/> 
                <CartControl/>  
            </div>
        </Header>
    )
}
    


export default Header;