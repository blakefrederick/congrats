import Todo from './todo.js'

const getTodos = async () => {
  // Note the next.config.js rewrites don't apply here because this is a server component
  let todos = await fetch('http://localhost:3333/api/todo/list')
  return todos.json()
}

export default async function TodoList() {
  const { todos } = await getTodos()

  return (
    <div className="mt-10">
      <h2 className="font-bold">{todos.length ? 'Do' : 'Congrats!'}</h2>
      {!todos.length && <div></div>}
      <ul>
        {todos.map((todo) => {
          return <Todo todo={todo} key={todo.id} />
        })}
      </ul>
    </div>
  )
}
