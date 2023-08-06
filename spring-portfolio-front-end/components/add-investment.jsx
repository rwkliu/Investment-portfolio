import SelectForm from "./select-form"
import { investmentTypes, investmentTypesTitle } from "../data/investment-types"
import { useState } from "react";

export default function AddInvestment({ buttonClass }) {
  const [investmentName, setInvestmentName] = useState("");
  const [investmentType, setInvestmentType] = useState(investmentTypesTitle);
  const [fundsInvested, setFundsInvested] = useState("");
  const [dateInvested, setDateInvested] = useState("");
  const [description, setDescription] = useState("");

  const changeInvestmentNameHandler =  (event) => {
    setInvestmentName(event.target.value);
    console.log(investmentName);
  }

  const changeInvestmentTypeHandler = (event) => {
    setInvestmentType(event.target.value);
  }

  const changeFundsInvestedHandler = (event) => {
    setFundsInvested(event.target.value);
  }

  const changeDateInvestedHandler = (event) => {
    setDateInvested(event.target.value);
  }

  const changeDescriptionHandler = (event) => {
    setDescription(event.target.value);
  }

  const resetFields = () => {
    setInvestmentName("");
    setInvestmentType(investmentTypesTitle);
    setFundsInvested("");
    setDateInvested("");
    setDescription("");
    console.log("After clearing fields: " + investmentName);
  }

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
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={resetFields}></button>
            </div>
            <div className="modal-body">
              <form id="addInvestmentForm">
                <div className="mb-2">
                  <label htmlFor="investment-name" className="col-form-label">Investment Name</label>
                  <input type="text" className="form-control" id="InvestmentName" value={investmentName} onChange={changeInvestmentNameHandler}></input>
                </div>
                <div className="mb-2">
                  <label htmlFor="investment-type" className="col-form-label">Investment Type</label>
                  {/* <SelectForm defaultSelect={investmentType} items={investmentTypes} value={investmentType} onChange={changeInvestmentTypeHandler}/> */}
                  <select className="form-select" defaultValue={investmentTypesTitle} value={investmentType} onChange={changeInvestmentTypeHandler}>
                    <option value={investmentTypesTitle}>{investmentTypesTitle}</option>
                    {
                      investmentTypes.map(
                        investmentType =>
                          <option key={investmentType.id} value={investmentType.name}>{investmentType.name}</option>
                      )
                    }
                  </select>
                </div>
                <div className="mb-2">
                  <label htmlFor="funds-invested" className="col-form-label">Funds Invested</label>
                  <input type="text" className="form-control" id="funds-invested" value={fundsInvested} onChange={changeFundsInvestedHandler}></input>
                </div>
                <div className="mb-2">
                  <label htmlFor="date-invested" className="col-form-label">Date Invested</label>
                  <input type="text" className="form-control" id="date-invested" value={dateInvested} onChange={changeDateInvestedHandler}></input>
                </div>
                <div className="mb-2">
                  <label htmlFor="description-text" className="col-form-label">Description</label>
                  <textarea className="form-control" id="description" value={description} onChange={changeDescriptionHandler}></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={resetFields}>Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}