import { useEffect, useState } from "react";
import Card from "../Card";

export default function Gallery ({ books, url, updateDetails }) {
  // send updateDetails info to each Card in if statement
  // bookResults from Card prop
  let galleryContent = <p>Your book is loading...</p>
  // i is index.  react need unique key.
  if (books.length > 0) {
    galleryContent = books
      .map(book => {
        return <Card key={book.primary_isbn13} bookResults={book} updateDetails={updateDetails} />
      })
  }

  return (
    <div className="gallery">
      {galleryContent}

    </div>
  )
}