import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.name = data.name
    this.color = data.color
    this.listItems = data.listItems || []
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get Template() {
    return /*html*/`
    <div class="col-sm-3">
          <div id="cards" class="card m-4">
            <div class="card-body"><div class="text-right"><i class="fas fa-trash" onclick ="app.ListController.deleteList(${this.id})"></i></div>
              <h4 class="card-title text-center">${this.name}</h4>
                    <ul class="pl-3">
                    ${this.ItemsTemplate}
                </ul>
                <form onsubmit="app.listController.addItem(event, '${this.id}')">
                    <div class="form-group d-flex">
                        <input type="text" class="form-control" name="listItem" placeholder="Add List Item" required>
                        <button type="submit" class="btn btn-primary"><i
                                class="fas fa-plus "></i></button>
                    </div>
                </form>
              </div>
          </div>
      </div>`
  }
  get ItemsTemplate() {
    let template = ""
    this.listItems.forEach((item, index) => {
      template += /*html*/`
            <div><input type="checkbox" class="check-box">${item}
               <div class="text-right"><i class="fas fa-trash" onclick="app.listController.deleteItems('${this.id}', ${index})"></i></div>
            </div>
            `
    })
    return template;
  }
}