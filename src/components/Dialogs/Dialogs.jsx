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
	/* Заготовка вывода данных из базы на сервере */
	let dialogs = [
		{id: 1, name: 'Roman'},
		{id: 2, name: 'Igor'},
		{id: 3, name: 'Pasha'},
		{id: 4, name: 'Dima'},
		{id: 5, name: 'Lera'},
		{id: 6, name: 'Nastya'}
	];
	/* Заготовка вывода данных из базы на сервере */
	let messages = [
		{id: 1, message: 'Hi!'},
		{id: 2, message: 'How are you?'},
		{id: 3, message: 'What is your name?'}
	];
	/* Создаем новую переменную, берем массив данных и Мапим его через новое имя в компоненту, обращаясь к нему через ключи объекта */
	const dialogElements = dialogs.map( (d) => <DialogItem name={d.name} id={d.id} /> );

	const messagesElements = messages.map( (m) => <Message message={m.message} /> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
				{ dialogElements }
            </div>
			<div className={s.messages}>
				{ messagesElements }
			</div>
        </div>
    )
}

export default Dialogs;