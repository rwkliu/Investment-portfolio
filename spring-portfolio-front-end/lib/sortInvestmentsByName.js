const sortActions = {
  "ascending": (temp, name) => {if (temp.localeCompare(name) < 0) {return 1;} else {return 0;}},
  "descending": (temp, name) => {if (temp.localeCompare(name) > 0) {return 1;} else {return 0;}}
};

export default function sortInvestmentsByName(investments, order) {
  for (let i = 1; i < investments.length; i++) {
    let temp = investments[i];
    let j = i - 1;

    while (j >= 0 && sortActions[order](temp.investmentName, investments[j].investmentName)) {    
      investments[j + 1] = investments[j];
      j--;
    }

    investments[j + 1] = temp;
  }
  return investments;
}