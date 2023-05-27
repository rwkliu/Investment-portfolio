export default function SelectForm({ defaultSelect, items }) {
  return (
    <select className="form-select" aria-label="Default select example">
      <option>{defaultSelect}</option>
      {
        items.map(
          item =>
            <option key={item.id} value={item.name}>{item.name}</option>
        )
      }
    </select>
  )
}