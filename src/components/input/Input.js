import './Input.css'

function Input(props){
    return (
        <span>
            <img src={props.imagePath} alt="" className='icon'/>
        <input type="text" placeholder={props.placeholder}>
            
        </input>
        </span>
    )
}

export default Input;