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
        {todos.map((t) => {
          return (
            <li key={t.id}>
              <label class="cursor-pointer label">
                <input
                  type="checkbox"
                  checked={t.isDone}
                  class="checkbox checkbox-success mx-5"
                />
                <span class="label-text">{t.name}</span>
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
