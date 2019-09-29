import { reducers } from './redux/reducers';
import { createStore } from './redux/createStore';

import AppSearch from './components/container/AppSearch';
import AppFilesTable from './components/container/AppFilesTable';

import { applyMiddleware } from './redux/applyMiddleware';
import { logger } from './redux/middleware/logger';
import { crashReporter } from './redux/middleware/crashReporter';

const store = createStore(reducers);

applyMiddleware(store, [ logger, crashReporter ]);

new AppSearch(document.querySelector('.search'), store);
new AppFilesTable(document.querySelector('.table'), store);
