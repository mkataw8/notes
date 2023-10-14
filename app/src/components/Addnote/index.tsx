import { useRouter } from "next/navigation";
import { SetStateAction, useState } from "react";
type dataT = {
  handleAddNote: any;
};
export default function Addnote(props: dataT) {
  const router = useRouter();
  const { handleAddNote } = props;
  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState("");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setNoteText(event.target.value);
  };
  const handleClear = () => {
    setNoteText("");
  };
  const handleSaveClick = async () => {
    setNotes(noteText);
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ notes }),
      });

      if (res.ok) {
        router.refresh();
      }
    } catch (error) {}
  };
  const rows = 10;
  const cols = 25;

  return (
    <div className="flex justify-center ">
      <div className="flex-col mt-5  bg-slate-200 w-80 h-80 ">
        <div className="flex justify-center">
          <textarea
            onChange={handleChange}
            className=" mt-5"
            rows={rows}
            cols={cols}
            value={noteText}
            placeholder="Type to  Note"
          ></textarea>
        </div>

        <div className="flex justify-end items-center m-2">
          <p
            onClick={handleClear}
            className=" m-2 text-sm text-slate-400 hover:text-black"
          >
            Clear
          </p>
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
