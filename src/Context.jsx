import React, { useState, useEffect } from "react";
const Context = React.createContext();

function ContextProvider({children}){
    const url = 'https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/439bc2dd8693b490539eae236918f4a53dd17457/'
    const [products, setProducts] = useState([])
    // Add cart items in localStorage on component mount if exist 
    const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])
    const [favorite, setFavorite] = useState([])
    const [name, setName] = useState('')

    useEffect(()=>{      
        //Fetch products      
        fetch(`${url}products.json`)
        .then(result => result.json())
        .then(data =>setProducts(data.products))
    },[])

    // Add item to favorites 
    const toggleFavorite = (id) => {
        let product = products.find(item => item.id == id)
        setFavorite(prevItem => {
            // Filter out item when in favorite already 
            if(favorite.some(item => item.id == id)){
                return favorite.filter(item => item.id != id)
            } else {
                // Otherwise add it to cart 
                return [...prevItem, product]
            }
        })
    }

    useEffect(()=>{
        //Add cart to location storage once cart changed
        localStorage.setItem('cart', JSON.stringify(cart))  
    },[cart])

    return(
        <Context.Provider value={{products, cart, setCart, name, setName, toggleFavorite, favorite, url}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}