'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

import Todo from './todo.js'
import Confetti from './confetti.js'
// import { getTodoList } from './list'

export default function TodoList() {
  const router = useRouter()
  const [todos, setTodos] = useState('')

  useEffect(() => {
    const getTodoList = async () => {
      console.log(process.env.SITE_URL)
      // const res = await fetch(`${process.env.SITE_URL}/api/todo/get`, {
      //   method: 'GET',
      //   mode: 'no-cors',
      //   // cache: 'no-store',
      // })
      // return res.json()

      const res = await fetch('/api/todo/get', {
        // const res = await fetch(`${process.env.SITE_URL}/api/todo/get`, {
        method: 'GET',
        mode: 'no-cors',
        // cache: 'no-store',
      })
      const json = await res.json()
      setTodos(json)
    }
    getTodoList()
    router.refresh()
  }, [])

  console.log('todos', todos)

  return (
    <div className="mt-10">
      <h2 className="font-bold">{todos?.length ? 'Do' : 'Congrats!'}</h2>
      {!todos?.length && <Confetti />}
      <ul>
        {todos &&
          todos.map((todo) => {
            return <Todo todo={todo} key={todo.id} />
          })}
      </ul>
    </div>
  )
}
