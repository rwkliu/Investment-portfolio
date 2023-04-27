export default function SelectForm({ defaultSelect, items }) {
  return (
    <select className="form-select" aria-label="Default select example">
      <option selected>{defaultSelect}</option>
      {
        items.map(
          item =>
            <option value={item.id}>{item.name}</option>
        )
      }
    </select>
  )
}