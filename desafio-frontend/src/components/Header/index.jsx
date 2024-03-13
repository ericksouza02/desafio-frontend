import React from "react";
import styled from 'styled-components';

import PrimaryInputWSearchIcon from "./primary-input";
import SearchIcon from "./search-loupe";

const Header = () => {
    
const Header = styled.header `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;
    
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
            </div>
        </Header>
    )
}
    


export default Header;