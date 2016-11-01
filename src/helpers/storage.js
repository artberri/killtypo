const MARKS = 'killtypo-marks'

export class storage {
  fetch () {
    var todos = JSON.parse(localStorage.getItem(MARKS) || '[]')
    todos.forEach(function (todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  }

  save (todos) {
    localStorage.setItem(MARKS, JSON.stringify(todos))
  }
}
