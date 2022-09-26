import react, { useReducer, useState } from "react";

const CartContext = react.createContext({
    items:[],
    total:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
})

const cartReducer = (state,action) =>{
    switch(action.type){
        case "ADD":
            const uAmount=state.total + action.item.amount * action.item.price;
            const eIndex=+state.items.findIndex(item=> item.id === action.item.id)
            if(eIndex>=0){
                const uItems=[...state.items];
                const uitem={
                    ...action.item,
                    amount:state.items[eIndex].amount + action.item.amount
                }
                uItems[eIndex]=uitem;
                return { items:uItems,total: uAmount}
            }else{
                return { items:[...state.items,action.item],
                    total : uAmount }    
            }
             break;
        case "REMOVE":
            const  tempItem= state.items.find(item=>item.id === action.id);            
            const tempTotal = state.total - tempItem.price;
            if(tempItem.amount > 1){ 
                const tempStateItem =state.items.filter(item=> item.id !== action.id);             
                tempStateItem.push({ ...tempItem,amount:tempItem.amount -1})
               
               return  { items: tempStateItem,total:tempTotal};
            }else{
                const tempStateItem =state.items.filter(item=> item.id !== action.id)
                return  { items: tempStateItem,total:0};
            }
            
            break       

    }
        
}
const intialCart = {
    items:[],
    total:0
}
export const CartContextProvider =(props)=>{
    const [cart,dispatch]=useReducer(cartReducer,intialCart)
    
    const addCartHandler=(item)=> {
        dispatch({type:"ADD",item:item})
        } 
    const removeCartHandler = (id) =>{
        dispatch({type:"REMOVE",id:id})
    }
    const cartCtx = {
        items:cart.items,
        total:cart.total,
        addItem:addCartHandler,
        removeItem:removeCartHandler
    }
    

    return <CartContext.Provider value={cartCtx} >
        {props.children}
    </CartContext.Provider>
}

export default CartContext;