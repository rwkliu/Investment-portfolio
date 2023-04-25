export default function AddFunds() {
  return (
    <>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addFunds" data-bs-whatever="addFunds" style={{marginLeft: "10px"}}>Add Funds</button>

      <div className="modal fade" id="addFunds" tabIndex="-1" aria-labelledby="addFunds" aria-hidden="true" style={{color: "black"}}>
        <div className="modal-dialog modal-dialog-centered" id="addFunds">
          <div className="modal-content">
            <div className="modal-header">
              <h1 class="modal-title fs-5" id="addFunds">Add Funds</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-2">
                  <label for="add-funds" className="col-form-label">Enter the amount of funds you would to like to add:</label>
                  <input type="text" className="form-control" id="add-funds"></input>
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