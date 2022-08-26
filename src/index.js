import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react'
import './index.css';
import App from './components/App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
try {
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>,
	);
} catch (error) {
	console.error("React render error: ", error)
}