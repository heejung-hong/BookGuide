import { Link } from "react-router-dom"
import { Container } from "semantic-ui-react"

export default function Card({ bookResults, updateDetails }) {
// in curly destruturing prop so that data from API can be used without the word props below
  return (
    <>
      
        
          <div className="ui fluid card">
          
          <div className="card">
            <Link
              to={"/details"}
              onClick={() => { updateDetails(bookResults) }}
            >
              <div className="content">
                <div className="header">" {bookResults.title} "</div>
              </div>
              <div className="content">
                <h4 className="ui sub header">Rank : {bookResults.rank}</h4>
                <div className="ui small feed">
                  <div className="event">
                    <div className="content">
                      <div className="summary">
                        <a>Rank last week: </a><a>{bookResults.rank_last_week}</a>
                      </div>
                    </div>
                  </div>
                  <div className="event">
                    <div className="content">
                      <div className="summary">
                        <a>Weeks on List: </a><a>{bookResults.weeks_on_list}</a>
                      </div>
                    </div>
                  </div>
                  <div className="event">
                    <div className="content">
                      <div className="summary">
                        <a>Author: </a><a>{bookResults.author}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
      
          
      </div>
    </>  
  )
}
