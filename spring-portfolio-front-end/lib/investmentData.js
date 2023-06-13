export async function getInvestmentData() {
  try {
    const res = await fetch("http://localhost:8080/api/v1/investments");
    return res.json();
  }
  catch {
  }
}