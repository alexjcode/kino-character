'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const kinoEvents = require('./kino/events')
// const multiClick = 'ontouchstart' in window ? 'touchstart' : 'click'
// const store = require('./store.js')

$(() => {
  $('#character-list').hide()
  $('#create-character').hide()
  $('#index-character').hide()
  $('#show-character').hide()
  $('#update-character').hide()

  $('#kino-divider').hide()
  $('#change-password').hide()
  $('#sign-out').hide()

  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('#create-character').on('submit', kinoEvents.onCreateCharacter)
  $('#index-character').on('submit', kinoEvents.onIndexCharacters)
  $('#show-character').on('submit', kinoEvents.onShowCharacter)
  $('#update-character').on('submit', kinoEvents.onUpdateCharacter)

  kinoEvents.addHandlers()
})
