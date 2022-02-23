import Button from '../components/button/Button';
import Input from '../components/input/Input';
import './Reset.css';
function Reset(){
    return(
        <section className="form">
            <img src={require('../assets/images/Forgot password illustration.png')} alt="Login-illustration" className="image-container"/>
            <h1 className="form__title">Forgot Password</h1>
            <Input placeholder='example@email.com' imagePath="../assets/svg/Contacts icon.svg"/>
            <Button title="RESET" props='#1A4F8B'/>
            <p className="social_title">Already have an account? <a href="/login">Login here</a></p>
        </section>

    )
}

export default Reset;