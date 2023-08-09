import { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom"
// import Gallery from '../Gallery'
import HomePage from '../HomePage'
import DetailsPage from '../DetailsPage'
import SearchPage from '../SearchPage'
import NotFoundPage from '../NotFoundPage'
import'./styles.css'


export default function App() {
  const [books, setBooks] = useState([])
  const [detailsData, setDetailsData] = useState({})
  // pass detail and setter function, State down to Gallery then Card
  // details gets detailData variable
  // Gallery gets setDetailsData variable
  async function getData(url) {
    const res = await fetch(url)
    const { results } = await res.json() // curly destructure JSON response
    console.log(results)
    setBooks([...books, ...results.books])
    
  }

  // query the API
  useEffect (() => {
    getData(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${import.meta.env.VITE_BOOK_KEY}`)
  }, [])

  if (books > 0) {console.log(books)
  } else {console.log(books.books)}

  return (
    <>
      <nav>
        <div>
          <Link to="/">
            <h2>Book Guide</h2>
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/search">
                <h4>Search</h4>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={
          <HomePage
            books={books}
            getData={getData}
            setDetailsData={setDetailsData} // cards can set Details Data
          />
        }/>
        <Route path="/search" element={<SearchPage setDetailsData={setDetailsData} />} />
        <Route path="/details" element={<DetailsPage {...detailsData} updateDetails={setDetailsData} />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>

    </>
  
  )
}