import { Fragment } from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';

export default function Header(props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img scr={mealsImage} alt="A table full of delicious food!"/>
            </div>
        </Fragment>
    );
}