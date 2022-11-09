import Todo from './todo.js'
import { getTodoList } from '../pages/api/todo/list.js'
import Confetti from './confetti.js'

const getTodos = async () => {
  return getTodoList()
}

export default async function TodoList() {
  const todos = await getTodos()

  return (
    <div className="mt-10">
      <h2 className="font-bold">{todos.length ? 'Do' : 'Congrats!'}</h2>
      {!todos.length && <Confetti />}
      <ul>
        {todos.map((todo) => {
          return <Todo todo={todo} key={todo.id} />
        })}
      </ul>
    </div>
  )
}
