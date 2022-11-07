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
        <h1 className={styles.title}>Hey!</h1>

        <TodoList />
        <AddNewTodo />

        <div className="text-xl mt-40 font-bold">
          Something is loading... or is it?
        </div>

        <div className="border border-blue-300 shadow rounded-md p-4 m-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-400 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-500 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-400 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-400 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-400 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-l mt-10 mb-5 mt-20 font-bold">
          macOS getting your attention
        </div>

        <div className="border border-green-300 shadow rounded-md p-4 m-4 max-w-sm w-full mx-auto animate-bounce">
          <div className="flex space-x-4">
            <div className="rounded-full bg-slate-200 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
