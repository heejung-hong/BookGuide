import { useState, useEffect } from 'react'
import'./styles.css'

export default function App() {
  const [books, setBooks] = useState([])

  // query the API
  useEffect (() => {
    async function getData() {
      const res = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${import.meta.env.VITE_BOOK_KEY}`)
      const { results } = await res.json()
      setBooks(results)
      console.log(results)
    }
    getData()
  }, [])

  return (
    <>
      <h1>BookGuide</h1>
      {books.length > 0 ? <p>{books[1].author}</p> : <p>Your book is loading...</p>}
    </>
  
  )
}