
export default function Card({ bookResults }) {
// in curly destruturing prop so that data from API can be used without the word props below
  return (
    <>
      <figure>
        <figcaption>
          <h2>Title: {bookResults.title}</h2>
          <h2>Rank: {bookResults.rank}</h2>
          <h2>Rank last week: {bookResults.rank_last_week}</h2>
          <h2>Weeks on List: {bookResults.weeks_on_list}</h2>
          <h2>Author: {bookResults.author}</h2>
        </figcaption>
      </figure>
    </>
  
  )
}
