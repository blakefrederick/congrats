import { v4 as uuidv4 } from 'uuid'

let todos = [
  {
    id: uuidv4(),
    name: 'Have an extremely good idea',
    isDone: false,
  },
  {
    id: uuidv4(),
    name: 'Say thanks to the garbage man',
    isDone: false,
  },
  {
    id: uuidv4(),
    name: 'Generate AI self',
    isDone: false,
  },
]

export const getTodoList = () => {
  return todos
}

export const addTodo = (name) => {
  let newTodo = {
    id: uuidv4(),
    name,
    isDone: false,
  }
  todos.push(newTodo)
}

export const deleteTodo = (id) => {
  todos = todos.filter((obj) => {
    return obj.id !== id
  })
}

export const updateTodo = ({ id, isDone }) => {
  // only isDone can be updated atm
  let newTodos = []
  todos.map((obj) => {
    let newTodo = { ...obj }
    if (obj.id == id) {
      newTodo = {
        id,
        name: obj.name,
        isDone,
      }
    }
    newTodos.push(newTodo)
  })
  todos = newTodos
}

export default function handler(req, res) {
  res.status(200).json({ todos })
}