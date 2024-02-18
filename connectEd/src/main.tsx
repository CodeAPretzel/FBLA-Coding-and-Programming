import React from 'react';
import { Provider } from 'react-redux';
import { store } from "./data/objects/store";
import ReactDOM from 'react-dom/client';
import App from './components/App';

import './styles/index.less'

import './demos/ipc'
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={ store }>
			<App />
		</Provider>
	</React.StrictMode>,
)

postMessage({ payload: 'removeLoading' }, '*')
