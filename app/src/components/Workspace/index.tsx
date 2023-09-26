"use client";
import Addnote from "../Addnote";
import Notes from "../Notes";
type dataT = {
  notes: any;
  handleAddNote: any;
  handleDeleteNote: any;
};
export function Workspace(props: dataT) {
  const { notes, handleAddNote, handleDeleteNote } = props;
  return (
    <div className=" flex-col justify-center bg-slate-400 w-full h-screen">
      <div className="  pt-5 grid grid-cols-3 gap-5  mb-5 ">
        {notes.map((note: any) => (
          <Notes
            key={note}
            id={note.id}
            text={note.text}
            handleDeleteNote={handleDeleteNote}
          />
        ))}

        <Addnote handleAddNote={handleAddNote} />
      </div>
      <div className="flex justify-center"></div>
    </div>
  );
}
