'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('../store.js')

// ////////////////////////////////////////////////////////////////////////////

const onIndexCharacters = (event) => {
  if (event) {
    event.preventDefault()
  }
  console.log('event', event)
  // debugger
  api.indexCharacters()
    .then(ui.indexCharactersSuccess)
    .catch(ui.failure)
}

const onShowCharacter = (event) => {
  console.log('here')
  event.preventDefault()
  // debugger

  console.log('event', event)
  const form = event.target
  const formData = getFormFields(form)
  // debugger
  console.log(formData)
  onClearCharacters()
  api.showCharacter(formData)
    .then(ui.showCharacterSuccess)
    .catch(ui.failure)
}

const onClearCharacters = () => {
  event.preventDefault()
  ui.clearCharacters()
}

const onCreateCharacter = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData, 'formData')
  api.createCharacter(formData)
    .then(() => {
      onIndexCharacters()
    })
    .catch(ui.failure)
}

const onUpdateCharacter = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateCharacter(formData)
    .then(() => {
      onIndexCharacters()
    })
    .catch(ui.failure)
}

const onDeleteCharacter = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  onClearCharacters()
  api.deleteCharacter(id)
    .then(() => {
      onIndexCharacters()
    })
    .catch(ui.failure)
}

// ////////////////////////////////////////////////////////////////////////////

const addHandlers = () => {
  $('body').on('click', '.delete-character', onDeleteCharacter)
}

module.exports = {
  onCreateCharacter,
  onUpdateCharacter,
  onIndexCharacters,
  onClearCharacters,
  onShowCharacter,
  addHandlers
}
