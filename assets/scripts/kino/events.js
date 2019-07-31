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
  // console.log('event', event)
  // debugger
  api.indexCharacters()
    .then(ui.indexCharactersSuccess)
    .catch(ui.failure)
}

const onEditButton = (event) => {
  event.preventDefault()
  let button = $(event.target)
  if (button.attr('class') === 'btn-txt') {
    // debugger
    button = button.parent()
  }
  const char = button.parent()

  const id = button.data('id')
  const form = $('#update-character').children()
  form.eq(1).val(id)
  form.eq(2).val(char.attr('first_name'))
  form.eq(3).val(char.attr('last_name'))
  form.eq(4).val(char.attr('born_on'))
  form.eq(5).val(char.attr('location'))
  form.eq(6).val(char.attr('movie'))
  form.eq(7).val(char.attr('likes'))
  form.eq(8).val(char.attr('img'))

  // $('form').trigger('reset')
  // onClearCharacters()
}

const onShowCharacter = (event) => {
  // console.log('here')
  event.preventDefault()
  // debugger

  // console.log('event', event)
  const form = event.target
  const formData = getFormFields(form)
  // debugger
  // console.log(formData)
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
  // console.log(formData, 'formData')
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
  if (event) {
    event.preventDefault()
  }

  let button = $(event.target)
  if (button.attr('class') === 'btn-txt') {
    // debugger
    button = button.parent()
  }
  const id = button.data('id')
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
  $('body').on('click', '.edit-character', onEditButton)
}

module.exports = {
  onEditButton,
  onCreateCharacter,
  onUpdateCharacter,
  onIndexCharacters,
  onClearCharacters,
  onShowCharacter,
  addHandlers
}
