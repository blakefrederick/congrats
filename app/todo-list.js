'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'

import Todo from './todo.js'
import Confetti from './confetti.js'
// import { getTodoList } from './list'

export default function TodoList() {
  const router = useRouter()
  const [todos, setTodos] = useState('')
  const [isLoading, setIsLoading] = useState(true)

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
      setIsLoading(false)
    }
    getTodoList()
    router.refresh()
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
      ) : todos.length ? (
        <>
          <h2 className="font-bold">Do</h2>
          <ul>
            {todos &&
              todos.map((todo) => {
                return <Todo todo={todo} key={todo.id} />
              })}
          </ul>
        </>
      ) : (
        <Confetti />
      )}
    </div>
  )
}
