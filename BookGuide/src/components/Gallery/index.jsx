import Card from "../Card";

export default function Gallery ({ books }) {


  return (
    <div className="gallery">
      {/* bookResults from Card prop */}
      {books.length > 0 ? <Card bookResults={books[1]} /> : <p>Your book is loading...</p>}
    </div>
  )
}