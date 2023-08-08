import Gallery from "../Gallery";

export default function HomePage(props) {
  return (
    <>
      <h1>BookGuide</h1>
      <Gallery 
        books={props.books} 
        updateDetails={props.setDetailsData}
      />
    </>
  )
}