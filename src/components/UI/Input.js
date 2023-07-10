import classes from './Input.module.css';

export default function Input(props) {

    // for the input tag, we use the spread operator because
    // input (which we received via props) is an object.
    // it is the equivalent of id=... type=... min=... max=...
    // in this way we don't have to write that much
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input}/>
        </div>
    );
}