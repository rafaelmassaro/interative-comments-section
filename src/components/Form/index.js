import FormButton from '../FormButton';
import './form.css';



export default function Form(){
    return(
        <form className='container'>
            <div className="avatar">
                <img src="http://github.com/rafaelmassaro.png" alt="avatar image" />          
            </div>

            <textarea className='new-comment'></textarea>

            <FormButton>
                reply
            </FormButton>
        </form>
    )
}