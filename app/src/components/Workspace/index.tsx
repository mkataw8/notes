"use client";
import Addnote from "../Addnote";
import Notes from "../Notes";
export function Workspace({ notes, handleAddNote }) {
  return (
    <div className=" flex-col justify-center bg-slate-400 w-full h-screen">
      <div className=" grid grid-cols-3 gap-4 mb-5 ">
        {notes.map((note: any) => (
          <Notes key={note} id={note.id} text={note.text} />
        ))}

        <Addnote handleAddNote={handleAddNote} />
      </div>
      <div className="flex justify-center"></div>
    </div>
  );
}
