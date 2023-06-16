export default function ListInvestments({ selectAll, setSelectAll, checkboxes, setCheckboxes}) {
  const toggleAllCheckboxes = () => {
    const updatedCheckboxes = checkboxes.map((checkbox) => ({
      ...checkbox,
      checked: !selectAll,
    }));
    setCheckboxes(updatedCheckboxes);
    setSelectAll(!selectAll);
  };

  const toggleCheckbox = (id) => {
    const updatedCheckboxes = checkboxes.map((checkbox) =>
      checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox 
    );
    setCheckboxes(updatedCheckboxes);
    setSelectAll(updatedCheckboxes.every((checkbox) => checkbox.checked));
  };
  
  return (
    <div className="row">
      <table className="table table-bordered" style={{textAlign: "center", color: "white"}}>
        <thead>
          <tr>
            <th>
              <input 
                className="form-check-input" 
                type="checkbox" 
                checked={selectAll}
                onChange={toggleAllCheckboxes}
              />
            </th>
            <th>Investment Name</th>
            <th>Investment Type</th>
            <th>Funds Invested</th>
            <th>Date Invested</th>
          </tr>
        </thead>
        <tbody>
          {
            checkboxes.map(
              checkbox =>
              <tr key={checkbox.id}>
                <td>
                  <input 
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    checked={checkbox.checked}
                    onChange={() => toggleCheckbox(checkbox.id)}
                  />
                </td>
                <td>{checkbox.investmentName}</td>
                <td>{checkbox.investmentType}</td>
                <td>{checkbox.fundsInvested}</td>
                <td>{checkbox.dateInvested}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}