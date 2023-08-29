import Link from "next/link";
import { useRouter } from "next/router";

export default function SelectedInvestments() {
  const router = useRouter();
  const { selectedIds } = router.query;
  let selected = [];

  if (selectedIds) {
    selected = selectedIds.split(","); 
  } 
  console.log(selected);


  return (
    <>
      <h1>Selected Investments</h1>
      <div>Selected Ids: {selectedIds}</div>
      <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white link-dark" style={{width: "380px"}}>
        <span className="fs-5 fw-semibold">
          <center>
            List Group
          </center>
        </span>
        <div className="list-group list-group-flush border-bottom scrollarea">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <strong className="mb-1">List group item heading</strong>
          </div>
        </div>
        {
          selected.map(
            selectedId =>
            <div className="d-flex w-100 align-items-center justify-content-between" key={selectedId}>
              <strong className="mb-1">{selectedId}</strong>
            </div>
          )
        }
      </div>
    </>
  );
}