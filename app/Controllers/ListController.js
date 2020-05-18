import _listService from "../Services/ListService.js";
import _store from "../store.js"
import List from "../Models/List.js";
//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let listItems = _store.State.lists
  let template = ''
  listItems.forEach(l => template += l.Template)
  document.getElementById("listCards").innerHTML = template
  console.log(_store.State.lists)
}
//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems

  addList(event) {
    event.preventDefault();
    let formData = event.target
    let newList = {
      name: formData.name.value,
      color: formData.color.value,
    }
    _listService.newList(newList)
    _drawLists();
  }
  addItem(event, listId) {
    event.preventDefault();
    let item = event.target.listItem.value
    try {
      _listService.addListItem(item, listId)
    }
    catch (error) {
      alert(error.message)
    }
    _drawLists();
  }
  deleteList(listId) {
    if (window.confirm("Are y\you sure you want to delete this list?")) {
      _listService.deleteList(listId)
      _drawLists()
    }
  }
  deleteListItem(listId, index) {
    if (window.confirm("Are you sure you want to delete this item?")) {
      _listService.deleteListItem(listId, index)
      _drawLists()
    }
  }
}