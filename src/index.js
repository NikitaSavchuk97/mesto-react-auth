import React, { HashRouter } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
try {
	root.render(

		<React.StrictMode>
			<HashRouter>
				<App />
			</HashRouter>
		</React.StrictMode>

	);
} catch (error) {
	console.error("React render error: ", error)
}