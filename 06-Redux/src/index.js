import { reducers } from './redux/reducers';
import { createStore } from './redux/createStore';
import AppSearch from './components/container/AppSearch';
import AppFilesTable from './components/container/AppFilesTable';
import axios from 'axios';

const store = createStore(reducers);

new AppSearch(document.querySelector('.search'), store);
new AppFilesTable(document.querySelector('.table'), store);


axios.get('http://localhost:8080/api/repos/alena/tree/da6c3a321792c505a41c3016a0e201cb37ba1b36/app/')
  .then((result) => {
    console.log(result.data.files)
  })
  .catch((error) => {
    console.log(error)
  });







