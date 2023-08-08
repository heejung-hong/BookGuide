import { useState } from "react"
import Gallery from "../Gallery"

export default function SearchPage(props) {

  const [query, setQuery] = useState('')
  const [prevQuery, setPrevQuery] = useState('')
  const [queryResults, setQueryResults] = useState([])

  async function getData(url) {
    const res = await fetch(url)
    const { results } = await res.json() // curly destructure JSON response
  }

  function handleQuerySubmit(event) {
    event.preventDefault()

    getData(`https://api.nytimes.com/svc/books/v3/${query}/lists/.json?api-key=${import.meta.env.VITE_BOOK_KEY}`)
  }


  return (
    <>
      <div>
        <form onSubmit={handleQuerySubmit}>
          <label htmlFor="search">
            <h1>Search Page</h1>
          </label>
          <br />
          <input 
            name="search"
            placeholder="enter Author's name..."
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
          <button type="submit">
            Search
          </button>
        </form>

        <Gallery
          books={queryResults}
          updateDetails={props.setDetailsData}
        />
      </div>      
    </>  
  )
}