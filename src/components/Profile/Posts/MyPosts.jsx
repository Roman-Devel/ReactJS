import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './Post/MyPost';

const MyPosts = () => {

    let posts = [
		{id: 1, message: 'Hi! How are you?', likesCount: 17},
		{id: 2, message: 'This is my first post', likesCount: 10}
    ];
    
    const postsElements = posts.map( (p) => <MyPost message={p.message} countLikes={p.likesCount} />);

    return (
        <div className={s.posts}>
            { postsElements }
        </div>
    )
}

export default MyPosts;