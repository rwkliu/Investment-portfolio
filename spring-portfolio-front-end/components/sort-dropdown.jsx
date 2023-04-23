export default function SortDropdown() {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
        Sort
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        <li><button className="dropdown-item" type="button">Name (A-Z)</button></li>
        <li><button className="dropdown-item" type="button">Name (Z-A)</button></li>
        <li><button className="dropdown-item" type="button">Funds (Lowest-Greatest)</button></li>
        <li><button className="dropdown-item" type="button">Funds (Greatest-Lowest)</button></li>
      </ul>
    </div>
  )
}