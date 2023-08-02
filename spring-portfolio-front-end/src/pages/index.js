import Head from 'next/head'
import Footer from '../../components/footer-component'
import Navbar from '../../components/navbar'
import ListInvestments from '../../components/list-investments'
import FundsDisplay from '../../components/funds-display'
import Dropdown from '../../components/dropdown'
import AddInvestment from '../../components/add-investment'
import { useState } from 'react'

import { sortTitle, sortActions } from '../../data/sort-names-functions'
import { actionTitle, actions, actionFunctions } from '../../data/action-names-functions'

import initializeCheckboxes from '../../lib/initializeCheckboxes'
import { getFundData } from '../../lib/fundData'
import { getInvestmentData } from '../../lib/investmentData'
import sortInvestmentsByFunds from '../../lib/sortInvestmentsByFunds'
import sortInvestmentsByName from '../../lib/sortInvestmentsByName'

export async function getServerSideProps() {
  const remainingFunds = await getFundData(1);
  const investments = await getInvestmentData();

  if (!remainingFunds || !investments) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      remainingFunds,
      investments
    }
  }
}

export default function Home({ remainingFunds, investments }) {
  const [selectAll, setSelectAll] = useState(false);
  const [checkboxes, setCheckboxes] = useState(initializeCheckboxes(investments))
  
  const sortInvestments = (investments) => {
    const sorted = sortInvestmentsByName(investments, 'ascending');
    console.log(sorted);
    setCheckboxes(initializeCheckboxes(sorted));
  }

  return (
    <>
      <Head>
        <title>My Spring Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar brandName={"My Spring Portfolio"} notificationName={"Notifications"} numAlerts={0}/>
      <FundsDisplay funds={remainingFunds.funds} currency={"USD"} />
      <div className="container text-center">
        <div className="badge bg-dark fs-1">Investments</div>
        <div className="d-flex">
          <AddInvestment buttonClass="me-auto btn btn-primary"/>
          <button className="button" onClick={() => {sortInvestments(investments)}}>Sort</button>
          <Dropdown title={actionTitle} items={actions} checkboxes={checkboxes} functions={actionFunctions}/>
          <Dropdown title={sortTitle} items={sortActions} checkboxes={[{checked: true}]}/>
        </div>
        <ListInvestments selectAll={selectAll} setSelectAll={setSelectAll} checkboxes={checkboxes} setCheckboxes={setCheckboxes}/>
      </div>
      <Footer footerText={"Created by Ricky"}/>
    </>
  )
}
