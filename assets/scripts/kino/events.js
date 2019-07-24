'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('../store.js')

// ////////////////////////////////////////////////////////////////////////////

const onIndexCharacters = (event) => {
  event.preventDefault()
  console.log('event', event)
  // debugger
  api.indexCharacters()
    .then(ui.indexCharactersSuccess)
    .catch(ui.failure)
}

const onClearCharacters = (event) => {
  event.preventDefault()
  ui.clearCharacters()
}

const onCreateCharacter = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createCharacter(formData)
    .then(ui.createCharacterSuccess)
    .catch(ui.createCharacterFailure)
}

const onUpdateCharacter = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateCharacter(formData)
    .then(ui.updateCharacterSuccess)
    .catch(ui.updateCharacterFailure)
}

const onDeleteCharacter = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  // const id = parseInt(event.target.getAttribute('data-id'))
  api.deleteBook(id)
    .then(() => {
      onIndexCharacters(event)
    })
    .catch(ui.failure)
}

// ////////////////////////////////////////////////////////////////////////////

const addHandlers = () => {
  $('#indexCharactersButton').on('click', onIndexCharacters)
  $('#clearCharactersButton').on('click', onClearCharacters)
  $('body').on('click', '.delete-book', onDeleteCharacter)
}

const btnHandlers = () => {
  $('.btn-danger').on('click', onDeleteCharacter)
}

// ////////////////////////////////////////////////////////////////////////////

// const onIndexKino = () => {
//   event.preventDefault()
//   api.indexKino()
//     .then(ui.indexKinoSuccess)
//     .catch(ui.indexKinoFailure)
// }
//
// const onLoadKino = (event) => {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   api.loadKino(formData)
//     .then(ui.loadKinoSuccess)
//     .catch(ui.loadKinoFailure)
// }
//
// const onNewMove = (event) => {
//   event.preventDefault()
//   const index = parseInt(event.target.getAttribute('data-cell-index'))
//   if (index >= 0) {
//     if (store.kino.cells[index] !== '') {
//       ui.failMessage(`That cell is already taken ${store.user.token}`)
//     } else {
//       store.kino.cells[index] = store.turn
//       if (store.x) {
//         store.kino.over = true
//       }
//       const data = {
//         "kino": { // eslint-disable-line
//           "cell": { // eslint-disable-line
//             "index": index, // eslint-disable-line
//             "value": store.turn // eslint-disable-line
//           },
//           "over": store.kino.over // eslint-disable-line
//         }
//       }
//       api.newMove(data)
//         .then(ui.newMoveSuccess)
//         .catch(ui.newMoveFailure)
//     }
//   }
// }

// ////////////////////////////////////////////////////////////////////////////

module.exports = {
  onCreateCharacter,
  onUpdateCharacter,
  addHandlers,
  btnHandlers
}
