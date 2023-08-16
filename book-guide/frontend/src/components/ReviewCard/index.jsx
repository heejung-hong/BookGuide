

export default function ReviewCard({ reviewData }) {
  return (
    <>      
      <div className="ui fluid card">        
        <div className="content">
          <br />
          <div className="center aligned header">
            <h4>{reviewData.book_author}</h4>
          </div>
          <br />
        </div>
        <div className="content">
          <h4 className="ui horizontal divider header">" {reviewData.book_title} "</h4>
          <div className="ui small feed">
            <div className="event">
              <div className="content">
                <div className="center aligned summary">
                  <h4>Summary: {reviewData.summary}</h4>
                </div>
                <br />
              </div>
            </div>
            <div className="event">
              <div className="content">
                <div className="center aligned summary">
                  <h4><a href={reviewData.url}>NYT Review Link</a></h4>
                </div>
                <br />
              </div>
            </div>
          </div>          
        </div>        
      </div>          
    </>
  )
}