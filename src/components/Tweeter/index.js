import React, {useState} from 'react';
import './tweeter.css';

export default function Tweeter(props) {
    const [tweetText, setTweetText] = useState('');

    function handleChange(event) {
        setTweetText(event.target.value);
    }

    function handlePost(event) {
        event.preventDefault();

        props.handleTweetPosted(tweetText);
        setTweetText('')
        
    }

    return (
        <div className="tweeter__form--wrapper">
            <form onSubmit={handlePost}>
                <div className="tweeter__form">
                    <textarea 
                        className="tweeter__userinput" 
                        placeholder="Tweet something" 
                        value={tweetText}
                        onChange={handleChange} 
                        required>
                    </textarea>
                </div>
                <button className="tweeter__btn">Tweet</button>
            </form>
        </div>
    )
}