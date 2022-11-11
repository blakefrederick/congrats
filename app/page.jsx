import styles from './page.module.css'
import TodoList from './todo-list'

export default async function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Hi</h1>
        <TodoList />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
