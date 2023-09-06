export async function getFundData(fundId) {
  try {
    const res = await fetch("https://localhost:8443/api/v1/funds/1");
    return res.json();
  }
    catch {
      console.log("GetFundData didn't work");
    }
}