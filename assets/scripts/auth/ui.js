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
  $('#change-password').show()

  $('#character-list').show()
  $('#create-character').show()
  $('#show-character').show()
  $('#update-character').show()
  $('#kino-divider').show()

  $('#new-kino').hide()
  $('#load-kino').hide()
  $('#index-kino').hide()
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
  successMessage('Signed out successfully!')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()

  $('#create-character').hide()
  $('#character-list').hide()
  $('#update-character').hide()
  $('#show-character').hide()

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