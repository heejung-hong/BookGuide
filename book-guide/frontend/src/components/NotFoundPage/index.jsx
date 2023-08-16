
import { Link } from "react-router-dom"

export default function NotFoundPage() {
  return (
    <>
      <div className="notfound">
        <br />
        <br />
        <br />
        <div className="gallery">
          <h1>Page Not Found</h1>
        </div>
        <br />
        <br />
        <div className="gallery">
          <button className="huge ui whitesmoke button">
            <Link to="/">Go Home</Link>
          </button>
        </div>                
      </div>     
    </>
  )
}