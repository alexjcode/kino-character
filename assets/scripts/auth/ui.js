'use strict'

const store = require('../store.js')
// const win = require('../kino/win')
// const events = require('./events')

const successMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const failMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const signUpSuccessful = responseData => {
  successMessage('You signed up successfully!')
  // $('#sign-up').hide()
}

const signUpFailure = () => {
  failMessage('Sign up failure')
}

const signInSuccessful = responseData => {
  // store user token
  store.user = responseData.user
  successMessage(`You signed in successfully!`)
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#character-list').show()
  $('#change-password').show()
  $('#new-kino').show()
  $('#load-kino').show()
  $('#index-kino').show()
}

const signInFailure = () => {
  failMessage('Sign in failure')
}

const changePasswordSuccessful = responseData => {
  successMessage('Password changed successfully!')
}

const changePasswordFailure = () => {
  failMessage('Password change failure')
}

const signOutSuccessful = () => {
  $('#scorekeeper').text('')
  $('#scorekeeper2').text('')
  successMessage('Signed out successfully!')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#character-list').hide()
  $('#current-turn').hide()
  $('#new-kino').hide()
  $('#load-kino').hide()
  $('#kino-divider').hide()
  $('#index-kino').hide()
}

const signOutFailure = () => {
  failMessage('Sign out failure')
}

module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccessful,
  signInFailure,
  changePasswordSuccessful,
  changePasswordFailure,
  signOutSuccessful,
  signOutFailure,
  failMessage,
  successMessage
}
