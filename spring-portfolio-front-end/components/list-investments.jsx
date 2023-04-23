export default function ListInvestments() {
  return (
    <div className="row">
      <table className="table table-striped table-bordered">
        <thead>
          <tr style={{textAlign: "center", color: "white"}}>
            <th>Investment Name</th>
            <th>Investment Type</th>
            <th>Funds Invested</th>
            <th>Date Invested</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}