import Link from "next/link"

export default function Navbar({ brandName, notificationName, numAlerts }) {
  return (
    <nav className="navbar bg-dark"> 
      <div className="container-fluid">
        <Link href="/" className="navbar-brand mb-0" style={{fontSize: "35px", color: "white"}}>{brandName}</Link>
        <button type="button" className="btn btn-primary">
          {notificationName}<span class="badge text-bg-secondary">{numAlerts}</span>
        </button>
      </div>
    </nav>
  )
}