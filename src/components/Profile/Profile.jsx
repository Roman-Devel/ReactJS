import React from 'react';
import s from './Profile.module.css';
import MyPosts from './Posts/MyPosts.jsx'

const Profile = () => {
    return (
        <main>
            <img src="https://cameronscookware.com/wp-content/uploads/2019/12/vaporwave-background-1920x1080-unique-vaporwave-minimalism-forest-1080p-laptop-full-hd-ideas-of-vaporwave-background-1920x1080-1.jpg" />
            <MyPosts />
        </main>
    )
}

export default Profile;