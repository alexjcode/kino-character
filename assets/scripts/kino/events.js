'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')
const win = require('./win')
store.turn = 'z'

const onIndexKino = () => {
  event.preventDefault()
  api.indexKino()
    .then(ui.indexKinoSuccess)
    .catch(ui.indexKinoFailure)
}

const onNewKino = () => {
  event.preventDefault()
  api.newKino()
    .then(ui.newKinoSuccess)
    .catch(ui.newKinoFailure)
  store.turn = 'x'
  $('#current-turn').text(store.turn)
}

const onLoadKino = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.loadKino(formData)
    .then(ui.loadKinoSuccess)
    .catch(ui.loadKinoFailure)
}

const onNewMove = (event) => {
  event.preventDefault()
  const index = parseInt(event.target.getAttribute('data-cell-index'))
  if (index >= 0) {
    if (store.kino.cells[index] !== '') {
      ui.failMessage(`That cell is already taken ${store.user.token}`)
    } else {
      store.kino.cells[index] = store.turn
      if (win.outcome(store.kino)) {
        store.kino.over = true
      }
      const data = {
        "kino": { // eslint-disable-line
          "cell": { // eslint-disable-line
            "index": index, // eslint-disable-line
            "value": store.turn // eslint-disable-line
          },
          "over": store.kino.over // eslint-disable-line
        }
      }
      api.newMove(data)
        .then(ui.newMoveSuccess)
        .catch(ui.newMoveFailure)
    }
  }
}

module.exports = {
  onNewKino,
  onIndexKino,
  onLoadKino,
  onNewMove
}
