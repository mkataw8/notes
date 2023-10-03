import Addnote from "../Addnote";
import Notes from "../Notes";
type dataT = {
  notes: any;
  handleAddNote: any;
  handleDeleteNote: any;
};

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to Fetch");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topic");
  }
};

export async function Workspace(props: dataT) {
  const { topics } = await getTopics();

  const { notes, handleAddNote, handleDeleteNote } = props;
  return (
    <div className=" flex place-content-center bg-slate-300 w-full h-full">
      <div className="  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4 ">
        {topics.map((note1: any) => (
          <Notes
            key={note1._id}
            id={note1._id}
            text={note1.notes}
            handleDeleteNote={handleDeleteNote}
          />
        ))}

        <Addnote handleAddNote={handleAddNote} />
      </div>
    </div>
  );
}
