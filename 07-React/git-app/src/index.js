import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { getVh } from './plugins/getVh';

import App from './components/App';

import api from './services/api';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();

getVh();


