import { useState } from "react";
import { FaTrash } from "react-icons/fa";

type dataT = {
  id: any;
  text: any;
  handleDeleteNote: any;
};
const rows = 10;
const cols = 25;
export default function Notes(props: dataT) {
  const { id, text, handleDeleteNote } = props;
  const [noteD, setNoteD] = useState("inside");
  return (
    <div className="flex justify-center ">
      <div className="flex justify-center mt-5 bg-slate-400 w-80 h-80 ">
        <div className=" flex justify-center">
          <textarea
            readOnly
            value={text}
            className="outline-none mt-5 mb-5 ml-4 "
            rows={rows}
            cols={cols}
            placeholder="Type to add Note"
          ></textarea>

          <FaTrash onClick={() => handleDeleteNote(id)} />
        </div>
      </div>
    </div>
  );
}
