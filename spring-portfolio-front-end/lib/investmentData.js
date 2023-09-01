import { hostAddress } from "../data/hostAddress";

export async function getInvestmentData() {
  try {
    const res = await fetch("http://" + hostAddress + ":8080/api/v1/investments");
    return res.json();
  }
  catch {
  }
}