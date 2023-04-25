export default function AddInvestment({ buttonClass }) {
  return (
    <>
      {/* Button trigger modal */}
      <button type="button" class={buttonClass} data-bs-toggle="modal" data-bs-target="#addInvestmentModal" data-bs-whatever="addInvestment">Add Investment</button>

      {/* Modal */}
      <div className="modal fade" id="addInvestmentModal" tabIndex="-1" aria-labelledby="addInvestmentModalLabel" aria-hidden="true" style={{color: "black"}}>
        <div className="modal-dialog modal-dialog-centered" id="addInvestment">
          <div className="modal-content">
            <div className="modal-header">
              <h1 class="modal-title fs-5" id="addInvestmentModalLabel">Add New Investment</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-2">
                  <label for="investment-name" className="col-form-label">Investment Name</label>
                  <input type="text" className="form-control" id="InvestmentName"></input>
                </div>
                <div className="mb-2">
                  <label for="investment-type" className="col-form-label">Investment Type</label>
                  <input type="text" className="form-control" id="InvestmentType"></input>
                </div>
                <div className="mb-2">
                  <label for="funds-invested" className="col-form-label">Funds Invested</label>
                  <input type="text" className="form-control" id="funds-invested"></input>
                </div>
                <div className="mb-2">
                  <label for="date-invested" className="col-form-label">Date Invested</label>
                  <input type="text" className="form-control" id="date-invested"></input>
                </div>
                <div className="mb-2">
                  <label for="description-text" className="col-form-label">Description</label>
                  <textarea className="form-control" id="description"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}