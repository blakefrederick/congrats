'use client'

import { useRouter } from 'next/navigation'

async function update(id, isDone, refresh) {
  await fetch('/api/todo/update', {
    method: 'POST',
    body: JSON.stringify({ id, isDone }),
    mode: 'no-cors',
  })
  {
    /* Note about the need for router.refresh here: https://beta.nextjs.org/docs/data-fetching/mutating */
  }
  refresh()
}

async function deleteTodo(id, refresh) {
  const response = await fetch(`/api/todo/delete?id=${id}`, {
    method: 'DELETE',
  })

  refresh()
}

export default function Todo({ todo }) {
  const router = useRouter()

  return (
    <>
      <li key={todo.id}>
        <label className="cursor-pointer label">
          <input
            type="checkbox"
            className="checkbox checkbox-success mx-5 border-2"
            checked={todo.isDone}
            onChange={(e) => {
              update(todo.id, e.target.checked, router.refresh)
            }}
          />
          <span className="label-text">{todo.name}</span>
          <button
            className="btn btn-xs btn-error mx-2 text-white text-2xs opacity-90"
            onClick={() => {
              deleteTodo(todo.id, router.refresh)
            }}
          >
            X
          </button>
        </label>
      </li>
    </>
  )
}
