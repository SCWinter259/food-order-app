import { forwardRef } from 'react';
import classes from './Input.module.css';

// this is how we handle the Ref: the whole Input component is
// an argument for forwardRef. After this, ref can be set as
// a parameter next to props.
const Input = forwardRef((props, ref) => {
    // for the input tag, we use the spread operator because
    // input (which we received via props) is an object.
    // it is the equivalent of id=... type=... min=... max=...
    // in this way we don't have to write that much
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input}/>
        </div>
    );
});

export default Input;