import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import styled from "styled-components";
import CartIcon from "./cart-icon";


const CartControl = () => {

    const CartCount = styled.span`
        background-color: var(--delete-color);
        width: 17px;
        height: 17px;
        border-radius: 100%;
        padding: 0px 5px;
        font-size: 12px;
        
        color: #fff;


        margin-left: -10px;
        `

    const Container = styled.div`
    
        position: relative;

    `

    //const {value} = useLocalStorage('cart-items')
    const value = ['1', '1']

    return( 
        <Container>
            <CartIcon/>
            {value.length && <CartCount>{value.length}</CartCount>}
        </Container>
    )

}


export default CartControl;