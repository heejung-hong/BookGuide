import Card from "../Card";

export default function Gallery ({ books }) {
  // bookResults from Card prop
  let galleryContent = <p>Your book is loading...</p>

  if (books.length > 0) {
    galleryContent = books
      .map((book, i) => <Card key={i} bookResults={book} />)
  }

  return (
    <div className="gallery">
      {galleryContent}

    </div>
  )
}