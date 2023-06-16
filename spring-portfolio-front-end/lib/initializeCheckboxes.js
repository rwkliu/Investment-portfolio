export default function initializeCheckboxes(investments) {
  const initialCheckboxes = investments.map((investment) => ({
    id: investment.investmentId,
    checked: false,
    investmentName: investment.investmentName,
    investmentType: investment.investmentType,
    fundsInvested: investment.fundsInvested,
    dateInvested: investment.dateInvested,
  }));
  return initialCheckboxes;
}