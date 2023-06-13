export async function getFundData(fundId) {
  try {
    const res = await fetch(`http://localhost:8080/api/v1/funds/`+fundId);
    return res.json();
  }
  catch {
  }
}