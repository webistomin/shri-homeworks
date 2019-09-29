import View from '../../redux/view';

export default class AppFilesTable extends View{
  constructor(el, store) {
    super(el, store);
  }
  
  render() {
    // const row = document.querySelector('.row');
    const files = this._store.getState().files;
    //
    // for (let file in files) {
    //   const newElement = document.createElement('td');
    //   newElement.textContent = file;
    //   row.appendChild(newElement);
    // }
    
    return `
     <table>
      <tr class="row">
        <td>${files}</td>
      </tr>
    </table>
    `
  }
  
  destroy() {
    super.destroy();
  }
}
