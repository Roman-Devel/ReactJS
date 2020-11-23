import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';					/* Объект Router для переключения элементов */

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = () => {
	return (
		<BrowserRouter>													{/* Обромляющий тег */}
			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<div className='app-wrapper-content'>
					<Route path='/dialogs' component={Dialogs} />		{/* Нужный маршрут, path-адресная строка и нужный компонент */}
					<Route path='/profile' component={Profile} />
					<Route path='/news' component={News} />
					<Route path='/music' component={Music} />
					<Route path='/settings' component={Settings} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
