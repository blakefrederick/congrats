'use client'

import { useRouter } from 'next/navigation'

async function update(id, isDone, refresh) {
  await fetch('http://localhost:555/api/todo/update', {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify({ id, isDone }),
  })
  {
    /* Note about the need for router.refresh here: https://beta.nextjs.org/docs/data-fetching/mutating */
  }
  refresh()
}

export default function Todo({ todo }) {
  const router = useRouter()

  return (
    <>
      <li key={todo.id}>
        <label class="cursor-pointer label">
          <input
            type="checkbox"
            class="checkbox checkbox-success mx-5"
            checked={todo.isDone}
            onChange={(e) => {
              update(todo.id, e.target.checked, router.refresh)
            }}
          />
          <span class="label-text">{todo.name}</span>
          {/* <button class="btn">Delete</button> */}
        </label>
      </li>
    </>
  )
}
