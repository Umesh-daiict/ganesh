import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Model from '../UI/Model'
import classes from './Cart.module.css'
import CartItem from './CartItem';
const Cart = props => {
    const cartCtx =useContext(CartContext);
    const removeHandler =(id)=>{
        cartCtx.removeItem(id);
    }
    const addHandler =(item)=>{
        cartCtx.addItem({...item,amount:1})
    }
    const cartItems = (<ul className={classes['cart-items']}>
        {cartCtx.items.map(item => 
        <CartItem key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={addHandler.bind(null,item)}
            onRemove={removeHandler.bind(null,item.id)} />)}</ul> );
    const orderHandler = () =>{
        console.log("odering .....")
        props.onCloseCart();

    }
    const totalAmount = `$${cartCtx.total.toFixed(2)}`;
    const hasItem = cartCtx.items.length >0;
    return <Model onBackgroungClick={props.onCloseCart}>
          {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span></div>
        <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseCart} >Close</button>
        {!hasItem && <button className={classes.button} onClick= {orderHandler}>Order</button>
        }</div>
    </Model>
}

export default Cart