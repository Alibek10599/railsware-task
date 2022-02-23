import './CardInput.css'

function CardInput(props){

    return(

        <input type="text" placeholder={props.placeholder} style={{
            width: props.width
          }}>
            
        </input>
    )

}

export default CardInput;