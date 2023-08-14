

export default function ReviewCard({ reviewData }) {
  return (
    <figure>
      <figcaption>
        <h2>Author: {reviewData.book_author}</h2>
        <h2>Title: " {reviewData.book_title} "</h2>
        <h2>Summary: {reviewData.summary}</h2>
        <h2>NYT Review Link: {reviewData.url}</h2>
      </figcaption>
    </figure>
  )
}