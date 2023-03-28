import button from './button.module.css'

const Button = (props) => {

    return (
        <div className={button.mainComponent}>
            <button onClick={props.onClick} className={button.button}> {props.ButtonText} </button>
        </div>
    )
}

export default Button