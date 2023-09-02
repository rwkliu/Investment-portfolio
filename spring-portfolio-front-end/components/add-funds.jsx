import { useState } from "react"
import { useRouter } from "next/router"

export default function AddFunds({ updateFunds }) {
  const router = useRouter();
  const [fundsToAdd, setFundsToAdd] = useState("");

  const updateFundsToAddHandler = (event) => {
    setFundsToAdd(event.target.value);
  }

  const resetFields = () => {
    setFundsToAdd("");
  }

  const addFunds = async(e) => {
    e.preventDefault();
    let funds = {
      fundId: 1,
      addFundAmount: fundsToAdd,
    }
    await fetch(process.env.NEXT_PUBLIC_ADDED_FUNDS_BASE_URL , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(funds),
    });
    updateFunds(fundsToAdd);
    resetFields();
  }

  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addFunds" data-bs-whatever="addFunds" style={{marginLeft: "10px"}}>Add Funds</button>

      <div className="modal fade" id="addFunds" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="addFunds" aria-hidden="true" style={{color: "black"}}>
        <div className="modal-dialog modal-dialog-centered" id="addFunds">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addFunds">Add Funds</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-2">
                  <label htmlFor="add-funds" className="col-form-label">Enter the amount of funds you would to like to add:</label>
                  <input type="text" className="form-control" id="add-funds" value={fundsToAdd} onChange={updateFundsToAddHandler}></input>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={resetFields}>Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={addFunds}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}