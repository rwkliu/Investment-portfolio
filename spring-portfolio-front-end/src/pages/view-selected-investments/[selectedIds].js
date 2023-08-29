import Link from "next/link";
import { useRouter } from "next/router";

export default function SelectedInvestments() {
  const router = useRouter();
  const { selectedIds } = router.query;

  return (
    <>
      <h1>Selected Investments</h1>
      <div>{selectedIds}</div>
      <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style={{width: "380px"}}>
        <span className="fs-5 fw-semibold link-dark ">
          <center>
            List Group
          </center>
        </span>
      </div>
    </>
  );
}