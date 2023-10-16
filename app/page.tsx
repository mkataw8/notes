"use client";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Nav from "./src/components/Nav";
import { Workspace } from "./src/components/Workspace";
export default function Home() {
  const router = useRouter();
  const [notes, setNotes] = useState([{ text: "welcome" }]);

  const addNote = (text: any) => {
    setNotes((prevNotes) => {
      const newNote = {
        id: nanoid(),
        text: text,
      };

      const newNotes = [...prevNotes, newNote];
      return newNotes;
    });
  };

  const deleteNote = async (id: string) => {
    const confirmed = "are you sure";

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
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
