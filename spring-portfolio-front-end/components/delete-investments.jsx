import { useRouter } from "next/router";

export default function DeleteInvestments({ checkboxes, updateCheckboxes, updateFunds }) {
  const router = useRouter();
  const buttonDisabled = checkboxes.every((checkbox) => checkbox.checked == false);

  const deleteInvestments = async() => {
    const selected = checkboxes.filter((checkbox) => checkbox.checked == true);
    const selectedIds = selected.map((selection) => {return selection.id});
    const initialValue = 0;
    const fundsToAdd = selected.map((selection) => {return selection.fundsInvested}).reduce((accumulator, currentValue) => accumulator + currentValue,initialValue);
    const investmentsToDelete = {idList: selectedIds};
    const updatedCheckboxes = checkboxes.filter((checkbox) => checkbox.checked == false);

    await fetch(process.env.NEXT_PUBLIC_INVESTMENT_BASE_URL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(investmentsToDelete),
    });
    updateCheckboxes(updatedCheckboxes);
    updateFunds(fundsToAdd);
    router.push("/");
  }

  return (
    <button type="button" className="btn btn-danger" disabled={buttonDisabled} onClick={deleteInvestments}>
      Delete
    </button>
  )
}
