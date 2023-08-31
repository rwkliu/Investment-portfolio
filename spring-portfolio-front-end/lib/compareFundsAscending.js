export default function compareFundsAscending(a, b) {
    if ((a.fundsInvested) < (b.fundsInvested)) {
      return -1;
    } else if ((a.fundsInvested) > (b.fundsInvested)) {
      return 1;
    }
    return 0;
}