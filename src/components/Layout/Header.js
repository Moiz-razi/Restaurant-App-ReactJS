import {Fragment} from "react";
import mealsImg from '../../assets/meals.jpg'
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
const Header = props =>{
    return(
      <Fragment>
        <header className={classes.header}>
           <h2>Babylon Meals</h2>
           <HeaderCartButton/>
        </header>

        <div className={classes['main-image']}>
         <img src={mealsImg} alt="Table with delicious Foods"/>
        </div>
      </Fragment>
    )
}

export default Header;