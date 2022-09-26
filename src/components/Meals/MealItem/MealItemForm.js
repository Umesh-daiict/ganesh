import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import { useContext, useRef, useState } from 'react'
import CartContext from '../../../store/cart-context'
const MealItemForm = props => {
    const [err,setErr]=useState(true);
    const cartctx =useContext(CartContext);
    const inputRef = useRef();
    const submitHandler =(event)=>{
        event.preventDefault();
        const amount =inputRef.current.value;
        if(amount.trim().length ===0 || amount < 1){
            setErr(false)
            return
        }

        cartctx.addItem({
            id:props.id,
            amount:+amount,
            name:props.name,
            price:props.price
        })
    }
    return <form className={classes.form}>
        <Input label="Amount" input={{
            id:'Amount_'+props.id,
            type:'number',
            ref:inputRef,
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }}/>
        <button onClick={submitHandler}>+ Add</button>
        {!err && <p>please use some brain,we recommend Refresh Salad!</p>}
    </form>
}
export default MealItemForm;