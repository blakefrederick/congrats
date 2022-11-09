import { v4 as uuidv4 } from 'uuid'
import { prisma } from '../../../app/db/client'

export const addTodo = async (name) => {
  const todo = await prisma.Todos.create({
    data: {
      id: uuidv4(),
      name,
      isDone: false,
    },
  })

  return todo
}

export async function deleteTodo(id) {
  try {
    const deletedTodo = await prisma.Todos.delete({
      where: {
        id: id,
      },
    })
    console.log({ deletedTodo })
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === 'P2025'
    ) {
      console.log('Todo not found')
    } else console.error(error)
  }
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
