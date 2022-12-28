import React, { useState, useEffect } from "react";
const Context = React.createContext();

function ContextProvider({children}){
    const url = 'https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/439bc2dd8693b490539eae236918f4a53dd17457/'
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])
    const [favorite, setFavorite] = useState([])
    const [name, setName] = useState('')
    const [auctionProduct, setAuctionProduct] = useState([])

    useEffect(()=>{
        // console.log('first');
        // if(localStorage.getItem('cart')){
        //     setCart(JSON.parse(localStorage.getItem('cart')))
        // }            
        fetch(`${url}products.json`)
        .then(result => result.json())
        .then(data =>setProducts(data.products))
        
        fetch(`${url}auction.json`)
        .then(result => result.json())
        .then(data => {
            setAuctionProduct(data.products)
        })
    },[])

    const toggleFavorite = (id) => {
        let product = products.find(item => item.id == id)
        setFavorite(prevItem => {
            if(favorite.some(item => item.id == id)){
                return favorite.filter(item => item.id != id)
            } else {
                return [...prevItem, product]
            }
        })
    }

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))  
    },[cart])

    return(
        <Context.Provider value={{products, cart, setCart, name, setName, toggleFavorite, favorite, auctionProduct}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}