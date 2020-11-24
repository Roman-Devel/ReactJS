import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './Post/MyPost';

const MyPosts = () => {
    return (
        <div className={s.posts}>
            <MyPost message='Hi! How are you?' countLikes='17'/>
            <MyPost message="It's my first post" countLikes='10'/>
        </div>
    )
}

export default MyPosts;