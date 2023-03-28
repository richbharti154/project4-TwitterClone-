import input from './input.module.css'
const Input = (props) => {
    
    return (
        <div>
            <input placeholder={props.placeHolder} onChange={props.onChange} className={input.input} type={props.type}   />
        </div>
    )
}

export default Input