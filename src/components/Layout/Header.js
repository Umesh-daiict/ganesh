import React from 'react';
import mealImg from '../../assets/meals.jpg';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
const Header = props =>{
    return <React.Fragment>
        <header className={classes.header}>
            <h1>G-Meals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealImg} alt='meal background image'/>
        </div>
    </React.Fragment>
}
export default Header;