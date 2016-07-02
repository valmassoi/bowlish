import dispatcher from '../dispatcher'
import $ from 'jquery'
const local = 'http://192.168.1.108:8081'// TODO CHANGE URL http://192.168.1.108:8081

export function addCard(symbol) {
  dispatcher.dispatch({ type: 'FETCH_STOCK' })
  const url = `${local}/api/stocks/${symbol}`
  $.getJSON(url, (json) => {
    dispatcher.dispatch({ type: 'ADD_CARD', symbol, json })
  }).done(() => {
    dispatcher.dispatch({ type: 'GOT_DATA' })
  }).fail((jqXHR, textStatus) => {
    alert('Stock Data Fetch Failed: ' + textStatus)
  })
}

export function deleteCard(symbol) {
  dispatcher.dispatch({ type: 'DELETE_CARD', symbol })
}
