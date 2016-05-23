import { EventEmitter } from 'events'
import $ from 'jquery'

import dispatcher from '../dispatcher'

class Store extends EventEmitter {
  constructor() {
    super()

  }

  handleActions(action) {
  console.log(action.type);
    switch(action.type) {
      case "SOMETHING": {
        this.emit("change")
        break
      }
    }
  }
}
const Store = new Store
dispatcher.register(Store.handleActions.bind(Store))
// window.Store = Store//TODO for testing
// window.dispatcher = dispatcher//TODO for testing
export default Store
