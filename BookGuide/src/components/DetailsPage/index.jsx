import { useEffect } from "react"

export default function DetailsPage(props) {
  console.log(props)

  
  return (
    <>
      
      <div>
        <h1>" {props.title} " by {props.author}</h1>
        <h2>Description: {props.description}</h2>
        <img src={props.book_image} alt="book cover" />
        <h2></h2>
        <a href={props.amazon_product_url}>Amazon Product Link</a>
        <h2>Buy Links</h2>
        <h2>{props.buy_links.name} : {props.buy_links.url}</h2>
        
      </div>
    </>
  )
}