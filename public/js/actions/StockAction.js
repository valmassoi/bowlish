import dispatcher from '../dispatcher'
import $ from 'jquery'
const local = 'http://192.168.1.108:8081'//TODO CHANGE URL http://192.168.1.108:8081

export function addCard(symbol) {
  dispatcher.dispatch({ type: "ADD_CARD", symbol })
}

export function deleteCard(symbol) {
  dispatcher.dispatch({ type: "DELETE_CARD", symbol })
}
