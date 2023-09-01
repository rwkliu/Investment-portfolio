import { hostAddress } from "../data/hostAddress";

export async function getFundData(fundId) {
  try {
    const res = await fetch("http://" + hostAddress + ":8080/api/v1/funds/" + fundId);
    return res.json();
  }
  catch {
  }
}