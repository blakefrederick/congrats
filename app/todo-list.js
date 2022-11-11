import Todo from './todo.js'
import Confetti from './confetti.js'
import { getTodoList } from './list'

// async function getTodoList() {
//   console.log(process.env.SITE_URL)
//   const res = await fetch(`${process.env.SITE_URL}/api/todo/get`, {
//     method: 'GET',
//     mode: 'no-cors',
//   })
//   return res.json()
// }

export default async function TodoList() {
  const todos = await getTodoList()

  return (
    <div className="mt-10">
      <h2 className="font-bold">{todos?.length ? 'Do' : 'Congrats!'}</h2>
      {!todos?.length && <Confetti />}
      <ul>
        {todos?.map((todo) => {
          return <Todo todo={todo} key={todo.id} />
        })}
      </ul>
    </div>
  )
}
