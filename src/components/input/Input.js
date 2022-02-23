import './Input.css'

function Input(props){
    return (
        <span>
            <img src={require('../../assets/svg/Lock icon.svg')} alt="" className='icon'/>
        <input type="text" placeholder={props.placeholder}>
            
        </input>
        </span>
    )
}

export default Input;