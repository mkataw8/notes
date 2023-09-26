export function AddNotesButton() {
  function worked() {
    console.log("workled");
  }

  return (
    <button onClick={worked} className="bg-white w-80 h-64">
      These are my notes
    </button>
  );
}
