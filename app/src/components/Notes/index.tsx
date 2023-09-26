import { useState } from "react";
import { FaTrash } from "react-icons/fa";

type dataT = {
  id: any;
  text: any;
  handleDeleteNote: any;
};

export default function Notes(props: dataT) {
  const { id, text, handleDeleteNote } = props;
  const [noteD, setNoteD] = useState("inside");
  return (
    <div className="flex justify-center ">
      <div className="flex justify-center  bg-slate-200 w-80 h-80 ">
        <div className="flex justify-center">
          <textarea
            value={text}
            className=" m-5"
            rows="11"
            cols="25"
            placeholder="Type to add Note"
          ></textarea>
          <FaTrash onClick={() => handleDeleteNote(id)} />
        </div>
      </div>
    </div>
  );
}
