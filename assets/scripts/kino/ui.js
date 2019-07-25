'use strict'

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

const showCharTemplate = require('../templates/character-listing.handlebars')
// const events = require('./events.js')

const indexCharactersSuccess = (data) => {
  // console.log(data)
  $('form').trigger('reset')
  const showCharHtml = showCharTemplate({ characters: data.characters })
  $('.content').html(showCharHtml) // html() or append()
}

const showCharacterSuccess = (data) => {
  $('form').trigger('reset')
  console.log(data, 'response data')
  const showCharHtml = showCharTemplate({ characters: data })
  $('.content').html(showCharHtml) // html() or append()
}

const createCharacterSuccess = (data) => {
  $('form').trigger('reset')
  console.log(data, 'response data')
}

// const deleteBookSuccess = (data) => {
//   // debugger
//   console.log(data)
// }

const clearCharacters = () => {
  $('.content').empty()
}

const failure = (error) => {
  // debugger
  console.error(error)
}

module.exports = {
  failMessage,
  successMessage,
  indexCharactersSuccess,
  showCharacterSuccess,
  clearCharacters,
  createCharacterSuccess,
  failure
}
