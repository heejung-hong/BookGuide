
import { Link } from "react-router-dom"

export default function NotFoundPage() {
  return (
    <>
      <div>
        <h1>404</h1>
        <div>
          <h2>Page Not Found</h2>
        </div>
        <button className="ui pink basic button">
          <Link to="/">Go Home</Link>
        </button>
      </div>     
    </>
  )
}