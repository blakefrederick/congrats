import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="pastel">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className="bg-purple-700">
          <p className="text-2xs text-white px-1">
            If you're reading this, congrats
          </p>
        </header>
        {children}
      </body>
    </html>
  )
}
