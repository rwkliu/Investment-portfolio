export async function getInvestmentData() {
  try {
    const res = await fetch(process.env.INVESTMENT_BASE_URL);
    return res.json();
  }
  catch {
  }
}