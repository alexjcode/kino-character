'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
// const kinoEvents = require('./kino/events')
// const multiClick = 'ontouchstart' in window ? 'touchstart' : 'click'
// const store = require('./store.js')

$(() => {
  $('#character-list').hide()
  $('#kino-divider').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#current-turn').hide()
  $('#new-kino').hide()
  $('#load-kino').hide()
  $('#index-kino').hide()
})

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  // $('#new-kino').on('submit', kinoEvents.onNewKino)
  // if (!store.over) {
  //   $(`div[data-cell-index]`).on(multiClick, kinoEvents.onNewMove)
  // }
  // $('#load-kino').on('submit', kinoEvents.onLoadKino)
  // $('#index-kino').on('submit', kinoEvents.onIndexKino)
})
