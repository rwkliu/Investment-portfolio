import Link from "next/link"

export default function Navbar({ brandName, notificationName, numAlerts }) {
  return (
    <nav class="navbar bg-dark"> 
      <div class="container-fluid">
        <Link href="/" class="navbar-brand mb-0" style={{fontSize: "35px", color: "white"}}>{brandName}</Link>
        <button type="button" class="btn btn-primary">
          {notificationName}<span class="badge text-bg-secondary">{numAlerts}</span>
        </button>
      </div>
    </nav>
  )
}