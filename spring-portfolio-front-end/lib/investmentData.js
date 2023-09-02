export async function getInvestmentData() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_INVESTMENT_BASE_URL);
    return res.json();
  }
  catch {
  }
}