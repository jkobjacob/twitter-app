import React, {useState} from 'react';
import './tweetCard.css';

export default function TweetCard(props) {
    const {posted_by, timestamp, liked_by, tweet_content, handleLikeUpdate} = props;

    const [like, updateLike] = useState(liked_by.length);

    function handleLike(event) {
        updateLike(like + 1)

        return handleLikeUpdate(event);
    }

    return (
        <div className="tweetcard" id={timestamp}>
            <div className="tweetcard__header">
                <div className="tweetcard__avataruser" />
                <p className="tweetcard__username">{posted_by}</p>
            </div>
            <div className="tweetcard__body">
                <p className="tweetcard__content">{tweet_content}</p>
                <div className="tweetcard__footer">
                    <span className="tweetcard__likescnt">{(like > 1)? `${like} likes` : `${like} like`}</span>
                    <button className="tweetcard__likebtn" onClick={handleLike}>Like</button>
                </div>
            </div>
        </div>
    )

}