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

export const deleteTodo = async (id) => {
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

export const updateTodo = async ({ id, isDone }) => {
  const todo = await prisma.Todos.update({
    where: {
      id: id,
    },
    data: {
      isDone: isDone,
    },
  })

  return todo
}

export const getTodoList = async () => {
  const todos = await prisma.Todos.findMany()
  return todos
}
