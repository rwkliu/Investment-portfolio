const sortActions = {
  "ascending": (temp, funds) => {if (temp < funds) {return 1;} else {return 0;}},
  "descending": (temp, funds) => {if (temp > funds) {return 1;} else {return 0;}}
};

export default function sortInvestmentsByFunds(investments, order) {
  for (let i = 0; i < investments.length; i++) {
    let temp = investments[i];
    let j = i - 1;

    while (j >= 0 && sortActions[order](temp.funds, investments[j].funds)) {    
      investments[j + 1] = investments[j];
      j--;
    }

    investments[j + 1] = temp;
  }
  return investments;
}