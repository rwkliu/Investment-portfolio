import { useRouter } from "next/router";

export default function DeleteInvestments({ checkboxes, updateCheckboxes }) {
  const router = useRouter();
  const buttonDisabled = checkboxes.every((checkbox) => checkbox.checked == false);

  const deleteInvestments = async() => {
    const selected = checkboxes.filter((checkbox) => checkbox.checked == true);
    const selectedIds = selected.map((selection) => {return selection.id});
    const investmentsToDelete = {idList: selectedIds};
    const updatedCheckboxes = checkboxes.filter((checkbox) => checkbox.checked == false);

    await fetch('http://localhost:8080/api/v1/investments', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(investmentsToDelete),
    });
    updateCheckboxes(updatedCheckboxes);
    router.push("/");
  }

  return (
    <button type="button" className="button" disabled={buttonDisabled} onClick={deleteInvestments}>
      Delete Investments
    </button>
  )
}
