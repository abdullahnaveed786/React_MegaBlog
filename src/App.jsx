import { useEffect } from 'react'
import './App.css'
import { client } from './lib/appwrite'

function App() {
  useEffect(() => {
    client.ping()
  }, [])

  return (

    <>
      <h1 className="text-4xl font-bold bg-amber-400 w-full">Welcome to the MegaBlog</h1>
    </>
  )
}

export default App
