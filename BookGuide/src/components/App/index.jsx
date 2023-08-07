import { useState, useEffect } from 'react'
import Gallery from '../Gallery'
import DetailsPage from '../DetailsPage'
import'./styles.css'

export default function App() {
  const [books, setBooks] = useState([])

  // query the API
  useEffect (() => {
    async function getData() {
      const res = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${import.meta.env.VITE_BOOK_KEY}`)
      const { results } = await res.json() // curly destructure JSON response
      setBooks(results.books)
      console.log(results)
    }
    getData()
  }, [])

  if (books > 0) console.log(books)
  else console.log(books.books)
  return (
    <>
      <h1>BookGuide</h1>
      <Gallery books={books} />
      {books.length > 0 ? <DetailsPage {...books[1]} /> : null }
    </>
  
  )
}