import View from './store/view';

// const setNameAction = (name) => ({
//   type: Types.SET_NAME,
//   payload: name,
// });

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



