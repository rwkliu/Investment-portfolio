export async function getInvestmentData() {
  try {
    const res = await fetch("https://localhost:8443/api/v1/investments");
    return await res.json();
  }
  catch {
    console.log("GetInvestmentData didn't work")
  }
}