import { useState } from "react";
import NoteCmponent from "./NoteCmponent";

const NotesInterface = () => {
  const [NotesHeading, setNotesHeading] = useState("");
  const [NotesContent, setNotesContent] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [Notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("NotesData");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const Submithandle = (e) => {
    e.preventDefault();
    addNotes();
  };

  function addNotes() {
    const Notes = {
      heading: NotesHeading,
      content: NotesContent,
    };
    setNotes((e) => [...e, Notes]);
    setNotesHeading("");
    setNotesContent("");
  }
  const Deletenotes = (id) => {
    const cnotes = [...Notes];
    cnotes.splice(id, 1);
    const newNotes = cnotes;
    setNotes(newNotes);
  };
  const Editnotes = (id) => {
    const cnotes = [...Notes];
    const idEdit = cnotes[id];
    setNotesHeading(idEdit.heading);
    setNotesContent(idEdit.content);
    cnotes.splice(id, 1);
    const newNotes = cnotes;
    setNotes(newNotes);
  };

  localStorage.setItem("NotesData", JSON.stringify(Notes));
  localStorage.getItem("NotesData");

  // Filter notes based on search query
  const filteredNotes = Notes.filter(
    (note) =>
      note.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen md:min-h-screen w-full bg-blue-200">
      <div className="w-full flex justify-center md:justify-between px-2 items-center">
        <h1 className="p-5 font-mono text-3xl bg-blue-200 ">Notes✏️</h1>
        {/* <input
          className=" w-1/2  bg-gray-50 p-4 outline-none rounded-xl text-lg"
          type="text"
          placeholder="🔍 Search notes by title or content..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        /> */}
      </div>

      <div className=" w-full h-full md:h-full flex flex-col items-center justify-start  md:flex md:flex-row gap-4 md:justify-between md:items-start  p-4">
        <form
          className=" flex flex-col gap-4 w-full md:w-1/2  bg-blue-950 h-full md:min-h-[600px] md:justify-center md:items-center p-4 rounded-xl "
          onSubmit={(e) => Submithandle(e)}
        >
          <h1 className="text-3xl text-white font font-mono">
            Share your memory Here 🥂
          </h1>

          <input
            className="w-full md:w-3/4 bg-gray-50 p-4 outline-none rounded-xl"
            type="text"
            value={NotesHeading}
            placeholder="Enter Notes Title"
            onChange={(e) => {
              setNotesHeading(e.target.value);
              // console.log(e.target.value);
            }}
          />
          <textarea
            className="bg-gray-50 md:w-3/4 w-full p-4  outline-none rounded-xl resize-none h-[200px]"
            type="text"
            value={NotesContent}
            placeholder="Notes Content Here 😊"
            onChange={(e) => {
              setNotesContent(e.target.value);
              console.log(e.target.value);
            }}
          />
          <button
            className="bg-blue-500 active:scale-95 transition-all duration-200 text-white rounded-xl font-mono text-2xl p-3"
            type="submit"
          >
            Add Notes
          </button>
        </form>
        <NoteCmponent
          Notes={filteredNotes}
          Deletenotes={Deletenotes}
          Editnotes={Editnotes}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
    </div>
  );
};

export default NotesInterface;
