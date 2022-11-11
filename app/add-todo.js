'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function AddNewTodo({ getTodos }) {
  const router = useRouter()
  const [input, setInput] = useState('')

  async function addTodo(input, refresh) {
    if (!input) {
      return
    }
    await fetch(`/api/todo/add`, {
      method: 'POST',
      body: JSON.stringify({ input }),
      mode: 'no-cors',
    })

    refresh()
    getTodos()
  }

  return (
    <div className="m-6">
      <input
        type="text"
        className="input input-success input-sm"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      ></input>
      <button
        className="btn btn-success btn-xs mx-2 text-white text-xs"
        onClick={() => {
          addTodo(input, router.refresh)
          setInput('')
        }}
      >
        Add
      </button>
    </div>
  )
}
