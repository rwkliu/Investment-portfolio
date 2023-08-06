import deleteInvestments from "../lib/deleteInvestments";
import viewInvestments from "../lib/viewInvestments";

export const actionTitle = "Actions";
export const actions = [{
  id: 0,
  name: "View"
}, {
  id: 1,
  name: "Delete"
}];
export const actionFunctions = {
  "View": (investments) => {
    viewInvestments(investments);
  },
  "Delete": (investments) => {
    deleteInvestments(investments);
  },
}