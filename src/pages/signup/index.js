import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import './signup.css';

export default function SignUpPage(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const users = JSON.parse(localStorage.getItem('users'));

        if(!users) {

            localStorage.setItem('users', JSON.stringify({
                [name]: {
                    username: name,
                    followers: [],
                    following: [],
                    email: email
                }
            }));
        } else {
            localStorage.setItem('users', JSON.stringify(Object.assign({}, users, {
                            [name]: {
                                username: name,
                                followers: [],
                                following: [],
                                email: email
                            }
            })));
        }


        setName("");
        setEmail("");

        props.history.push('/login');
    }

    return (
    <div className="form-containter">
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
            <label className="form__label">
                Email <input type="email" 
                             className="form__input" 
                             name="Email" 
                             value={email} 
                             placeholder="username@mail.com" 
                             onChange={handleEmailChange}
                             required />
            </label>
            <button className="form__btn">Sign Up</button>
        </form>
        
    </div>
    );
}