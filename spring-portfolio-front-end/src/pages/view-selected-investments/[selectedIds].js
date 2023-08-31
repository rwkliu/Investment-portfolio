import Link from "next/link";
import Footer from "../../../components/footer-component";
import { useRouter } from "next/router";
import { useState } from "react";
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
  const [currentPage, setCurrentPage] = useState(null);

  const handleItemClick = (index) => {
    setCurrentPage(selectedInvestments.find((investment) => investment.investmentId === index));
  };

  return (
    <>
      <h1>Selected Investments</h1>
      <div className="d-flex">
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
              <div className="d-flex w-100 align-items-center justify-content-center" key={selectedInvestment.investmentId} onClick={() => handleItemClick(selectedInvestment.investmentId)}>
                <label className="mb-1">{selectedInvestment.investmentName}</label>
              </div>
            )
          }
        </div>
        {
          currentPage !== null ? (
            <div className="flex-column align-items-stretch flex-shrink-0 bg-white link-dark" style={{width: "380px"}}>
              <div className="">
                <div className="row">
                  <label>Investment Name: {currentPage.investmentName}</label>
                </div>
                <div className="row">
                  <label>Investment Type: {currentPage.investmentType}</label>
                </div>
                <div className="row">
                  <label>Funds Invested: ${currentPage.fundsInvested}</label>
                </div>
                <div className="row">
                  <label>Date Invested: {currentPage.dateInvested}</label>
                </div>
                <div className="row">
                  <label>Description: {currentPage.description}</label>
                </div>
              </div>
              <Link href={`/update-investment/${currentPage.investmentId}`}>
                <button className="btn btn-info">Update</button>
              </Link>
            </div>
          ) : (
            <p>Select an investment from the sidebar list to view its details</p>
          )
        }
      </div>
      <Link href={"/"}>
        <button className="btn btn-info">Home</button>
      </Link>
      <Footer footerText={"Created by Ricky"}/>
    </>
  );
}