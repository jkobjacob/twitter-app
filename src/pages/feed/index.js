import React, {useState} from 'react';
import './feed.css';
import {tweets} from './tweets.js';
import TweetCard from '../../components/TweetCard';
import Tweeter from '../../components/Tweeter';

export default function FeedPage(props) {

    function buildTweet(posted_by,tweet_content) {
        return {
            posted_by,
            tweet_content,
            liked_by: [],
            timestamp: new Date().getTime().toString()
        };
    }


    function handleLikeUpdate(event) {
        const target = event.target.parentNode.parentNode.parentNode;
        const tweetIdx = tweetsData.findIndex(t => t.timestamp === target.id);
        const newTweetData = tweetsData.slice();
       
        newTweetData[tweetIdx].liked_by.push('random_user');
        updateTweetsData(newTweetData);

    }

    function handleTweetPosted(tweet) {
        const newTweetData = tweetsData.slice();
        newTweetData.push(buildTweet('random_user',tweet));
        updateTweetsData(newTweetData);
    }
     
    
    const [tweetsData,updateTweetsData] = useState(tweets);

    React.useEffect(()=> {
        localStorage.setItem('tweets', JSON.stringify(tweetsData));
    },[tweetsData]);


    return (
        <div className="userfeed">
            <Tweeter handleTweetPosted={handleTweetPosted}/>
            {tweetsData.map((t,k) => <TweetCard {...t} key={k} handleLikeUpdate={handleLikeUpdate}/>)}
        </div>
        );
}