import Gallery from "../Gallery";

export default function HomePage(props) {
  return (
    <>
    <section >
      
        <div className="gallery">
      <h1>BookGuide</h1>
      
      </div>
      <div className="gallery">
      <h2>Click on the card for Book Details</h2>
      </div>
      
      </section>
      <section>
        <div className="ui container">
          <div className="ui three column grid">
      <Gallery 
        books={props.books} 
        updateDetails={props.setDetailsData}
      />
      </div>
      </div>
          
      </section>
    </>
  )
}