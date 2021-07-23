export default function Input() {
  return (
    <div>
      <label htmlFor="characters__input">Search:</label>
      <input
        name="characters__input"
        className="characters__input"
        type="text"
      />
    </div>
  );
}
