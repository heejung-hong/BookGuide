import { Link } from "react-router-dom"
import { Container } from "semantic-ui-react"

export default function Card({ bookResults, updateDetails }) {
// in curly destruturing prop so that data from API can be used without the word props below
  return (
    <>
    
      <div className="ui top attached segment">          
          <Link
            to={"/details"}
            onClick={() => { updateDetails(bookResults) }}
          >
      <table class="ui celled striped table">
  <thead>
    <tr><th colspan="3">
    " {bookResults.title} "
    </th>
  </tr></thead>
  <tbody>
    <tr>
      <td class="collapsing"> Rank </td>
      <td>{bookResults.rank}</td>
    </tr>
    <tr>
      <td> Rank last week</td>
      <td>{bookResults.rank_last_week}</td>
    </tr>
    <tr>
      <td> Weeks on List</td>
      <td>{bookResults.weeks_on_list}</td>
    </tr>
    <tr>
      <td> Author</td>
      <td>{bookResults.author}</td>
    </tr>
  </tbody>
</table>
          
          </Link>
          </div>
          
    </>  
  )
}
