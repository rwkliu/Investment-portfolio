export default function ViewInvestments({ checkboxes }) {
  const dropdownDisabled = checkboxes.every((checkbox) => checkbox.checked == false);
  
  return (
    <>
      <button type="button" className="button" data-bs-toggle="modal" data-bs-target="#viewInvestmentModal" disabled={dropdownDisabled}>
        View Investments
      </button>

      <div className="modal fade" id="viewInvestmentModal" tabIndex="-1" aria-labelledby="viewInvestmentModalLabel" aria-hidden="true" style={{color: "black"}}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="viewInvestmentModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
          </div>
        </div>
      </div>
    </>
  )
}