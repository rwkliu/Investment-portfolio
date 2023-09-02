import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { investmentTypes, investmentTypesTitle } from "../../../data/investment-types";

export default function UpdateInvestment() {
  const router = useRouter();
  const { investmentId } = router.query;
  const hostAddress = "52.53.234.189";

  const [investmentName, setInvestmentName] = useState("");
  const [investmentType, setInvestmentType] = useState(investmentTypesTitle);
  const [fundsInvested, setFundsInvested] = useState("");
  const [dateInvested, setDateInvested] = useState("");
  const [description, setDescription] = useState("");

  const getInvestmentById = async(investmentId) => {
    const fetchAddress = process.env.NEXT_PUBLIC_INVESTMENT_BASE_URL + investmentId;
    const res = await fetch(fetchAddress);
    const data = await res.json();
    setInvestmentName(data.investmentName);
    setInvestmentType(data.investmentType);
    setFundsInvested(data.fundsInvested);
    setDateInvested(data.dateInvested);
    setDescription(data.description);
  }

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    console.log(investmentId);
    getInvestmentById(investmentId);
  }, [router.isReady]);

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

  const updateInvestment = async(e) => {
    e.preventDefault();
    let investment = {
      fundId: 1,
      investmentName: investmentName,
      investmentType: investmentType,
      fundsInvested: fundsInvested,
      dateInvested: dateInvested,
      description: description
    };
    await fetch(process.env.INVESTMENT_BASE_URL + "/" + investmentId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(investment),
    });
    router.back();
  }

  return (
      <div className="text-center">
        <h1 className="text-center">Update Investment</h1>
        <div className="card col-md-3 offset-mid-3" style={{margin: "auto"}}>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>Investment Name</label>
                <input name="Investment Name" className="form-control" defaultValue={investmentName} onChange={changeInvestmentNameHandler}/>
              </div>
              <div className="form-group">
                <label>Investment Type</label>
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
              <div className="form-group">
                <label>Funds Invested</label>
                <input name="Funds Invested" className="form-control" defaultValue={fundsInvested} onChange={changeFundsInvestedHandler}/>
              </div>
              <div className="form-group">
                <label>Date Invested</label>
                <input name="Date Invested" className="form-control" defaultValue={dateInvested} onChange={changeDateInvestedHandler}/>
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea name="Description" className="form-control" rows="3" defaultValue={description} onChange={changeDescriptionHandler}/>
              </div>
              <button className="btn btn-success" onClick={updateInvestment}>Save</button>
              <Link href="/">
                <button className="btn btn-secondary" style={{marginLeft: "10px"}}>Cancel</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
  );
}