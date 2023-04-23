export default function Dropdown({ title, items }) {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
        {title}
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        {
          items.map(
          item =>
            <li key={item.id}><button className="dropdown-item" type="button">{item.name}</button></li>
          )
        }
      </ul>
    </div>
  )
}