'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createCharacter = (data) => {
  return $.ajax({
    url: config.apiUrl + '/characters',
    data: data,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const updateCharacter = (data) => {
//   return $.ajax({
//     url: config.apiUrl + '/characters/' + store.kino.id,
//     data: data,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

const indexCharacters = () => {
  return $.ajax({
    url: config.apiUrl + '/characters',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showCharacter = (data) => {
  console.log(data.characters.id)
  // debugger
  return $.ajax({
    url: config.apiUrl + '/characters/' + data.characters.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteCharacter = (data) => {
  // console.log(data)
  return $.ajax({
    url: config.apiUrl + '/characters/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createCharacter,
  // updateCharacter,
  indexCharacters,
  showCharacter,
  deleteCharacter
}
