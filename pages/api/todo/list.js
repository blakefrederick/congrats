import { v4 as uuidv4 } from 'uuid'
import { prisma } from '../../../app/db/client'

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

export async function getTodoList() {
  const todos = await prisma.Todos.findMany()
  return todos
}
