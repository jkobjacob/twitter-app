import React, {useState} from 'react';
import './feed.css';
import {tweets} from './tweets.js';
import TweetCard from '../../components/TweetCard';
import Tweeter from '../../components/Tweeter';

export default function FeedPage(props) {

    function commitToLocalStorage(tweets) {
        localStorage.setItem('tweets', JSON.stringify(tweets));
    }
    commitToLocalStorage(tweets);
    
    const [tweetsData,updateTweetsData] = useState(JSON.parse(localStorage.getItem('tweets')));

    function buildTweet(posted_by,tweet_content) {
        return {
            posted_by,
            tweet_content,
            liked_by: [],
            timestamp: new Date().getTime()
        };
    }


    function handleLikeUpdate(event) {
       const target = event.target.parentNode.parentNode.parentNode;
       const tweetIdx = tweetsData.findIndex(t => t.timestamp === target.id);
       
       const tmp_1 = tweetsData.slice(0,tweetIdx);
       const tmp_2 = tweetsData.slice(tweetIdx+1, tweetsData.length);
       const tmp_3 = tweetsData[tweetIdx];
       
       tmp_3.liked_by.push('randomUser');

       const newTweetsData = [...tmp_1,...tmp_2,tmp_3];
       updateTweetsData(newTweetsData);
       commitToLocalStorage(newTweetsData);

    }

    function handleTweetPosted(tweet) {
        const newTweetsData = [...tweetsData, buildTweet('random_user',tweet)]
        updateTweetsData(newTweetsData);
        commitToLocalStorage(newTweetsData);
    }

    return (
        <div className="userfeed">
            <Tweeter handleTweetPosted={handleTweetPosted}/>
            {tweetsData.map((t,k) => <TweetCard {...t} key={k} handleLikeUpdate={handleLikeUpdate}/>)}
        </div>
        );
}