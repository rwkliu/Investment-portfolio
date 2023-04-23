export default function FundsDisplay({ funds, currency }) {
  return (
    <div className="container text-center mb-5">
      <button type="button" className="btn btn-link" disabled style={{visibility: "hidden"}}>Add funds</button>
      <div className="badge bg-secondary fs-1">
        Remaining Funds
        <div className="d-flex fs-1" style={{paddingTop: "5px"}}>
          <div className="badge bg-secondary" style={{paddingLeft: "5px", paddingRight: "5px"}}>$</div>
          <div className="badge bg-secondary" style={{width: "7em", paddingLeft: "5px", paddingRight: "5px"}}>{Intl.NumberFormat('en-US').format(funds)}</div>
          <div className="badge bg-secondary" style={{paddingLeft: "5px", paddingRight: "5px"}}>{currency}</div>
        </div>
      </div>
      <button type="button" className="btn btn-primary" style={{marginLeft: "10px"}}>Add funds</button>
    </div>
  )
}