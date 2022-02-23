import './Upgrade.css'
import CardInput from '../components/card-input/CardInput.js';
import Button from '../components/button/Button';
function Upgrade(){
    return(
        <section className="form">
            <h1 className="form__title">Get Pro Account</h1>
            <img src={require('../assets/images/undraw_online_payments_luau 1.png')} alt="Upgrade-illustration" className="image-container"/>
            <CardInput placeholder='Card Number'/>
            <div>
            <CardInput placeholder='MM/YY' width="165px"/>
            <CardInput placeholder='CVV' width="165px"/>
            </div>
            <p className="">What’s this?</p>
            <CardInput placeholder='ZIP/Postal Code'/>
            <Button title="Upgrade" backgroundColor="#BF1541"/>
        </section>
    )
}

export default Upgrade;