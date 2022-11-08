import Image from 'next/image'
import styles from './page.module.css'
// import { useRouter } from 'next/navigation'
import TodoList from './todo-list'
import AddNewTodo from './add-todo'

export default function Home() {
  // const router = useRouter()
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Hi</h1>
        <TodoList />
        <AddNewTodo />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
