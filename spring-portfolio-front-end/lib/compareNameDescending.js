
export default function compareNamesDescending(a, b) {
    if ((a.investmentName).localeCompare(b.investmentName) > 0) {
      return -1;
    } else if ((a.investmentName).localeCompare(b.investmentName) < 0) {
      return 1;
    }
    return 0;
}