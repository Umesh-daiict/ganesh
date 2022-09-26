import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
const HeaderCartButton = props =>{
    const [doBump,setDoBump]=useState(false);

    const cartCtx =useContext(CartContext);
    const {items} =cartCtx;
    const numOfCartItem = items.reduce((curNum,item)=>{
        return curNum + Math.round(item.amount)
    },0);

    const btn=`${classes.button} ${doBump? classes.bump:''}`
    useEffect(()=>{
        if(items.length === 0){
            return}
        setDoBump(true);
        const timer = setTimeout(()=>{
            setDoBump(false)
        },300)
        return ()=>{
            clearTimeout(timer);
        }
    },[items])
    return <button className={btn} onClick={props.onClick} >
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numOfCartItem}</span>
    </button>
}
export default HeaderCartButton;