import { investmentTypes, investmentTypesTitle } from "../data/investment-types"
import { useState } from "react";
import { useRouter } from "next/router";

export default function AddInvestment({ buttonClass, checkboxes, updateCheckboxes, updateFunds }) {
  const router = useRouter();

  const [investmentName, setInvestmentName] = useState("");
  const [investmentType, setInvestmentType] = useState(investmentTypesTitle);
  const [fundsInvested, setFundsInvested] = useState("");
  const [dateInvested, setDateInvested] = useState("");
  const [description, setDescription] = useState("");

  const changeInvestmentNameHandler =  (event) => {
    setInvestmentName(event.target.value);
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
  }

  const addInvestment = async(e) => {
    e.preventDefault();
    let investment = {
      fundId: 1,
      investmentName: investmentName,
      investmentType: investmentType,
      fundsInvested: fundsInvested,
      dateInvested: dateInvested,
      description: description
    };
    await fetch('http://localhost:8080/api/v1/investments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(investment),
    });
    const newInvestmentCheckbox = {
      id: (checkboxes[checkboxes.length - 1].id + 1),
      checked: false,
      investmentName: investmentName,
      investmentType: investmentType,
      fundsInvested: fundsInvested,
      dateInvested: dateInvested,
    };
    checkboxes.push(newInvestmentCheckbox);
    updateCheckboxes(checkboxes);
    updateFunds((-1) * fundsInvested);
    router.push("/");
    resetFields();
  }

  return (
    <>
      {/* Button trigger modal */}
      <button type="button" className={buttonClass} data-bs-toggle="modal"  data-bs-target="#addInvestmentModal" data-bs-whatever="addInvestment">Add Investment</button>

      {/* Modal */}
      <div className="modal fade" id="addInvestmentModal" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="addInvestmentModalLabel" aria-hidden="true" style={{color: "black"}}>
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
                  <select className="form-select" value={investmentType} onChange={changeInvestmentTypeHandler}>
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
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={addInvestment}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}