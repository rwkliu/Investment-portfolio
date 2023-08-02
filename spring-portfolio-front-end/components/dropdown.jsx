export default function Dropdown({ title, items, checkboxes, functions }) {
  const dropdownDisabled = checkboxes.every((checkbox) => checkbox.checked == false);

  const executeAction = (event) => {
    const checkedBoxes = checkboxes.filter((checkbox) => checkbox.checked == true);
    functions[event.target.value](checkedBoxes);
  }
  
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" disabled={dropdownDisabled}> 
        {title}
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        {
          items.map(
          item =>
            <li key={item.id}>
              <button className="dropdown-item" type="button" value={item.name} onClick={executeAction}>
                {item.name}
              </button>
            </li>
          )
        }
      </ul>
    </div>
  )
}