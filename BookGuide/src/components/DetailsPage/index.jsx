

export default function DetailsPage({ title, author, book_uri, description, book_image, buy_links }) {

  return (
    <div>
      <h1>" {title} " by {author}</h1>
      {/* <h2>NYT Link: {book_uri}</h2> */}
      <h2>Description: {description}</h2>
      <img src="{book_image}" alt="{title} book cover" />
      <h2>Buy Links</h2>
      {/* <h2>{buy_links}</h2> */}
    </div>
  )
}