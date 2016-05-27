import dispatcher from '../dispatcher'
import $ from 'jquery'
const local = 'http://192.168.1.108:8081'//TODO CHANGE URL http://192.168.1.108:8081

export function addCard(symbol) {
  dispatcher.dispatch({type: "FETCH_STOCK"})
 const url = local+'/api/stocks/'+symbol
 $.getJSON(url, (json) => {
   dispatcher.dispatch({type: "RECEIVE_STOCK", json})
 }).done((json) => {
   console.log("done");
   dispatcher.dispatch({ type: "ADD_CARD", symbol, json })
 }).fail(function(jqXHR, textStatus, errorThrown) { alert('getJSON request failed! ' + textStatus) })
}

export function deleteCard(symbol) {
  dispatcher.dispatch({ type: "DELETE_CARD", symbol })
}
