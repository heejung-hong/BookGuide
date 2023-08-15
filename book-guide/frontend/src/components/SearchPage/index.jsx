import { useEffect, useState } from "react"
import ReviewCard from "../ReviewCard";

export default function SearchPage(props) {
  const [query, setQuery] = useState('') // query saves whatever user enters in search bar
  const [prevQuery, setPrevQuery] = useState('') // Tell the gallery component if it needs to resest its page count after new search submitted
  const [queryResults, setQueryResults] = useState([]) // caputure results from API
  
  async function getData(url) {
    const res = await fetch(url)
    const { results } = await res.json() // curly destructure JSON response
      console.log(results)
    if (prevQuery === query) {
      setQueryResults([...queryResults, ...results])
    } else {
      setQueryResults(results)
      setPrevQuery(query)
    }
    console.log(results[0].book_title)
  }

  function handleQuerySubmit(event) {
    event.preventDefault() // prevent the page from reloading
      console.log(query)
    setQueryResults(prevResults => prevResults = []) // clears previous query's data
    getData(`https://api.nytimes.com/svc/books/v3/reviews.json?author=${query}&api-key=${import.meta.env.VITE_BOOK_KEY}`)
    
  }

  let reviewContent = <p className="gallery">The review is loading...</p>

  if (queryResults.length > 0) {
    reviewContent = queryResults
      .map(queryResult => <ReviewCard key={queryResult.book_author} reviewData={queryResult} />)
      
  }

  return (
    <>
      <div className="gallery">
        <form onSubmit={handleQuerySubmit}>
          <label htmlFor="search">
            <h1>Reviews by Author's Name</h1>
          </label>
          <br />
          <br />
          <div className="ui gallery">
            <div className="ui icon input">
              <input
                className="prompt" 
                name="search"
                placeholder="enter author's name..."
                value={query}
                onChange={event => setQuery(event.target.value)}
              />
              <i className="search icon"></i>          
            </div>
            <button className="ui teal basic button" type="submit">
              Search
            </button>
          </div>          
        </form> 
      </div>
      <br />
      <br />
      <div className="">
        <div className="ui container">
          {reviewContent}
        </div>        
      </div>
    </>  
  )
}