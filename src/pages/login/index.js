import React , {useState} from 'react';
import './login.css';

export default function LoginPage(props) {
    const [name, setName] = useState('');

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const users = JSON.parse(localStorage.getItem('users'));
        
        if(!users[name]) {
            props.history.push('/signup');            
        } else {
            props.history.push('/feed');
        }
    }

    return (
        <div className="loginform-containter">
        <form onSubmit={handleSubmit}>
            <label className="form__label">
                Name <input type="text" 
                             className="form__input" 
                             name="userName" 
                             value={name} 
                             placeholder="Enter your name" 
                             onChange={handleNameChange} 
                             required />
            </label>
            <button className="form__btn">Login</button>
        </form>
    </div>
    )
}