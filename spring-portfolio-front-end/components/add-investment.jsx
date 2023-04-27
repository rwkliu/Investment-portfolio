import SelectForm from "./select-form"
import { investmentTypes, investmentTypesTitle } from "../data/investment-types"

export default function AddInvestment({ buttonClass }) {
  return (
    <>
      {/* Button trigger modal */}
      <button type="button" className={buttonClass} data-bs-toggle="modal" data-bs-target="#addInvestmentModal" data-bs-whatever="addInvestment">Add Investment</button>

      {/* Modal */}
      <div className="modal fade" id="addInvestmentModal" tabIndex="-1" aria-labelledby="addInvestmentModalLabel" aria-hidden="true" style={{color: "black"}}>
        <div className="modal-dialog modal-dialog-centered" id="addInvestment">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addInvestmentModalLabel">Add New Investment</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-2">
                  <label htmlFor="investment-name" className="col-form-label">Investment Name</label>
                  <input type="text" className="form-control" id="InvestmentName"></input>
                </div>
                <div className="mb-2">
                  <label htmlFor="investment-type" className="col-form-label">Investment Type</label>
                  <SelectForm defaultSelect={investmentTypesTitle} items={investmentTypes} />
                </div>
                <div className="mb-2">
                  <label htmlFor="funds-invested" className="col-form-label">Funds Invested</label>
                  <input type="text" className="form-control" id="funds-invested"></input>
                </div>
                <div className="mb-2">
                  <label htmlFor="date-invested" className="col-form-label">Date Invested</label>
                  <input type="text" className="form-control" id="date-invested"></input>
                </div>
                <div className="mb-2">
                  <label htmlFor="description-text" className="col-form-label">Description</label>
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