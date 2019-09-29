import View from '../../redux/view';
import { searchQueryAction } from '../../redux/actions';

export default class AppSearch extends View{
  constructor(el, store) {
    super(el, store);
    this._onInput = this._onInput.bind(this);
    this._el.addEventListener('change', this._onInput);
  }
  
  _onInput(event) {
    this._store.dispatch(searchQueryAction(event.target.value));
    // fetchFiles(event.target.value)
  }
  
  render() {
    const query = this._store.getState().query;
    
    return `
      <div>${query}</div>
      <input type='search' value='${query}'>
    `
  }
  
  destroy() {
    super.destroy();
    this._el.removeEventListener('change', this._onInput)
  }
}
