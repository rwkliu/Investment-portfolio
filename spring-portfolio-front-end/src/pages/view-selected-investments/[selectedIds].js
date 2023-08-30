import Link from "next/link";
import { useRouter } from "next/router";
import { getInvestmentData } from "../../../lib/investmentData";

export async function getServerSideProps() {
  const investments = await getInvestmentData();

  if (!investments) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      investments
    }
  }
}

export default function SelectedInvestments({ investments }) {
  const router = useRouter();
  const { selectedIds } = router.query;
  const splitIds= selectedIds.split(",");
  const selected = splitIds.map((select) => parseInt(select));
  const selectedInvestments = investments.filter((investment) => selected.includes(investment.investmentId));

  return (
    <>
      <h1>Selected Investments</h1>
      <div>Selected Ids: {selectedIds}</div>
      <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white link-dark" style={{width: "380px"}}>
        <span className="fs-5 fw-semibold">
          <center>
            Selected Investments List
          </center>
        </span>
        <div className="list-group list-group-flush border-bottom scrollarea">
        </div>
        {
          selectedInvestments.map(
            selectedInvestment =>
            <div className="d-flex w-100 align-items-center justify-content-center" key={selectedInvestment.investmentId}>
              <strong className="mb-1">{selectedInvestment.investmentName}</strong>
            </div>
          )
        }
      </div>
    </>
  );
}