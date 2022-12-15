import React, { useState, useEffect } from "react";
const Context = React.createContext();

function ContextProvider({children}){
    const url = 'https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/439bc2dd8693b490539eae236918f4a53dd17457/products.json'
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch(url)
        .then(result => result.json())
        .then(data =>setProducts(data.products))    
    },[])

    return(
        <Context.Provider value={{products}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}