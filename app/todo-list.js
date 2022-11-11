'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'

// import Todo from './todo.js'
import Confetti from './confetti.js'
// import { getTodoList } from './list.js'
// import { getTodoList } from './list'
import AddNewTodo from './add-todo'

export default function TodoList() {
  const router = useRouter()
  const [todos, setTodos] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isAllDone, setIsAllDone] = useState(false)

  async function getTodos() {
    const res = await fetch('/api/todo/get', {
      method: 'GET',
      mode: 'no-cors',
    })
    const json = await res.json()
    setTodos(json)
    setIsAllDone(json.every(({ isDone }) => isDone === true))
    setIsLoading(false)
  }

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
    getTodos()
  }

  async function deleteTodo(id, refresh) {
    const response = await fetch(`/api/todo/delete?id=${id}`, {
      method: 'DELETE',
    })

    refresh()
    getTodos()
  }

  useEffect(() => {
    console.log('running useEffect')
    getTodos()
  }, [])

  console.log('todos', todos)

  return (
    <div className="mt-10">
      {isLoading ? (
        <Image
          src="https://media.tenor.com/vGAjEmjoJLUAAAAC/free-loader.gif"
          width="125"
          height="125"
          alt="loading"
        />
      ) : todos.length && !isAllDone ? (
        <>
          <h2 className="font-bold">Do</h2>
          <ul>
            {todos &&
              todos.map((todo) => {
                return (
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
                )
              })}
          </ul>
        </>
      ) : (
        <Confetti />
      )}
      <AddNewTodo getTodos={getTodos} />
    </div>
  )
}
