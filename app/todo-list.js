import Todo from './todo.js'
import Confetti from './confetti.js'

const getTodos = async () => {
  // Note the next.config.js rewrites don't apply here because this is a server component
  return await fetch('http://localhost:555/api/todo/list')
    .then((todos) => {
      return todos.json()
    })
    .catch((e) => {
      console.log(e)
      return {
        todos: [
          {
            id: 'default',
            isDone: false,
            name: 'Find the API, it is not around',
          },
        ],
      }
    })
}

export default async function TodoList() {
  const { todos } = await getTodos()
  console.log(todos)

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
