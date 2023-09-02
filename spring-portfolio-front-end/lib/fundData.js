export async function getFundData(fundId) {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_FUNDS_BASE_URL + "/" + fundId);
    return res.json();
  }
  catch {
  }
}