import React, { useState } from "react";

const useLocalStorage = ({item}) => {

    const [value, setValue] = useState(JSON.parse(localStorage.getItem(item) ?? '' ))

    const updateLocalStorage = ({newValue}) => {
        setValue(newValue);
        localStorage.setItem(item, JSON.stringify(newValue))
    }

    return{
        value,
        updateLocalStorage
    }
}




export default useLocalStorage;
