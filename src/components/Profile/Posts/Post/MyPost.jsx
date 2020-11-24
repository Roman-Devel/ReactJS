import React from 'react';
import s from './MyPost.module.css';

const MyPost = (props) => {
    return (
        <div className={s.item}>
            <div className={s.item__img}>
                <img src='https://e7.pngegg.com/pngimages/999/998/png-clipart-graphics-avatar-mobile-app-website-user-staff-member-head-cartoon.png' />
            </div>
            {props.message}
            <div>...Like: {props.countLikes}</div>
        </div>
    )
}

export default MyPost;