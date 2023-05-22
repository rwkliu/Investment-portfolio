export async function getInvestmentData() {
  const res = await fetch("http://localhost:8080/api/v1/investments");
  return res.json();
}