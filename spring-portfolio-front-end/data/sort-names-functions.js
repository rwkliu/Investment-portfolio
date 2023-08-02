import sortInvestmentsByName from "../lib/sortInvestmentsByName";

export const sortTitle = "Sort";
export const sortActions = [{
  id: 0,
  name: "Name (A-Z)",
}, {
  id: 1,
  name: "Name (Z-A)",
}, {
  id: 2,
  name: "Funds: (Lowest-Greatest)",
}, {
  id: 3,
  name: "Funds: (Greatest-Lowest)",
}];
export const sortFunctions = {
  "Name (A-Z)": (investments) => {
    const sorted = sortInvestmentsByName(investments, 'ascending');
    setCheckboxes(initializeCheckboxes(sorted));
  },
  "Name (Z-A)": (investments) => {
    const sorted = sortInvestmentsByName(investments, 'descending');
    setCheckboxes(initializeCheckboxes(sorted));
  },
  "Funds: (Lowest-Greatest)": (investments) => {
    const sorted = sortInvestmentsByFunds(investments, 'ascending');
    setCheckboxes(initializeCheckboxes(sorted));
  },
  "Funds: (Greatest-Lowest)": (investments) => {
    const sorted = sortInvestmentsByFunds(investments, 'descending');
    setCheckboxes(initializeCheckboxes(sorted));
  }
};