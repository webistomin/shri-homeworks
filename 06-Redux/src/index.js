import View from './store/view';
import { Types } from './redux/types';


// class UserView extends View{
//   constructor(el, store) {
//     super(el, store);
//     this._onInput = this._onInput.bind(this);
//     this._el.addEventListener('change', this._onInput);
//   }
//
//   _onInput(event) {
//     this._store.dispatch(setNameAction(event.target.value));
//   }
//
//   render({ name }) {
//     return `
//       <div>${name}</div>
//       <input value="${name}">
//     `
//   }
//
//   destroy() {
//     super.destroy();
//     this._el.removeEventListener('change', this._onInput)
//   }
// }

import { reducers } from './redux/reducers';
import { createStore } from './redux/createStore';
import { searchFilesAction, searchQueryAction } from './redux/actions';

const store = createStore(reducers);
const a = document.querySelector('input[type=search]');
const b = document.querySelector('p');

a.addEventListener('input', (event) => {
  store.dispatch(searchQueryAction(event.target.value));
  b.innerHTML = store.getState().query;
});




