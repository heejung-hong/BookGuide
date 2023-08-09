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
          <h1>" {props.title} " by {props.author}</h1>
          <h2>Description: {props.description}</h2>
          <img src={props.book_image} alt="book cover" />
          <h2></h2>
          <a href={props.amazon_product_url}>Amazon Product Link</a>
          <h2>Buy Links</h2>
          {/* <h2>{props.buy_links.name} : {props.buy_links.url}</h2> */}
          
        </div>
        <div>
          <CommentSection bookId={props.primary_isbn13} />
        </div>
      </>
    )
  } else {
    return <h3>Loading your book</h3>
  }



}