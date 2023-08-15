import { useEffect } from "react"
import CommentSection from '../CommentSection'

export default function DetailsPage(props) {
 
  useEffect(() => {
    if (props.primary_isbn13) {
      localStorage.setItem('detailsData', JSON.stringify(props))
    } else {
      const storedData = JSON.parse(localStorage.getItem('detailsData'))
      props.updateDetails(storedData)
    }
  })

  if (props.primary_isbn13) {
    return (
      <>
        <div>
          <div className="ui container">
            <div className="ui grid">
              <div className="nine wide column">
                <div style={{backgroundColor: "whitesmoke"}}>
                  <div style={{
                  padding: "20px"
                }}>
                  <div class="ui horizontal divider"><h3>" {props.title} "</h3></div>
                  <h2 class="ui horizontal divider"> by {props.author}</h2>
                  <h2 >Description: <h4>{props.description}</h4></h2>                
                  <h2 class="ui horizontal divider header"><a href={props.amazon_product_url}>Buy on Amazon</a></h2>
                  <div>
                    <img src={props.book_image} alt="book cover" className="gallery" />
                  </div>
                  </div>                  
                </div>  
              </div>
              <div className="one wide column"></div>
              <div className="six wide column">
                <div style={{
                  backgroundColor: "whitesmoke"
                }}>
                  <div style={{
                  padding: "20px"
                }}>
                  <CommentSection bookId={props.primary_isbn13} />
                  </div>
                  
                </div>                
              </div>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return <h3>Loading your book</h3>
  }

}