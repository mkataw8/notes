import { useState } from "react";

export default function Addnote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");
  const handleChange = (event) => {
    setNoteText(event.target.value);
  };
  const handleSaveClick = () => {
    handleAddNote(noteText);
  };

  return (
    <div className="flex justify-center ">
      <div className="flex-col  bg-slate-200 w-80 h-80 ">
        <div className="flex justify-center">
          <textarea
            onChange={handleChange}
            value={noteText}
            className=" mt-5"
            rows="10"
            cols="25"
            placeholder="Type to add Note"
          ></textarea>
        </div>
        <div className="flex justify-end m-2">
          <button
            className="flex-end bg-blue-600 w-20 h-10 text-white"
            onClick={handleSaveClick}
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
}
