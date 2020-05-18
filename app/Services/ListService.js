import List from "../Models/List.js";
import _store from "../store.js";
//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  newList(newList) {
    let list = new List(newList)
    _store.State.lists.push(list)
    _store.saveState();
  }

  addListItem(item, listId) {
    let list = _store.State.lists.find(l => l.id == listId)
    list.listItems.push(item)
    _store.saveState();
  }
  deleteListItem(listId, index) {
    let list = _store.State.lists.find(l => l.id == listId)
    list.listItems.splice(index, 1)
    _store.saveState();
  }
  deleteList(listId) {
    _store.State.lists = _store.State.lists.filter(l => listId)
    _store.saveState();
  }
}

const SERVICE = new ListService();
export default SERVICE
