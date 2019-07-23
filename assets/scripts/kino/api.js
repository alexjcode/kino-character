'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createCharacter = () => {
  return $.ajax({
    url: config.apiUrl + '/characters',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

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
  // console.log(data)
  return $.ajax({
    url: config.apiUrl + '/characters/' + data.kinos.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const editCharacter = (data) => {
  return $.ajax({
    url: config.apiUrl + '/characters/' + store.kino.id,
    data: data,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createCharacter,
  indexCharacters,
  showCharacter,
  editCharacter
}
