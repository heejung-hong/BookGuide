import Gallery from "../Gallery";

export default function HomePage(props) {
  return (
    <>
    <div >
      
        <div className="gallery">
      <h1>Book Guide</h1>
      </div>
      <div className="gallery">
      <h4>Based on NY Times Best Sellers List</h4>
      </div>
      <br />
      <div className="gallery">
      <h2>Click on the card for Book Details</h2>
      </div>
      <br />
      </div>
      <div>
        <div className="ui container">
      <Gallery 
        books={props.books} 
        updateDetails={props.setDetailsData}
      />
      </div>
      </div>
    </>
  )
}