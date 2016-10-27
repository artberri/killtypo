export const autocueLetters = state => {
  let content = state.autocue.content
  let message = state.autocue.message
  let response = {
    wrong: '',
    left: message
  }
  let wrongAmount

  // Letters Left
  for (let i = 0; i < content.length; i++) {
    if (content[i] !== message[i]) {
      break
    }

    response.left = response.left.substring(1)
  }

  // Letters Wrong
  wrongAmount = content.length - (message.length - response.left.length)
  if (wrongAmount > 0) {
    response.wrong = response.left.substring(0, wrongAmount)
    response.left = response.left.substring(wrongAmount)
    response.nextLetter = 'Backspace'
  } else {
    response.wrong = ''
    response.nextLetter = response.left.substring(0, 1)
  }

  // Minimize printed text
  response.left = response.left.substring(0, 50)

  return response
}
