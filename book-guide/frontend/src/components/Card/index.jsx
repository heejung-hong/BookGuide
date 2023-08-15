import { Link } from "react-router-dom"


export default function Card({ bookResults, updateDetails }) {
// in curly destruturing prop so that data from API can be used without the word props below
  return (
    <>      
      <div className="column">          
        <div className="ui fluid card">          
          <div className="card">
            <Link
              to={"/details"}
              onClick={() => { updateDetails(bookResults) }}
            >
              <div className="content">
                <br />
                <div className="center aligned header"><b>" {bookResults.title} "</b>
                </div>
              </div>
              <br />
              <div className="content">
                <h4 className="ui horizontal divider header">Rank : {bookResults.rank}</h4>
                <div className="ui small feed">
                  <div className="event">
                    <div className="content">
                      <div className="center aligned summary">
                        <p>Rank last week : {bookResults.rank_last_week}</p>
                      </div>
                    </div>
                  </div>
                  <div className="event">
                    <div className="content">
                      <div className="center aligned summary">
                        <p>Weeks on List : {bookResults.weeks_on_list}</p>
                      </div>
                    </div>
                  </div>
                  <div className="event">
                    <div className="content">
                      <div className="center aligned summary">
                        <p>Author : {bookResults.author}</p>
                      </div>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </Link>
          </div>          
        </div>
      </div>
    </>  
  )
}
