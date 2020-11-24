import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';


const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;

	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}

const Message = (props) => {
	return (
		<div className={s.message}>{props.message}</div>
	)
}


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
				<DialogItem name='Roman' id='1' />
				<DialogItem name='Igor' id='2' />
				<DialogItem name='Pasha' id='3' />
				<DialogItem name='Dima' id='4' />
				<DialogItem name='Lera' id='5' />
				<DialogItem name='Nastya' id='6' />
            </div>
			<div className={s.messages}>
				<Message message='Hi!' />
				<Message message='How are you?' />
				<Message message='What is your name?' />
			</div>
        </div>
    )
}

export default Dialogs;