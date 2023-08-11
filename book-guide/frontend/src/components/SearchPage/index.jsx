import { useState } from "react"
// import Gallery from "../Gallery"

export default function SearchPage(reviews) {

  const [query, setQuery] = useState('')
  const [prevQuery, setPrevQuery] = useState('')
  const [queryResults, setQueryResults] = useState([])

  async function getData(url) {
    const res = await fetch(url)
    const { results } = await res.json() // curly destructure JSON response
    console.log(results)

    if (prevQuery === query) {
      setQueryResults([...queryResults, ...results])
      // resetPageCount(false)
    } else {
      setQueryResults(results)
      setPrevQuery(query)
      // resetPageCount(true)
    }
  }

  function handleQuerySubmit(event) {
    event.preventDefault()

    getData(`https://api.nytimes.com/svc/books/v3/reviews.json?author=${query}&api-key=${import.meta.env.VITE_BOOK_KEY}`)
  }

  let reviewContent = <p>Your book is loading...</p>
  // i is index.  react need unique key.
  if (reviews.length > 0) {
    reviewContent = reviews
      .map(review => {
        return <Card key={review.book_author} reviewResults={review} />
      })
  }
  console.log()
 
  return (
    <>
      <div>
        <form onSubmit={handleQuerySubmit}>
          <label htmlFor="search">
            <h1>Reviews by Author's Name</h1>
          </label>
          <br />
          <div className="ui search">
          <div className="ui icon input">
          <input
            className="prompt" 
            name="search"
            placeholder="enter author's name..."
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
          <i class="search icon"></i>
          
          </div>
          <button className="ui teal basic button" type="submit">
            Search
          </button>
          </div>
          
        </form> 

      </div>  
      <div>
        <h2>{reviewContent.book_author}</h2>
        <h2>{reviewContent.book_title}</h2>
        <h2>{reviewContent.summary}</h2>
        <h2>{reviewContent.url}</h2>

      </div>    
    </>  
  )
}