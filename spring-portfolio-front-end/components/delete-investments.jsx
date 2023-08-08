export default function DeleteInvestments({ checkboxes }) {
  const buttonDisabled = checkboxes.every((checkbox) => checkbox.checked == false);

  const deleteInvestments = async() => {
    const selected = checkboxes.filter((checkbox) => checkbox.checked == true);
    const selectedIds = selected.map((selection) => {return selection.id});
    const investmentsToDelete = {idList: selectedIds};

    await fetch('http://localhost:8080/api/v1/investments', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(investmentsToDelete),
    });
  }

  return (
    <button type="button" className="button" disabled={buttonDisabled} onClick={deleteInvestments}>
      Delete Investments
    </button>
  )
}
