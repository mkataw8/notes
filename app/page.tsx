"use client";
import { nanoid } from "nanoid";
import { useState } from "react";
import Nav from "./src/components/Nav";
import { Workspace } from "./src/components/Workspace";

export default function Home() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: " this is my first note",
    },
    {
      id: nanoid(),
      text: " this is my second note",
    },
    {
      id: nanoid(),
      text: " this is my third note",
    },
  ]);

  const addNote = (text: any) => {
    const newNote = {
      id: nanoid(),
      text: text,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id: any) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <main>
      <Nav />

      <Workspace
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </main>
  );
}
