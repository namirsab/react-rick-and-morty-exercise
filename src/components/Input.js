export default function Input({ saveNewFilter }) {
  function handleOnChange(event) {
    const input = event.target.value;
    saveNewFilter(input);
  }

  return (
    <div>
      <label htmlFor="characters__input">Search:</label>
      <input
        onChange={handleOnChange}
        name="characters__input"
        className="characters__input"
        type="text"
      />
    </div>
  );
}
