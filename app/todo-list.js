import Todo from './todo.js'

const getTodos = async () => {
  let todos = await fetch('http://localhost:555/api/todo/list')
  console.log(todos)
  return todos.json()
}

export default async function TodoList() {
  const { todos } = await getTodos()

  return (
    <div className="mt-10">
      <h2>Do</h2>
      <ul>
        {todos.map((todo) => {
          return <Todo todo={todo} key="todos" />
        })}
      </ul>
    </div>
  )
}
