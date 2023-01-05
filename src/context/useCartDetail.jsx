import { createContext, useState } from "react";

export const useCartDetail = createContext()

export default (props) =>{

    const [cartProduct, setCartProduct] = useState([])
    const [count, setCount] = useState(1)


    const addCartProduct = (product) => {
        if(cartProduct.length===0){
           return setCartProduct([...cartProduct, product])
        }
        setCartProduct(cartProduct.map((item) => {
            if (item.id === product.id) {
                return ({ ...item, quantity: item.quantity + product.quantity })
            } else {
                return item
            }
        }))
    }


    const deleteCartProduct  = (id) =>{
        const deleteProduct = cartProduct.filter((item) => item.id !== id)
        setCartProduct(deleteProduct)
    }

    console.log(count)


    const addProduct = (id) => {
       setCartProduct(cartProduct.map((item) => {
        if(item.id === id){
            return ({...item, quantity:item.quantity +1})
        }
    })) 
    }

    const deleteProduct = (id) => {
        setCartProduct(cartProduct.map((item) => {
         if(item.id === id){
            if(item.quantity > 1)
             return ({...item, quantity:item.quantity -1})
             if(item.quantity===1) return item;
         }
     })) 
     } 

     const deleteCount = () => {
        if(count === 1) return
        setCount(count - 1)
     }

     const totalQuantityProduct = () => cartProduct.reduce((acc, current) => current.quantity + acc,0)
     


    return (
        <useCartDetail.Provider value={{cartProduct , setCartProduct,addCartProduct,deleteCartProduct,setCount,count,deleteProduct,deleteCount,addProduct, totalQuantityProduct}}>
            {props.children}
        </useCartDetail.Provider>
    )
}