import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome!
        </h1>

        <div className="text-xl m-10 font-bold">
          Take a look at this fake skeleton loader pulsing infinitely
        </div>

        <div class="border border-blue-300 shadow rounded-md p-4 m-4 max-w-sm w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="rounded-full bg-slate-400 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-500 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-400 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-400 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-400 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-l m-10 mt-20 font-bold">
          Now bouncing infinitely
        </div>

        <div class="border border-green-300 shadow rounded-md p-4 m-4 max-w-sm w-full mx-auto animate-bounce">
          <div class="flex space-x-4">
            <div class="rounded-full bg-slate-200 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-200 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
