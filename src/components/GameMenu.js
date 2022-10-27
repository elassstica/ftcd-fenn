function GameMenu({ setGameLevel }) {
  return (
    <div className="GameMenu">
      <select
        className="form-select-sm"
        aria-label=".form-select-sm"
        onChange={(e) => {
          setGameLevel(e.target.value);
        }}
      >
        <option selected>Select Deck Size</option>
        <option value={3}>Small Deck (easy level)</option>
        <option value={6}>Medium Deck (medium level)</option>
        <option value={12}>Full Deck (difficult level)</option>
      </select>
    </div>
  );
}

export default GameMenu;
