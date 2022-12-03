import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
// import Router from './components/Router';
import './base-styles/index.scss';
import MainPage from './pages/MainPage';

Sentry.init({ dsn: 'https://47c39f67705f40a8be2377e47c4db984@o4504237587496961.ingest.sentry.io/4504237588545536' });
ReactDOM.render(<MainPage />, document.getElementById('root'));