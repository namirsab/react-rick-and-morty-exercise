export default function StatusSelect({ saveNewStatus }) {
  function handleStatusSearch(event) {
    const statusInput = event.target.value;
    saveNewStatus(statusInput);
  }
  return (
    <div>
      <label htmlFor="status">Status: </label>
      <select onChange={handleStatusSearch} name="status" id="status">
        <option value=""></option>
        <option value="Alive">"Alive"</option>
        <option value="Dead">"Dead"</option>
        <option value="unknown">"unknown"</option>
      </select>
    </div>
  );
}
