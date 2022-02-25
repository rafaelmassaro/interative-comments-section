import './formbutton.css';

export default function FormButton({children}){
    return(
        <button className='form-button'>
            {children}
        </button>
    )
}