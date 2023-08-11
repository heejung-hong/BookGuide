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
        <section>
          <div className="ui container">
            <div className="ui grid">
              <div className="ten wide column">
                <h2>" {props.title} " by {props.author}</h2>
                <h3>Description: {props.description}</h3>
                <img src={props.book_image} alt="book cover" />
                <h2></h2>
                <a href={props.amazon_product_url}>Amazon Product Link</a>
                <h3>Buy Links</h3>
                {/* <h2>{props.buy_links.name} : {props.buy_links.url}</h2> */}
                
              </div>
              <div className="six wide column">
                <CommentSection bookId={props.primary_isbn13} />
              </div>
            </div>
          </div>
        </section>
      </>
    )
  } else {
    return <h3>Loading your book</h3>
  }

}