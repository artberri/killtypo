const MARKS = 'killtypo-marks'

export class storage {
  fetch () {
    var todos = JSON.parse(window.localStorage.getItem(MARKS) || '[]')
    todos.forEach(function (todo, index) {
      todo.id = index
    })

    return todos
  }

  save (todos) {
    window.localStorage.setItem(MARKS, JSON.stringify(todos))
  }
}
