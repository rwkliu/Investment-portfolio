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
    console.log("View button was pressed");
    console.log(investments);
  },
  "Delete": (investments) => {
    console.log("Delete button was pressed");
    console.log("These will be deleted");
    console.log(investments);
  },
}