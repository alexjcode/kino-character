'use strict'

// auto-hide kino board

const store = require('../store.js')
const win = require('./win')
// const events = require('./events')

let xIndex = 0
let oIndex = 0
let drawsIndex = 0
let totalKinosIndex = 0

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

const resetScore = () => {
  store.xWins = 0
  store.oWins = 0
  store.draws = 0
  store.totalKinos = 0
}

const score = (input) => {
  xIndex = 0
  oIndex = 0
  drawsIndex = 0
  totalKinosIndex = 0
  for (let i = 0; i < input.length; i++) {
    const kino = input[i]
    if (kino.over === true) {
      if (win.outcome(kino) === 'x') {
        xIndex++
      } else if (win.outcome(kino) === 'o') {
        oIndex++
      } else if (win.outcome(kino) === 'z') {
        drawsIndex++
      } else {
        totalKinosIndex--
      }
      totalKinosIndex++
    }
  }
}

const indexKinoSuccess = (res) => {
  score(res.kinos)
  $('#message').text(`${xIndex} Wins, ${oIndex} Losses, ${drawsIndex} Draws [ ${totalKinosIndex} Total Kinos ]`)
}

const indexKinoFailure = (error) => {
  console.log(`Index failure`, error)
  failMessage(`Index failure`)
}

const newKinoSuccess = (responseData) => {
  store.kino = responseData.kino
  $('#character-list').show()
  $('#current-turn').show()
  $('#kino-divider').show()
  for (let i = 0; i < 9; i++) {
    $(`div[data-cell-index=${i}]`).html('')
  }
  successMessage(`New kino begin [${store.kino.id}]`)
}

const newKinoFailure = () => {
  failMessage(`New kino failure`)
}

const newMoveSuccess = (data) => {
  store.kino = data.kino
  let cell = 'z'
  for (let i = 0; i < 9; i++) {
    cell = store.kino.cells[i]
    if (cell === 'x') {
      // Add 'x' image to clicked cell
      $(`div[data-cell-index=${i}]`).html('<img src="public/images/x2.png" alt="x" class="ltr x">')
    } else if (cell === 'o') {
      // Add 'o' image to clicked cell
      $(`div[data-cell-index=${i}]`).html('<img src="public/images/o.png" alt="o" class="ltr o">')
    }
  }
  if (store.turn === 'x') {
    store.turn = 'o'
  } else if (store.turn === 'o' || store.turn === 'z') {
    store.turn = 'x'
  }
  $('#current-turn').text(store.turn)
  successMessage(`New move [${store.kino.id}]`)
  const winning = win.outcome(store.kino)
  if (winning === 'z') {
    successMessage(`This match ends in a draw`)
    $('#character-list').hide()
    $('#current-turn').hide()
    $('#kino-divider').hide()
    store.totalKinos++
    store.draws++
    $('#scorekeeper').text(`${store.xWins} : ${store.totalKinos}`)
    $('#scorekeeper2').text(`${store.xWins} Wins, ${store.oWins} Losses, ${store.draws} Draws`)
  } else if (winning) {
    successMessage(`${winning} is the victor`)
    $('#character-list').hide()
    $('#current-turn').hide()
    $('#kino-divider').hide()
    store.totalKinos++
    if (winning === 'x') {
      store.xWins++
    } else if (winning === 'o') {
      store.oWins++
    }
    $('#scorekeeper').text(`${store.xWins} : ${store.totalKinos}`)
    $('#scorekeeper2').text(`${store.xWins} Wins, ${store.oWins} Losses, ${store.draws} Draws`)
  }
}

const newMoveFailure = () => {
  failMessage(`Couldn't move. Try again [${store.kino.id}]`)
}

const loadKinoSuccess = (responseData) => {
  store.kino = responseData.kino
  $('#character-list').show()
  $('#current-turn').show()
  $('#kino-divider').show()
  let cell = 'z'
  let xCells = 0
  let oCells = 0
  for (let i = 0; i < 9; i++) {
    cell = store.kino.cells[i]
    if (cell === 'x') {
      // Add 'x' image to clicked cell
      $(`div[data-cell-index=${i}]`).html('<img src="public/images/x2.png" alt="x" class="ltr x">')
      xCells++
    } else if (cell === 'o') {
      // Add 'o' image to clicked cell
      $(`div[data-cell-index=${i}]`).html('<img src="public/images/o.png" alt="o" class="ltr o">')
      oCells++
    }
  }
  if (oCells === xCells) {
    store.turn = 'x'
  } else if (xCells > oCells) {
    store.turn = 'o'
  } else {
    store.turn = 'z'
  }
  successMessage(`Kino Loaded [${store.kino.id}]`)
}

const loadKinoFailure = () => {
  failMessage(`Invalid kino request [${store.kino.id}]`)
}

module.exports = {
  failMessage,
  successMessage,
  newKinoSuccess,
  newKinoFailure,
  indexKinoSuccess,
  indexKinoFailure,
  newMoveSuccess,
  newMoveFailure,
  loadKinoSuccess,
  loadKinoFailure,
  resetScore
}